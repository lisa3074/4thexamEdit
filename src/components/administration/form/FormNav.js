import React from "react";
import ArrowForwardRoundedIcon from "@material-ui/icons/ArrowForwardRounded";
import ClearRoundedIcon from "@material-ui/icons/ClearRounded";
import CheckRoundedIcon from "@material-ui/icons/CheckRounded";
import ArrowBackRoundedIcon from "@material-ui/icons/ArrowBackRounded";
import { forwards } from "../../../jsModules/displayFunctions/formNavigation";
import { backwards } from "../../../jsModules/displayFunctions/formNavigation";

export default function FormNav(props) {
  console.log("administration/form || FormNav.js | FormNav()");
  return (
    <nav className="FormNav">
      <div
        className="float-btn"
        onClick={() => {
          props.clear();
        }}>
        <ClearRoundedIcon />
      </div>
      <div className="float-btn forward" onClick={forwards}>
        <ArrowForwardRoundedIcon />
      </div>
      <div className="float-btn back hide" onClick={backwards}>
        <ArrowBackRoundedIcon />
      </div>
      <button
        type="submit"
        className="float-btn check hide"
        onClick={(e) => {
          props.submit(e);
        }}>
        <CheckRoundedIcon />
      </button>
    </nav>
  );
}
