// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSAkSSEVyTAetm6zYybr9-5BGJlnYN5Y8",
  authDomain: "movie-store-26e16.firebaseapp.com",
  projectId: "movie-store-26e16",
  storageBucket: "movie-store-26e16.appspot.com",
  messagingSenderId: "736631458627",
  appId: "1:736631458627:web:35f57c458476f889493df6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;