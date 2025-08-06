import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7nGXe-xY6X0mZbDqhDyBTIKbNI1nl6Bo",
  authDomain: "quickkart-9392c.firebaseapp.com",
  projectId: "quickkart-9392c",
  storageBucket: "quickkart-9392c.firebasestorage.app",
  messagingSenderId: "835790465306",
  appId: "1:835790465306:web:251c1c2aac6e79d9e064a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };