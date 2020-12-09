import React from "react";
import Message from "./Message";
export default function MessageBoard(props) {
  console.log("chat || MessageBoard.js | MessageBoard()");

  const mappedMessages = props.messages
    ? props.messages.map((message) => (
        <Message
          key={message.id}
          {...message}
          id={message.id}
          signedinUser={props.signedinUser}
          users={props.users}
          setEditMessage={props.setEditMessage}
          checked={props.checked}
          setChecked={props.setChecked}
          setSystemPart={props.setSystemPart}
          systemPart={props.systemPart}
        />
      ))
    : [];

  return (
    <article className="MessageBoard">
      <div className="messageList">
        <ul>{mappedMessages}</ul>
      </div>
    </article>
  );
}
