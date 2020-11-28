import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

import { clearUserForm, editUserResetForm, newUserResetForm } from "../displayFunctions/displayEditForm";

export const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true });

//ADMIN-SYS
export function postUser(payload) {
  console.log("jsModules || postData.js | postUser()");
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

//IMAGE
export function storeImage(file, email, callback, image) {
  console.log("jsModules || postData.js | storeImage()");
  if (!file && !image) {
    const loader = document.querySelector("#loader");
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

    callback(
      "https://firebasestorage.googleapis.com/v0/b/mmdfinalexam.appspot.com/o/profile_pictures%2Fplaceholder.png?alt=media&token=c06d8e7a-6812-45d0-bff1-af790d20f5b8"
    );
  } else if (!file && image) {
    const loader = document.querySelector("#loader");
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
    callback(image);
  } else {
    const loader = document.querySelector("#loader");
    const storageRef = firebase.storage().ref("profile_pictures/" + email);
    const profilePicture = storageRef.put(file);

    let image;
    const filePath = storageRef.getDownloadURL();
    let ref = firebase.storage().ref();
    const imgRef = ref.child("profile_pictures/" + email);
    imgRef.getDownloadURL().then(function (url) {
      image = url.toString();
      console.log(image);

      callback(image);
    });

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
}

//PLANNER
export function postCard(data) {
  console.log("jsModules || postData.js | postCard()");

  db.collection("planner").add({
    title: data.title,
    list: data.list,
    added: Date.now(),
    assignedTo: data.assignedTo,
    color: data.color,
    category: data.category,
    description: data.description,
    due: data.due,
    timeStamp: Date.now(),
  });
}
