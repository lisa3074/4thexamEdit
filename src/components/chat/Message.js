import { logRoles } from "@testing-library/react";
import React from "react";
import image from "../../images/lisa2020.jpg";
export default function Message(props) {
  console.log(props);
  return (
    <>
      <article className="Message">
        <div className="message-container you" data-user={props.name === "Lisa Søndergaard" ? "me" : "you"}>
          <img src={/* props.img */ image} alt={props.name}></img>
          <div className="message-wrapper">
            <h2 className="name">{props.name}</h2>
            <h2 className="time">{props.time}</h2>
            <p className="message">{props.message}</p>
          </div>
        </div>
      </article>
      {/*   <article className="Message">
        <div className="message-container me" data-user="me">
          <img src={image} alt="Lisa"></img>
          <div className="message-wrapper">
            <h2 className="name">Lisa Søndergaard</h2>
            <h2 className="time">02.53 PM</h2>
            <p className="message">
              Date / Time pickers Date pickers and Time pickers provide a simple way to select a single value from a
              pre-determined set. ads via Carbon Finding it tedious to set up databases for Hackathon projects? ads via
              Carbon On mobile, pickers are best suited for display in confirmation dialog. For inline display, such as
              on a form, consider using compact controls such as segmented dropdown buttons.
            </p>
          </div>
        </div>
      </article> */}
    </>
  );
}
