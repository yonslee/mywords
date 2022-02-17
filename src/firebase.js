// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWjgyPEcw5RiAGs1qTEPM4oAwluKaCqR0",
  authDomain: "my-words-53fa6.firebaseapp.com",
  projectId: "my-words-53fa6",
  storageBucket: "my-words-53fa6.appspot.com",
  messagingSenderId: "893856664014",
  appId: "1:893856664014:web:3a663070493981bc0e839f",
  measurementId: "G-JXEXX3976G"
};

// Initialize Firebase

initializeApp(firebaseConfig);
// const app = initializeApp(firebaseConfig);
export const db = getFirestore();