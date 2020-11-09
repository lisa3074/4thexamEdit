import { app } from "firebase-admin";
import React from "react";
import { AuthProvider } from "../jsModules/firebase/auth";
import { firebaseConfig } from "../jsModules/firebase/firebase";

export default function Administration({ credentials }) {
  console.log("administration/Administration.js || Administration.js");
  //const currentUser = AuthProvider();
  //console.log(currentUser);
  return (
    <>
      <h1>Administration</h1>
      <p>
        {credentials != undefined ? credentials.email : ""}
        <br />
        {credentials != undefined ? credentials.password : ""}
        <br />
      </p>
      <button onClick={() => firebaseConfig.auth().signOut()}>Sign out</button>
    </>
  );
}
