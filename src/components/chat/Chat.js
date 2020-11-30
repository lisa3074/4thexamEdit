import React, { useEffect, useState } from "react";
import ChatNav from "./ChatNav";
import MessageBoard from "./MessageBoard";
import NewMessage from "./NewMessage";

export default function Chat(props) {
  console.log("chat || Chat.js | Chat()");

  const [message, setMessage] = useState();
  /*  const [sortDate, setSortDate] = useState(new Date()); */
  const { signedinUser, setSortDate, sortDate } = props;

  console.log(signedinUser);
  console.log(setSortDate);

  return (
    <main className="Chat hide">
      <div className="chat-wrapper">
        <ChatNav setSortDate={setSortDate} sortDate={sortDate} />
        <MessageBoard
          users={props.users}
          signedinUser={signedinUser}
          messages={
            props.messages && sortDate
              ? props.messages.filter(
                  (message) =>
                    new Date(message.date).toString().substring(0, 15) === sortDate.toString().substring(0, 15)
                )
              : props.messages
          }
        />
        <NewMessage signedinUser={signedinUser} message={message} setMessage={setMessage} />
      </div>
    </main>
  );
}
