import { logRoles } from "@testing-library/react";
import React from "react";
import image from "../../images/lisa2020.jpg";
export default function Message(props) {
  return (
    <>
      <article className="Message">
        <div className="line-wrapper">
          <div className="line"></div>
          <h3 className="date">{props.date}</h3>
          <div className="line"></div>
        </div>
        <div className="message-container you" data-user={props.name === "Lisa Søndergaard" ? "me" : "you"}>
          <img src={/* props.img */ image} alt={props.name}></img>
          <div className="message-wrapper">
            <h2 className="name">{props.name}</h2>
            <h2 className="time">{props.time}</h2>
            <p className="message">{props.message}</p>
          </div>
        </div>
      </article>
    </>
  );
}
