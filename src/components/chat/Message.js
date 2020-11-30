import React, { useEffect, useState } from "react";
import EditRoundedIcon from "@material-ui/icons/EditRounded";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import CheckRoundedIcon from "@material-ui/icons/CheckRounded";
import { editAMessage } from "../../jsModules/dbData/editData";
import ClearRoundedIcon from "@material-ui/icons/ClearRounded";
import { deleteAMessage } from "../../jsModules/dbData/deleteData";
var dayjs = require("dayjs");
var customParseFormat = require("dayjs/plugin/customParseFormat");
dayjs.extend(customParseFormat);

export default function Message(props) {
  console.log("chat || Message.js | Message()");
  const { signedinUser, users, id } = props;
  console.log(props);

  const [sendingUser, setSendingUser] = useState();
  const [profilePic, setProfilePic] = useState();
  const [editMessage, setEditMessage] = useState({});
  const [editText, setEditText] = useState();
  const [editClicked, setEditClicked] = useState(false);
  const date = dayjs(props.date * 1).format(`dddd, MMM D, YYYY`);
  const time = dayjs(props.date * 1).format(`h:mm A`);
  console.log(new Date(props.date).toString().substring(0, 15));
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

  function submitEdit() {
    editAMessage(editMessage);
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
          <img src={profilePic ? profilePic : "image"} alt={props.name} />

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
                <DeleteRoundedIcon
                  onClick={() => {
                    deleteAMessage(id);
                  }}
                />
                <EditRoundedIcon
                  onClick={() => {
                    setEditClicked(true);
                    setEditMessage({
                      id: id,
                      message: props.message,
                      name: props.name,
                      date: props.date,
                    });
                  }}
                />
              </div>
            </div>
            <h2 className="time">{time}</h2>

            <p className={editClicked ? "message hiddenFromUser" : "message"}>{props.message}</p>
            <div className={editClicked ? "textarea-wrapper" : "textarea-wrapper hiddenFromUser"}>
              <textarea type="text" className="edit-form" value={editMessage.message} onChange={handleText} />
              <div className="btn-wrapper">
                <button
                  className="float-btn"
                  onClick={() => {
                    setEditClicked(false);
                  }}>
                  <ClearRoundedIcon />
                </button>
                <button
                  className="float-btn"
                  onClick={() => {
                    setEditMessage({
                      id: id,
                      message: editText,
                      name: props.name,
                      date: props.date,
                    });
                    setEditClicked(false);
                    submitEdit();
                  }}>
                  <CheckRoundedIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
