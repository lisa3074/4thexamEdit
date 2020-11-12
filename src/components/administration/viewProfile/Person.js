import React from "react";
import image from "../../../images/lisa2020.jpg";

export default function Person() {
  return (
    <article className="Person userCard">
      <img src={image} alt={image} />
      <h1 className="profile name">Lisa Søndergaard</h1>
    </article>
  );
}
