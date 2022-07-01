// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTcHssAlcOSbiCoogopi82uihELFkJKZQ",
  authDomain: "waldo-d7262.firebaseapp.com",
  databaseURL: "https://waldo-d7262-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "waldo-d7262",
  storageBucket: "waldo-d7262.appspot.com",
  messagingSenderId: "268314534963",
  appId: "1:268314534963:web:cb3e8e860933da26baaf46"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore()
export default db;