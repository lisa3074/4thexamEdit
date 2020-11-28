import React, { useState, useEffect } from "react";
import Menu from "../../navigation/Menu";
import MainAdmin from "./MainAdmin";
import TopBar from "../../navigation/TopBar";
import SubMenu from "../../navigation/SubMenu";
import Planner from "../../planner/Planner";
import CircularProgress from "@material-ui/core/CircularProgress";
import Chat from "../../chat/Chat";
import { getUsers, getSignedinUser } from "../../../jsModules/dbData/getData";
import { commenceUserLevel } from "../../../jsModules/displayFunctions/commenceUserLevel";

export default function Administration(props) {
  console.log("administration/Administration.js || Administration()");
  const [tool, setTool] = useState("");
  const [chosenCat, setChosenCat] = useState(undefined);
  const [chosenEmployee, setChosenEmployee] = useState(undefined);
  const [chosenDivision, setChosenDivision] = useState("");
  const [chosenHours, setChosenHours] = useState("");
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);
  const [signedinUser, setSignedinUser] = useState();
  const [id, setId] = useState();
  const [systemPart, setSystemPart] = useState();

  const [chosenUser, setChosenUser] = useState();
  const [state, setState] = useState();

  useEffect(() => {
    getUsers(setUsers);
  }, []);
  useEffect(() => {
    getSignedinUser(setSignedinUser, localStorage.email);
  }, []);
  useEffect(() => {
    if (signedinUser) {
      commenceUserLevel(signedinUser[0].userLevel, signedinUser[0].id);
    }
  }, [signedinUser]);

  /*   console.log(id);
  console.log(localStorage);
  console.log(signedinUser); */

  function editProfile(id) {
    console.log("administration/Administration.js || editProfile()");
    const user = users.filter((user) => user.id === id);
    setChosenUser(user);
    setState("edit");
  }

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
      <Menu setEndpoint={props.setEndpoint} setTool={setTool} signedinUser={signedinUser} setId={setId}></Menu>
      <MainAdmin
        setChosenDivision={setChosenDivision}
        setChosenHours={setChosenHours}
        users={users}
        setUsers={setUsers}
        chosenDivision={chosenDivision}
        chosenHours={chosenHours}
        search={search}
        setSearch={setSearch}
        setId={setId}
        id={id}
        signedinUser={signedinUser}
        setSystemPart={setSystemPart}
        systemPart={systemPart}
        editProfile={editProfile}
        chosenUser={chosenUser}
        setChosenUser={setChosenUser}
        state={state}
        setState={setState}></MainAdmin>
      <Planner
        chosenCat={chosenCat}
        chosenEmployee={chosenEmployee}
        setChosenCat={setChosenCat}
        setChosenEmployee={setChosenEmployee}
        users={users}
        setSystemPart={setSystemPart}
        systemPart={systemPart}
      />
      <Chat />

      <SubMenu
        endpoint={props.endpoint}
        tool={tool}
        setChosenCat={setChosenCat}
        setChosenEmployee={setChosenEmployee}
        id={id}
        setSystemPart={setSystemPart}
        systemPart={systemPart}
        editProfile={editProfile}></SubMenu>
    </section>
  );
}
