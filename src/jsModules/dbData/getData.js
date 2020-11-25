import firebase from "firebase/app";
import "firebase/firestore";

export const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true });
// getting data live
// ADMIN-SYS
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

//PLANNER
export function getCards(callback) {
  const unsubsribe = db
    .collection("planner")
    .orderBy("due")
    .onSnapshot((snapshot) => {
      const cards = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log(cards);

      callback(cards);
    });
  return () => unsubsribe();
}
