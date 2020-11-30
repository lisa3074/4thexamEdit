import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import SendRoundedIcon from "@material-ui/icons/SendRounded";
import { postMessage } from "../../jsModules/dbData/postData";
import { editAMessage } from "../../jsModules/dbData/editData";

export default function NewMessage(props) {
  console.log("chat || NewMessage.js | NewMessage()");

  const { signedinUser, message, setMessage } = props;
  function handleMessage(e) {
    setMessage(e.target.value);
  }
  function submitMessage() {
    console.log("submitted");
    const user = signedinUser ? signedinUser[0].name : "unknown";
    postMessage(message, user);
    setMessage("");
  }
  return (
    <section className="NewMessage">
      <div className="sendMessage" onClick={submitMessage}>
        <SendRoundedIcon />
      </div>
      <TextField
        id="outlined-textarea"
        placeholder="Write a message"
        multiline
        variant="outlined"
        rows={4}
        value={message}
        onChange={handleMessage}
      />
    </section>
  );
}
