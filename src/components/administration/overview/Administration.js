import React, { useState, useEffect } from "react";
import Menu from "../../navigation/Menu";
import MainAdmin from "./MainAdmin";
import TopBar from "../../navigation/TopBar";
import SubMenu from "../../navigation/SubMenu";
import Planner from "../../planner/Planner";
import CircularProgress from "@material-ui/core/CircularProgress";
import Chat from "../../chat/Chat";
import { getUsers, getSignedinUser, getCards } from "../../../jsModules/dbData/getData";
import { scrollToBottom } from "../../../jsModules/displayFunctions/mainMenuNavigation";
import { getMessages } from "../../../jsModules/dbData/getData";
import { GSAP_stagProfilesStartup } from "../../../jsModules/displayFunctions/gsap";

export default function Administration(props) {
  console.log("administration/Administration.js || Administration()");
  const [tool, setTool] = useState("");
  const [chosenCategory, setChosenCategory] = useState("");
  const [chosenEmployee, setChosenEmployee] = useState("");
  const [chosenDivision, setChosenDivision] = useState("");
  const [chosenHours, setChosenHours] = useState("");
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);
  const [signedinUser, setSignedinUser] = useState();
  const [id, setId] = useState();
  const [systemPart, setSystemPart] = useState();
  const [messages, setMessages] = useState();
  const [chosenUser, setChosenUser] = useState();
  const [state, setState] = useState();
  const [level, setLevel] = useState();
  const [viewingProfile, setViewingProfile] = useState(false);
  const [isUSerProfile, setisUSerProfile] = useState(false);
  const [sortDate, setSortDate] = useState();
  const [cards, setCards] = useState([]);
  const [list, setList] = useState("To");
  const [chatSearch, setChatSearch] = useState("");

  useEffect(() => {
    getUsers(setUsers);
  }, []);
  useEffect(() => {
    if (window.innerWidth > 999) {
      GSAP_stagProfilesStartup();
    }
  }, [users]);

  useEffect(() => {
    getMessages(setMessages);
    if (signedinUser) {
      setLevel(signedinUser[0].userLevel);
    }
  }, [signedinUser]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    getCards(setCards);
    getSignedinUser(setSignedinUser, localStorage.email);
  }, []);

  /*   useEffect(() => {
    if (signedinUser) {
      setLevel(signedinUser[0].userLevel);
    }
  }, [signedinUser]); */

  /*   useEffect(() => {
    getCards(setCards);
  }, []); */

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
        setChosenCategory={setChosenCategory}
        setChosenEmployee={setChosenEmployee}
        setChosenDivision={setChosenDivision}
        setChosenHours={setChosenHours}
        setSearch={setSearch}
        level={level}
        setTool={setTool}
        viewingProfile={viewingProfile}
        setSortDate={setSortDate}
        sortDate={sortDate}
        users={users}
        setViewingProfile={setViewingProfile}
        chatSearch={chatSearch}
        setChatSearch={setChatSearch}></TopBar>
      <Menu
        setEndpoint={props.setEndpoint}
        setTool={setTool}
        signedinUser={signedinUser}
        setId={setId}
        level={level}
        setisUSerProfile={setisUSerProfile}
        setViewingProfile={setViewingProfile}
        setChosenCategory={setChosenCategory}
        setChosenEmployee={setChosenEmployee}
        setChosenDivision={setChosenDivision}
        setChosenHours={setChosenHours}
        setSearch={setSearch}></Menu>
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
        setState={setState}
        setViewingProfile={setViewingProfile}
        level={level}
        isUSerProfile={isUSerProfile}
        cards={cards}></MainAdmin>

      <Planner
        chosenCategory={chosenCategory}
        chosenEmployee={chosenEmployee}
        setChosenCategory={setChosenCategory}
        setChosenEmployee={setChosenEmployee}
        users={users}
        setSystemPart={setSystemPart}
        systemPart={systemPart}
        tool={tool}
        setTool={setTool}
        cards={cards}
        setList={setList}
        list={list}
        setViewingProfile={setViewingProfile}
      />
      <Chat
        signedinUser={signedinUser}
        users={users}
        messages={messages}
        setSortDate={setSortDate}
        sortDate={sortDate}
        setSystemPart={setSystemPart}
        systemPart={systemPart}
        chatSearch={chatSearch}
        setChatSearch={setChatSearch}
      />

      <SubMenu
        endpoint={props.endpoint}
        tool={tool}
        setChosenCategory={setChosenCategory}
        setChosenEmployee={setChosenEmployee}
        setChosenHours={setChosenHours}
        setChosenDivision={setChosenDivision}
        id={id}
        setSystemPart={setSystemPart}
        systemPart={systemPart}
        editProfile={editProfile}
        level={level}
        viewingProfile={viewingProfile}
        setViewingProfile={setViewingProfile}
        isUSerProfile={props.isUSerProfile}
        setisUSerProfile={setisUSerProfile}
        list={list}
        setSearch={setSearch}></SubMenu>
    </section>
  );
}
