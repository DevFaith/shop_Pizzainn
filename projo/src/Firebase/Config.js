import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from "firebase/auth";



const firebaseConfig = {
    apiKey: "AIzaSyCxzK39-3zHMKyNTkByfYudSViJIn8lito",
    authDomain: "orderpizza-0.firebaseapp.com",
    projectId: "orderpizza-0",
    storageBucket: "orderpizza-0.appspot.com",
    messagingSenderId: "611884876520",
    appId: "1:611884876520:web:0e77c3c33705fcc289bf5d",
    measurementId: "G-6D3NEYTE8S"
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth, provider };
