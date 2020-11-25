import firebase from "firebase/app";
import "firebase/firestore";

export const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true });
//ADMIN-SYS
export function deleteUser(id) {
  console.log("jsModules || deleteData.js | deleteUser()");
  console.log(id);
  db.collection("users").doc(id).delete();
}

//PLANNER
export function deleteACard(id) {
  console.log("jsModules || deleteData.js | deleteCard()");
  console.log(id);
  db.collection("planner").doc(id).delete();
}
