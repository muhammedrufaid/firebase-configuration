import firebase from 'firebase/compat/app'; // Import the 'app' module
import 'firebase/compat/firestore'; // Import the specific module you need (in this case, 'firestore')

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//ee oru sathenm firebase inta ulllila config kittunatha
const firebaseConfig = {
    apiKey: "AIzaSyCqw0LybaS4AKs4w-dLF9Vr3bVMlN-RGTs",
    authDomain: "fir-c2a01.firebaseapp.com",
    projectId: "fir-c2a01",
    storageBucket: "fir-c2a01.appspot.com",
    messagingSenderId: "747002054538",
    appId: "1:747002054538:web:782b03cf009571cf496a73",
    measurementId: "G-B6YZ9YQKNW"
  };

  //ithu njml eyuthtunnath
  export const Firebase = firebase.initializeApp(firebaseConfig);


//firebaseinu ullile sambvangal
//authentication -user login/signup okke cheythino okkan
//firestore Database - database aanu ithu njml cheyyan povunna saathenengal
//Realtime Database - ithum database ennyan ithu chat inaanu /real time communicationu
//storage - images,music file angnatha filukal oke save cheyyan