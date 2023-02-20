// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhhpa4aQU_zSTLSLBu7XKySm3BYhVjNPY",
  authDomain: "banana-react-auth.firebaseapp.com",
  projectId: "banana-react-auth",
  storageBucket: "banana-react-auth.appspot.com",
  messagingSenderId: "578617672085",
  appId: "1:578617672085:web:e8744c831521a01356b69c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;