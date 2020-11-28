import React from "react";
import EditRoundedIcon from "@material-ui/icons/EditRounded";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import { editUser } from "../../../jsModules/displayFunctions/displayEditForm";
import { areYouSure } from "../../../jsModules/displayFunctions/mainMenuNavigation";

import DeleteModal from "../overview/DeleteModal";

export default function ProfileNav(props) {
  console.log("administration/viewProfile || ProfileNav.js | ProfileNav()");

  return (
    <div className="ProfileNav admin">
      <div className="float-btn delete">
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
        }}>
        <EditRoundedIcon />
      </div>
    </div>
  );
}
