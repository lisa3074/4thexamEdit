import firebase from "firebase/app";
import "firebase/firestore";

export const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true });

//ADMIN-SYS
export function editUser(payload) {
  //console.log("jsModules || editData.js | editUser()");

  db.collection("users").doc(payload.id).update({
    image: payload.image,
    city: payload.city,
    name: payload.name,
    country: payload.country,
    position: payload.position,
    division: payload.division,
    workHours: payload.workHours,
    startDate: payload.startDate,
    userLevel: payload.userLevel,
    email: payload.email,
    tel: payload.tel,
    accountNumber: payload.accountNumber,
    contract: payload.contract,
    cpr: payload.cpr,
    education: payload.education,
    postalCode: payload.postalCode,
    streetAndNumber: payload.streetAndNumber,
  });
}

//PLANNER
export function editACard(payload) {
  //console.log("jsModules || editData.js | editACard()");
  db.collection("planner").doc(payload.id).update({
    title: payload.title,
    list: payload.list,
    assignedTo: payload.assignedTo,
    color: payload.color,
    category: payload.category,
    description: payload.description,
    due: payload.due,
    id: payload.id,
  });
}
export function dragACard(payload, id) {
  //console.log("jsModules || editData.js | dragACard()");
  db.collection("planner").doc(id).update({
    id: payload.id,
    list: payload.list,
  });
} //CHAT
export function editAMessage(payload) {
  //console.log("jsModules || editData.js | dragACard()");
  db.collection("chat").doc(payload.id).update({
    id: payload.id,
    message: payload.message,
    name: payload.name,
    date: payload.date,
  });
}
