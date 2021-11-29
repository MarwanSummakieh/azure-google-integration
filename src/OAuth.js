// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBE0mxsJdJD2au_S7jpuhsSGeDTOh2mLZU",
    authDomain: "gaad-57019.firebaseapp.com",
    projectId: "gaad-57019",
    storageBucket: "gaad-57019.appspot.com",
    messagingSenderId: "309815817661",
    appId: "1:309815817661:web:f9479d23021494c5154ed4",
    measurementId: "G-7L3XP92JP8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);