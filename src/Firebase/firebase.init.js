// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBBtZ5qX_1FNC5CtK4SMjffQZn-GkD-KXY",
    authDomain: "travel-guru-64301.firebaseapp.com",
    projectId: "travel-guru-64301",
    storageBucket: "travel-guru-64301.firebasestorage.app",
    messagingSenderId: "1018578682542",
    appId: "1:1018578682542:web:a0894a7768f44bb038e33f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);