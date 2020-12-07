import React from "react";
import { hidePrivateInfo, showPrivateInfo } from "../../../jsModules/displayFunctions/displayProfile";
import GetAppRoundedIcon from "@material-ui/icons/GetAppRounded";
import VisibilityOffRoundedIcon from "@material-ui/icons/VisibilityOffRounded";
import VisibilityRoundedIcon from "@material-ui/icons/VisibilityRounded";

export default function Private(props) {
  console.log("administration/viewProfile || Private.js | Private()");

  return (
    <article
      className={
        props.level === "Administrator"
          ? "Private userCard"
          : props.isUSerProfile
          ? "Private userCard"
          : "Private usercard hiddenFromUser"
      }>
      <div className="private-wrapper">
        <div className="heading heading-wrapper">
          <div className="visibilityOff" onClick={hidePrivateInfo}>
            <VisibilityOffRoundedIcon />
          </div>
          <div className="visibilityOn hide" onClick={showPrivateInfo}>
            <VisibilityRoundedIcon />
          </div>

          <h2 className="heading">PRIVATE</h2>
        </div>
        <div className="info-wrapper">
          <h2>CPR</h2>
          <p className="cpr">{props.cpr}</p>

          <h2>ACCOUNT NUMBER</h2>
          <p className="account">{props.accountNumber}</p>

          <h2>ADDRESS</h2>
          <p className="address">{props.streetAndNumber}</p>
          <p className="city">
            {" "}
            {props.postalCode} {props.city}
          </p>

          <h2>EDUCATION</h2>
          <p className="education">{props.education}</p>

          <h2>CONTRACT</h2>
          <a href={props.contract} target="_blank" download>
            <GetAppRoundedIcon />
          </a>
        </div>
      </div>
    </article>
  );
}
