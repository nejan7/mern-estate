// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-a12e0.firebaseapp.com",
  projectId: "mern-estate-a12e0",
  storageBucket: "mern-estate-a12e0.appspot.com",
  messagingSenderId: "726106118633",
  appId: "1:726106118633:web:6a009fd1459bc4754d1378"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);