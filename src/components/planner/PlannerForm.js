import React, { useState } from "react";
import SubmitButton from "./SubmitButton";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { closeNewTask } from "./modules/mobNavigation";
import CheckRoundedIcon from "@material-ui/icons/CheckRounded";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";

export default function PlannerForm(props) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState({});
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("#ffffff");
  const [assignedTo, setAssigned] = useState([]);
  const [due, setDue] = useState("");
  let [list, setList] = useState("");

  const titleChanged = (e) => {
    setTitle(e.target.value);
  };

  const descriptionChanged = (e) => {
    setDescription(e.target.value);
  };
  console.log(color);

  const catChanged = (option) => {
    setCategory((category) => {
      return option.target.innerText;
    });
    //setCategory(option.target.innerText);
  };
  console.log(category);

  const colorChanged = (option, categories) => {
    let object = categories.filter((entry) => entry.category === option.target.innerText);
    let newColor = object.map((entry) => entry.color);
    setColor((color) => {
      return newColor.toString();
    });
  };
  const listChanged = (e) => {
    setList(e.target.value);
    console.log(e.target.value);
  };
  const dueChanged = (e) => {
    setDue(e.target.value);
    console.log(e.target.value);
  };

  const outline = {
    outlineColor: "green",
  };

  //console.log(assignedTo);
  function collectAssigned(evt) {
    evt.preventDefault();
    const nameButtons = document.querySelectorAll(".MuiChip-root.MuiAutocomplete-tag span");
    nameButtons.forEach((name) => {
      // console.log(name.innerHTML);
      setAssigned((assignedTo) => [...assignedTo, name.innerHTML]);
    });
    setTimeout(() => {
      //console.log(assignedTo);
      submit();
    }, 500);
  }

  function submit(evt) {
    console.log(props.header);
    setTitleFocusOn(false);
    setCatFocusOn(false);
    props.onFormSubmit({
      title: title,
      list: list,
      added: Date.now(),
      assignedTo: assignedTo,
      color: color,
      category: category,
      description: description,
      timeStamp: Date.now(),
    });
    setTitle("");
    setColor("#ffffff");
    setDescription("");
    setCategory({});
    setList("To Do");
    correctTrue();
    setTimeout(() => {
      closeNewTask();
    }, 2000);
    //setAssigned([]);
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
  const users = [
    "Lisa Søndergaard",
    "Rune Jensen",
    "The Godfather: Part II",
    "The Dark Knight",
    "12 Angry Men",
    "Schindler's List",
  ];
  /*   const assigned = ["Lisa Søndergaard", "Rune Jensen"]; */

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
  return (
    <>
      <form className="addForm" id="form" onSubmit={collectAssigned}>
        <div className="bg">
          <h1>Add task</h1>
        </div>

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
          filterSelectedOptions
          //  defaultValue={[users[3]]}
          // brug denne til at hente assiged ind i (PUT) defaultValue={assigned}
          /*    onChange={(option) => {
            assignedChanged(option);
          }} */

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
          getOptionLabel={(option) => option.category}
          filterSelectedOptions
          onFocus={catFocusChanged}
          onChange={(option) => {
            catChanged(option);
            colorChanged(option, categories);
          }}
          renderInput={(params) => <TextField {...params} variant="standard" label="Category" placeholder="" />}
        />

        {/*   <SubmitButton
          name={title.length === 0 || category.length === 0 ? "Not there yet" : "Add task"}
          disabled={title.length === 0 || category.length === 0}
        /> */}
        <div className="flex-wrapper">
          <button style={disabled} className="float-btn save" onSubmit={collectAssigned}>
            <CheckRoundedIcon />
          </button>
          <div className="float-btn cancel" onClick={closeNewTask}>
            <CloseRoundedIcon />
          </div>
        </div>
      </form>
      <div className="task-sent" style={succes}>
        <svg height="100px" viewBox="0 0 512 512" width="100px" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m245.332031 341.332031c-4.09375 0-8.191406-1.554687-11.304687-4.691406l-69.335938-69.332031c-6.25-6.253906-6.25-16.386719 0-22.636719 6.253906-6.25 16.386719-6.25 22.636719 0l58.027344 58.027344 106.027343-106.027344c6.25-6.25 16.382813-6.25 22.632813 0s6.25 16.382813 0 22.636719l-117.332031 117.332031c-3.160156 3.136719-7.253906 4.691406-11.351563 4.691406zm0 0"
            className="succes-1"></path>
        </svg>
      </div>
    </>
  );
}
