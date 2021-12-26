// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmdkAhRBwuWWdZBlswMXbKf4p9mIyH5vg",
  authDomain: "ntqproject.firebaseapp.com",
  projectId: "ntqproject",
  storageBucket: "ntqproject.appspot.com",
  messagingSenderId: "858825834991",
  appId: "1:858825834991:web:268cf7856327a5d9c7361a",
  measurementId: "G-LZGDW4WZBS"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);