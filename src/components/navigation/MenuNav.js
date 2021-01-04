import React from "react";
import { BrowserRouter as Switch, Link } from "react-router-dom";
import PeopleIcon from "@material-ui/icons/People";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import LockIcon from "@material-ui/icons/Lock";
import { addTask } from "../planner/modules/mobNavigation";
import AddCircleOutlineRoundedIcon from "@material-ui/icons/AddCircleOutlineRounded";
import { firebaseConfig } from "../../jsModules/firebase/firebase";
import {
  administration,
  newUser,
  planner,
  chat,
  scrollToBottom,
  clearFormAdmin,
} from "../../jsModules/displayFunctions/mainMenuNavigation";

import {
  GSAP_addOpacity,
  GSAP_stagCardsDesktop,
  GSAP_stagProfilesMenuNav,
  GSAP_stagMenuNav,
  GSAP_removeOpacity,
  GSAP_opacity0To1MessageContainer,
} from "../../jsModules/displayFunctions/gsap";
import { setUpForm } from "../../jsModules/displayFunctions/displayEditForm";

export default function MenuNav(props) {
  //console.log("navigation || MenuNav.js | MenuNav()");
  let innerWidth = props.innerWidth;

  function resetSearch() {
    //console.log("navigation || MenuNav.js | resetSearch()");
    props.setChosenCategory("");
    props.setChosenEmployee("");
    props.setChosenDivision("");
    props.setChosenHours("");
    props.setSearch("");
    props.setSortDate(null);
    props.setisUSerProfile(false);
    props.setViewingProfile(false);
  }

  GSAP_stagMenuNav();

  function clearFormPlanner() {
    //console.log("navigation || SubMenu.js | clearFormPlanner()");
    const categorySpan = document.querySelector("#mui-component-select-category > span");
    const category = document.querySelector("#mui-component-select-category");
    const employeeSpan = document.querySelector("#mui-component-select-Employees > span");
    const employee = document.querySelector("#mui-component-select-Employees");
    if (!categorySpan) {
      category.textContent = "All";
    }
    if (!employeeSpan) {
      employee.textContent = "All";
    }
  }

  //if administrator
  const newUserAcces =
    props.level === "Administrator" ? (
      <li
        className="inset"
        onClick={() => {
          newUser();
          GSAP_addOpacity(".panelMargin");
          GSAP_removeOpacity(".UserForm");
          props.setTool("admin");
          props.setSystemPart("admin");
          resetSearch();
          GSAP_addOpacity(".UserCard, .userCard, .ProfileNav, .panelMargin");
          setUpForm();
        }}>
        <PersonAddIcon />
        <h3 className="new-user-link">New user</h3>
      </li>
    ) : (
      <li></li>
    );

  return (
    <div className="MenuNav">
      <ul>
        <Link
          to="/administration"
          onClick={() => {
            administration();
            props.setTool("admin");
            props.setSystemPart("admin");

            resetSearch();
            GSAP_stagProfilesMenuNav();
            GSAP_addOpacity(".panelMargin, .userCard, .ProfileNav");
            clearFormAdmin();
          }}>
          <li>
            <PeopleIcon />
            <h3 className="admin-link">Profiles</h3>
          </li>
        </Link>
        {newUserAcces}
        <li
          className="go-to-planner"
          onClick={() => {
            planner(innerWidth);
            props.setTool("planner");
            props.setSystemPart("planner");
            resetSearch();
            GSAP_stagCardsDesktop();
            GSAP_addOpacity(".UserCard, .userCard, .ProfileNav");
            clearFormPlanner();
          }}>
          <CalendarTodayIcon />
          <h3 className="planner-link">Tasks</h3>
        </li>
        <li
          className="addTask"
          onClick={() => {
            addTask();
            planner(innerWidth);
            props.setSystemPart("planner");
            props.setTool("planner");
            resetSearch();
            GSAP_addOpacity(".UserCard, .userCard, .ProfileNav, .panelMargin");
          }}>
          <AddCircleOutlineRoundedIcon />
          <h3 className="task">New task</h3>
        </li>

        <li
          onClick={() => {
            chat();
            scrollToBottom();
            resetSearch();
            props.setSystemPart("chat");
            GSAP_addOpacity(".UserCard, .panelMargin, .userCard, .ProfileNav");
            GSAP_opacity0To1MessageContainer();
          }}>
          <ChatBubbleIcon />
          <h3 className="chat-link">Chat</h3>
        </li>
        <li>
          <LockIcon />
          <h3
            className="sign-out-link"
            onClick={() => {
              firebaseConfig.auth().signOut();
              //localStorage.clear();
              localStorage.removeItem("email");
              localStorage.removeItem("signedInUser");
              localStorage.removeItem("signedInUserId");
              resetSearch();
              GSAP_addOpacity(".UserCard, .userCard, .ProfileNav, .panelMargin");
            }}>
            Sign out
          </h3>
        </li>
      </ul>
    </div>
  );
}
