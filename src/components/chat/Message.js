import { logRoles } from "@testing-library/react";
import React, { useEffect, useState } from "react";
//import image from "../../images/placeholder.png";
export default function Message(props) {
  console.log("chat || Message.js | Message()");
  const { signedinUser, users } = props;

  const [sendingUser, setSendingUser] = useState();
  const [profilePic, setProfilePic] = useState();

  useEffect(() => {
    setSendingUser(users.filter((user) => user.name === props.name));
  }, [users]);

  useEffect(() => {
    sendingUser
      ? sendingUser[0]
        ? setProfilePic(sendingUser[0].image)
        : console.log("no sending user yet")
      : console.log("no sending user yet");
  }, [sendingUser]);

  console.log(sendingUser);
  console.log(signedinUser);
  console.log(profilePic);

  /* (
      <div key={user.id}>
        <img src={user.image} alt={user.name} />
      </div>
    ) : (
      <div key={props.id}>
        <img src={image} alt={props.name} />
      </div>
    )
  ); */
  return (
    <>
      <article className="Message">
        <div className="line-wrapper">
          <div className="line"></div>
          <h3 className="date">{props.date}</h3>
          <div className="line"></div>
        </div>
        <div
          className="message-container"
          data-user={signedinUser ? (props.name === signedinUser[0].name ? "me" : "you") : "you"}>
          <img src={profilePic ? profilePic : "image"} alt={props.name} />

          <div className="message-wrapper">
            <h2 className="name">{props.name}</h2>
            <h2 className="time">{props.date}</h2>
            <p className="message">{props.message}</p>
          </div>
        </div>
      </article>
    </>
  );
}
