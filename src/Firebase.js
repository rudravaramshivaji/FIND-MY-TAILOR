import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyAdMqk8Mir7Q-8I22T7ce09wW0NtLSg7Zk",
  authDomain: "findmytailor-6330a.firebaseapp.com",
  projectId: "findmytailor-6330a",
  storageBucket: "findmytailor-6330a.appspot.com",
  messagingSenderId: "784306125853",
  appId: "1:784306125853:web:6e9d5894b97a09cd8d1af4",
  measurementId: "G-M0MP0KP3VF"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { db , storage, auth};
