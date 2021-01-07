import React, { useState } from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ArrowDropDownRoundedIcon from "@material-ui/icons/ArrowDropDownRounded";
import { navigate } from "./modules/mobNavigation";
import {
  GSAP_sortVisibleMobileTasks,
  GSAP_stagCards,
  GSAP_sortInvisibleMobile,
  GSAP_sortInvisibleFilterMobile,
} from "../../jsModules/displayFunctions/gsap";
import PauseRoundedIcon from "@material-ui/icons/PauseRounded";
import CachedRoundedIcon from "@material-ui/icons/CachedRounded";
import CheckRoundedIcon from "@material-ui/icons/CheckRounded";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";

import SearchRoundedIcon from "@material-ui/icons/SearchRounded";

import { searchUsers, closeSearch } from "../../jsModules/displayFunctions/subMenuNavigation";

export default function PlannerNav(props) {
  //console.log("planner || PlannerNav.js | PlannerNav()");
  const [anchorEl, setAnchorEl] = useState(null);
  //const [props.taskList, props.setTaskList] = useState("To do");

  const handleClick = (event) => {
    //console.log("planner || PlannerNav.js | handleClick()");
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (e) => {
    // console.log("planner || PlannerNav.js | handleClose()");
    setAnchorEl(null);
    e.target.textContent === "" ? props.setTaskList(props.taskList) : props.setTaskList(e.target.textContent);
    closeSearch(props.tool);
    props.setChosenCategory("");
    props.setChosenEmployee("");
    GSAP_sortInvisibleMobile();
    GSAP_sortInvisibleFilterMobile();
    GSAP_stagCards(props.list);
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
          <h3>{props.taskList}</h3>
        </div>
        <div>
          <div
            className="search-wrapper"
            onClick={() => {
              searchUsers(props.tool);
              GSAP_sortVisibleMobileTasks();
            }}>
            <SearchRoundedIcon />
          </div>
          <div
            className="close-wrapper hide"
            onClick={() => {
              closeSearch(props.tool);
              props.setChosenCategory("");
              props.setChosenEmployee("");
              GSAP_sortInvisibleMobile();
              GSAP_sortInvisibleFilterMobile();
              GSAP_stagCards(props.list);
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
            navigate("To", "progress1", "Barrier1", "Done1");
            props.setList("To");
          }}>
          <PauseRoundedIcon /> To do
        </MenuItem>
        <MenuItem
          value="In progress"
          onClick={(e) => {
            handleClose(e);
            props.setList("progress1");
            navigate("progress1", "Barrier1", "Done1", "To");
          }}>
          <CachedRoundedIcon /> In progress
        </MenuItem>
        <MenuItem
          value="Barrier"
          onClick={(e) => {
            handleClose(e);
            props.setList("Barrier1");
            navigate("Barrier1", "Done1", "To", "progress1");
          }}>
          <span className="icon">!</span> Barrier
        </MenuItem>
        <MenuItem
          value="Done"
          onClick={(e) => {
            handleClose(e);
            props.setList("Done1");
            navigate("Done1", "To", "progress1", "Barrier1");
          }}>
          <CheckRoundedIcon /> Done
        </MenuItem>
      </Menu>
    </div>
  );
}
