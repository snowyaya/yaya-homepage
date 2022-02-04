import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD3UCWkHGNRDzfUbJ-86NN4bgPI9nMxNjw",
  authDomain: "portfolio-contact-1471b.firebaseapp.com",
  databaseURL: "https://portfolio-contact-1471b-default-rtdb.firebaseio.com",
  projectId: "portfolio-contact-1471b",
  storageBucket: "portfolio-contact-1471b.appspot.com",
  messagingSenderId: "224894829058",
  appId: "1:224894829058:web:1d9cf34ec9a6e0d6611d1b",
  measurementId: "G-SJ2536WFQ0"
};

// This doesn't gurantee a database
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

