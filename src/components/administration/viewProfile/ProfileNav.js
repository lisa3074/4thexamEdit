import React from "react";
import EditRoundedIcon from "@material-ui/icons/EditRounded";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import { editUser } from "../../../jsModules/displayFunctions/displayEditForm";
import { administration, areYouSure, notSure } from "../../../jsModules/displayFunctions/mainMenuNavigation";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import { Delete } from "@material-ui/icons";
import DeleteModal from "../overview/DeleteModal";

export default function ProfileNav(props) {
  console.log(props);
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

      <DeleteModal deleteProfile={props.deleteProfile} id={props.id} systemPart={props.systemPart} />
    </div>
  );
}
