// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {  getAuth  } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "ai-yt-gen.firebaseapp.com",
  projectId: "ai-yt-gen",
  storageBucket: "ai-yt-gen.firebasestorage.app",
  messagingSenderId: "60702894059",
  appId: "1:60702894059:web:3f74b42039bc026c575bae",
  measurementId: "G-BQ8D2JPG2W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth(app);