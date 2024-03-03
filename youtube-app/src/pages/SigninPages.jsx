import React, { useState } from "react";
import {getAuth,signInWithEmailAndPassword} from "firebase/auth"
import {app} from "../firebase"

const auth = getAuth(app);

const SigninPage = ()=>{
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const signinUser = ()=>{
      signInWithEmailAndPassword(auth,email,password)
      .then((value)=> console.log('Sign in success'))
      .catch((err)=> console.log("error"))
    }
  return (
    <div className="signin-page">
    <label>Email</label>
    <input type="email" onChange={(e)=> setEmail(e.target.value)}  value={email} placeholder="Enter your email here"  />
    <br/>
    <label>Password</label>
    <input type="password" onChange={(e)=> setPassword(e.target.value)}  value={password}  placeholder="Enter your password here"   />
    <button onClick={signinUser} >Sign In</button>
</div>
  )
}

export default SigninPage