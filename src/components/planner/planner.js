import React, { useState, useEffect } from "react";
import NewTask from "./NewTask";
import MainPlanner from "./MainPlanner";
import { RestDb } from "./modules/restdb";
import { init } from "./modules/mobNavigation";
import { scroll } from "./modules/scroll";
import "../../sass/scss/planner/style.scss";

import "../../sass/scss/planner/newTask.scss";
import "../../sass/scss/planner/form.scss";
import "../../sass/scss/planner/list.scss";
import "../../sass/scss/planner/edit.scss";
import "../../sass/scss/planner/cards.scss";
import "../../sass/scss/planner/animations.scss";
import "../../sass/scss/planner/navigation.scss";

export default function Planner(props) {
  const [cards, setCards] = useState([]);
  scroll();

  //RestDb.function is a function imported from the restdb.js module
  async function onFormSubmit(data) {
    console.log("submitted db1", data);
    RestDb.postCard(setCards, data, cards);
  }
  async function deleteCard(_id) {
    console.log("delete clicked");
    //deletes the card from the UI right away
    const newCards = cards.filter((c) => c._id !== _id);
    setCards(newCards);
    //then deletes it from the DB
    RestDb.deleteCard(_id);
  }

  async function moveCard(payload, _id, list) {
    console.log("move clicked");
    let newCards = cards.filter((c) => {
      if (c._id === _id) {
        c.list = list;
        console.log(c);
      }
      return c;
    });
    setCards(newCards);
    RestDb.moveCard(payload, _id);
  }
  async function dragCard(payload, _id, list, timeStamp) {
    console.log("dragged");
    console.log(list);
    let newCards = cards.filter((c) => {
      if (c._id === _id) {
        c.list = list;
        /*        console.log(c); */
      }
      return c;
    });
    setCards(newCards);
    RestDb.dragCard(payload, _id, list, cards, timeStamp);
  }
  async function editCard(payload, _id, title, list, assignedTo, color, category, description) {
    console.log(_id);
    console.log("payload " + JSON.stringify(payload));
    RestDb.editCard(setCards, payload, _id, title, list, assignedTo, color, category, description, cards);
  }
  useEffect(() => {
    RestDb.getCards(setCards);
  }, []);

  if (cards.length === 0) {
    setTimeout(() => {
      document.querySelector(".go-to-planner").classList.add("progress");
    }, 500);

    return (
      <div className="load_container hide">
        <h1 className="loading">LOADING</h1>
      </div>
    );
  } else {
    setTimeout(() => {
      document.querySelector(".go-to-planner").classList.remove("progress");
      document.querySelector(".loading-page").classList.add("hide");
      init();
    }, 10);
  }

  return (
    <main className="Planner hide">
      <section className="planner-wrapper">
        {cards === "" && <h1>LOADING</h1>}
        <NewTask onFormSubmit={onFormSubmit} />
        <MainPlanner
          deleteCard={deleteCard}
          moveCard={moveCard}
          editCard={editCard}
          dragCard={dragCard}
          cards={cards}
        />
      </section>
    </main>
  );
}
