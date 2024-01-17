import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAE1E119oQ-aYz0-lzHwOpnGJO2Eyl5EMc",
  authDomain: "holiday-ccee3.firebaseapp.com",
  projectId: "holiday-ccee3",
  storageBucket: "holiday-ccee3.appspot.com",
  messagingSenderId: "614597449500",
  appId: "1:614597449500:web:8c09e7fa99dd8c54d14cd9"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export default firebase

export {
  app
}