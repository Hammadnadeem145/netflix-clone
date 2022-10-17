// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyBYUYshnoft5qY1FlXR0ZVo1IiV3c8hsjE',
    authDomain: 'netflix-project-f39f6.firebaseapp.com',
    projectId: 'netflix-project-f39f6',
    storageBucket: 'netflix-project-f39f6.appspot.com',
    messagingSenderId: '888513135998',
    appId: '888513135998:web:5febab6ea6d48e14449f2f'
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);



