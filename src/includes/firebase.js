import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB9rbcXi-ngbfskZSy8tcrFzlAAweEPXKg",
  authDomain: "music-app-168dc.firebaseapp.com",
  projectId: "music-app-168dc",
  storageBucket: "music-app-168dc.appspot.com",
  messagingSenderId: "889813042620",
  appId: "1:889813042620:web:9f2465207b36c01bae17b9",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
const usersCollection = db.collection("users");
export { auth, db, usersCollection, storage };
