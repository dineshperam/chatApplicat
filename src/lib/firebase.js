// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: "reactchat-66b7a.firebaseapp.com",
    projectId: "reactchat-66b7a",
    storageBucket: "reactchat-66b7a.appspot.com",
    messagingSenderId: "216590735391",
    appId: "1:216590735391:web:78387e44376b71ccbcdd2a",
    measurementId: "G-0FMXBS6CHB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore(app)
export const storage = getStorage(app)