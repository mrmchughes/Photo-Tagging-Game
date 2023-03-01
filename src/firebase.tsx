import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyA92UJ7M8k8USYNAVEezpQrcBOOLvxDZU8",

  authDomain: "where-s-waldo-ea034.firebaseapp.com",

  projectId: "where-s-waldo-ea034",

  storageBucket: "where-s-waldo-ea034.appspot.com",

  messagingSenderId: "931096641426",

  appId: "1:931096641426:web:3f211916900547f78f4b4b",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { app, db };
