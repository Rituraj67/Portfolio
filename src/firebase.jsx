import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDFkYMt9DhPcGRe71uTp4fmYSxoLUG4Z9Q",
  authDomain: "myportfolio-ef91b.firebaseapp.com",
  projectId: "myportfolio-ef91b",
  storageBucket: "myportfolio-ef91b.appspot.com",
  messagingSenderId: "341283690310",
  appId: "1:341283690310:web:8512d1d4f33edcdabdb747",
  measurementId: "G-PRDXF6HXLG"
};


export const app = initializeApp(firebaseConfig);
export const db= getFirestore();
