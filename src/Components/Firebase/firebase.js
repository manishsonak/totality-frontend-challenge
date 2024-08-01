// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey:'Your api key' ,
  authDomain: "your auth Domain key" ,
  projectId:  "Your Project id",
  storageBucket:  'Your storageBucket',
  messagingSenderId: "your messagingSender id",
  appId:  "your appId",
  measurementId: "Your measurementId",
};


const app = initializeApp(firebaseConfig);

const auth=getAuth();

 const db = getFirestore(app);

export {app,auth,db}