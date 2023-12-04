//app initialize cheyyan vendi initializeApp import cheyyenm
import { initializeApp } from "firebase/app";
//authentication oru function import cheyyenm adiiyil
// import {getAuth} from 'firebase/auth' //authentification vendi firebase therunna aa oru functionan getAuth (firebase login code react google search cheythal appm documentationil kannan patum ee code)
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDpyE9U08VbtIM86vyB7hvu_HrDhpfkJYI",
  authDomain: "learn-firebase-6e192.firebaseapp.com",
  projectId: "learn-firebase-6e192",
  storageBucket: "learn-firebase-6e192.appspot.com",
  messagingSenderId: "1047465245397",
  appId: "1:1047465245397:web:415db9d2dac38c727f805c",
  measurementId: "G-V4EK3ESCZP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//njml initalizeApp il firebaseConfig pass cheytha pola thanne getAuth enna functione adiyil call cheyyam ennit athil njmla appil firebasinta kaaryengal ellam koduthittund aa app ithil pass cheythu kodukkam ennit athine oru variableil assign cheythu
// export const auth = getAuth(app) //ee firebasil email authentication ella karyengalum cheythu kaynu

export const db = getFirestore(app);