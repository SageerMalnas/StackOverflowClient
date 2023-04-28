// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsEPPcsqzh_tp5OkJYTSwvoN1xTcYQTPs",
  authDomain: "otp-auth-191eb.firebaseapp.com",
  projectId: "otp-auth-191eb",
  storageBucket: "otp-auth-191eb.appspot.com",
  messagingSenderId: "872185755933",
  appId: "1:872185755933:web:e2d7bfa9ae4eb0d1c409f4",
  measurementId: "G-MDJ8TP1ERK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);