// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDWCc37Q5LRqRkc56AnwyEkiiUkYlrFyV8",
  authDomain: "times-a9e35.firebaseapp.com",
  projectId: "times-a9e35",
  storageBucket: "times-a9e35.appspot.com",
  messagingSenderId: "699560853313",
  appId: "1:699560853313:web:b8512a047c0f84cb112bc0",
  measurementId: "G-9GFKX5BTQY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);