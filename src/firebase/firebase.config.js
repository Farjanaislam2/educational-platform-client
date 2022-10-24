// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBykJw3sXixlBPJXbVvuEGw0tno2V2enl4",
  authDomain: "educational-platform-1b2b4.firebaseapp.com",
  projectId: "educational-platform-1b2b4",
  storageBucket: "educational-platform-1b2b4.appspot.com",
  messagingSenderId: "277032938710",
  appId: "1:277032938710:web:f480813b877d75ecf0ad77",
  measurementId: "G-B9TF68ZQ3N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;