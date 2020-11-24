/* import db from "./firebase"; */
import firebase from "firebase/app";
import "firebase/firestore";

export function getData(userId) {
  //console.log(userId);
}

export const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true });
// getting data live
export function getUsers(callback) {
  const unsubsribe = db
    .collection("users")
    .orderBy("name")
    .onSnapshot((snapshot) => {
      const users = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log(users);

      callback(users);
    });
  return () => unsubsribe();
}
export function getSignedinUser(callback, email) {
  const unsubsribe = db
    .collection("users")
    .where("email", "==", email)
    .onSnapshot((snapshot) => {
      const SignedIn = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log(SignedIn);

      callback(SignedIn);
    });
  return () => unsubsribe();
}
//Getting not live data
/* export function getUsers(callback) {
  db.collection("users")
    .get()
    .then((snapshot) => {
      const users = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log(users);

      callback(users);
    });
} */
