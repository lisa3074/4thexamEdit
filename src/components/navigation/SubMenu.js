import React from "react";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import PersonAddRoundedIcon from "@material-ui/icons/PersonAddRounded";
import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import EditRoundedIcon from "@material-ui/icons/EditRounded";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import AddRoundedIcon from "@material-ui/icons/AddRounded";
import { editUser } from "../../jsModules/displayFunctions/displayEditForm";
import { newUser, openMenu, delegation } from "../../jsModules/displayFunctions/subMenuNavigation";

export default function SubMenu() {
  return (
    <nav className="SubMenu hide">
      <div className="menuIcon" onClick={openMenu}>
        <MenuRoundedIcon />
      </div>
      <div className="menuBack hide" onClick={delegation}>
        <ArrowBackIosRoundedIcon />
      </div>
      <div className="float-btn">
        <div className="menuSearch">
          <SearchRoundedIcon />
        </div>
        <div className="menuEdit hide" onClick={editUser}>
          <EditRoundedIcon />
        </div>
        <div className="menuClose hide">
          <CloseRoundedIcon />
        </div>
      </div>
      <div className="newUserIcon" onClick={newUser}>
        <PersonAddRoundedIcon />
      </div>
      <div className="menuDelete hide">
        <DeleteRoundedIcon />
      </div>
      <div className="menuAddTask hide">
        <AddRoundedIcon />
      </div>
    </nav>
  );
}
