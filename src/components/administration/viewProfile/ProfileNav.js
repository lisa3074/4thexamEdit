import React from "react";
import EditRoundedIcon from "@material-ui/icons/EditRounded";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";

export default function ProfileNav() {
  return (
    <div className="ProfileNav">
      <div className="float-btn">
        <DeleteRoundedIcon />
      </div>
      <div className="float-btn">
        <EditRoundedIcon />
      </div>
    </div>
  );
}
