import React, { useEffect, useState } from "react";
import EditRoundedIcon from "@material-ui/icons/EditRounded";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import CheckRoundedIcon from "@material-ui/icons/CheckRounded";
import { editAMessage } from "../../jsModules/dbData/editData";
import ClearRoundedIcon from "@material-ui/icons/ClearRounded";
import { deleteAMessage } from "../../jsModules/dbData/deleteData";
import DeleteModal from "../administration/overview/DeleteModal";
import { areYouSure } from "../../jsModules/displayFunctions/mainMenuNavigation";
var dayjs = require("dayjs");
var customParseFormat = require("dayjs/plugin/customParseFormat");
dayjs.extend(customParseFormat);

export default function Message(props) {
  console.log("chat || Message.js | Message()");
  const { signedinUser, users, id, checked, setMessageToDelete, messageToDelete } = props;
  const [sendingUser, setSendingUser] = useState();
  const [profilePic, setProfilePic] = useState();
  const [editMessage, setEditMessage] = useState({});
  const [editText, setEditText] = useState();
  const [editClicked, setEditClicked] = useState(false);
  const date = dayjs(props.date * 1).format(`dddd, MMM D, YYYY`);
  const time = dayjs(props.date * 1).format(`h:mm A`);

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
  function handleText(e) {
    setEditText(e.target.value);
    setEditMessage({ id: id, message: e.target.value, name: props.name, date: props.date });
  }

  function submitEdit(e) {
    e.preventDefault();
    editAMessage(editMessage);
  }

  function submitIfChecked(e) {
    e.preventDefault();
    setEditMessage({
      id: id,
      message: editText,
      name: props.name,
      date: props.date,
    });
    setEditClicked(false);
    submitEdit(e);
  }

  function doNothing() {
    console.log("do nothing");
  }
  function handleOnKeyDown(e) {
    if (e.keyCode === 13) {
      submitIfChecked(e);
    }
  }
  function scrollIntoView(e) {
    setTimeout(() => {
      e.target.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 100);
  }

  return (
    <>
      <article className="Message">
        <div className="line-wrapper">
          <div className="line"></div>
          <h3 className="date">{date}</h3>
          <div className="line"></div>
        </div>

        <div
          className="message-container"
          data-user={signedinUser ? (props.name === signedinUser[0].name ? "me" : "you") : "you"}>
          <img
            src={
              profilePic
                ? profilePic
                : "https://firebasestorage.googleapis.com/v0/b/mmdfinalexam.appspot.com/o/profile_pictures%2Fplaceholder.png?alt=media&token=c06d8e7a-6812-45d0-bff1-af790d20f5b8"
            }
            alt={props.name}
          />

          <div className="message-wrapper">
            <div className="edit-wrapper">
              <h2 className="name">{props.name}</h2>
              <div
                className={
                  signedinUser
                    ? props.name === signedinUser[0].name
                      ? "deleteMessage"
                      : "hiddenFromUser"
                    : "hiddenFromUser"
                }>
                <div
                  onClick={(e) => {
                    areYouSure();
                    props.setSystemPart("chat");
                    setMessageToDelete(id);
                  }}>
                  <DeleteRoundedIcon />
                </div>
                <div
                  onClick={(e) => {
                    setEditClicked(true);
                    setEditMessage({
                      id: id,
                      message: props.message,
                      name: props.name,
                      date: props.date,
                    });
                    scrollIntoView(e);
                  }}>
                  <EditRoundedIcon />
                </div>
                <DeleteModal messageToDelete={messageToDelete} systemPart={props.systemPart} />
              </div>
            </div>
            <h2 className="time">{time}</h2>

            <p className={editClicked ? "message hiddenFromUser" : "message"}>{props.message}</p>
            <form
              className={editClicked ? "textarea-wrapper" : "textarea-wrapper hiddenFromUser"}
              onSubmit={(e) => {
                checked ? submitIfChecked(e) : doNothing();
              }}
              onKeyDown={(e) => {
                checked ? handleOnKeyDown(e) : doNothing();
              }}>
              <textarea type="text" className="edit-form" value={editMessage.message} rows="5" onChange={handleText} />
              <div className="btn-wrapper">
                <button
                  type=""
                  className="float-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    setEditClicked(false);
                  }}>
                  <ClearRoundedIcon />
                </button>
                <button
                  type={checked ? "submit" : ""}
                  className="float-btn"
                  onClick={(e) => {
                    checked ? doNothing() : e.preventDefault();
                    setEditMessage({
                      id: id,
                      message: editText,
                      name: props.name,
                      date: props.date,
                    });
                    setEditClicked(false);
                    submitEdit(e);
                  }}>
                  <CheckRoundedIcon />
                </button>
              </div>
            </form>
          </div>
        </div>
      </article>
    </>
  );
}
