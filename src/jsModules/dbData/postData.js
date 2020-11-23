import { QueueSharp } from "@material-ui/icons";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import FilterTasks from "../../components/planner/FilterTasks";
import { clearUserForm, editUserResetForm, newUserResetForm } from "../displayFunctions/displayEditForm";

export const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true });

export function postUser(payload) {
  console.log("postUser");

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
}

export function storeImage(file, email) {
  const loader = document.querySelector("#loader");
  const storageRef = firebase.storage().ref("profile_pictures/" + email);
  const profilePicture = storageRef.put(file);

  profilePicture.on(
    "state_changed",
    function progress(snapshot) {
      let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      if (file) {
        loader.value = percentage;
      }
    },
    function error(err) {},
    function complete() {
      setTimeout(() => {
        document.querySelector(".succes").classList.add("hide");
        if (document.querySelector(".FormPath > h2").textContent === "Add user") {
          newUserResetForm();
        } else {
          editUserResetForm();
        }
        clearUserForm();
      }, 1000);
    }
  );
  if (!file) {
    loader.value = 100;
    setTimeout(() => {
      document.querySelector(".succes").classList.add("hide");
      if (document.querySelector(".FormPath > h2").textContent === "Add user") {
        newUserResetForm();
      } else {
        editUserResetForm();
      }
      clearUserForm();
    }, 1000);
  }
}
