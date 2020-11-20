import React from "react";
import image from "../../../images/lisa2020.jpg";

export default function Person(props) {
  return (
    <article className="Person userCard">
      <img src={image} alt={image} />
      <h1 className="profile name">{props.name}</h1>
    </article>
  );
}
