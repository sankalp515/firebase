// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQBdbbZXx21SmcET2CncK7f03WL7EskWc",
  authDomain: "app-83dbb.firebaseapp.com",
  projectId: "app-83dbb",
  storageBucket: "app-83dbb.appspot.com",
  messagingSenderId: "949113857782",
  appId: "1:949113857782:web:e2232b37b55a60fd01eed7",
  databaseURL : "https://app-83dbb-default-rtdb.firebaseio.com"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);