// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAffTMD-noqXbfjGiSOLxWEmNE4dXGUwUQ",
  authDomain: "netflixgpt-e49db.firebaseapp.com",
  projectId: "netflixgpt-e49db",
  storageBucket: "netflixgpt-e49db.firebasestorage.app",
  messagingSenderId: "326970091947",
  appId: "1:326970091947:web:ea7bfb8fa3dbae988ccaee",
  measurementId: "G-1DCDMTKLG3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
