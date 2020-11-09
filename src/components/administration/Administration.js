import { app } from "firebase-admin";
import React from "react";
import { firebaseConfig } from "../jsModules/firebase/firebase";
export default function Administration() {
  console.log("administration/Administration.js || Administration.js");
  return (
    <>
      <h1>Administration</h1>
      <button
        onClick={() => {
          firebaseConfig.auth().signout();
        }}>
        Sign out
      </button>
    </>
  );
}
