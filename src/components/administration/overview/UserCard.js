import React from "react";
import { displayProfile, setSubmMenu } from "../../../jsModules/displayFunctions/displayProfile";
import {
  GSAP_stagViewProfile,
  GSAP_sortInvisibleMobile,
  GSAP_addOpacity,
  GSAP_removeOpacity,
  GSAP_sortInvisibleFilterMobile,
} from "../../../jsModules/displayFunctions/gsap";

export default function UserCard(props) {
  //console.log("administration/UserCard.js || UserCard()");
  const firstSpace = props.name.indexOf(" ");
  const firstName = props.name.substring(0, firstSpace + 1);
  const lastSpace = props.name.lastIndexOf(" ");
  const lastName = props.name.substring(lastSpace);

  function detectIdCard(e) {
    const userId = e.target.dataset.user;
    viewUser(e, userId);
    isUserEqualToProfile(userId);
  }
  function viewUser(e, userId) {
    displayProfile(userId);
    setSubmMenu();
    props.setId(userId);
    if (window.innerWidth < 1000) {
      GSAP_sortInvisibleMobile();
      GSAP_sortInvisibleFilterMobile();
    }
    GSAP_addOpacity(".UserCard");
  }

  function isUserEqualToProfile(id) {
    if (localStorage.getItem("signedInUserId") === id) {
      props.setisUSerProfile(true);
    } else {
      props.setisUSerProfile(false);
    }
  }
  const archivedProfiles =
    props.profileStatus === "archived" ? <h1 className="archivedSingleProfiles float-btn">Archived</h1> : <></>;
  return (
    <article
      className="UserCard"
      data-user={props.id}
      onClick={(e) => {
        detectIdCard(e);
        viewUser(e, props.id);
        GSAP_stagViewProfile();
        props.setViewingProfile(true);
        GSAP_removeOpacity(".ProfileNav");
      }}>
      <img src={props.image} alt="" className="profile-img-card" />
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
      {archivedProfiles}
      <button className="usercard btn primary text-btn">View</button>
    </article>
  );
}
