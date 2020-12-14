import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import SendRoundedIcon from "@material-ui/icons/SendRounded";
import { postMessage } from "../../jsModules/dbData/postData";

export default function NewMessage(props) {
  console.log("chat || NewMessage.js | NewMessage()");

  const { signedinUser, message, setMessage, checked, setChecked } = props;
  function handleMessage(e) {
    setMessage(e.target.value);
  }
  function submitMessage(e) {
    e.preventDefault();
    if (message) {
      const user = signedinUser ? signedinUser[0].name : "unknown";
      postMessage(message, user);
      setMessage("");
      props.setSortDate();
    } else {
      document.querySelector(".NewMessage textarea").style.color = "var(--danger)";
      setTimeout(() => {
        document.querySelector(".NewMessage textarea").style.color = "var(--dark-text)";
      }, 1500);
    }
  }

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  function doNothing() {
    console.log("do nothing");
  }

  function pasteIntoInput(el, text) {
    el.focus();
    if (typeof el.selectionStart == "number" && typeof el.selectionEnd == "number") {
      var val = el.value;
      var selStart = el.selectionStart;
      el.value = val.slice(0, selStart) + text + val.slice(el.selectionEnd);
      el.selectionEnd = el.selectionStart = selStart + text.length;
    } else if (typeof document.selection != "undefined") {
      var textRange = document.selection.createRange();
      textRange.text = text;
      textRange.collapse(false);
      textRange.select();
    }
  }
  function handleOnKeyDown(e) {
    if (message) {
      if (e.keyCode === 13) {
        submitMessage(e);
      }
    } else if (e.keyCode === 13) {
      e.preventDefault();
    }
  }

  return (
    <form
      className="NewMessage"
      onSubmit={(e) => {
        checked ? submitMessage(e) : doNothing();
      }}
      onKeyDown={(e) => {
        checked ? handleOnKeyDown(e) : doNothing();
      }}>
      <button
        className="sendMessage"
        type={checked ? "submit" : ""}
        onClick={(e) => {
          checked ? doNothing() : submitMessage(e);
        }}>
        <SendRoundedIcon />
      </button>

      <p className="checkbox-wrapper">
        <input id="check" type="checkbox" className="checked" onClick={handleChange} />{" "}
        <label htmlFor="check">Press "enter" to send</label>
      </p>
      <TextField
        id="outlined-textarea"
        placeholder="Write a message"
        multiline
        variant="outlined"
        rows={4}
        value={message}
        onChange={handleMessage}
      />
    </form>
  );
}
