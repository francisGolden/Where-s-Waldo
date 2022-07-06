// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "process.env.REACT_APP_apiKey",
  authDomain: "process.env.REACT_APP_authDomain",
  databaseURL: "process.env.REACT_APP_databaseURL",
  projectId: "waldo-d7262",
  storageBucket: "waldo-d7262.appspot.com",
  messagingSenderId: "268314534963",
  appId: "1:268314534963:web:cb3e8e860933da26baaf46"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore()
export default db;