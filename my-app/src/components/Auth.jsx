import React, { useState } from "react";
import './Auth.css'
import {createUserWithEmailAndPassword,signOut,sendEmailVerification,signInWithEmailAndPassword,sendPasswordResetEmail} from 'firebase/auth'
import { auth } from "../config/firebase";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //button click cheyyumbm authentication nadakkan oru function create cheyyunnu
const signUp = async() =>{ //async-sign In button click cheyyumbm firebase chennit user enna value create aavenm njmla account athinu kurchu time edkkum angna time edkunna functions ellam asynchronous function aayrikum
    //ivde email password authenticationnan so firebase auth il ninnu mattoru hook firebase therunnd aa oru hook elle/ functionte name parnjal createUSer with email and password athu athyam import cheyyenm 
  try{
      await createUserWithEmailAndPassword(auth,email,password)
  }catch(err){
    console.log(err);
  }
}
// console.log(auth);
console.log(auth?.currentUser); //user illatha samayath appinu break verathirikkan ? question mark kodukkune


//signoutinu vendi firebase oru hook therunnd athinta name signOut thanneyan athum import cheyyuka
const logOut = async() =>{
    await signOut(auth)
}

//signup cheythenu sheshm logout veendum signin cheyyumbm ithu work aavilla
const verifyEmail = async() =>{
    await sendEmailVerification(auth.currentUser)
}

const signIn = async() =>{
    try{
        await signInWithEmailAndPassword(auth,email,password)
    }catch(err){
        
    }
}

//password maatan
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
