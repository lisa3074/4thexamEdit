import React from "react";
import image from "../../../images/lisa2020.jpg";
export default function UserCard() {
  return (
    <>
      <img src={image} alt="" />
      <h1 className="usercard name">Lisa Søndergaard</h1>
      <h2>POSITION</h2>
      <p className="usercard position">Frontend developer</p>
      <h2>DIVISION</h2>
      <p className="usercard division">Development</p>
      <button className="usercard btn primary text-btn">View</button>
    </>
  );
}
