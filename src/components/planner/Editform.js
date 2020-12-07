import React, { useState, useEffect } from "react";
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
import Tooltip from "@material-ui/core/Tooltip";

import { editTaskValidation, hideError } from "../../jsModules/displayFunctions/taskValidation";

import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers";
import Grid from "@material-ui/core/Grid";
import DeleteModal from "../administration/overview/DeleteModal";
import { areYouSure } from "../../jsModules/displayFunctions/mainMenuNavigation";
import { GSAP_stagCardsDesktop } from "../../jsModules/displayFunctions/gsap";

export default function EditForm(props) {
  console.log("planner || EditForm.js | EditForm()");
  const { users } = props;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [color, setColor] = useState("#ffffff");
  const [list, setList] = useState("");
  const [assignedTo, setAssigned] = useState([]);
  const [due, setDue] = useState("");

  const categories = [
    { category: "Design", color: "#e2835e" },
    { category: "Support", color: "#5d9ec9" },
    { category: "Development", color: "#6fc4ad" },
    { category: "Finance", color: "#d68292" },
    { category: "Sales", color: "#374d62" },
    { category: "Test", color: "#B4B256" },
    { category: "UX", color: "#9178b6" },
    { category: "Marketing", color: "#62aeb1" },
    { category: "Research", color: "#34d0d5" },
    { category: "Management", color: "#ca6563" },
  ];

  const mappedCategories = categories.map((entry) => (
    <MenuItem value={entry.category} key={entry.color}>
      {entry.category}
    </MenuItem>
  ));

  function editTask() {
    console.log("planner/EditForm.js || editTask()");
    popUp("#b" + props.id);
    setUpForm();
  }

  function setUpForm() {
    console.log("planner/EditForm.js || setUpForm()");
    setTitle(props.title);
    setCategory(props.category);
    setDescription(props.description);
    setAssigned(props.assignedTo);
    setColor(props.color);
    setList(props.list);
    setDue(props.due);
  }

  const titleChanged = (e) => {
    setTitle(e.target.value);
    document.querySelector(".editContainer form > div:nth-child(1) > p").classList.add("hide");
  };

  const catChanged = (e) => {
    setCategory(e.target.value);
    document.querySelector(".editContainer form > div:nth-child(6) > p").classList.add("hide");
  };

  const descriptionChanged = (e) => {
    setDescription(e.target.value);
  };
  const colorChanged = (e) => {
    const colorMatch = categories.filter((entry) => e.target.value === entry.category);
    setColor(colorMatch[0].color);
  };
  const listChanged = (e) => {
    setList(e.target.value);
    document.querySelector(".editContainer form > div:nth-child(4) > p").classList.remove("hide");
  };
  const dueChanged = (e) => {
    let today = new Date(e);
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();
    setDue(`${yyyy}-${mm}-${dd}`);
    //setDue(e);
  };

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
    if (title.length === 0 || category.length === 0 || assignedTo.length === 0 || list.length === 0) {
      console.log("input needed");
      editTaskValidation();
    } else {
      props.editCard(payload, props.id, title, list, assignedTo, color, category, description, due);
      GSAP_stagCardsDesktop();
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
  }

  //MANUEL VALIDERING
  const [titleFocusOn, setTitleFocusOn] = useState("false");
  const [catFocusOn, setCatFocusOn] = useState("false");
  const [correct, setCorrect] = useState("false");
  const [areWeThereYet, setAreWeThereYet] = useState(false);

  useEffect(() => {
    title.length === 0 || category.length === 0 || assignedTo.length === 0 || list.length === 0
      ? setAreWeThereYet(false)
      : setAreWeThereYet(true);
  }, [title, category, assignedTo, list]);

  const correctTrue = (e) => {
    setCorrect(true);
    setTimeout(() => {
      correctFalse();
    }, 3000);
  };
  const correctFalse = (e) => {
    setCorrect(false);
  };

  const titleFocusChanged = (e) => {
    setTitleFocusOn(true);
  };
  const catFocusChanged = (e) => {
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
    filter:
      title.length === 0 || category.length === 0 || assignedTo.length === 0 || list.length === 0
        ? "grayscale(1) brightness(1.3)"
        : "none",
    padding: "0",
  };
  const succes = {
    display: correct === true ? "flex" : "none",
  };
  function handleAssigned(e) {
    e.target.innerText
      ? document.querySelector(".editContainer .collaborators").setAttribute("data-chosen", true)
      : document.querySelector(".editContainer .collaborators").setAttribute("data-chosen", false);
    document.querySelector(".editContainer form > div:nth-child(2) > p").classList.add("hide");
    console.log(e);
  }
  function resetState() {
    setCategory("");
    setColor("#ffffff");
    setList("");
  }
  return (
    <>
      <div
        className={"delete float-btn btn fade_out hide"}
        onClick={() => {
          areYouSure();
          props.setSystemPart("planner");
        }}>
        <DeleteRoundedIcon />
      </div>
      <div className={"edit float-btn btn fade_out hide"} onClick={editTask}>
        <EditRoundedIcon />
      </div>
      <DeleteModal deleteCard={props.deleteCard} id={props.id} systemPart={props.systemPart} />
      <article className="editContainer hide" id={"b" + props.id}>
        <div className="flex">
          <div className="edit-wrapper">
            <h1 className="editTask">Edit task</h1>
            <form className="form" onSubmit={submit}>
              <div className="input-wrapper">
                <TextField
                  className="title"
                  style={titleBorderStyle}
                  label="Task title"
                  onFocus={titleFocusChanged}
                  onChange={titleChanged}
                  name="title"
                  value={title}
                />
                <p className="error hide">Give the task a title to help your co-workers out.</p>
              </div>{" "}
              <div className="input-wrapper">
                <Autocomplete
                  multiple
                  options={users}
                  getOptionLabel={(option) => option.name}
                  getOptionSelected={(option, value) => option.name === value.name}
                  value={assignedTo}
                  filterSelectedOptions
                  onChange={(e, values) => {
                    setAssigned(values);
                    handleAssigned(e);
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
                <p className="error hide">Assign at least one person responsible for the task.</p>
              </div>
              <div className="input-wrapper">
                <TextField
                  className="description"
                  label="Description"
                  onChange={descriptionChanged}
                  name="Description"
                  value={description}
                  multiline
                  rows={4}
                />
              </div>{" "}
              <div className="input-wrapper">
                <FormControl className="list">
                  <InputLabel id="select-list">Choose list</InputLabel>
                  <Select labelId="select-list" name="input" label="List" onChange={listChanged} value={list}>
                    <MenuItem value="To Do">To do</MenuItem>
                    <MenuItem value="In progress">In progress</MenuItem>
                    <MenuItem value="Done">Done</MenuItem>
                    <MenuItem value="Barrier">Barrier</MenuItem>
                  </Select>
                </FormControl>
                <p className="error hide">
                  Chose which list the task belongs in (barrier is a list for tasks that are not solvable at the
                  moment).
                </p>
              </div>
              <div className="input-wrapper">
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
                      error={false}
                      helperText={null}
                      KeyboardButtonProps={{
                        "aria-label": "change date",
                      }}
                    />
                  </Grid>
                </MuiPickersUtilsProvider>
              </div>{" "}
              <div className="input-wrapper">
                <FormControl className="category">
                  <InputLabel id="select-category">Category *</InputLabel>
                  <Select
                    labelId="select-category"
                    name="Category"
                    label="Category"
                    onChange={(e) => {
                      catChanged(e);
                      colorChanged(e);
                      console.log(e.target.color);
                    }}
                    value={category}>
                    {mappedCategories}
                  </Select>
                </FormControl>
                <p className="error hide">Chose which category the task mainly belongs to.</p>
              </div>
              <div className="flex-wrapper">
                <Tooltip title={areWeThereYet ? "Go ahead!" : "You need to fil all required fields"}>
                  <button style={disabled} className="float-btn save">
                    <CheckRoundedIcon />
                  </button>
                </Tooltip>
                <div
                  className="float-btn cancel"
                  onClick={() => {
                    close("#b" + props.id);
                    hideError();
                    resetState();
                  }}>
                  <CloseRoundedIcon />
                </div>
              </div>
              <div className="task-sent" style={succes}>
                <CheckRoundedIcon />
              </div>
            </form>
          </div>
        </div>
      </article>
    </>
  );
}
