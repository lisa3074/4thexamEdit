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
import {
  newUser,
  openMenu,
  delegation,
  searchUsers,
  closeSearch,
} from "../../jsModules/displayFunctions/subMenuNavigation";

export default function SubMenu(props) {
  const endpoint = props.endpoint;
  return (
    <nav className="SubMenu hide">
      <div
        className="menuIcon"
        onClick={() => {
          openMenu();
        }}>
        <MenuRoundedIcon />
      </div>
      <div className="menuBack hide" onClick={delegation}>
        <ArrowBackIosRoundedIcon />
      </div>
      <div className="float-btn">
        <div className="menuSearch" onClick={searchUsers}>
          <SearchRoundedIcon />
        </div>
        <div className="menuEdit hide" onClick={editUser}>
          <EditRoundedIcon />
        </div>
        <div className="menuClose hide" onClick={closeSearch}>
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
