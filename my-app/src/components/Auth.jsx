import React, { useState } from "react";
import './Auth.css'
import {createUserWithEmailAndPassword,signOut,sendEmailVerification,signInWithEmailAndPassword,sendPasswordResetEmail} from 'firebase/auth'
import { auth } from "../config/firebase";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //onclick - authentication work
const signUp = async() =>{ 
  try{
      await createUserWithEmailAndPassword(auth,email,password)
  }catch(err){
    console.log(err);
  }
}
// console.log(auth);
//no user then do not break so ?
console.log(auth?.currentUser);


const logOut = async() =>{
    await signOut(auth)
}

const verifyEmail = async() =>{
    await sendEmailVerification(auth.currentUser)
}

//signin verify email,password for authenication
const signIn = async() =>{
    try{
        await signInWithEmailAndPassword(auth,email,password)
    }catch(err){
        
    }
}

//password change
const reset = async()=>{
    try{
        await sendPasswordResetEmail(auth,email)
    }catch(err){
        console.log(err);
    }
}

  return (
    <div className="auth-login">
      <input
        type="text"
        placeholder='"Enter your email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder='"Enter your password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={signUp}>Sign Up</button>
      <button onClick={signIn}>Sign In</button>
      <button onClick={logOut}>Sign Out</button>
      <button onClick={verifyEmail}>verify Email</button>
      <button onClick={reset}>Reset Password</button>
    </div>
  );
}

export default Auth;
