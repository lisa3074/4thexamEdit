import React, { useState } from "react";
import MyButton from "./MyButton";
import styles from "./Card.module.css";
import Option from "muicss/lib/react/option";
import Select from "muicss/lib/react/select";
import Panel from "muicss/lib/react/panel";
import { expand } from "./modules/expand";
import { closeExpand } from "./modules/closeExpand";

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
    props.moveCard(
      { _id: props._id, list: list, timeStamp: Date.now() },
      props._id,
      list,
      Date.now()
    );
  }
  function dragMove(id, list) {
    console.log(list);
    console.log(id);
    props.dragCard(
      { _id: id, list: list, timeStamp: Date.now() },
      id,
      list,
      Date.now()
    );
  }
  function clickOnCard() {
    closeExpand(props._id);
    expand(props._id);
  }

  const colorCat = {
    backgroundColor: props.color,
    borderRadius: "50%",
    height: "15px",
    margin: "0",
    marginLeft: "1rem",
    width: "15px",
    border: "1px solid black",
    float: "left",
    display: "inline",
  };
  const uppercase = {
    textTransform: "uppercase",
    margin: "0 0.5rem 0 0.5rem",
    color: "#504f4f",
    fontWeight: "400",
    fontSize: "12px",
    textAlign: "right",
    width: "auto",
    display: "inline",
    float: "left",
  };

  const posiionAb = {
    position: "absolute",
    top: "0rem",
    right: "0rem",
    width: "100%",
  };
  const posiionRel = {
    position: "relative",
    top: "0",
    left: "0",
  };

  return (
    <Panel
      className={"panelMargin smaller a" + props._id}
      data-state="hidden"
      draggable
      onDragEnd={(e) => {
        cardDragged(e, props._id);
      }}>
      <li
        className={styles.card + " container"}
        id={"a" + props._id}
        key={props._id}
        style={posiionRel}>
        <div
          className="expandCard"
          onClick={/* () => expand(props._id) */ clickOnCard}>
          <header>
            <h2 className="smallerFont">{props.title}</h2>
            <div style={posiionAb}>
              <div style={colorCat}></div>
              <p style={uppercase}>{props.category}</p>
            </div>
          </header>
          <p className="fade_out hide">
            Added: {props.added.substring(0, 10)}{" "}
          </p>
          <p className="fade_out hide">Assigned to: {props.assignedTo}</p>
          <p className="description scrollbar fade_out hide">
            {props.description}
          </p>
          <p className="hideAlways fade_out hide">{props.color}</p>
          <p className="hideAlways fade_out hide">{props.list}</p>
        </div>
        <Select
          className="fade_out hide"
          name="input"
          label="List"
          onChange={listChanged}
          value={(list, props.list)}>
          <Option value="To Do" label="To Do" />
          <Option value="Doing" label="Doing" />
          <Option value="Done" label="Done" />
        </Select>
        <div className="option_wrapper">
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
          <MyButton
            name="delete"
            id={props._id}
            deleteCard={props.deleteCard}
          />
        </div>
      </li>
    </Panel>
  );
}
