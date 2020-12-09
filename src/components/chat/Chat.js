import React, { useEffect, useState } from "react";
import ChatNav from "./ChatNav";
import MessageBoard from "./MessageBoard";
import NewMessage from "./NewMessage";

export default function Chat(props) {
  console.log("chat || Chat.js | Chat()");

  const [message, setMessage] = useState();
  const [checked, setChecked] = useState(false);
  const [search, setSearch] = useState("");
  const { signedinUser, setSortDate, sortDate } = props;

  console.log(signedinUser);
  console.log(setSortDate);

  return (
    <main className="Chat hide">
      <div className="chat-wrapper">
        <ChatNav
          setSortDate={setSortDate}
          sortDate={sortDate}
          setChatSearch={props.setChatSearch}
          chatSearch={props.chatSearch}
        />
        <MessageBoard
          users={props.users}
          signedinUser={signedinUser}
          checked={checked}
          setSystemPart={props.setSystemPart}
          systemPart={props.systemPart}
          setChecked={setChecked}
          messageToDelete={props.messageToDelete}
          setMessageToDelete={props.setMessageToDelete}
          messages={
            props.messages && sortDate && props.chatSearch !== (undefined && "")
              ? props.messages.filter(
                  (message) =>
                    new Date(message.date).toString().substring(0, 15) === sortDate.toString().substring(0, 15) &&
                    (message.message.toLowerCase().includes(props.chatSearch.toLowerCase()) ||
                      message.name.toLowerCase().includes(props.chatSearch.toLowerCase()))
                )
              : props.messages && sortDate
              ? props.messages.filter(
                  (message) =>
                    new Date(message.date).toString().substring(0, 15) === sortDate.toString().substring(0, 15)
                )
              : props.messages && props.chatSearch !== (undefined && "")
              ? props.messages.filter(
                  (message) =>
                    message.message.toLowerCase().includes(props.chatSearch.toLowerCase()) ||
                    message.name.toLowerCase().includes(props.chatSearch.toLowerCase())
                )
              : props.messages
          }
        />
        <NewMessage
          signedinUser={signedinUser}
          message={message}
          setMessage={setMessage}
          setSortDate={setSortDate}
          checked={checked}
          setChecked={setChecked}
        />
      </div>
    </main>
  );
}
