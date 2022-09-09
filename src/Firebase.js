// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBlA3PEPWI3nQOa8hOrQr9Q4Ky1PTqW93c',
  authDomain: process.env.REACT_APP_FIREBASE_APP_ID,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,

};

// REACT_APP_FIREBASE_API_KEY = AIzaSyBlA3PEPWI3nQOa8hOrQr9Q4Ky1PTqW93c
// REACT_APP_FIREBASE_AUTH_DOMAIN = yggdrasil-flix.firebaseapp.com
// REACT_APP_FIREBASE_PROJECT_ID = yggdrasil-flix
// REACT_APP_FIREBASE_STORAGE_BUCKET = yggdrasil-flix.appspot.com
// REACT_APP_FIREBASE_MESSAGING_SENDER_ID = 1095252113533
// REACT_APP_FIREBASE_APP_ID = 1:1095252113533:web:d34c680d1effc80db71914

export const app = initializeApp(firebaseConfig);
export  const auth = getAuth(app);
export const db = getFirestore(app);