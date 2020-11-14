import React from "react";
import CardForm from "./CardForm";
import List from "./List";
export default function MainPlanner({ cards }) {
  console.log(cards);
  return (
    <section className="MainPlanner">
      MainPlanner
      <List header="to do" cards={cards.filter((c) => c.list === "to do")} />
      <List header="in progress" cards={cards.filter((c) => c.list === "in progress")} />
      <List header="done" cards={cards.filter((c) => c.list === "done")} />
      <List header="barrier" cards={cards.filter((c) => c.list === "barrier")} />
      <CardForm />
    </section>
  );
}
