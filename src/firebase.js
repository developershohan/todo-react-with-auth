



import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDDzdTkAbbDnLzC7019-tfFqrx6UAF4Ghc",
  authDomain: "todo-ee5e5.firebaseapp.com",
  projectId: "todo-ee5e5",
  storageBucket: "todo-ee5e5.appspot.com",
  messagingSenderId: "634264997128",
  appId: "1:634264997128:web:053991a64a0a3b0b0a30bd"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);