import {SignInMethod, createUserWithEmailAndPassword, getAuth} from "firebase/auth"
import { useState } from 'react'
import {getDatabase,ref,set} from "firebase/database"
// import {app} from "./firebase"
import './App.css'
import SignUpPage from "./pages/SignUpPages"
import SigninPage from "./pages/SigninPages"
// const db = getDatabase(app);
// const auth = getAuth(app);


function App() {

  const [count, setCount] = useState(0)
  //  const signUpUser =()=>{
  //   createUserWithEmailAndPassword(
  //     auth,
  //     'sankalpsharma.dev@gmail.com',
  //     'sankalp@11'
  //   ).then(value=> console.log(value));
  //  }
  return (
    <> 
    <SignUpPage/>
    <SigninPage/>  
      {/* <button onClick={signUpUser}>Create User</button> */}
      
    </>
  )
}

export default App
