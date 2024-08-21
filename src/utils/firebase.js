// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOKZighvbvy65_m4QTxgdG1U3kke4rReA",
  authDomain: "watchogpt.firebaseapp.com",
  projectId: "watchogpt",
  storageBucket: "watchogpt.appspot.com",
  messagingSenderId: "1034037454727",
  appId: "1:1034037454727:web:f57bcc22b8f00e4b705522",
  measurementId: "G-CM0BQBTVDF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
