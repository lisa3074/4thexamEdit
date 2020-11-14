import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import Main from "./Main";
import { RestDb } from "./modules/restdb";
import { init } from "./modules/mobNavigation";
import { scroll } from "./modules/scroll";
import "../sass/style.scss";
import "../sass/form.scss";
import "../sass/list.scss";
import "../sass/edit.scss";
import "../sass/cards.scss";
import "../sass/animations.scss";
import "../sass/navigation.scss";

export default function AppPlanner() {
  const [cards, setCards] = useState([]);
  scroll();
  /*   function onFormSubmit(data) {
    console.log("submitted", data);
    //We make a new const (array) called "cards" (above).
    //The updater function is called "setCards" and the initial value is our old array above; "myCards"
    //in the callback, we have an event handler on the button, so when it's clicked this happens:
    //We call the updater function "setCards", and in the function we take "myCards" array and creates a copy of it
    //Then we tell the script to push the afterward entry into the end of the array. This is done by .concat
    //the array now has 3 entries instead of the initial 2.
    setCards(cards.concat(data));
  } */

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
    return (
      <div className="load_container">
        <h1 className="loading">LOADING</h1>
      </div>
    );
  } else {
    setTimeout(() => {
      init();
    }, 10);
  }

  return (
    <div className="AppPlanner">
      {cards === "" && <h1>LOADING</h1>}
      <Nav onFormSubmit={onFormSubmit} />
      <Main deleteCard={deleteCard} moveCard={moveCard} editCard={editCard} dragCard={dragCard} cards={cards} />
    </div>
  );
}
