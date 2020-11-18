import React, { useState } from "react";
import Select from "@material-ui/core/Select";
import Panel from "muicss/lib/react/panel";
import { expand } from "./modules/expand";
import { closeExpand } from "./modules/closeExpand";
import EditForm from "./Editform";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";

export default function Card(props) {
  console.log("planner/Cards.js || Cards()");
  console.log(props.due);
  const [list, setList] = useState("");
  const listChanged = (e) => {
    console.log("planner/Cards.js || listChanged()");
    setList(e.target.value);
    onClickMove(e.target.value);
  };
  const comma = props.assignedTo.toString().indexOf(",");
  console.log(comma);
  const cardDragged = (e, id) => {
    console.log("planner/Cards.js || cardDragged()");
    e.preventDefault();
    setList(props.dropList);
    dragMove(id, props.dropList);
  };

  function onClickMove(list) {
    console.log("planner/Cards.js || onClickMove()");
    console.log(list);
    console.log(props._id);
    props.moveCard({ _id: props._id, list: list, timeStamp: Date.now() }, props._id, list, Date.now());
  }
  function dragMove(id, list) {
    console.log("planner/Cards.js || dragMove()");
    console.log(list);
    console.log(id);
    props.dragCard({ _id: id, list: list, timeStamp: Date.now() }, id, list, Date.now());
  }
  function clickOnCard() {
    console.log("planner/Cards.js || clickOnCard()");
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
        {/*         <div className="scrollable"> */}
        <div className="expandCard" onClick={clickOnCard}>
          <header>
            <h1 className="smallerFont" title={props.title}>
              {props.title}
            </h1>
          </header>
          <p className="description scrollbar fade_out hide">{props.description}</p>
          <p className="hideAlways fade_out hide">{props.color}</p>
          <p className="hideAlways fade_out hide">{props.list}</p>
        </div>
        <p className="assignedTo" onClick={clickOnCard}>
          {props.assignedTo.join(", ")}
        </p>

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
            <MenuItem value="In progress">In progress</MenuItem>
            <MenuItem value="Done">Done</MenuItem>
            <MenuItem value="Barrier">Barrier</MenuItem>
          </Select>
        </FormControl>
        {/*        </div> */}
        <div className="bottom-wrapper">
          <div className="flex-wrapper" onClick={clickOnCard}>
            <p className="due">Due: {props.due != undefined ? props.due.substring(0, 10) : "No due date"}</p>
            <p style={colorText}>{props.category}</p>
          </div>
          <div className="option_wrapper">
            <EditForm
              className={"a" + props._id}
              deleteCard={props.deleteCard}
              editCard={props.editCard}
              title={props.title}
              list={props.list}
              assignedTo={props.assignedTo}
              color={props.color}
              category={props.category}
              description={props.description}
              due={props.due}
              id={props._id}
            />
          </div>
        </div>
      </li>
    </Panel>
  );
}
