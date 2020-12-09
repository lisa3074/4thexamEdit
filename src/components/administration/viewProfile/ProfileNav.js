import React from "react";
import EditRoundedIcon from "@material-ui/icons/EditRounded";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import { editUser, setUpForm } from "../../../jsModules/displayFunctions/displayEditForm";
import { areYouSure } from "../../../jsModules/displayFunctions/mainMenuNavigation";
import { GSAP_removeOpacity } from "../../../jsModules/displayFunctions/gsap";

export default function ProfileNav(props) {
  console.log("administration/viewProfile || ProfileNav.js | ProfileNav()");

  return (
    <div
      className={
        props.level === "Administrator"
          ? "ProfileNav"
          : props.isUSerProfile === true
          ? "ProfileNav"
          : "ProfileNav hiddenFromUser"
      }>
      <div
        className={
          props.isUSerProfile
            ? "float-btn delete hiddenFromUser"
            : props.level === "Administrator"
            ? "float-btn delete"
            : "float-btn delete hiddenFromUser"
        }>
        <DeleteRoundedIcon
          onClick={() => {
            areYouSure();
            props.setSystemPart("admin");
          }}
        />
      </div>
      <div
        className="float-btn"
        onClick={() => {
          editUser();
          props.editProfile(props.id);
          GSAP_removeOpacity(".UserForm");
          setUpForm();
        }}>
        <EditRoundedIcon />
      </div>
    </div>
  );
}
