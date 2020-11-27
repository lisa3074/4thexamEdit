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
}) {
  console.log("planner/MainPlanner.js || MainPlanner()");
  console.log(chosenEmployee + " " + chosenCat);

  const [dropList, setDropList] = React.useState("");
  return (
    <main className="Main">
      <PlannerNav />
      <FilterTasks
        setChosenCat={setChosenCat}
        setChosenEmployee={setChosenEmployee}
        chosenCat={chosenCat}
        chosenEmployee={chosenEmployee}
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
          header="To Do"
          cards={
            chosenEmployee !== (undefined && "") && chosenCat !== (undefined && "")
              ? cards.filter(
                  (c) => c.list === "To Do" && c.assignedTo.includes(chosenEmployee) && c.category.includes(chosenCat)
                )
              : chosenCat !== (undefined && "")
              ? cards.filter((c) => c.list === "To Do" && c.category.includes(chosenCat))
              : chosenEmployee !== (undefined && "")
              ? cards.filter((c) => c.list === "To Do" && c.assignedTo.includes(chosenEmployee))
              : cards.filter((c) => c.list === "To Do")
          }
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
          header="In progress"
          cards={
            chosenEmployee !== (undefined && "") && chosenCat !== (undefined && "")
              ? cards.filter(
                  (c) =>
                    c.list === "In progress" && c.assignedTo.includes(chosenEmployee) && c.category.includes(chosenCat)
                )
              : chosenCat !== (undefined && "")
              ? cards.filter((c) => c.list === "In progress" && c.category.includes(chosenCat))
              : chosenEmployee !== (undefined && "")
              ? cards.filter((c) => c.list === "In progress" && c.assignedTo.includes(chosenEmployee))
              : cards.filter((c) => c.list === "In progress")
          }
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
          header="Barrier"
          cards={
            chosenEmployee !== (undefined && "") && chosenCat !== (undefined && "")
              ? cards.filter(
                  (c) => c.list === "Barrier" && c.assignedTo.includes(chosenEmployee) && c.category.includes(chosenCat)
                )
              : chosenCat !== (undefined && "")
              ? cards.filter((c) => c.list === "Barrier" && c.category.includes(chosenCat))
              : chosenEmployee !== (undefined && "")
              ? cards.filter((c) => c.list === "Barrier" && c.assignedTo.includes(chosenEmployee))
              : cards.filter((c) => c.list === "Barrier")
          }
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
          header="Done"
          cards={
            chosenEmployee !== (undefined && "") && chosenCat !== (undefined && "")
              ? cards.filter(
                  (c) => c.list === "Done" && c.assignedTo.includes(chosenEmployee) && c.category.includes(chosenCat)
                )
              : chosenCat !== (undefined && "")
              ? cards.filter((c) => c.list === "Done" && c.category.includes(chosenCat))
              : chosenEmployee !== (undefined && "")
              ? cards.filter((c) => c.list === "Done" && c.assignedTo.includes(chosenEmployee))
              : cards.filter((c) => c.list === "Done")
          }
        />
      </section>
    </main>
  );
}
