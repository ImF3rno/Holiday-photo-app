import { Link, useNavigate } from "react-router-dom"
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect, useState } from "react"
import { auth, sendPasswordReset } from "../../services/AuthServices";

const Reset=()=>{
    const [email,setEmail]=useState("");
    const [user,loading,error]=useAuthState(auth);

    const navigate = useNavigate();
    
    const submitHandler=(e)=>{
        e.preventDefault();
        sendPasswordReset(email)
        alert("Slaptazodzio atsatymas buvo issiustas!")
        navigate("/");
    }

    return(
        <div className="container">
        <h2 className="mt-3 text-center">Reset Password</h2>
            <form onSubmit={submitHandler}>
                <div className="form">
                    <div className="mb-3">
                        <input type="email" className="form-control" placeholder="El. pastas" value={email}  onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <button type="submit" className="btn btn-primary">Siusti</button>
                    </div>
                </div>
            </form>
        </div> 
    )
}

export default Reset