// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {email, getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvf7Pflfj0dUX0IDTDIwiyGFqeB8XbRrI",
  authDomain: "ingweb-5e784.firebaseapp.com",
  projectId: "ingweb-5e784",
  storageBucket: "ingweb-5e784.appspot.com",
  messagingSenderId: "94546633624",
  appId: "1:94546633624:web:169a40e540dd17a8c841ed",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore();

