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
import { resetSubmenu } from "../../jsModules/displayFunctions/subMenuNavigation";
import {
  newUser,
  openMenu,
  delegation,
  searchUsers,
  closeSearch,
} from "../../jsModules/displayFunctions/subMenuNavigation";
import { addTask } from "../planner/modules/mobNavigation";

export default function SubMenu(props) {
  const tool = props.tool;
  const endpoint = props.endpoint;
  return (
    <nav className="SubMenu hide">
      <div
        className="menuIcon"
        onClick={() => {
          openMenu();
          tool === "planner" ? resetSubmenu() : openMenu();
        }}>
        <MenuRoundedIcon />
      </div>
      <div
        className="menuBack hide"
        onClick={() => {
          delegation(tool);
        }}>
        <ArrowBackIosRoundedIcon />
      </div>
      <div className="float-btn">
        <div
          className="menuSearch"
          onClick={() => {
            searchUsers(props.tool);
          }}>
          <SearchRoundedIcon />
        </div>
        <div className="menuEdit hide" onClick={editUser}>
          <EditRoundedIcon />
        </div>
        <div
          className="menuClose hide"
          onClick={() => {
            closeSearch(props.tool);
          }}>
          <CloseRoundedIcon />
        </div>
      </div>
      <div className="newUserIcon" onClick={newUser}>
        <PersonAddRoundedIcon />
      </div>
      <div className="menuDelete hide">
        <DeleteRoundedIcon />
      </div>
      <div className="menuAddTask hide" onClick={addTask}>
        <AddRoundedIcon />
      </div>
    </nav>
  );
}
