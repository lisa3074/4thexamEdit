import Button from "muicss/lib/react/button";
import { popUp } from "./modules/editPopup";
import React, { useState } from "react";
import Input from "muicss/lib/react/input";
import Textarea from "muicss/lib/react/textarea";
import Option from "muicss/lib/react/option";
import Select from "muicss/lib/react/select";
import styles from "./Form.module.css";
import SubmitButton from "./SubmitButton";
import { close } from "./modules/editPopup";
import { CirclePicker } from "react-color";

export default function MyButton(props) {
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

  const titleChanged = (e) => {
    setTitle(e.target.value);
    console.log(title);
    console.log(props.id);
  };

  const catChanged = (e) => {
    setCategory(e.target.value);
    console.log(e.target.value);
  };
  const descriptionChanged = (e) => {
    setDescription(e.target.value);
    console.log(e.target.value);
  };
  const assignedChanged = (e) => {
    setAssigned(e.target.value);
    console.log(e.target.value);
  };
  const colorChanged = (color) => {
    setColor(color.hex);
    console.log(color.hex);
  };
  const listChanged = (e) => {
    setList(e.target.value);
    console.log(e.target.value);
  };

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
    props.editCard(
      payload,
      props.id,
      title,
      list,
      assignedTo,
      color,
      category,
      description
    );
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
  //MANUEL VALIDERING
  const [titleFocusOn, setTitleFocusOn] = useState("false");
  const [catFocusOn, setCatFocusOn] = useState("false");

  const titleFocusChanged = (e) => {
    console.log("focusChanged");
    setTitleFocusOn(true);
  };
  const catFocusChanged = (e) => {
    console.log("catFocusChanged");
    setCatFocusOn(true);
  };

  const titleBorderStyle = {
    outline: "none",
    borderRight:
      title.length > 0
        ? "2px solid #47ae7a"
        : title.length === 0 && titleFocusOn === true
        ? "2px solid #e68b3c"
        : "0px solid #e68b3c",
  };
  const catBorderStyle = {
    outline: "none",
    borderRight:
      category.length > 0
        ? "2px solid #47ae7a"
        : category.length === 0 && catFocusOn === true
        ? "2px solid #e68b3c"
        : "0px solid #ff5e5e",
  };
  return (
    <>
      <Button
        color="primary"
        className={props.name + " btn fade_out hide"}
        onClick={whichButton}>
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
              <form className={styles.form + " form"} onSubmit={submit}>
                <Input
                  className="title"
                  style={titleBorderStyle}
                  label="title"
                  /*  required={true} */
                  floatingLabel={true}
                  type="text"
                  onFocus={titleFocusChanged}
                  onChange={titleChanged}
                  name="title"
                  value={title}
                />
                <Input
                  style={catBorderStyle}
                  className="category"
                  label="Category"
                  /*   required={true} */
                  floatingLabel={true}
                  type="text"
                  onFocus={catFocusChanged}
                  onChange={catChanged}
                  name="Category"
                  value={category}
                />

                <Input
                  className="assigned"
                  label="Assigned to"
                  floatingLabel={true}
                  type="text"
                  onChange={assignedChanged}
                  name="AssignedTo"
                  value={assignedTo}
                />
                <Textarea
                  className="description"
                  label="Description"
                  floatingLabel={true}
                  onChange={descriptionChanged}
                  name="Description"
                  value={description}></Textarea>

                {/*     <Input
                  className="color colorInput"
                  label="Color"
                  floatingLabel={true}
                  type="color"
                  onChange={colorChanged}
                  name="Color"
                  value={color}
                /> */}
                <label className="colorLabel">
                  Color
                  <CirclePicker
                    onChange={colorChanged}
                    value={color}
                    className="color colorInput"
                    label="Color"
                    floatingLabel={true}
                    name="Color"
                  />
                </label>
                <Select
                  className="list"
                  name="input"
                  label="List"
                  onChange={listChanged}
                  value={list}>
                  <Option value="To Do" label="To Do" />
                  <Option value="Doing" label="Doing" />
                  <Option value="Done" label="Done" />
                </Select>

                <SubmitButton
                  name={
                    title.length === 0 || category.length === 0
                      ? "Not there yet"
                      : "Save"
                  }
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
