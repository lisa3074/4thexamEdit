import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PeopleIcon from "@material-ui/icons/People";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import LockIcon from "@material-ui/icons/Lock";
import { firebaseConfig } from "../../jsModules/firebase/firebase";
import { administration, newUser, planner } from "../../jsModules/displayFunctions/mainMenuNavigation";
export default function MenuNav(props) {
  let innerWidth = props.innerWidth;
  return (
    <div className="MenuNav">
      <ul>
        <Link
          to="/administration"
          onClick={() => {
            administration(innerWidth);
            props.setEndpoint("administration");
          }}>
          <li>
            <PeopleIcon />
            <h3 className="admin-link">Administration</h3>
          </li>
        </Link>

        <Link to="/administration" onClick={newUser}>
          <li>
            <PersonAddIcon />
            <h3 className="new-user-link">New user</h3>
          </li>
        </Link>

        <Link
          to="/planner"
          onClick={() => {
            planner(innerWidth);

            props.setEndpoint("planner");
          }}>
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
