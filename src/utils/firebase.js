import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

export const app = initializeApp({
  apiKey: "AIzaSyBbpSdsqjxAYvl37oC9X3Fw_-AW5Vay58A",
  authDomain: "cinefile-d8c39.firebaseapp.com",
  projectId: "cinefile-d8c39",
  storageBucket: "cinefile-d8c39.appspot.com",
  messagingSenderId: "285941938688",
  appId: "1:285941938688:web:634cd6bee8aabee299f6e5"
});

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);


export { auth, db, storage };