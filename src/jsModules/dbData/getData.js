import firebase from "firebase/app";
import "firebase/firestore";

export const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true });
// getting data live
// ADMIN-SYS
export function getUsers(callback) {
  console.log("jsModules || getData.js | getUsers()");
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
  console.log("jsModules || getData.js | getSignedinUser()");
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
  console.log("jsModules || getData.js | getCards()");
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
//CHAT
export function getMessages(callback) {
  console.log("jsModules || getData.js | getMessages()");
  const unsubsribe = db
    .collection("chat")
    .orderBy("date", "asc")
    .onSnapshot((snapshot) => {
      const messages = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log(messages);

      callback(messages);
    });
  return () => unsubsribe();
}
