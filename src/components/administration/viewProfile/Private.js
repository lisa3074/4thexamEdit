import React from "react";
import { hidePrivateInfo, showPrivateInfo } from "../../../jsModules/displayFunctions/displayProfile";
import GetAppRoundedIcon from "@material-ui/icons/GetAppRounded";
import VisibilityOffRoundedIcon from "@material-ui/icons/VisibilityOffRounded";
import VisibilityRoundedIcon from "@material-ui/icons/VisibilityRounded";

export default function Private() {
  return (
    <article className="Private userCard">
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
        <p className="cpr">130284-3232</p>

        <h2>ACCOUNT NUMBER</h2>
        <p className="account">1234 12345678</p>

        <h2>ADDRESS</h2>
        <p className="address">Rørholmsgade 15, st th,</p>
        <p className="city"> 1352 København K</p>

        <h2>EDUCATION</h2>
        <p className="education">Multimedia Designer</p>

        <h2>CONTRACT</h2>
        <a href="" download>
          <GetAppRoundedIcon />
        </a>
      </div>
    </article>
  );
}
