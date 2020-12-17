import React, { useEffect, useState } from "react";
import Select from "@material-ui/core/Select";
import Panel from "muicss/lib/react/panel";
import { expand } from "./modules/expand";
import { closeExpand } from "./modules/closeExpand";
import EditForm from "./Editform";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Tooltip from "@material-ui/core/Tooltip";
import { GSAP_opacity0To1NamePopup } from "../../jsModules/displayFunctions/gsap";

export default function Card(props) {
  //console.log("planner || Card.js | Card()");
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
    props.dragCard({ id: props.id, list: list, timeStamp: Date.now() }, props.id);
  }
  function dragMove(id, list) {
    props.dragCard({ id: id, list: list, timeStamp: Date.now() }, id);
  }
  function clickOnCard() {
    closeExpand(props.id);
    expand(props.id);
  }

  const colorCat = {
    backgroundColor: props.color,
  };
  const colorText = {
    color: props.color,
  };

  const mappedAssignedImg = props.assignedTo.map((user) => (
    <Tooltip title={user.name + " / " + user.position} key={user.id + user.name}>
      <div>
        <img src={user.image} alt={user.name} />
      </div>
    </Tooltip>
  ));
  const mappedNames = props.assignedTo.map((user) => <p key={user.name + user.id}>{user.name}</p>);

  function showNames(id) {
    if (window.innerWidth < 1000) {
      if (document.querySelector(".a" + props.id + ".mui-panel.bigger")) {
        document.querySelector(".a" + id + ".name-popup").classList.toggle("hide");
        GSAP_opacity0To1NamePopup();
      } else {
        clickOnCard();
        document.querySelectorAll(".name-popup").forEach((popup) => {
          popup.classList.add("hide");
        });
      }
    } else {
      clickOnCard();
    }
  }

  return (
    <Panel
      className={"panelMargin smaller a" + props.id}
      key={props.id}
      data-state="hidden"
      draggable
      onDragEnd={(e) => {
        cardDragged(e, props.id);
      }}>
      <div className="category-color" style={colorCat}></div>
      <li className="container" id={"a" + props.id} key={props.id}>
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
        <div
          className="pic-wrapper"
          onClick={(e) => {
            showNames(props.id);
          }}>
          {mappedAssignedImg}
        </div>
        <div className={"a" + props.id + " name-popup hide"}>{mappedNames}</div>

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

        <div className="bottom-wrapper">
          <div className="flex-wrapper" onClick={clickOnCard}>
            <p className="due">Due: {props.due !== undefined ? props.due.substring(0, 10) : "No due date"}</p>
            <p style={colorText}>{props.category}</p>
          </div>
          <div className="option_wrapper">
            <EditForm
              className={"a" + props.id}
              deleteCard={props.deleteCard}
              editCard={props.editCard}
              title={props.title}
              list={props.list}
              assignedTo={props.assignedTo}
              color={props.color}
              category={props.category}
              description={props.description}
              due={props.due}
              id={props.id}
              users={props.users}
              setSystemPart={props.setSystemPart}
              systemPart={props.systemPart}
            />
          </div>
        </div>
      </li>
    </Panel>
    /* ) : (
    "" */
  );
}
