import React from "react";
import Card from "./Card";
/* import { useState } from "react"; */

export default //Remember to always write "props" as properties, if you need to reference some property
function List(props) {
  function onDragOver(e) {
    e.preventDefault();
  }

  //running through the array (map), to get each entry by itself (like forEach)
  //For each card we place a <Card> with the data for this one card entry. We destructure the data before passing it {...card}
  //Here we are sending the whole entry (one card) to the Cards function, which then "appends" the child.

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
