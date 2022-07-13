import { initializeApp } from 'firebase/app';
import { getAuth } from  'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2_VoRlFVEOvGx8BTJJfGBiAk7DMa0Z4Y",
  authDomain: "burger-queen-218a8.firebaseapp.com",
  projectId: "burger-queen-218a8",
  storageBucket: "burger-queen-218a8.appspot.com",
  messagingSenderId: "889363999832",
  appId: "1:889363999832:web:79b38be858e5d673c5ee2d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);