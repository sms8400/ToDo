// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBRswobZOSuqfHXlEu4INOXbP90h40HLI",
  authDomain: "to-do-57b97.firebaseapp.com",
  projectId: "to-do-57b97",
  storageBucket: "to-do-57b97.appspot.com",
  messagingSenderId: "252356972916",
  appId: "1:252356972916:web:7253803729e4a0a9f31c21",
  measurementId: "G-C1E3FCBLBQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);