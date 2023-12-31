// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmzVJXhQcbOV1aF-8TH7twnZmH_XdqYN8",
  authDomain: "todo-c68aa.firebaseapp.com",
  projectId: "todo-c68aa",
  storageBucket: "todo-c68aa.appspot.com",
  messagingSenderId: "200482090691",
  appId: "1:200482090691:web:995b17bb33e66ec3e4bc76"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);