import firebase from 'firebase/compat/app'; 
import 'firebase/compat/firestore'; 

const firebaseConfig = {
    apiKey: "AIzaSyCqw0LybaS4AKs4w-dLF9Vr3bVMlN-RGTs",
    authDomain: "fir-c2a01.firebaseapp.com",
    projectId: "fir-c2a01",
    storageBucket: "fir-c2a01.appspot.com",
    messagingSenderId: "747002054538",
    appId: "1:747002054538:web:782b03cf009571cf496a73",
    measurementId: "G-B6YZ9YQKNW"
  };


  export const Firebase = firebase.initializeApp(firebaseConfig);
