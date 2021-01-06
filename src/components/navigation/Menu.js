import React from "react";
import MenuNav from "./MenuNav";
import Profile from "./Profile";

import {
  GSAP_removeOpacityMenuProfile,
  GSAP_stagProfilesMenuNav,
  GSAP_addOpacity,
} from "../../jsModules/displayFunctions/gsap";
import { administration, clearFormAdmin } from "../../jsModules/displayFunctions/mainMenuNavigation";
export default function Menu(props) {
  //console.log("navigation || Menu.js | Menu()");
  GSAP_removeOpacityMenuProfile();

  function resetSearch() {
    //console.log("navigation || Menu.js | resetSearch()");
    props.setChosenCategory("");
    props.setChosenEmployee("");
    props.setChosenDivision("");
    props.setChosenHours("");
    props.setSearch("");
    props.setisUSerProfile(false);
    props.setViewingProfile(false);
  }

  return (
    <>
      <nav className={window.innerWidth < 1000 ? "Menu" : "Menu MenuDesktop"}>
        <div
          className="logo-name"
          onClick={() => {
            administration();
            props.setTool("admin");
            resetSearch();
            GSAP_stagProfilesMenuNav();
            GSAP_addOpacity(".panelMargin, .userCard, .ProfileNav");
            clearFormAdmin();
          }}>
          <h1>SkatteGuiden</h1>
        </div>
        <Profile
          setTool={props.setTool}
          signedinUser={props.signedinUser}
          setId={props.setId}
          setSystemPart={props.setSystemPart}
          setViewingProfile={props.setViewingProfile}
          setisUSerProfile={props.setisUSerProfile}></Profile>
        <MenuNav
          setProfileStatus={props.setProfileStatus}
          setEndpoint={props.setEndpoint}
          setTool={props.setTool}
          level={props.level}
          setisUSerProfile={props.setisUSerProfile}
          setViewingProfile={props.setViewingProfile}
          setChosenCategory={props.setChosenCategory}
          setChosenEmployee={props.setChosenEmployee}
          setChosenDivision={props.setChosenDivision}
          setChosenHours={props.setChosenHours}
          setSearch={props.setSearch}
          setSortDate={props.setSortDate}
          setSystemPart={props.setSystemPart}></MenuNav>
      </nav>
    </>
  );
}
