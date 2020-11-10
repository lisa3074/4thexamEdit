import { app } from "firebase-admin";
import React from "react";
import { AuthProvider } from "../../../jsModules/firebase/auth";
import { firebaseConfig } from "../../../jsModules/firebase/firebase";
import Menu from "../../navigation/Menu";
import Main from "./Main";
import TopBar from "./TopBar";

export default function Administration({ credentials }) {
  console.log("administration/Administration.js || Administration.js");
  //const currentUser = AuthProvider();
  //console.log(currentUser);
  return (
    <section className="Administration">
      <TopBar></TopBar>
      <Menu></Menu>
      <Main></Main>

      <p>{credentials != undefined ? credentials.email : ""}</p>
    </section>
  );
}