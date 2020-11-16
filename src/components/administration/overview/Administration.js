import React from "react";
import Menu from "../../navigation/Menu";
import MainAdmin from "./MainAdmin";
import TopBar from "../../navigation/TopBar";
import SubMenu from "../../navigation/SubMenu";
import UserForm from "../form/UserForm";
import Planner from "../../planner/Planner";

export default function Administration(props) {
  console.log("administration/Administration.js || Administration.js");
  //const currentUser = AuthProvider();

  return (
    <section className="Administration">
      <TopBar endpoint={props.endpoint}></TopBar>
      <Menu innerWidth={props.innerWidth} setEndpoint={props.setEndpoint}></Menu>
      <MainAdmin innerWidth={props.innerWidth}></MainAdmin>
      <Planner />
      <UserForm />
      <SubMenu endpoint={props.endpoint}></SubMenu>
      {/* 
      <p>{credentials != undefined ? credentials.email : ""}</p> */}
    </section>
  );
}
