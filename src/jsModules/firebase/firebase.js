import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
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
export function resetPasswordMail(email) {
  firebase
    .auth()
    .sendPasswordResetEmail(email)
    .then(function () {
      // Email sent.
    })
    .catch(function (error) {
      // An error happened.
    });
}
