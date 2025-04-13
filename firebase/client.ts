// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQFcOyxT5otwXrwdpXk6d1r3R5GOaTx-Y",
  authDomain: "talk-the-talk-2e0ea.firebaseapp.com",
  projectId: "talk-the-talk-2e0ea",
  storageBucket: "talk-the-talk-2e0ea.firebasestorage.app",
  messagingSenderId: "959583867112",
  appId: "1:959583867112:web:b95c602ba42d3fdd7db95d",
  measurementId: "G-TFW11PYM8W",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
