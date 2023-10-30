// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAo7Uwd1xRvCyjU8vNkSgunww6na4bqBsc",
  authDomain: "helenamaciel-gpt.firebaseapp.com",
  projectId: "helenamaciel-gpt",
  storageBucket: "helenamaciel-gpt.appspot.com",
  messagingSenderId: "860768834967",
  appId: "1:860768834967:web:8bb58d199b35c9eba520d2",
  measurementId: "G-02V0NZZP0Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
