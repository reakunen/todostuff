// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwds59sexmXoJN45P_lswYV5G-ieZCsKE",
  authDomain: "realjournal-6256b.firebaseapp.com",
  projectId: "realjournal-6256b",
  storageBucket: "realjournal-6256b.appspot.com",
  messagingSenderId: "467770167430",
  appId: "1:467770167430:web:ca8a53f0a8b50fb2bd4107",
  measurementId: "G-7FDGKQM202"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);