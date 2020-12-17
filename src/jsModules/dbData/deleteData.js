import firebase from "firebase/app";
import "firebase/firestore";

export const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true });
//ADMIN-SYS
export function deleteUser(id) {
  //console.log("jsModules || deleteData.js | deleteUser()");

  db.collection("users").doc(id).delete();
}

//PLANNER
export function deleteACard(id) {
  //console.log("jsModules || deleteData.js | deleteCard()");

  db.collection("planner").doc(id).delete();
}
//CHAT
export function deleteAMessage(id) {
  //console.log("jsModules || deleteData.js | deleteAMessage()");

  db.collection("chat").doc(id).delete();
}
