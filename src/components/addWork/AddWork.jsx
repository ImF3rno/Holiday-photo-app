import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import * as service from "../../services/TimesCrudServices";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../services/AuthServices";
import { useState, useEffect } from "react";

const AddWork = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const { id } = useParams();
  const [items, setItems] = useState({
    url: '',
    uid: user.uid,
  });

  useEffect(() => {
    id && service.showById((item) => setItems(item), id);
  }, [id]);

  const handleChange = (e) => {
    const value = e.target.value;
    setItems({
      ...items,
      [e.target.name]: value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (id) {
      service.updateWork(id, items);
    } else {
      service.addWork({
        ...items,
        uid: user.uid,
      });
    }

    navigate("/");
  };

  return (
    <div className="card">
      <div className="card-header">
        <h2>Pridėti nauja nuotrauka</h2>
      </div>
      <div className="card-body">
        <form className="form" onSubmit={submitHandler}>
          <div className="mb-3">
            <label htmlFor="url">Nuotraukos URL:</label>
            <input onChange={handleChange} className="form-control" id="url" type="url" name="url" value={items.url} required />
          </div>
          <div className="mb-3">
            <button type="submit">Saugoti</button>
          </div>
          <Link className="btn btn-danger" aria-current="page" to="/">Atšaukti</Link>
        </form>
      </div>
    </div>
  );
};

export default AddWork;
