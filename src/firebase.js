import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDY0rRY0TN7FM2VAPNobyjjkoQn2mxK-wc",
  authDomain: "clone-cfa1b.firebaseapp.com",
  projectId: "clone-cfa1b",
  storageBucket: "clone-cfa1b.appspot.com",
  messagingSenderId: "490035915025",
  appId: "1:490035915025:web:7a0b6095b85ab9b34944b0",
  measurementId: "G-KD4D1RYN83"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };