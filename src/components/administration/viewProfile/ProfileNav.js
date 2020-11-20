import React from "react";
import EditRoundedIcon from "@material-ui/icons/EditRounded";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import { editUser } from "../../../jsModules/displayFunctions/displayEditForm";

export default function ProfileNav() {
  return (
    <div className="ProfileNav">
      <div className="float-btn">
        <DeleteRoundedIcon />
      </div>
      <div className="float-btn" onClick={editUser}>
        <EditRoundedIcon />
      </div>
    </div>
  );
}
