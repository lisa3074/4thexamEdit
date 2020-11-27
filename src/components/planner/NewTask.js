import React, { useState, useEffect } from "react";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { closeNewTask } from "./modules/mobNavigation";
import CheckRoundedIcon from "@material-ui/icons/CheckRounded";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers";
import Grid from "@material-ui/core/Grid";

export default function NewTask(props) {
  console.log("planner/NewTask.js || NewTask()");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState({});
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("#ffffff");
  const [assignedTo, setAssigned] = useState([]);
  const [due, setDue] = useState();
  let [list, setList] = useState("");
  const { users } = props;

  useEffect(() => {
    let today;
    due ? (today = new Date(due)) : (today = new Date());
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();
    setDue(`${yyyy}-${mm}-${dd}`);
  }, [due]);

  const titleChanged = (e) => {
    console.log("planner/NewTask.js || titleChanged()");
    setTitle(e.target.value);
  };

  const descriptionChanged = (e) => {
    console.log("planner/NewTask.js || descriptionChanged()");
    setDescription(e.target.value);
  };
  console.log(color);

  const catChanged = (option) => {
    console.log("planner/NewTask.js || catChanged()");
    setCategory((category) => {
      return option.target.innerText;
    });
  };
  console.log(category);

  const colorChanged = (option, categories) => {
    console.log("planner/NewTask.js || colorChanged()");
    let object = categories.filter((entry) => entry.category === option.target.innerText);
    let newColor = object.map((entry) => entry.color);
    setColor((color) => {
      return newColor.toString();
    });
  };
  const listChanged = (e) => {
    console.log("planner/NewTask.js || listChanged()");
    setList(e.target.value);
    console.log(e.target.value);
  };
  const dueChanged = (e) => {
    console.log("planner/NewTask.js || dueChanged()");
    setDue(e);
    console.log(e);
  };

  const outline = {
    outlineColor: "green",
  };

  function submit(evt) {
    console.log("planner/NewTask.js || submit()");
    evt.preventDefault();
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
      due: due,
      timeStamp: Date.now(),
    });
    setTitle("");
    setColor("#ffffff");
    setDescription("");
    setCategory({});
    setList("To Do");
    setDue("");
    correctTrue();
    document.querySelector(".collaborators").value = "";
    setTimeout(() => {
      closeNewTask();
    }, 2000);
    setAssigned([]);
  }
  //MANUEL VALIDERING
  const [titleFocusOn, setTitleFocusOn] = useState("false");
  const [catFocusOn, setCatFocusOn] = useState("false");
  const [correct, setCorrect] = useState("false");

  const correctTrue = (e) => {
    console.log("planner/NewTask.js || correctTrue()");
    setCorrect(true);
    setTimeout(() => {
      correctFalse();
    }, 3000);
  };
  const correctFalse = (e) => {
    console.log("planner/NewTask.js || correctFalse()");
    setCorrect(false);
  };
  const titleFocusChanged = (e) => {
    console.log("planner/NewTask.js || titleFocusChanged()");
    setTitleFocusOn(true);
  };
  const catFocusChanged = (e) => {
    console.log("planner/NewTask.js || catFocusChanged()");
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
      <form className="addForm" id="form" onSubmit={submit}>
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
          getOptionLabel={(option) => option.name}
          getOptionSelected={(option, value) => option.name === value.name}
          value={assignedTo}
          filterSelectedOptions
          onChange={(e, values) => {
            console.log(values);
            setAssigned(values);
          }}
          renderInput={(params) => (
            <TextField
              className="collaborators"
              {...params}
              variant="standard"
              label="Add collaborators"
              placeholder=""
            />
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
            <MenuItem value="In progress">In progress</MenuItem>
            <MenuItem value="Done">Done</MenuItem>
            <MenuItem value="Barrier">Barrier</MenuItem>
          </Select>
        </FormControl>

        {/*  <TextField className="due" label="Due date" onChange={dueChanged} name="Due" value={due} /> */}
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container justify="space-around">
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="dd/MM/yyyy"
              margin="normal"
              label="Date picker inline"
              value={due}
              className="due"
              label="Due date"
              onChange={dueChanged}
              name="Due"
              disablePast
              error={false}
              helperText={null}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </Grid>
        </MuiPickersUtilsProvider>
        <Autocomplete
          className="category"
          label="Category"
          name="Category"
          options={categories}
          getOptionLabel={(option) => option.category}
          getOptionSelected={(option, value) => option.category === value.category}
          filterSelectedOptions
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
