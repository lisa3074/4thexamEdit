import React from "react";
import TextField from "@material-ui/core/TextField";
import SendRoundedIcon from "@material-ui/icons/SendRounded";

export default function NewMessage() {
  console.log("chat || NewMessage.js | NewMessage()");
  return (
    <section className="NewMessage">
      <SendRoundedIcon />
      <TextField id="outlined-textarea" placeholder="Write a message" multiline variant="outlined" rows={4} />
    </section>
  );
}
