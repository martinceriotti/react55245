import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyALDE37FnpUzhvou4BdTLffk-8rL6yMvCc",
  authDomain: "backtothedata-afa35.firebaseapp.com",
  projectId: "backtothedata-afa35",
  storageBucket: "backtothedata-afa35.appspot.com",
  messagingSenderId: "497854098538",
  appId: "1:497854098538:web:3c8ae1ec6b4fcc6a74ae13"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);