import React from "react";
import Task from "./Task";
export default function List(props) {
  console.log(props.cards);
  const mappedCards = props.cards.map((card) => <Task key={card._id} {...card} header={props.header} />);
  return (
    <article className="List">
      <div className={props.header}>
        <h1>{props.header}</h1>
      </div>
      List
      <ul>{mappedCards}</ul>
    </article>
  );
}
