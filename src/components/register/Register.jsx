import {Link, useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth, registerWithEmailAndPassword} from "../../services/AuthServices"

const Register = ()=>{
    const [userData, setUserData] = useState({
        name:'',
        email:'',
        password:'',
    })
    
    const [user,loading,error] = useAuthState(auth);
    const navigate = useNavigate();
    const handleChange = (e)=>{
        const value = e.target.value;
        setUserData({
            ...userData,
            [e.target.name]:value
        })
    }

    const submitHandler  = (e)=>{
        e.preventDefault();
        console.log(userData)
        registerWithEmailAndPassword(userData.name, userData.email, userData.password)
    }

    useEffect(()=>{
        if(loading) return;
        if(user) navigate('/works')
    },[user,loading])
    return(
        <div className="container">
            <h2 className="mt-3 text-center">Registruokis</h2>
            <form onSubmit={submitHandler}>
                <div className="form">
                    <div className="mb-3">
                        <input type="text" className="form-control" placeholder="Jusu vardas" name="name" onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <input type="email" className="form-control" placeholder="El. pastas" name="email"  onChange={handleChange}/>
                    </div>
                    <div className="mb-3">
                        <input type="password" className="form-control" placeholder="Slaptazodis" name="password"  onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <button type="submit" className="btn btn-primary">Registruotis</button>
                        </div>
                        <div className="mb-3">
                            <p>Turite paskyra ? <Link to="/" >Galite prisijungti</Link></p>
                        </div>
                </div>
            </form>
        </div>  
    )
}

export default Register