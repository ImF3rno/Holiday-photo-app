import firebase from '../firebase';

export const addWork = (data) => {
  firebase
    .firestore()
    .collection('photos')
    .add(data);
};

export const getAllWorks = (onWorksChanged, user) => {
  firebase
    .firestore()
    .collection('photos')
    .where("uid", "==", user?.uid)
    .onSnapshot((snapshot) => {
      const newWork = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      onWorksChanged(newWork);
    });
};

export const deleteWork = (id) => {
  firebase
    .firestore()
    .collection('photos')
    .doc(id)
    .delete();
};

export const showById = (item, id) => {
  firebase
    .firestore()
    .collection('photos')
    .doc(id)
    .get()
    .then((docRef) => {
      item(docRef.data());
    });
};

export const updateWork = (id, data) => {
  firebase
    .firestore()
    .collection("photos")
    .doc(id)
    .set({
      url: data.url,
    });
};
