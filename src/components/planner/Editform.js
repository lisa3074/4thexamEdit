import React, { useState } from "react";
import Input from "muicss/lib/react/input";
import Textarea from "muicss/lib/react/textarea";
import { CirclePicker } from "react-color";

export default function EditCard(props) {
  //here we destructure, so we get a variable and a function (clicks = var, setClickes = function)

  const titleChanged = (e) => {
    props.setTitle(e.target.value);
    console.log(props.title);
    console.log(props.id);
  };

  const catChanged = (e) => {
    props.setCategory(e.target.value);
    console.log(e.target.value);
  };
  const descriptionChanged = (e) => {
    props.setDescription(e.target.value);
    console.log(e.target.value);
  };
  const assignedChanged = (e) => {
    props.setAssigned(e.target.value);
    console.log(e.target.value);
  };
  const colorChanged = (color) => {
    props.setColor(color.hex);
    console.log(color.hex);
  };
  const listChanged = (e) => {
    props.setList(e.target.value);
    console.log(e.target.value);
  };

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
      props.title.length > 0
        ? "2px solid #47ae7a"
        : props.title.length === 0 && titleFocusOn === true
        ? "2px solid #e68b3c"
        : "0px solid #e68b3c",
  };
  const catBorderStyle = {
    outline: "none",
    borderRight:
      props.category.length > 0
        ? "2px solid #47ae7a"
        : props.category.length === 0 && catFocusOn === true
        ? "2px solid #e68b3c"
        : "0px solid #ff5e5e",
  };
  return (
    <>
      <Input
        className="title"
        style={titleBorderStyle}
        label="title"
        floatingLabel={true}
        type="text"
        onFocus={titleFocusChanged}
        onChange={titleChanged}
        name="title"
        value={props.title}
      />
      <Input
        style={catBorderStyle}
        className="category"
        label="Category"
        floatingLabel={true}
        type="text"
        onFocus={catFocusChanged}
        onChange={catChanged}
        name="Category"
        value={props.category}
      />

      <Input
        className="assigned"
        label="Assigned to"
        floatingLabel={true}
        type="text"
        onChange={assignedChanged}
        name="AssignedTo"
        value={props.assignedTo}
      />
      <Textarea
        className="description"
        label="Description"
        floatingLabel={true}
        onChange={descriptionChanged}
        name="Description"
        value={props.description}></Textarea>

      <label className="colorLabel">
        Color
        <CirclePicker
          onChange={colorChanged}
          value={props.color}
          className="color colorInput"
          label="Color"
          floatingLabel={true}
          name="Color"
        />
      </label>
    </>
  );
}
