import React, { useState } from "react";
import MainPlanner from "./MainPlanner";
import NewTask from "./NewTask";
import { scroll } from "./modules/scroll";
import { postCard } from "../../jsModules/dbData/postData";
import { deleteACard } from "../../jsModules/dbData/deleteData";
import { editACard, dragACard } from "../../jsModules/dbData/editData";
import { gsap } from "gsap";
import "../../sass/scss/planner/style.scss";

import "../../sass/scss/planner/newTask.scss";
import "../../sass/scss/planner/form.scss";
import "../../sass/scss/planner/list.scss";
import "../../sass/scss/planner/edit.scss";
import "../../sass/scss/planner/cards.scss";
import "../../sass/scss/planner/animations.scss";
import "../../sass/scss/planner/navigation.scss";

export default function Planner(props) {
  console.log("planner || Planner.js | Planner()");
  const { cards } = props;
  const [anchorEl, setAnchorEl] = useState(null);

  if (window.innerWidth < 1000) {
    gsap.to(".FilterTasks", { duration: 0.5, y: -80 });
    gsap.to(".relativeContainer", { delay: 0.2, duration: 0.3, y: -80 });
  }

  scroll();
  console.log(props.chosenEmployee);
  //RestDb.function is a function imported from the restdb.js module
  async function onFormSubmit(data) {
    console.log("planner || Planner.js | onFormSubmit()");
    postCard(data, cards);
  }
  async function deleteCard(id) {
    console.log("planne || Planner.js | deleteCard()");
    deleteACard(id);
  }

  async function moveCard(payload, id) {
    console.log("planner || Planner.js | moveCard()");
    dragACard(payload, id);
  }
  async function dragCard(payload, id) {
    console.log("planner || Planner.js | dragCard()");
    dragACard(payload, id);
  }
  async function editCard(payload) {
    console.log("planner || Planner.js | editCard()");
    editACard(payload);
  }

  if (cards.length === 0) {
    return (
      <div className="load_container hide">
        <h1 className="loading">LOADING</h1>
      </div>
    );
  } else {
    setTimeout(() => {
      document.querySelector(".loading-page").classList.add("hide");
    }, 10);
  }
  console.log(props.chosenEmployee);
  return (
    <main className="Planner hide" data-state="chosen">
      <section className="planner-wrapper">
        {cards === "" && <h1>LOADING</h1>}
        <nav className="NewTask showNew hide">
          <NewTask onFormSubmit={onFormSubmit} users={props.users} />
        </nav>
        <MainPlanner
          deleteCard={deleteCard}
          moveCard={moveCard}
          editCard={editCard}
          dragCard={dragCard}
          cards={cards}
          chosenCategory={props.chosenCategory}
          chosenEmployee={props.chosenEmployee}
          setChosenCategory={props.setChosenCategory}
          setChosenEmployee={props.setChosenEmployee}
          users={props.users}
          setSystemPart={props.setSystemPart}
          systemPart={props.systemPart}
          tool={props.tool}
          setTool={props.setTool}
          setList={props.setList}
          list={props.list}
        />
      </section>
    </main>
  );
}
