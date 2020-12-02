import React, { useState } from "react";
import FilterTasks from "./FilterTasks";
import PlannerList from "./PlannerList";
import PlannerNav from "./PlannerNav";

//The list container
export default function MainPlanner({
  cards,
  onFormSubmit,
  moveCard,
  deleteCard,
  editCard,
  dragCard,
  chosenEmployee,
  chosenCat,
  setChosenEmployee,
  setChosenCat,
  users,
  setSystemPart,
  systemPart,
  tool,
  setTool,
}) {
  console.log("planner || MainPlanner.js | MainPlanner()");
  console.log(cards);
  // console.log(chosenEmployee);
  const [dropList, setDropList] = React.useState("");

  function getFilteredCards(liste) {
    return chosenEmployee !== (undefined && "") && chosenCat !== (undefined && "")
      ? cards.filter(
          (card) =>
            card.list === liste &&
            card.assignedTo.some((obj) => obj.name === chosenEmployee) &&
            card.category.includes(chosenCat)
        )
      : chosenCat !== (undefined && "")
      ? cards.filter((card) => card.list === liste && card.category.includes(chosenCat))
      : chosenEmployee !== (undefined && "")
      ? cards.filter((card) => card.list === liste && card.assignedTo.some((obj) => obj.name === chosenEmployee))
      : cards.filter((card) => card.list === liste);
  }
  return (
    <main className="Main">
      <PlannerNav tool={tool} setTool={setTool} />
      <FilterTasks
        setChosenCat={setChosenCat}
        setChosenEmployee={setChosenEmployee}
        chosenCat={chosenCat}
        chosenEmployee={chosenEmployee}
        users={users}
      />
      <section className="relativeContainer">
        <PlannerList
          deleteCard={deleteCard}
          moveCard={moveCard}
          editCard={editCard}
          dragCard={dragCard}
          onFormSubmit={onFormSubmit}
          setDropList={setDropList}
          users={users}
          dropList={dropList}
          setSystemPart={setSystemPart}
          systemPart={systemPart}
          chosenEmployee={chosenEmployee}
          header="To Do"
          cards={getFilteredCards("To Do")}
          /*  cards={
            chosenEmployee !== (undefined && "") && chosenCat !== (undefined && "")
              ? cards.filter(
                  (c) => c.list === "To Do" && c.assignedTo.includes(chosenEmployee) && c.category.includes(chosenCat)
                )
              : chosenCat !== (undefined && "")
              ? cards.filter((c) => c.list === "To Do" && c.category.includes(chosenCat))
              : chosenEmployee !== (undefined && "")
              ? cards.filter((c) => c.list === "To Do" && c.assignedTo.includes(chosenEmployee))
              : cards.filter((c) => c.list === "To Do")
          } */
        />
        <PlannerList
          deleteCard={deleteCard}
          moveCard={moveCard}
          editCard={editCard}
          dragCard={dragCard}
          onFormSubmit={onFormSubmit}
          users={users}
          setDropList={setDropList}
          dropList={dropList}
          setSystemPart={setSystemPart}
          systemPart={systemPart}
          chosenEmployee={chosenEmployee}
          header="In progress"
          cards={getFilteredCards("In progress")}
        />
        <PlannerList
          deleteCard={deleteCard}
          moveCard={moveCard}
          editCard={editCard}
          dragCard={dragCard}
          onFormSubmit={onFormSubmit}
          users={users}
          setDropList={setDropList}
          dropList={dropList}
          setSystemPart={setSystemPart}
          systemPart={systemPart}
          chosenEmployee={chosenEmployee}
          header="Barrier"
          cards={getFilteredCards("Barrier")}
        />
        <PlannerList
          deleteCard={deleteCard}
          moveCard={moveCard}
          editCard={editCard}
          dragCard={dragCard}
          onFormSubmit={onFormSubmit}
          users={users}
          setDropList={setDropList}
          dropList={dropList}
          setSystemPart={setSystemPart}
          systemPart={systemPart}
          chosenEmployee={chosenEmployee}
          header="Done"
          cards={getFilteredCards("Done")}
        />
      </section>
    </main>
  );
}
