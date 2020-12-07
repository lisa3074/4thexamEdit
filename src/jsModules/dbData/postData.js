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
//PLANNER
export function postMessage(message, user) {
  console.log("jsModules || postData.js | postMessage()");

  db.collection("chat").add({
    date: Date.now(),
    message: message,
    name: user,
  });

  console.log(message, user, Date.now());
}

//IMAGE
export function storeImage(file, email, callback, image) {
  console.log("jsModules || postData.js | storeImage()");
  //If there is no file uploaded and no previous link to an image, use a placeholder on the callback location
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
    //if there is no uploaded file, but there is a link to a previous uploaded image, use that link.
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
    //if there is a file uploaded: post to storage, then get the url, then send to callback function, then post url with db entry
  } else {
    const loader = document.querySelector("#loader");
    const storageRef = firebase.storage().ref("profile_pictures/" + email);
    const profilePicture = storageRef.put(file);
    storageRef.put(file).then((data) => {
      data.ref.getDownloadURL().then((url) => {
        console.log(url.toString());
        callback(url.toString());
      });
    });
    //show progress of upload
    profilePicture.on(
      "state_changed",
      function progress(snapshot) {
        let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        if (file) {
          loader.value = percentage;
        }
      },
      function error(err) {
        console.log("ERROR: " + err);
      },
      function complete() {
        document.querySelector(".succes").classList.add("hide");
        setTimeout(() => {
          if (document.querySelector(".FormPath > h2").textContent === "Add user") {
            newUserResetForm();
          } else {
            editUserResetForm();
          }
          clearUserForm();
        }, 1000);
      }
    );
    //if there's no file uploaded, fake it
    if (!file) {
      loader.value = 0;
      setTimeout(() => {
        loader.value = 80;
        setTimeout(() => {
          loader.value = 100;
        }, 200);
      }, 200);
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
export function storeContract(file, name, callback, contract) {
  console.log("jsModules || postData.js | storeImage()");
  //If there is no file uploaded and no previous link to an image, use a placeholder on the callback location
  if (!file && contract) {
    callback(contract);
    //if there is a file uploaded: post to storage, then get the url, then send to callback function, then post url with db entry
  } else if (file) {
    const storageRef = firebase.storage().ref("contracts/" + name + ".pdf");
    storageRef.put(file).then((data) => {
      data.ref.getDownloadURL().then((url) => {
        console.log(url.toString());
        callback(url.toString());
      });
    });
  }
}
