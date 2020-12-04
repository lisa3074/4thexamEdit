import React from "react";
import gsap from "gsap";

import { displayProfile, setSubmMenu } from "../../../jsModules/displayFunctions/displayProfile";
import { hideCards, staggeringProfilesTo } from "../../../jsModules/displayFunctions/staggeringCards";

export default function UserCard(props) {
  console.log("administration/UserCard.js || UserCard()");

  staggeringProfilesTo();

  function detectId(e) {
    const userId = e.target.parentNode.dataset.user;
    viewUser(e, userId);
  }
  function viewUser(e, userId) {
    console.log(e, userId);
    displayProfile(userId);
    setSubmMenu();
    props.setId(userId);
    gsap.to(".FilterUsers", { duration: 0.5, top: -135 });
    hideCards();
  }
  const firstSpace = props.name.indexOf(" ");
  const firstName = props.name.substring(0, firstSpace + 1);
  const lastSpace = props.name.lastIndexOf(" ");
  const lastName = props.name.substring(lastSpace);
  return (
    <article
      className="UserCard"
      data-user={props.id}
      onClick={(e) => {
        viewUser(e, props.id);
      }}>
      <img src={props.image} alt="" />
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
      <button
        className="usercard btn primary text-btn"
        onClick={(e) => {
          detectId(e);
          props.setViewingProfile(true);
        }}>
        View
      </button>
    </article>
  );
}
