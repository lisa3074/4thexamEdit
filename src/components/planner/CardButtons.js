import Button from "muicss/lib/react/button";
import { popUp } from "./modules/editPopup";
import React, { useState } from "react";

import SubmitButton from "./SubmitButton";
import EditForm from "./Editform";
import { close } from "./modules/editPopup";

export default function EditCard(props) {
  //here we destructure, so we get a variable and a function (clicks = var, setClickes = function)
  function onClickDelete() {
    props.deleteCard(props.id);
  }

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("#ffffff");
  const [assignedTo, setAssigned] = useState("");
  const [list, setList] = useState("To Do");

  const payload = {
    title: title,
    list: list,
    assignedTo: [assignedTo],
    color: color,
    category: category,
    description: description,
    id: props.id,
  };

  function submit(evt) {
    evt.preventDefault();
    console.log(props.header);
    props.editCard(payload, props.id, title, list, assignedTo, color, category, description);
    setTitle("");
    setAssigned("");
    setColor("#ffffff");
    setDescription("");
    setCategory("");
    close("#b" + props.id);
  }

  function whichButton() {
    if (props.name === "delete") {
      onClickDelete();
    } else {
      console.log();
      popUp("#b" + props.id);
      setUpForm();
    }
  }
  function setUpForm() {
    setTitle(props.title);
    setCategory(props.category);
    setDescription(props.description);
    setAssigned(props.assignedTo);
    setColor(props.color);
    setList(props.list);
  }

  return (
    <>
      <Button color="primary" className={props.name + " btn fade_out hide"} onClick={whichButton}>
        {props.name}
      </Button>

      {
        <article className="editContainer hide" id={"b" + props.id}>
          <div className="editWrapper">
            <h2 className="editTask">Edit task</h2>
            <p onClick={() => close("#b" + props.id)}>✕</p>
          </div>
          <div className="flex">
            <div>
              <form className={"form"} onSubmit={submit}>
                <EditForm
                  title={title}
                  setTitle={setTitle}
                  category={category}
                  setCategory={setCategory}
                  description={description}
                  setDescription={setDescription}
                  color={color}
                  setColor={setColor}
                  assignedTo={assignedTo}
                  setAssigned={setAssigned}
                  list={list}
                  setList={setList}
                />
                <SubmitButton
                  name={title.length === 0 || category.length === 0 ? "Not there yet" : "Save"}
                  disabled={title.length === 0 || category.length === 0}
                />
              </form>
            </div>
          </div>
        </article>
      }
    </>
  );
}
