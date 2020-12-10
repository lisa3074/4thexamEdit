import React from "react";
import EditRoundedIcon from "@material-ui/icons/EditRounded";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import { editUser, setUpForm } from "../../../jsModules/displayFunctions/displayEditForm";
import { areYouSure } from "../../../jsModules/displayFunctions/mainMenuNavigation";
import { GSAP_removeOpacity } from "../../../jsModules/displayFunctions/gsap";

export default function ProfileNav(props) {
  console.log("administration/viewProfile || ProfileNav.js | ProfileNav()");

  //prevent all users from deleting their own profile. It takes another admin.
  const deleteProfile = props.isUSerProfile ? (
    <div></div>
  ) : (
    <div className={"float-btn delete"}>
      <DeleteRoundedIcon
        onClick={() => {
          areYouSure();
          props.setSystemPart("admin");
        }}
      />
    </div>
  );
  //Show only to administrators or if it is your own profile.
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
          <EditRoundedIcon />
        </div>
      </div>
    ) : (
      <div></div>
    );

  return <div>{navigation}</div>;
}
