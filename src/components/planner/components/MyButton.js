//import Button from "muicss/lib/react/button";
import Button from "@material-ui/core/Button";
import { popUp } from "./modules/editPopup";
import React, { useState } from "react";
import Input from "@material-ui/core/Input";
import Select from "@material-ui/core/Select";
import styles from "./Form.module.css";
import SubmitButton from "./SubmitButton";
import { close } from "./modules/editPopup";
import { CirclePicker } from "react-color";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import EditRoundedIcon from "@material-ui/icons/EditRounded";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import DeleteForeverRoundedIcon from "@material-ui/icons/DeleteForeverRounded";
import EditForm from "./EditForm";

export default function MyButton(props) {
  //here we destructure, so we get a variable and a function (clicks = var, setClickes = function)
  function onClickDelete() {
    props.deleteCard(props.id);
  }
  console.log(props);

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("#ffffff");
  const [assignedTo, setAssigned] = useState("");
  const [list, setList] = useState("To Do");

  /* const payload = {
    title: title,
    list: list,
    assignedTo: [assignedTo],
    color: color,
    category: category,
    description: description,
    id: props.id,
  }; */

  /*   function submit(evt) {
    evt.preventDefault();
    console.log(props.header);
    props.editCard(payload, props.id, title, list, assignedTo, color, category, description);
    setTitle("");
    setAssigned("");
    setColor("#ffffff");
    setDescription("");
    setCategory("");
    close("#b" + props.id);
  } */

  function whichButton() {
    if (props.name === "delete") {
      onClickDelete();
    } else {
      console.log(props);
      popUp("#b" + props.id);
      setUpForm();
    }
  }
  function setUpForm() {
    setTimeout(() => {
      setTitle(props.title);
      setCategory(props.category);
      setDescription(props.description);
      setAssigned(props.assignedTo);
      setColor(props.color);
      setList(props.list);
    }, 2000);
  }
  //MANUEL VALIDERING

  return (
    <div className="MyButton">
      <div className={props.name + " btn fade_out hide float-btn"} onClick={whichButton}>
        {props.name === "edit" ? <EditRoundedIcon /> : <DeleteForeverRoundedIcon />}
      </div>
      {props.title === "" ? (
        ""
      ) : (
        <EditForm
          color={color}
          assignedTo={assignedTo}
          description={description}
          title={title}
          category={category}
          list={list}
          setTitle={setTitle}
          setAssigned={setAssigned}
          setCategory={setCategory}
          setDescription={setDescription}
          setColor={setColor}
          setList={setList}
          id={props.id}
        />
      )}
    </div>
  );
}
