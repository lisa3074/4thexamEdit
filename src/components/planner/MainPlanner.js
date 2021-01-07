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
  taskList,
  setTaskList,
  plannerClicked,
}) {
  //console.log("planner || MainPlanner.js | MainPlanner()");

  const [dropList, setDropList] = React.useState("");

  const listProps = {
    deleteCard: deleteCard,
    moveCard: moveCard,
    editCard: editCard,
    dragCard: dragCard,
    onFormSubmit: onFormSubmit,
    setDropList: setDropList,
    users: users,
    dropList: dropList,
    setSystemPart: setSystemPart,
    systemPart: systemPart,
    chosenEmployee: chosenEmployee,
  };

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
        taskList={taskList}
        setTaskList={setTaskList}
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
          key={cards.id}
          header="To Do"
          cards={getFilteredCards("To Do")}
          {...listProps}
          setTaskList={setTaskList}
          plannerClicked={plannerClicked}
        />
        <PlannerList
          key={cards.id}
          header="In progress"
          cards={getFilteredCards("In progress")}
          {...listProps}
          setTaskList={setTaskList}
          plannerClicked={plannerClicked}
        />
        <PlannerList
          key={cards.id}
          header="Barrier"
          cards={getFilteredCards("Barrier")}
          {...listProps}
          setTaskList={setTaskList}
          plannerClicked={plannerClicked}
        />
        <PlannerList
          key={cards.id}
          header="Done"
          cards={getFilteredCards("Done")}
          {...listProps}
          setTaskList={setTaskList}
          plannerClicked={plannerClicked}
        />
      </section>
    </main>
  );
}
