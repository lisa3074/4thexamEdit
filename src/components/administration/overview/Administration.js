import React, { useState, useEffect } from "react";
import Menu from "../../navigation/Menu";
import MainAdmin from "./MainAdmin";
import TopBar from "../../navigation/TopBar";
import SubMenu from "../../navigation/SubMenu";
import UserForm from "../form/UserForm";
import Planner from "../../planner/Planner";
import CircularProgress from "@material-ui/core/CircularProgress";
import Chat from "../../chat/Chat";
import { getUsers } from "../../../jsModules/dbData/getData";

export default function Administration(props) {
  console.log("administration/Administration.js || Administration.js");
  const [tool, setTool] = useState("");
  const [chosenCat, setChosenCat] = useState(undefined);
  const [chosenEmployee, setChosenEmployee] = useState(undefined);
  const [chosenDivision, setChosenDivision] = useState("");
  const [chosenHours, setChosenHours] = useState("");
  const [search, setSearch] = useState("");
  //const currentUser = AuthProvider();
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers(setUsers);
  }, []);
  console.log(search);
  return (
    <section className="Administration">
      <div className="loading-page">
        <div>
          <CircularProgress color="primary" />
        </div>
      </div>
      <TopBar
        endpoint={props.endpoint}
        setChosenCat={setChosenCat}
        setChosenEmployee={setChosenEmployee}
        setChosenDivision={setChosenDivision}
        setChosenHours={setChosenHours}
        setSearch={setSearch}></TopBar>
      <Menu setEndpoint={props.setEndpoint} setTool={setTool}></Menu>
      <MainAdmin
        setChosenCat={setChosenCat}
        setChosenEmployee={setChosenEmployee}
        users={users}
        chosenDivision={chosenDivision}
        chosenHours={chosenHours}
        search={search}></MainAdmin>
      <Planner
        chosenCat={chosenCat}
        chosenEmployee={chosenEmployee}
        setChosenCat={setChosenCat}
        setChosenEmployee={setChosenEmployee}
      />
      <Chat />
      <UserForm />

      <SubMenu
        endpoint={props.endpoint}
        tool={tool}
        setChosenCat={setChosenCat}
        setChosenEmployee={setChosenEmployee}></SubMenu>
      {/* 
      <p>{credentials != undefined ? credentials.email : ""}</p> */}
    </section>
  );
}
