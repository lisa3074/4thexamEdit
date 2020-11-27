import React from "react";
import EditRoundedIcon from "@material-ui/icons/EditRounded";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import { editUser } from "../../../jsModules/displayFunctions/displayEditForm";
import { administration, areYouSure, notSure } from "../../../jsModules/displayFunctions/mainMenuNavigation";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

export default function ProfileNav(props) {
  return (
    <div className="ProfileNav admin">
      <div className="float-btn delete">
        <DeleteRoundedIcon
          onClick={() => {
            areYouSure();
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
      <div className="modal-wrapper hide">
        <div className="areYouSure">
          <ClickAwayListener onClickAway={notSure}>
            <div className="modal">
              <div className="modal-text">
                <h1>You are about to delete a profile!</h1>
                <p>If you do this, the user will no longer be able to log in to the system. </p>
                <h3> Are you sure you want to delete this profile?</h3>
              </div>
              <button
                className="delete text-btn"
                onClick={() => {
                  props.deleteProfile(props.id);
                  administration();
                }}>
                Yes, delete it
              </button>
              <button className="cancel text-btn" onClick={notSure}>
                No, go back
              </button>
            </div>
          </ClickAwayListener>
        </div>
      </div>
    </div>
  );
}
