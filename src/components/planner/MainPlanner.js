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
  chosenCategory,
  setChosenEmployee,
  setChosenCategory,
  users,
  setSystemPart,
  systemPart,
  tool,
  setTool,
  setList,
  list,
}) {
  console.log("planner || MainPlanner.js | MainPlanner()");

  const [dropList, setDropList] = React.useState("");
  console.log(chosenEmployee, chosenCategory);

  function getFilteredCards(PlannerList) {
    return chosenEmployee !== "" && chosenCategory !== ""
      ? cards.filter(
          (card) =>
            card.list === PlannerList &&
            card.assignedTo.some((obj) => obj.name === chosenEmployee) &&
            card.category.includes(chosenCategory)
        )
      : chosenCategory !== ""
      ? cards.filter((card) => card.list === PlannerList && card.category.includes(chosenCategory))
      : chosenEmployee !== ""
      ? cards.filter((card) => card.list === PlannerList && card.assignedTo.some((obj) => obj.name === chosenEmployee))
      : cards.filter((card) => card.list === PlannerList);
  }
  return (
    <main className="Main">
      <PlannerNav
        tool={tool}
        setTool={setTool}
        setChosenCategory={setChosenCategory}
        setChosenEmployee={setChosenEmployee}
        setList={setList}
        list={list}
      />
      <FilterTasks
        setChosenCategory={setChosenCategory}
        setChosenEmployee={setChosenEmployee}
        chosenCategory={chosenCategory}
        chosenEmployee={chosenEmployee}
        users={users}
        list={list}
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
