import React, { useState } from "react";
import Input from "muicss/lib/react/input";
import Textarea from "muicss/lib/react/textarea";
import { CirclePicker } from "react-color";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";

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
      <TextField
        className="title"
        style={titleBorderStyle}
        label="title"
        onFocus={titleFocusChanged}
        onChange={titleChanged}
        name="title"
        value={props.title}
      />

      <TextField
        style={catBorderStyle}
        className="category"
        label="Category"
        onFocus={catFocusChanged}
        onChange={catChanged}
        name="Category"
        value={props.category}
      />

      <TextField
        className="assigned"
        label="Assigned to"
        onChange={assignedChanged}
        name="AssignedTo"
        value={props.assignedTo}
      />

      <TextField
        className="description"
        label="Description"
        onChange={descriptionChanged}
        name="Description"
        value={props.description}
        multiline
        rows={4}
      />

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
      <FormControl className="list">
        <InputLabel id="select-edit-list">Choose list</InputLabel>
        <Select labelId="select-edit-list" name="input" label="List" onChange={listChanged} value={props.list}>
          <MenuItem value="To Do">To do</MenuItem>
          <MenuItem value="Doing">Doing</MenuItem>
          <MenuItem value="Done">Done</MenuItem>
        </Select>
      </FormControl>
    </>
  );
}
