import React from "react";
import EditRoundedIcon from "@material-ui/icons/EditRounded";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import ArchiveRoundedIcon from "@material-ui/icons/ArchiveRounded";
import UnarchiveRoundedIcon from "@material-ui/icons/UnarchiveRounded";
import { editUser, setUpForm } from "../../../jsModules/displayFunctions/displayEditForm";
import { areYouSure } from "../../../jsModules/displayFunctions/mainMenuNavigation";
import { GSAP_removeOpacity } from "../../../jsModules/displayFunctions/gsap";
import Tooltip from "@material-ui/core/Tooltip";

export default function ProfileNav(props) {
  //console.log("administration/viewProfile || ProfileNav.js | ProfileNav()");

  const ifActive =
    props.profileStatus === "active" ? (
      <div className={"float-btn archive"}>
        <Tooltip title="Archive profile">
          <ArchiveRoundedIcon
            onClick={() => {
              areYouSure();
              props.editProfileArchive(props.id);
              props.setSystemPart("adminArchive");
            }}
          />
        </Tooltip>
      </div>
    ) : (
      <div className={"float-btn unarchive"}>
        <Tooltip title="Unarchive profile">
          <UnarchiveRoundedIcon
            onClick={() => {
              areYouSure();
              props.editProfileArchive(props.id);
              props.setSystemPart("adminUnArchive");
            }}
          />
        </Tooltip>
      </div>
    );

  //prevent all users from deleting their own profile. It takes another admin.
  const deleteProfile = props.isUSerProfile ? (
    <div></div>
  ) : (
    <>
      {ifActive}
      <div className={"float-btn delete"}>
        <Tooltip title="Delete profile">
          <DeleteRoundedIcon
            onClick={() => {
              areYouSure();
              props.setSystemPart("admin");
            }}
          />
        </Tooltip>
      </div>
    </>
  );
  //Show only possibility to edit profile to administrators or if it is your own profile.
  const navigation =
    props.level === "Administrator" || props.isUSerProfile ? (
      <div className={"ProfileNav"}>
        {deleteProfile}
        <div
          className="float-btn"
          onClick={() => {
            editUser();
            props.editProfile(props.id);
            GSAP_removeOpacity(".UserForm");
            setUpForm();
          }}>
          <Tooltip title="Edit profile">
            <EditRoundedIcon />
          </Tooltip>
        </div>
      </div>
    ) : (
      <div></div>
    );

  return <div>{navigation}</div>;
}
