import React from "react";
import image from "../../../images/lisa2020.jpg";
import { displayProfile, setSubmMenu } from "../../../jsModules/displayFunctions/displayProfile";
import { whichUser } from "../../../jsModules/displayFunctions/commenceUserLevel";
export default function UserCard(props) {
  function detectId(e) {
    console.log(e.target.parentNode.dataset.user);
    const userId = e.target.parentNode.dataset.user;
    displayProfile(userId);
    console.log("CARD CLICKED");
    whichUser(e, userId, props.signedinUser ? props.signedinUser[0].userLevel : "");
    setSubmMenu();
    props.setId(userId);
  }
  const firstSpace = props.name.indexOf(" ");
  const firstName = props.name.substring(0, firstSpace + 1);
  const lastSpace = props.name.lastIndexOf(" ");
  const lastName = props.name.substring(lastSpace);
  return (
    <article className="UserCard" data-user={props.id}>
      <img src={image} alt="" />
      <div className="info-container">
        <div className="info-wrapper">
          <h2>NAME</h2>
          <h1 className="usercard name">{`${firstName} ${lastName}`}</h1>
        </div>
        <div className="info-wrapper">
          <h2>POSITION</h2>
          <p className="usercard position">{props.position}</p>
        </div>
        <div className="info-wrapper">
          <h2>DIVISION</h2>
          <p className="usercard division">{props.division}</p>
        </div>
      </div>
      <button className="usercard btn primary text-btn" onClick={(e) => detectId(e)}>
        View
      </button>
    </article>
  );
}
