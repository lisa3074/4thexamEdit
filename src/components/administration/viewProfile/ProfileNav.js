import React from "react";
import EditRoundedIcon from "@material-ui/icons/EditRounded";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import { editUser } from "../../../jsModules/displayFunctions/displayEditForm";
import { administration } from "../../../jsModules/displayFunctions/mainMenuNavigation";

export default function ProfileNav(props) {
  return (
    <div className="ProfileNav">
      <div className="float-btn">
        <DeleteRoundedIcon
          onClick={() => {
            props.deleteProfile(props.id);
            administration();
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
