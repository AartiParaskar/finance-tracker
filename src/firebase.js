import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCDaYrQrXxI5PYSbV65p3MRhzFpG-yzrkU",
  authDomain: "finance-tracker-794e2.firebaseapp.com",
  projectId: "finance-tracker-794e2",
  storageBucket: "finance-tracker-794e2.firebasestorage.app",
  messagingSenderId: "1064262508475",
  appId: "1:1064262508475:web:f747bfbac3b3a3d8bcae9e"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);