import React, { useState } from "react";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import { close } from "./modules/editPopup";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CheckRoundedIcon from "@material-ui/icons/CheckRounded";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import { popUp } from "./modules/editPopup";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import EditRoundedIcon from "@material-ui/icons/EditRounded";

export default function EditForm(props) {
  console.log("planner/EditForm.js || EditForm()");

  function onClickDelete() {
    console.log("planner/EditForm.js || cilckOnDelete()");
    props.deleteCard(props.id);
  }

  function editTask() {
    console.log("planner/EditForm.js || editTask()");
    popUp("#b" + props.id);
    setUpForm();
  }
  //  console.log(props);

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState({});
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("#ffffff");
  const [assignedTo, setAssigned] = useState([]);
  const [list, setList] = useState("");
  const [due, setDue] = useState("");

  function setUpForm() {
    console.log("planner/EditForm.js || setUpForm()");
    setTitle(props.title);
    setCategory(props.category);
    setDescription(props.description);
    setAssigned(props.assignedTo);
    setColor(props.color);
    setList(props.list);
    setDue(props.due);
    console.log(props.category);
  }
  //console.log(`${title} ${category} ${description} ${color} ${assignedTo} ${list}`);

  const titleChanged = (e) => {
    console.log("planner/EditForm.js || titleChanged()");
    setTitle(e.target.value);
  };

  const catChanged = (e) => {
    console.log("planner/EditForm.js || catChanged()");
    setCategory(e.target.innerText);
  };
  const descriptionChanged = (e) => {
    console.log("planner/EditForm.js || descriptionChanged()");
    setDescription(e.target.value);
  };
  const colorChanged = (option, categories) => {
    console.log("planner/EditForm.js || colorChanged()");
    let object = categories.filter((entry) => entry.category === option.target.innerText);
    let newColor = object.map((entry) => entry.color);
    setColor((color) => {
      return newColor.toString();
    });
  };
  const listChanged = (e) => {
    console.log("planner/EditForm.js || listChanged()");
    setList(e.target.value);
  };
  const dueChanged = (e) => {
    console.log("planner/EditForm.js || dueChanged()");
    setDue(e.target.value);
    console.log(e.target.value);
  };

  const users = ["Lisa Søndergaard", "Rune Jensen", "Mikkel Hansen", "Anja Andersen", "Gry Trampedach", "Bob Hund"];
  const categories = [
    { category: "Design", color: "#374d62" },
    { category: "Support", color: "#f44336" },
    { category: "Development", color: "#1ec69a" },
    { category: "Finance", color: "#9b9b9b" },
    { category: "Sales", color: "#fb6126" },
    { category: "Test", color: "#f0c75d" },
    { category: "UX", color: "#d98c6a" },
    { category: "Marketing", color: "#222224" },
    { category: "Research", color: "#34d0d5" },
    { category: "Documentation", color: "#b4b256" },
  ];

  const payload = {
    title: title,
    list: list,
    assignedTo: assignedTo,
    color: color,
    category: category,
    description: description,
    due: due,
    id: props.id,
  };

  function submit(evt) {
    console.log("planner/EditForm.js || submit()");
    evt.preventDefault();
    console.log(props.header);
    props.editCard(payload, props.id, title, list, assignedTo, color, category, description, due);
    setTitle("");
    setColor("#ffffff");
    setDescription("");
    setCategory("");
    setList("");
    setDue("");
    correctTrue();
    setAssigned([]);
    setTimeout(() => {
      close("#b" + props.id);
    }, 2000);
  }

  //MANUEL VALIDERING
  const [titleFocusOn, setTitleFocusOn] = useState("false");
  const [catFocusOn, setCatFocusOn] = useState("false");
  const [correct, setCorrect] = useState("false");

  const correctTrue = (e) => {
    console.log("planner/EditForm.js || correctTrue()");
    console.log("correctChanged");
    setCorrect(true);
    setTimeout(() => {
      correctFalse();
    }, 3000);
  };
  const correctFalse = (e) => {
    console.log("planner/EditForm.js || correctFalse()");
    console.log("correctChanged");
    setCorrect(false);
  };

  const titleFocusChanged = (e) => {
    console.log("planner/EditForm.js || titleFocusChanged()");
    console.log("focusChanged");
    setTitleFocusOn(true);
  };
  const catFocusChanged = (e) => {
    console.log("planner/EditForm.js || catFocusChanged()");
    console.log("catFocusChanged");
    setCatFocusOn(true);
  };
  const titleBorderStyle = {
    outline: "none",
    borderBottom: title.length === 0 && titleFocusOn === true ? "2px solid #e68b3c" : "0px solid #e68b3c",
  };
  const catBorderStyle = {
    outline: "none",
    borderBottom: category.length === 0 && catFocusOn === true ? "2px solid #e68b3c" : "0px solid #ff5e5e",
  };
  const disabled = {
    pointerEvents: title.length === 0 || category.length === 0 ? "none" : "auto",
    filter: title.length === 0 || category.length === 0 ? "grayscale(1) brightness(1.3)" : "none",
    padding: "0",
  };
  const succes = {
    display: correct === true ? "flex" : "none",
  };

  return (
    <>
      <div className={"delete float-btn btn fade_out hide"} onClick={onClickDelete}>
        <DeleteRoundedIcon />
      </div>
      <div className={"edit float-btn btn fade_out hide"} onClick={editTask}>
        <EditRoundedIcon />
      </div>
      <article className="editContainer hide" id={"b" + props.id}>
        <div className="editWrapper">
          <h1 className="editTask">Edit task</h1>
          {/*        <p onClick={() => close("#b" + props.id)}>✕</p> */}
        </div>
        <div className="flex">
          <div>
            <form className={"form"} onSubmit={submit}>
              <TextField
                className="title"
                style={titleBorderStyle}
                label="title task"
                onFocus={titleFocusChanged}
                onChange={titleChanged}
                name="title"
                value={title}
              />
              <Autocomplete
                multiple
                options={users}
                getOptionLabel={(option) => option}
                getOptionSelected={(option, value) => option === value}
                filterSelectedOptions
                value={assignedTo}
                onChange={(e, values) => {
                  console.log(values);
                  setAssigned(values);
                }}
                renderInput={(params) => (
                  <TextField {...params} variant="standard" label="Add collaborators" placeholder="" />
                )}
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
              <FormControl className="list">
                <InputLabel id="select-list">Choose list</InputLabel>
                <Select labelId="select-list" name="input" label="List" onChange={listChanged} value={list}>
                  <MenuItem value="To Do">To do</MenuItem>
                  <MenuItem value="Doing">Doing</MenuItem>
                  <MenuItem value="Done">Done</MenuItem>
                  <MenuItem value="Barrier">Barrier</MenuItem>
                </Select>
              </FormControl>
              <TextField className="due" label="Due date" onChange={dueChanged} name="Due" value={due} />

              <Autocomplete
                className="category"
                label="Category"
                name="Category"
                options={categories}
                getOptionLabel={(option) => (option.category ? option.category : "")}
                getOptionSelected={(option, value) => option.category === value.category}
                filterSelectedOptions
                // defaultValue={props.category}
                onFocus={catFocusChanged}
                onChange={(option) => {
                  catChanged(option);
                  colorChanged(option, categories);
                }}
                renderInput={(params) => <TextField {...params} variant="standard" label="Category" placeholder="" />}
              />

              <div className="flex-wrapper">
                <button style={disabled} className="float-btn save">
                  <CheckRoundedIcon />
                </button>
                <div className="float-btn cancel" onClick={() => close("#b" + props.id)}>
                  <CloseRoundedIcon />
                </div>
              </div>
              <div className="task-sent" style={succes}>
                <svg height="100px" viewBox="0 0 512 512" width="100px" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="m245.332031 341.332031c-4.09375 0-8.191406-1.554687-11.304687-4.691406l-69.335938-69.332031c-6.25-6.253906-6.25-16.386719 0-22.636719 6.253906-6.25 16.386719-6.25 22.636719 0l58.027344 58.027344 106.027343-106.027344c6.25-6.25 16.382813-6.25 22.632813 0s6.25 16.382813 0 22.636719l-117.332031 117.332031c-3.160156 3.136719-7.253906 4.691406-11.351563 4.691406zm0 0"
                    className="succes-1"></path>
                </svg>
              </div>
            </form>
          </div>
        </div>
      </article>
    </>
  );
}
