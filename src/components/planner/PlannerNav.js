import React, { useState } from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ArrowDropDownRoundedIcon from "@material-ui/icons/ArrowDropDownRounded";
import { done, doing, todo, barrier } from "./modules/mobNavigation";
import PauseRoundedIcon from "@material-ui/icons/PauseRounded";
import CachedRoundedIcon from "@material-ui/icons/CachedRounded";
import CheckRoundedIcon from "@material-ui/icons/CheckRounded";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";

import SearchRoundedIcon from "@material-ui/icons/SearchRounded";

import { searchUsers, closeSearch } from "../../jsModules/displayFunctions/subMenuNavigation";

export default function PlannerNav(props) {
  console.log("planner || PlannerNav.js | PlannerNav()");
  const [anchorEl, setAnchorEl] = useState(null);
  const [list, setList] = useState("To do");

  const handleClick = (event) => {
    console.log("planner || PlannerNav.js | handleClick()");
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (e) => {
    console.log("planner || PlannerNav.js | handleClose()");
    setAnchorEl(null);
    e.target.textContent === "" ? setList(list) : setList(e.target.textContent);
  };
  const move = {
    top: "44px",
    left: "-16px",
    width: "100vw",
  };

  return (
    <div className="dropdown-wrapper">
      <div
        className="PlannerNav"
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary">
        <div className="list-wrapper" onClick={handleClick}>
          <ArrowDropDownRoundedIcon />
          <h3>{list}</h3>
        </div>
        <div>
          <div
            className="close-wrapper"
            onClick={() => {
              searchUsers(props.tool);
            }}>
            <SearchRoundedIcon />
          </div>
          <div
            className="search-wrapper hide"
            onClick={() => {
              closeSearch(props.tool);
              props.setChosenCategory("");
              props.setChosenEmployee("");
            }}>
            <CloseRoundedIcon />
          </div>
        </div>
      </div>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        style={move}>
        <MenuItem
          value="To do"
          onClick={(e) => {
            handleClose(e);
            todo();
          }}>
          <PauseRoundedIcon /> To do
        </MenuItem>
        <MenuItem
          value="In progress"
          onClick={(e) => {
            handleClose(e);
            doing();
          }}>
          <CachedRoundedIcon /> In progress
        </MenuItem>
        <MenuItem
          value="Barrier"
          onClick={(e) => {
            handleClose(e);
            barrier();
          }}>
          <span className="icon">!</span> Barrier
        </MenuItem>
        <MenuItem
          value="Done"
          onClick={(e) => {
            handleClose(e);
            done();
          }}>
          <CheckRoundedIcon /> Done
        </MenuItem>
      </Menu>
    </div>
  );
}
