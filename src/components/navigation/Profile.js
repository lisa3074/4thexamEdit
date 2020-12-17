import React, { useState } from "react";
import image from "../../images/placeholder.png";
import { displayProfile } from "../../jsModules/displayFunctions/displayProfile";
import { GSAP_stagViewProfile, GSAP_removeOpacity } from "../../jsModules/displayFunctions/gsap";
import PersonRoundedIcon from "@material-ui/icons/PersonRounded";
import SettingsRoundedIcon from "@material-ui/icons/SettingsRounded";
import PaletteRoundedIcon from "@material-ui/icons/PaletteRounded";
import Tooltip from "@material-ui/core/Tooltip";

import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

export default function Profile(props) {
  //console.log("navigation || Profile.js | Profile()");
  const [anchorEl, setAnchorEl] = useState(null);

  const name = props.signedinUser ? props.signedinUser[0].name : "";
  const firstSpace = name.indexOf(" ");
  const firstName = name.substring(0, firstSpace + 1);
  const lastSpace = name.lastIndexOf(" ");
  const lastName = name.substring(lastSpace);

  const picture = props.signedinUser ? props.signedinUser[0].image : image;

  const handleClose = (e, theme) => {
    //console.log("planner || PlannerNav.js | handleClose()");
    setAnchorEl(null);
    if (theme === "regular" || theme === "dark" || theme === "orange") {
      document.querySelector("body").setAttribute("data-state", theme);
      localStorage.setItem("theme", theme);
    }
  };

  const handleClick = (event) => {
    //console.log("planner || PlannerNav.js | handleClick()");
    setAnchorEl(event.currentTarget);
  };
  const move = {
    top: "44px",
    left: "-16px",
    width: "100vw",
  };
  return (
    <div className="Profile">
      <img
        src={picture}
        alt=""
        onClick={() => {
          displayProfile(props.signedinUser ? props.signedinUser[0].id : "");
          props.setId(props.signedinUser ? props.signedinUser[0].id : "");
          GSAP_stagViewProfile();
          GSAP_removeOpacity(".ProfileNav");
          props.setisUSerProfile(true);
        }}
      />
      <h1>{props.signedinUser ? firstName + lastName : ""}</h1>
      <h3>{props.signedinUser ? props.signedinUser[0].position : ""}</h3>
      <div className="grid-wrapper">
        <button
          className="text-btn btn"
          onClick={(e) => {
            displayProfile(props.signedinUser ? props.signedinUser[0].id : "");
            props.setId(props.signedinUser ? props.signedinUser[0].id : "");
            GSAP_stagViewProfile();
            GSAP_removeOpacity(".ProfileNav");
            props.setisUSerProfile(true);
          }}>
          <PersonRoundedIcon /> Profile
        </button>
        <Tooltip title="Change color scheme to one that suits you">
          <div className="svg-wrapper" onClick={handleClick}>
            <PaletteRoundedIcon />
          </div>
        </Tooltip>
      </div>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        style={move}>
        <MenuItem
          value="Regular theme"
          onClick={(e) => {
            handleClose(e, "regular");
          }}>
          Regular theme
        </MenuItem>
        <MenuItem
          value="Orange theme"
          onClick={(e) => {
            handleClose(e, "orange");
          }}>
          Orange theme
        </MenuItem>
        <MenuItem
          value="Dark theme"
          onClick={(e) => {
            handleClose(e, "dark");
          }}>
          Dark theme
        </MenuItem>
      </Menu>
    </div>
  );
}
