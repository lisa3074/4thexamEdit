import React from "react";
import image from "../../images/lisa2020.jpg";
export default function Profile() {
  return (
    <div className="Profile">
      <img src={image} alt="" />
      <h1>Lisa Søndergaard</h1>
      <h3>Frontend Developer</h3>
      <button className="text-btn btn">Edit profile</button>
    </div>
  );
}
