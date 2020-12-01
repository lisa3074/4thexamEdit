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
import Tooltip from "@material-ui/core/Tooltip";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers";
import Grid from "@material-ui/core/Grid";
import { taskValidation } from "../../jsModules/displayFunctions/taskValidation";

export default function NewTask(props) {
  console.log("planner || NewTask.js | NewTask()");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
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
    setTitle(e.target.value);
    document.querySelector(".addForm div.input-wrapper > p").classList.add("hide");
  };

  const descriptionChanged = (e) => {
    setDescription(e.target.value);
  };

  const catChanged = (option) => {
    setCategory((category) => {
      return option.target.innerText;
    });
    document.querySelector(".addForm > div:nth-child(7) > p").classList.add("hide");
  };

  const colorChanged = (option, categories) => {
    let object = categories.filter((entry) => entry.category === option.target.innerText);
    let newColor = object.map((entry) => entry.color);
    setColor((color) => {
      return newColor.toString();
    });
  };
  const listChanged = (e) => {
    setList(e.target.value);
    document.querySelector(".addForm > div:nth-child(5) > p").classList.add("hide");
  };

  const dueChanged = (e) => {
    setDue(e);
  };

  const outline = {
    outlineColor: "green",
  };

  function submit(evt) {
    console.log("planner || NewTask.js | submit()");
    evt.preventDefault();
    if (title.length === 0 || category.length === 0 || assignedTo.length === 0 || list.length === 0) {
      console.log("input needed");
      taskValidation();
    } else {
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

  function handleAssigned(e) {
    e.target.innerText
      ? document.querySelector(".addForm .collaborators").setAttribute("data-chosen", true)
      : document.querySelector(".addForm .collaborators").setAttribute("data-chosen", false);
    document.querySelector(".addForm > div:nth-child(3) > p").classList.add("hide");
  }

  return (
    <>
      <form className="addForm" id="form" onSubmit={submit}>
        <div className="bg">
          <h1>Add task</h1>
        </div>
        <div className="input-wrapper">
          <TextField
            className="title"
            style={titleBorderStyle}
            label="Task title *"
            onFocus={titleFocusChanged}
            onChange={titleChanged}
            name="title"
            value={title}
          />
          <p className="error hide">Give the task a title to help your co-workers out.</p>
        </div>
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
                label="Add collaborators *"
                placeholder=""
                data-chosen={false}
              />
            )}
          />
          <p className="error hide">Assign at least one person responsible for the task.</p>
        </div>{" "}
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
        </div>
        <div className="input-wrapper">
          <FormControl className="list">
            <InputLabel id="select-list">Choose list *</InputLabel>
            <Select labelId="select-list" name="input" label="List" onChange={listChanged} value={list}>
              <MenuItem value="To Do">To do</MenuItem>
              <MenuItem value="In progress">In progress</MenuItem>
              <MenuItem value="Done">Done</MenuItem>
              <MenuItem value="Barrier">Barrier</MenuItem>
            </Select>
          </FormControl>
          <p className="error hide">
            Chose which list the task belongs in (barrier is a list for tasks that are not solvable at the moment).
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
                disablePast
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
            renderInput={(params) => <TextField {...params} variant="standard" label="Category *" placeholder="" />}
          />
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
              closeNewTask();
              /*    expand("1"); */
            }}>
            <CloseRoundedIcon />
          </div>
        </div>
      </form>
      <div className="task-sent" style={succes}>
        <CheckRoundedIcon />
      </div>
    </>
  );
}
