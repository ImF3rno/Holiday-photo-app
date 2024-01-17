import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, signInWithEmailAndPassword } from "../../services/AuthServices";
import { useAuthState } from "react-firebase-hooks/auth";

const Login = ()=>{
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({
        email:'',
        password:''
    })
    const [user,loading, error] = useAuthState(auth);
    const handleChange = (e)=>{
        const value = e.target.value;
        setCredentials({
            ...credentials,
            [e.target.name]:value
        })
    }

    const submitHandler = (e)=>{
        e.preventDefault();
        signInWithEmailAndPassword(credentials.email, credentials.password)
    }

    useEffect(()=>{
        if (loading) return;
        if(user) navigate('/works');
    }, [user,loading])

    return(
        <div className="container">
        <h2 className="mt-3 text-center">Prisijunk</h2>
            <form onSubmit={submitHandler}>
                <div className="form">
                    <div className="mb-3">
                        <input type="email" className="form-control" placeholder="El. pastas" name="email"  onChange={handleChange}/>
                    </div>
                    <div className="mb-3">
                        <input type="password" className="form-control" placeholder="Slaptazodis" name="password"  onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <button type="submit" className="btn btn-primary">Prisijungti</button>
                        </div>
                        <div className="mb-3">
                            <p>Neturite paskyros ? <Link to="/register" >Registruokites</Link></p>
                        </div>
                        <div className="mb-3">
                            <p>Nepavyksta prisijungti ? <Link to="/password-reset" >Atstatyti slaptazodi</Link></p>
                        </div>
                </div>
            </form>
        </div> 
    )
}

export default Login