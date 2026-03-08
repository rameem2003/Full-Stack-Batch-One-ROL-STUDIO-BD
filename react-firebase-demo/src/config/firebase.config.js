// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6W3Q4SDJbFO2KeBVh28o5qrMn4NVy22U",
  authDomain: "fsb1-1dec8.firebaseapp.com",
  projectId: "fsb1-1dec8",
  storageBucket: "fsb1-1dec8.firebasestorage.app",
  messagingSenderId: "340758800317",
  appId: "1:340758800317:web:f1ed1e5c7696693e4754d4",
  databaseURL:
    "https://fsb1-1dec8-default-rtdb.asia-southeast1.firebasedatabase.app",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase();
