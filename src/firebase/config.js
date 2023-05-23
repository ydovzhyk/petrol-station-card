import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBHXub1Tps5r1tV4xPhB7WlKgp7dFTtAZ4",
  authDomain: "petrol-station-179e4.firebaseapp.com",
  projectId: "petrol-station-179e4",
  storageBucket: "petrol-station-179e4.appspot.com",
  messagingSenderId: "694814521880",
  appId: "1:694814521880:web:78b600306ace4ec8d3216d",
  measurementId: "G-ZYRCBXH5F1",
};

export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const storage = getStorage(app);

export const auth = getAuth(app);
console.log("auth1", auth);
