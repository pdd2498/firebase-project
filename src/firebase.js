// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACBl96i8_swq0t-WrhayvDBuEnjhvjyxQ",
  authDomain: "preyesh-f2fc9.firebaseapp.com",
  projectId: "preyesh-f2fc9",
  storageBucket: "preyesh-f2fc9.appspot.com",
  messagingSenderId: "1060315145235",
  appId: "1:1060315145235:web:498e6f3327e61e4a9a8be6",
  measurementId: "G-P2ME423JBK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider(app);
export {app , provider};