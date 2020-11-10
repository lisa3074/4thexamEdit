import firebase from "firebase/app";
//import firebase from "firebase/app";
// Add the Firebase services that you want to use
//import "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import "firebase/auth";

export const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyDUpP2FLqidaGgtZVAbkkCLLdrE3JyNJ0M",
  authDomain: "mmdfinalexam.firebaseapp.com",
  databaseURL: "https://mmdfinalexam.firebaseio.com",
  projectId: "mmdfinalexam",
  storageBucket: "mmdfinalexam.appspot.com",
  messagingSenderId: "996080263297",
  appId: "1:996080263297:web:a007d1c5f07bff80fa6d80",
  measurementId: "G-JE7NP69924",
});
