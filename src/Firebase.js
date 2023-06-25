import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAxIXwM2fQn0V0hhOzE4FePoSxl_7d0rrY",
  authDomain: "findmytailor-77b0d.firebaseapp.com",
  projectId: "findmytailor-77b0d",
  storageBucket: "findmytailor-77b0d.appspot.com",
  messagingSenderId: "592380811677",
  appId: "1:592380811677:web:9b40e3f08540b49f02b774",
  measurementId: "G-TRNMSKS3WL",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
