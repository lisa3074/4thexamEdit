import React, { useState } from "react";
import MyButton from "./MyButton";
import styles from "./Card.module.css";
import Select from "@material-ui/core/Select";
import Accordion from "@material-ui/core/Accordion";
import { expand } from "./modules/expand";
import { closeExpand } from "./modules/closeExpand";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";

//one way is to destructure the card array with curly brackets at this level ({ card })
//if the last level sent the array here: card = {card}
//then we only get one card at a time sendt to this function

//Another way (the one used) is to destructure at the preveous level: {...card}
//the we can use props as well (props)
export default function Card(props) {
  const [list, setList] = useState("");
  const listChanged = (e) => {
    setList(e.target.value);
    onClickMove(e.target.value);
  };

  const cardDragged = (e, id) => {
    e.preventDefault();
    setList(props.dropList);
    dragMove(id, props.dropList);
  };

  function onClickMove(list) {
    console.log(list);
    console.log(props._id);
    props.moveCard({ _id: props._id, list: list, timeStamp: Date.now() }, props._id, list, Date.now());
  }
  function dragMove(id, list) {
    console.log(list);
    console.log(id);
    props.dragCard({ _id: id, list: list, timeStamp: Date.now() }, id, list, Date.now());
  }
  function clickOnCard() {
    closeExpand(props._id);
    expand(props._id);
  }
  console.log(props);

  return (
    <Accordion
      className={"panelMargin smaller a" + props._id}
      data-state="hidden"
      draggable
      onDragEnd={(e) => {
        cardDragged(e, props._id);
      }}>
      <li className={styles.card + " container"} id={"a" + props._id} key={props._id}>
        <div className="expandCard" onClick={clickOnCard}>
          <header>
            <h2 className="smallerFont">{props.title}</h2>
            <div>
              <p>{props.category}</p>
            </div>
          </header>
          <p className="fade_out hide">Added: {props.added.substring(0, 10)} </p>
          <p className="fade_out hide">Assigned to: {props.assignedTo}</p>
          <p className="description scrollbar fade_out hide">{props.description}</p>
          <p className="hideAlways fade_out hide">{props.color}</p>
          <p className="hideAlways fade_out hide">{props.list}</p>
        </div>
        <FormControl>
          <InputLabel htmlFor="list">List</InputLabel>
          <Select className="fade_out hide" name="input" onChange={listChanged} value={(list, props.list)}>
            <MenuItem value="To Do">To do</MenuItem>
            <MenuItem value="Doing">Doing</MenuItem>
            <MenuItem value="Done">Done</MenuItem>
          </Select>
        </FormControl>
        <div className="option_wrapper">
          <MyButton name="delete" id={props._id} deleteCard={props.deleteCard} />
          <MyButton
            className={"a" + props._id}
            name="edit"
            deleteCard={props.deleteCard}
            editCard={props.editCard}
            title={props.title}
            list={props.list}
            assignedTo={props.assignedTo}
            color={props.color}
            category={props.category}
            description={props.description}
            id={props._id}
          />
        </div>
      </li>
    </Accordion>
  );
}
