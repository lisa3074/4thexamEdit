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

export function storeImage(file, email, callback) {
  const loader = document.querySelector("#loader");
  const storageRef = firebase.storage().ref("profile_pictures/" + email);
  const profilePicture = storageRef.put(file);

  //const filePath = await storageRef.getDownloadURL();
  let image;
  const filePath = storageRef.getDownloadURL();
  let ref = firebase.storage().ref();
  const imgRef = ref.child("profile_pictures/" + email);
  imgRef.getDownloadURL().then(function (url) {
    image = url.toString();
    console.log(image);
    callback(image);
  });
  /*   storageRef
    .getDownloadURL()
    .then(function (url) {
      console.log(url);
      callback(url);
      // Get the download URL for 'images/stars.jpg'
      // This can be inserted into an <img> tag
      // This can also be downloaded directly
    })
    .catch(function (error) {
      // Handle any errors
    }); */

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
