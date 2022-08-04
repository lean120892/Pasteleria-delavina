// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8Za3mlrr1Bem8zZcGfvgB1k-jO4rd9xU",
  authDomain: "pasteleria-coder.firebaseapp.com",
  projectId: "pasteleria-coder",
  storageBucket: "pasteleria-coder.appspot.com",
  messagingSenderId: "502534573511",
  appId: "1:502534573511:web:b18a3e15fb5b3c02cc9de2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();




