import React from "react";
import EditRoundedIcon from "@material-ui/icons/EditRounded";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import { editUser } from "../../../jsModules/displayFunctions/displayEditForm";
import { areYouSure } from "../../../jsModules/displayFunctions/mainMenuNavigation";
import { gsap } from "gsap";

import DeleteModal from "../overview/DeleteModal";

export default function ProfileNav(props) {
  console.log("administration/viewProfile || ProfileNav.js | ProfileNav()");

  return (
    <div
      className={
        props.level === "Administrator"
          ? "ProfileNav"
          : props.isUSerProfile
          ? "ProfileNav"
          : "ProfileNav hiddenFromUser"
      }>
      <div className={props.level === "Administrator" ? "float-btn delete" : "float-btn delete hiddenFromUser"}>
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
          gsap.to(".UserForm", { duration: 0.5, autoAlpha: 1 });
        }}>
        <EditRoundedIcon />
      </div>
    </div>
  );
}
