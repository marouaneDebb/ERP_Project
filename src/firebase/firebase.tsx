import { initializeApp, FirebaseApp } from "firebase/app";
import { Auth, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDubh1M_aB649UOxfrguTIN9uzAIHlGIZQ",
  authDomain: "erpschool-7b5e7.firebaseapp.com",
  projectId: "erpschool-7b5e7",
  storageBucket: "erpschool-7b5e7.appspot.com",
  messagingSenderId: "878500557713",
  appId: "1:878500557713:web:52e0e4e7be3e6b7ea7e030",
  measurementId: "G-W6L7G2VR2T"
};

// Initialize Firebase app
const app: FirebaseApp = initializeApp(firebaseConfig);

// Get the Auth instance
const auth: Auth = getAuth(app);

export { app, auth };
