import React from "react";
import Card from "./Card";
/* import { useState } from "react"; */

export default function List(props) {
  // console.log("planner/List.js || List()");

  const mappedCards = props.cards.map((card) => (
    <Card
      key={card._id}
      {...card}
      deleteCard={props.deleteCard}
      moveCard={props.moveCard}
      editCard={props.editCard}
      dragCard={props.dragCard}
      header={props.header}
      dropList={props.dropList}
    />
  ));

  function onDragOver(e) {
    console.log("planner/List.js || onDragOver()");
    e.preventDefault();
  }

  return (
    <section
      className={props.header + "1 scrollList hidden"}
      onDrop={() => {
        props.setDropList(props.header);
      }}
      onDragOver={(e) => onDragOver(e)}>
      <div className={props.header}>
        <h1 className="theList mui--text-display2">{props.header}</h1>
      </div>

      <ul>{mappedCards}</ul>
    </section>
  );
}
