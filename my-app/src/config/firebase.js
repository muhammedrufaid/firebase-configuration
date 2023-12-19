import { initializeApp } from "firebase/app";
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
// export const auth = getAuth(app) 

export const db = getFirestore(app);