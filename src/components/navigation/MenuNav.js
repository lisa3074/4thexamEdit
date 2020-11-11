import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PeopleIcon from "@material-ui/icons/People";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import LockIcon from "@material-ui/icons/Lock";
import { firebaseConfig } from "../../jsModules/firebase/firebase";
export default function MenuNav() {
  function adminClick() {
    document.querySelector(".Main").classList.remove("hide");
    document.querySelector(".SubMenu").classList.remove("hide");
    document.querySelector(".Menu").classList.add("hide");
  }
  return (
    <div className="MenuNav">
      <ul>
        <Link to="/administration" onClick={adminClick}>
          <li>
            <PeopleIcon />
            <h3 className="admin-link">Administration</h3>
          </li>
        </Link>
        <li>
          <PersonAddIcon />
          <h3 className="new-user-link">New user</h3>
        </li>
        <Link to="/planner">
          <li>
            <CalendarTodayIcon />
            <h3 className="planner-link">Planner</h3>
          </li>
        </Link>
        <li>
          <ChatBubbleIcon />
          <h3 className="chat-link">Chat</h3>
        </li>
        <li>
          <LockIcon />
          <h3 className="sign-out-link" onClick={() => firebaseConfig.auth().signOut()}>
            Sign out
          </h3>
        </li>
      </ul>
    </div>
  );
}
