import React, { useEffect, useState } from "react";
import Select from "@material-ui/core/Select";
import styles from "./Form.module.css";
import SubmitButton from "./SubmitButton";
import { close } from "./modules/editPopup";
import { CirclePicker } from "react-color";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";

export default function EditForm(props) {
  //here we destructure, so we get a variable and a function (clicks = var, setClickes = function)
  /*   const [title, setTitle] = useState(props.title);
  const [category, setCategory] = useState(props.category);
  const [description, setDescription] = useState(props.description);
  const [color, setColor] = useState(props.color);
  const [assignedTo, setAssigned] = useState(props.assignedTo);
  const [list, setList] = useState(props.list); */
  /*   useEffect(() => {
    setTitle(props.title);
    setCategory(props.category);
    setDescription(props.description);
    setAssigned(props.assignedTo);
    setColor(props.color);
    setList(props.list);
  }); */
  /* function submitTask()(
    props.submit(title, category, description, color, assignedTo, list)
) */
  console.log(props);

  const payload = {
    title: props.title,
    list: props.list,
    assignedTo: [props.assignedTo],
    color: props.color,
    category: props.category,
    description: props.description,
    id: props.id,
  };
  function submit(evt) {
    evt.preventDefault();
    console.log(props.header);
    props.editCard(
      payload,
      props.id,
      props.title,
      props.list,
      props.assignedTo,
      props.color,
      props.category,
      props.description
    );
    props.setTitle("");
    props.setAssigned("");
    props.setColor("#ffffff");
    props.setDescription("");
    props.setCategory("");
    props.close("#b" + props.id);
  }
  const titleChanged = (e) => {
    props.setTitle(e.target.value);
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
    console.log("focusChanged true");
    setTitleFocusOn(true);
  };
  const titleFocusChangedBlur = (e) => {
    console.log("focusChanged false");
    // e.target ===
    setTitleFocusOn(false);
  };
  const catFocusChanged = (e) => {
    console.log("catFocusChanged true");
    setCatFocusOn(true);
  };
  const catFocusChangedBlur = (e) => {
    console.log("catFocusChanged false");
    setCatFocusOn(false);
  };
  console.log(titleFocusOn);

  const titleBorderStyle = {
    outline: "none",
    //borderBottom: title.length === 0 && titleFocusOn === false ? "2px solid #e68b3c" : "0px solid #e68b3c",
  };
  const catBorderStyle = {
    outline: "none",
    //borderBottom: category.length === 0 && catFocusOn === false ? "2px solid #e68b3c" : "0px solid #ff5e5e",
  };
  return (
    <article className="EditForm">
      <article className="editContainer hide" id={"b" + props.id}>
        <div className="flex-wrapper">
          <div className="editWrapper"></div>
          <div className="flex">
            <h2 className="editTask">Edit task</h2>
            <p onClick={(e) => close("#b" + props.id, e)}>✕</p>
            <div>
              <form className={styles.form + " form"} onSubmit={submit}>
                <TextField
                  className="title"
                  style={titleBorderStyle}
                  label="title"
                  name="title"
                  value={props.title}
                  onFocus={titleFocusChanged}
                  onChange={titleChanged}
                  onBlur={titleFocusChangedBlur}
                />
                <TextField
                  style={catBorderStyle}
                  className="category"
                  label="Category"
                  onFocus={catFocusChanged}
                  onChange={catChanged}
                  onBlur={catFocusChangedBlur}
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
                  rows={6}
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
                <FormControl>
                  <InputLabel htmlFor="list">List</InputLabel>

                  <Select className="list" name="input" id="list" onChange={listChanged} value={props.list}>
                    <MenuItem value="To Do">To do</MenuItem>
                    <MenuItem value="Doing">Doing</MenuItem>
                    <MenuItem value="Done">Done</MenuItem>
                  </Select>
                </FormControl>

                <SubmitButton
                /*   name={title.length === 0 || category.length === 0 ? "Not there yet" : "Save"}
                  disabled={title.length === 0 || category.length === 0} */
                />
              </form>
            </div>
          </div>
        </div>
      </article>
    </article>
  );
}
