import React from "react";
import Card from "./Card";
import { gsap } from "gsap";

export default function List(props) {
  console.log("planner || List.js | List()");

  /* gsap.to(".panelMargin", { delay: 0, duration: 0.5, autoAlpha: 1 }); */
  console.log(props.cards);
  const mappedCards = props.cards.map((card) => (
    <Card
      key={card.id}
      {...card}
      deleteCard={props.deleteCard}
      moveCard={props.moveCard}
      editCard={props.editCard}
      dragCard={props.dragCard}
      header={props.header}
      dropList={props.dropList}
      users={props.users}
      chosenEmployee={props.chosenEmployee}
      setSystemPart={props.setSystemPart}
      systemPart={props.systemPart}
    />
  ));

  function onDragOver(e) {
    console.log("planner || List.js | onDragOver()");
    e.preventDefault();
  }

  return (
    <section
      className={
        props.header === "To Do" ? props.header + "1 scrollList show" : props.header + "1 scrollList hidden hidden2"
      }
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
