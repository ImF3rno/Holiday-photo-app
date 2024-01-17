import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import * as service from "../../services/TimesCrudServices";
import WorksTable from "../worksTable/WorksTable";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../services/AuthServices";
import { FaPlusCircle } from "react-icons/fa";

const Works = () => {
    const [works, setWorks] = useState([]);
    const [user, loading, error] = useAuthState(auth);

    useEffect(() => {
        if (loading) return;
        if (user) {
            service.getAllWorks((works) => setWorks(works), user);
        }
    }, [user, loading]);

    return (
        <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <ul className="nav nav-pills">
                <li className="nav-item">
                    <button type="button" className="btn btn-outline-info">
                        <Link className="nav-link" aria-current="page" to="/add-work"><span><FaPlusCircle/></span>Pridėti nauja nuotrauka</Link>
                    </button>
                    <button type="button" className="btn btn-outline-info">
                        <Link className="nav-link" aria-current="page" to="/add-work">Pakeisti nuotraukos forma</Link>
                    </button>
                </li>
            </ul>
        <WorksTable data={works} />
        </div>
    );
};

export default Works;
