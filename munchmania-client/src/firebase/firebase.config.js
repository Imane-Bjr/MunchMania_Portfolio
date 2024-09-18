// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3K6JfvF7488rEgR5Rpxd5BhBTbsHWQV8",
  authDomain: "munchmania-client.firebaseapp.com",
  projectId: "munchmania-client",
  storageBucket: "munchmania-client.appspot.com",
  messagingSenderId: "430276736062",
  appId: "1:430276736062:web:3dc32deb2edaccc1888d6f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;