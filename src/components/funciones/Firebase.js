// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Base de datos 1
const firebaseConfig = {
  apiKey: "AIzaSyA8Za3mlrr1Bem8zZcGfvgB1k-jO4rd9xU",
  authDomain: "pasteleria-coder.firebaseapp.com",
  projectId: "pasteleria-coder",
  storageBucket: "pasteleria-coder.appspot.com",
  messagingSenderId: "502534573511",
  appId: "1:502534573511:web:b18a3e15fb5b3c02cc9de2"
};

// Base de datos 2 (Respaldo por si se bloquea firebase)
/*
const firebaseConfig = {
  apiKey: "AIzaSyDRsZZnqIzWgsw1ocmTNlJ-YQEluCgmlcE",
  authDomain: "pasteleria-nuevo.firebaseapp.com",
  projectId: "pasteleria-nuevo",
  storageBucket: "pasteleria-nuevo.appspot.com",
  messagingSenderId: "747890648064",
  appId: "1:747890648064:web:bdbec028a03920ce8ba4e5"
};
*/

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();





