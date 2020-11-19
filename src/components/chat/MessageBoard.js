import React from "react";
import Message from "./Message";
export default function MessageBoard(props) {
  const mappedMessages = props.messages.map((message) => <Message key={message.id} {...message} />);

  return (
    <article className="MessageBoard">
      <div className="messageList">
        <ul>{mappedMessages}</ul>
      </div>
    </article>
  );
}
