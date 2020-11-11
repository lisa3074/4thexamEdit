import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
export default function SubMenu() {
  function newUser() {
    console.log("navigation/SubMenu.js || SubMenu() -> newUser() ");

    document.querySelector(".UserForm").classList.remove("hide");
  }
  function openMenu() {
    document.querySelector(".Main").classList.add("hide");
    document.querySelector(".SubMenu").classList.add("hide");
    document.querySelector(".Menu").classList.remove("hide");
  }
  return (
    <nav className="SubMenu hide">
      <MenuIcon className="menuIcon" onClick={openMenu} />
      <div className="float-btn">
        <SearchRoundedIcon />
      </div>
      <PersonAddIcon className="newUserIcon" onClick={newUser} />
    </nav>
  );
}
