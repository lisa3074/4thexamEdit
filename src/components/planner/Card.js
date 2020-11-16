import React, { useState } from "react";

//import styles from "./Card.module.css";
import Option from "muicss/lib/react/option";
//import Select from "muicss/lib/react/select";
import Select from "@material-ui/core/Select";
import Panel from "muicss/lib/react/panel";
import { expand } from "./modules/expand";
import { closeExpand } from "./modules/closeExpand";
import CardButtons from "./CardButtons";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";

//one way is to destructure the card array with curly brackets at this level ({ card })
//if the last level sent the array here: card = {card}
//then we only get one card at a time sendt to this function

//Another way (the one used) is to destructure at the preveous level: {...card}
//the we can use props as well (props)
export default function Card(props) {
  /*   console.log(props.targetHeader); */

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

  const colorCat = {
    backgroundColor: props.color,
  };
  const colorText = {
    color: props.color,
  };

  return (
    <Panel
      className={"panelMargin smaller a" + props._id}
      data-state="hidden"
      draggable
      onDragEnd={(e) => {
        cardDragged(e, props._id);
      }}>
      <div className="category-color" style={colorCat}></div>
      <li className="container" id={"a" + props._id} key={props._id}>
        <div className="expandCard" onClick={clickOnCard}>
          <header>
            <h1 className="smallerFont">{props.title}</h1>
          </header>
          <p className="description scrollbar fade_out hide">{props.description}</p>
          <p className="hideAlways fade_out hide">{props.color}</p>
          <p className="hideAlways fade_out hide">{props.list}</p>
        </div>
        <p className="assignedTo">{props.assignedTo}</p>

        <FormControl className="fade_out hide">
          <InputLabel id="select-list">Choose list</InputLabel>
          <Select
            labelId="select-list"
            id="demo-simple-select"
            value={(list, props.list)}
            onChange={listChanged}
            name="input"
            label="List">
            <MenuItem value="To Do">To do</MenuItem>
            <MenuItem value="Doing">Doing</MenuItem>
            <MenuItem value="Done">Done</MenuItem>
          </Select>
        </FormControl>
        <div className="bottom-wrapper">
          <div className="flex-wrapper" onClick={clickOnCard}>
            <p className="due">Due: 18. dec 2020 {/* {props.due.substring(0, 10)} */}</p>
            <p style={colorText}>{props.category}</p>
          </div>
          <div className="option_wrapper">
            <CardButtons
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
            <CardButtons name="delete" id={props._id} deleteCard={props.deleteCard} />
          </div>
        </div>
      </li>
    </Panel>
  );
}
