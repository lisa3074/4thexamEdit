import React from "react";

export default function Person(props) {
  console.log("administration/viewProfile || Person.js | Person()");
  return (
    <article className="Person userCard">
      <img src={props.image} alt={props.name} />
      <h1 className="profile name">{props.name}</h1>
    </article>
  );
}
