// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZTTE0JLRoac22Nj5VdIFJHE3O7QGy7uQ",
  authDomain: "insta-2-4c93e.firebaseapp.com",
  projectId: "insta-2-4c93e",
  storageBucket: "insta-2-4c93e.appspot.com",
  messagingSenderId: "276886406445",
  appId: "1:276886406445:web:3d95259753e936b7c3ffa4",
};

// Initialize Firebase
const app = !getApp().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
