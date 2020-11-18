import React, { useState } from "react";
import Menu from "../../navigation/Menu";
import MainAdmin from "./MainAdmin";
import TopBar from "../../navigation/TopBar";
import SubMenu from "../../navigation/SubMenu";
import UserForm from "../form/UserForm";
import Planner from "../../planner/Planner";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function Administration(props) {
  console.log("administration/Administration.js || Administration.js");
  const [tool, setTool] = useState("");
  //const currentUser = AuthProvider();

  return (
    <section className="Administration">
      <div className="loading-page">
        <div>
          <CircularProgress color="primary" />
        </div>
      </div>
      <TopBar endpoint={props.endpoint}></TopBar>
      <Menu innerWidth={props.innerWidth} setEndpoint={props.setEndpoint} setTool={setTool}></Menu>
      <MainAdmin innerWidth={props.innerWidth}></MainAdmin>
      <Planner />
      <UserForm />
      <SubMenu endpoint={props.endpoint} tool={tool}></SubMenu>
      {/* 
      <p>{credentials != undefined ? credentials.email : ""}</p> */}
    </section>
  );
}
