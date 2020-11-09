import { app } from "firebase-admin";
import React from "react";
import { firebaseConfig } from "../jsModules/firebase/firebase";

export default function Administration({ credentials }) {
  console.log("administration/Administration.js || Administration.js");
  console.log(credentials);
  return (
    <>
      <h1>Administration</h1>
      <p>
        {credentials.email}
        <br />
        {credentials.password}
      </p>
      <button onClick={() => firebaseConfig.auth().signOut()}>Sign out</button>
    </>
  );
}
