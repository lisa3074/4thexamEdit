import React from "react";
import image from "../../../images/lisa2020.jpg";
import { displayProfile } from "../../../jsModules/displayFunctions/displayProfile";
export default function UserCard() {
  return (
    <article className="UserCard">
      <img src={image} alt="" />
      <div className="info-container">
        <div className="info-wrapper">
          <h2>NAME</h2>
          <h1 className="usercard name">Lisa Søndergaard</h1>
        </div>
        <div className="info-wrapper">
          <h2>POSITION</h2>
          <p className="usercard position">Frontend developer</p>
        </div>
        <div className="info-wrapper">
          <h2>DIVISION</h2>
          <p className="usercard division">Development</p>
        </div>
      </div>
      <button className="usercard btn primary text-btn" onClick={displayProfile}>
        View
      </button>
    </article>
  );
}
