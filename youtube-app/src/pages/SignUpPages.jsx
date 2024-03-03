import React,{useState} from "react";
import {createUserWithEmailAndPassword,GoogleAuthProvider,signInWithPopup, getAuth} from 'firebase/auth'
import { app } from "../firebase";

const  auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const SignUpPage=()=>{
    const [email,setEmail]= useState("");
    const [password,setPassword]= useState("");

    const createUser = ()=>{
        createUserWithEmailAndPassword(auth,email,password).then(alert('succes'));
        setEmail('');
        setPassword('');
    }
    return (
        <>
        <div className="signup-page">
            <label>Email</label>
            <input type="email" required placeholder="Enter your email here" onChange={(e)=> setEmail(e.target.value)} value={email} />
            <br/>
            <label>Password</label>
            <input type="password" required placeholder="Enter your password here" onChange={(e)=> setPassword(e.target.value)}value={password}  />
            <button onClick={createUser}>Sign Up</button>
        </div>
        <br/>
        <button >Sign in with google</button>
        </>
    )

}
export default SignUpPage;