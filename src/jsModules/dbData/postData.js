/* import db from "./firebase"; */
import firebase from "firebase/app";
import "firebase/firestore";
/* import db from "./getData"; */

//export function postUser() {}

export const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true });

export function postUser(payload) {
  console.log(
    `${payload.image} ${payload.city} ${payload.name} ${payload.country} ${payload.position} ${payload.division} ${payload.workHours} ${payload.startDate} ${payload.userLevel} ${payload.email} ${payload.tel} ${payload.accountNumber} ${payload.contract} ${payload.cpr} ${payload.education} ${payload.postalCode} ${payload.streetAndNumber}`
  );
  db.collection("users").add({
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
  /*   .then(() => {
      setName("");
      setPosition("");
    }); */

  // callback(users);
}
