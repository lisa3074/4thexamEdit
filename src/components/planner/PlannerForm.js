import React, { useState } from "react";
import SubmitButton from "./SubmitButton";
import { CirclePicker } from "react-color";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";

export default function PlannerForm(props) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("#ffffff");
  const [assignedTo, setAssigned] = useState("");
  let [list, setList] = useState("To Do");

  const titleChanged = (e) => {
    setTitle(e.target.value);
  };
  const catChanged = (e) => {
    setCategory(e.target.value);
  };
  const descriptionChanged = (e) => {
    setDescription(e.target.value);
  };
  const assignedChanged = (e) => {
    setAssigned(e.target.value);
  };
  const colorChanged = (color) => {
    setColor(color.hex);
  };
  const listChanged = (e) => {
    setList(e.target.value);
    console.log(e.target.value);
  };

  const outline = {
    outlineColor: "green",
  };

  function submit(evt) {
    evt.preventDefault();
    console.log(props.header);
    setTitleFocusOn(false);
    setCatFocusOn(false);
    props.onFormSubmit({
      title: title,
      list: list,
      added: Date.now(),
      assignedTo: [assignedTo],
      color: color,
      category: category,
      description: description,
      timeStamp: Date.now(),
    });
    setTitle("");
    setAssigned("");
    setColor("#ffffff");
    setDescription("");
    setCategory("");
    setList("To Do");
    correctTrue();
  }
  //MANUEL VALIDERING
  const [titleFocusOn, setTitleFocusOn] = useState("false");
  const [catFocusOn, setCatFocusOn] = useState("false");
  const [correct, setCorrect] = useState("false");

  const correctTrue = (e) => {
    console.log("correctChanged");
    setCorrect(true);
    setTimeout(() => {
      correctFalse();
    }, 3000);
  };
  const correctFalse = (e) => {
    console.log("correctChanged");
    setCorrect(false);
  };
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

  const succes = {
    display: correct === true ? "block" : "none",
  };

  return (
    <>
      <form className="addForm" id="form" onSubmit={submit}>
        <div className="bg">
          <h2>ADD TASK</h2>
        </div>

        <TextField
          className="title"
          style={titleBorderStyle}
          label="title"
          onFocus={titleFocusChanged}
          onChange={titleChanged}
          name="title"
          value={title}
        />

        <TextField
          style={catBorderStyle}
          className="category"
          label="Category"
          onFocus={catFocusChanged}
          onChange={catChanged}
          name="Category"
          value={category}
        />

        <TextField
          className="assigned"
          label="Assigned to"
          onChange={assignedChanged}
          name="AssignedTo"
          value={assignedTo}
        />

        <TextField
          className="description"
          label="Description"
          onChange={descriptionChanged}
          name="Description"
          value={description}
          multiline
          rows={4}
        />
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
        <FormControl className="list">
          <InputLabel id="select-list">Choose list</InputLabel>
          <Select labelId="select-list" name="input" label="List" onChange={listChanged} value={list}>
            <MenuItem value="To Do">To do</MenuItem>
            <MenuItem value="Doing">Doing</MenuItem>
            <MenuItem value="Done">Done</MenuItem>
          </Select>
        </FormControl>
        {/* Her er en if/else sætning:
Hvis title.length = 0 (mm.)(hvis der ikke står noget i feltet), 
så sæt name til State title and category. Ellers så giv knappen navnet Add.
Hvis inputfelterne er tomme, så sæt disabled til true og send det videre til SubmitButton.js
I SubmitButton.js bestemmes der så at knappen er disabled, hvis den er true og ellers ikke
Her er det kun nødvendigt at udfylde title og category */}
        <SubmitButton
          name={title.length === 0 || category.length === 0 ? "Not there yet" : "Add task"}
          disabled={title.length === 0 || category.length === 0}
        />
      </form>
      <svg style={succes} height="100%" viewBox="0 0 512 512" width="100%" xmlns="http://www.w3.org/2000/svg">
        <path
          d="m245.332031 341.332031c-4.09375 0-8.191406-1.554687-11.304687-4.691406l-69.335938-69.332031c-6.25-6.253906-6.25-16.386719 0-22.636719 6.253906-6.25 16.386719-6.25 22.636719 0l58.027344 58.027344 106.027343-106.027344c6.25-6.25 16.382813-6.25 22.632813 0s6.25 16.382813 0 22.636719l-117.332031 117.332031c-3.160156 3.136719-7.253906 4.691406-11.351563 4.691406zm0 0"
          className="succes-1"></path>
      </svg>
    </>
  );
}

//MANUEL VALIDERING
/*   const [titleFocusOn, setTitleFocusOn] = useState("false");
  
    const titleFocusChanged = (e) => {
    console.log("focusChanged");
    setTitleFocusOn(true);
  };

    const titleBorderStyle = {
    outline: "none",
    borderRight:
      title.length > 0
        ? "4px solid green"
        : title.length === 0 && titleFocusOn === true
        ? "3px solid red"
        : "0px solid red",
  }; */