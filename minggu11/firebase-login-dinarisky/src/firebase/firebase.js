import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB131ttS7CyhsvZoyo-t8OSSuYNu_eUbVQ",
    authDomain: "firbase-login-dinariskyas.firebaseapp.com",
    projectId: "firbase-login-dinariskyas",
    storageBucket: "firbase-login-dinariskyas.appspot.com",
    messagingSenderId: "892952490167",
    appId: "1:892952490167:web:e294bdeb7dad7b9bd05d32",
    measurementId: "G-WHLX5B8BXL"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;