import React, { useState, useEffect } from "react";
import MainPlanner from "./MainPlanner";
import NewTask from "./NewTask";
import { init } from "./modules/mobNavigation";
import { scroll } from "./modules/scroll";
import { getCards } from "../../jsModules/dbData/getData";
import { postCard } from "../../jsModules/dbData/postData";
import { deleteACard } from "../../jsModules/dbData/deleteData";
import { editACard, dragACard } from "../../jsModules/dbData/editData";
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
  const [cards, setCards] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  scroll();

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
  useEffect(() => {
    getCards(setCards);
  }, []);

  if (cards.length === 0) {
    return (
      <div className="load_container hide">
        <h1 className="loading">LOADING</h1>
      </div>
    );
  } else {
    setTimeout(() => {
      document.querySelector(".loading-page").classList.add("hide");
      init();
    }, 10);
  }

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
          /* cards={cards.filter((c) => {
            c.assignedTo.filter((entry) => console.log(entry.name.includes("Lisa"));
          })} */
          chosenCat={props.chosenCat}
          chosenEmployee={props.chosenEmployee}
          setChosenCat={props.setChosenCat}
          setChosenEmployee={props.setChosenEmployee}
          users={props.users}
          setSystemPart={props.setSystemPart}
          systemPart={props.systemPart}
          tool={props.tool}
          setTool={props.setTool}
        />
      </section>
    </main>
  );
}
