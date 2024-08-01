// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA7G9R94ahd-C3MfixamxuUHXq8ZcizC_U",
  authDomain: "property-rentel.firebaseapp.com",
  projectId: "property-rentel",
  storageBucket: "property-rentel.appspot.com",
  messagingSenderId: "703395698864",
  appId: "1:703395698864:web:1dc58146cfa14d38904375",
  measurementId: "G-J3BERW2X1E"
};


const app = initializeApp(firebaseConfig);

const auth=getAuth();

 const db = getFirestore(app);

export {app,auth,db}