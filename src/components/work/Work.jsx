import * as service from "../../services/TimesCrudServices";
import { useNavigate } from "react-router-dom";

const Work = (props) => {
    const navigate = useNavigate();
    const deleteHandler = () => {
        service.deleteWork(props.id);
        navigate('/');
    };

    return (
        <div style={{ display: 'inline-block', margin: '10px' }}>
        <img src={props.url} alt="photo" style={{ maxWidth: '500px', maxHeight: '500px' }} />
            <div style={{ marginTop: '5px' }}>
                <a className="btn btn-danger" onClick={deleteHandler}>Šalinti</a>
            </div>
        </div>
    );
};

export default Work;
