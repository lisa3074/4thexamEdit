import React from "react";
import image from "../../images/lisa2020.jpg";
import { whichUser } from "../../jsModules/displayFunctions/commenceUserLevel";
import { displayProfile } from "../../jsModules/displayFunctions/displayProfile";

export default function Profile(props) {
  const name = props.signedinUser ? props.signedinUser[0].name : "";
  const firstSpace = name.indexOf(" ");
  const firstName = name.substring(0, firstSpace + 1);
  const lastSpace = name.lastIndexOf(" ");
  const lastName = name.substring(lastSpace);

  return (
    <div className="Profile">
      <img src={image} alt="" onClick={() => displayProfile(props.signedinUser ? props.signedinUser[0].id : "")} />
      <h1>{props.signedinUser ? firstName + lastName : ""}</h1>
      <h3>{props.signedinUser ? props.signedinUser[0].position : ""}</h3>
      <button
        className="text-btn btn"
        onClick={(e) => {
          displayProfile(props.signedinUser ? props.signedinUser[0].id : "");
          props.setId(props.signedinUser ? props.signedinUser[0].id : "");
          whichUser(e, props.signedinUser ? props.signedinUser[0].id : "");
        }}>
        Edit profile
      </button>
    </div>
  );
}
