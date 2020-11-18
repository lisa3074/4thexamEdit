import React from "react";
import FilterTasks from "./FilterTasks";
import PlannerList from "./PlannerList";
import PlannerNav from "./PlannerNav";

//The list container
export default function MainPlanner({ cards, onFormSubmit, moveCard, deleteCard, editCard, dragCard }) {
  console.log("planner/MainPlanner.js || MainPlanner()");
  //drag and drop state. Declare the variable and updater function and send them to List, then send the variable to Card
  //In List, call the function onDrop and change the state to the header of the list the card is dropped on. The use the variable in
  //Card to set the list to whatever the variables state is.
  const [dropList, setDropList] = React.useState("");
  return (
    <main className="Main">
      <PlannerNav />
      <FilterTasks />
      <section className="relativeContainer">
        {/*header is a prop I decided to use. This prop can be referenced by writing {props.header}
      This is a good level to filter data, so we dont pass along too much (save speed)
      Here I say: let cards be all enrties in the card array that match the filter, here the filter is on the list*/}
        <PlannerList
          deleteCard={deleteCard}
          moveCard={moveCard}
          editCard={editCard}
          dragCard={dragCard}
          onFormSubmit={onFormSubmit}
          setDropList={setDropList}
          dropList={dropList}
          header="To Do"
          cards={cards.filter((c) => c.list === "To Do")}
        />
        <PlannerList
          deleteCard={deleteCard}
          moveCard={moveCard}
          editCard={editCard}
          dragCard={dragCard}
          onFormSubmit={onFormSubmit}
          setDropList={setDropList}
          dropList={dropList}
          header="in progress"
          cards={cards.filter((c) => c.list === "In progress")}
        />
        <PlannerList
          deleteCard={deleteCard}
          moveCard={moveCard}
          editCard={editCard}
          dragCard={dragCard}
          onFormSubmit={onFormSubmit}
          setDropList={setDropList}
          dropList={dropList}
          header="Barrier"
          cards={cards.filter((c) => c.list === "Barrier")}
        />
        <PlannerList
          deleteCard={deleteCard}
          moveCard={moveCard}
          editCard={editCard}
          dragCard={dragCard}
          onFormSubmit={onFormSubmit}
          setDropList={setDropList}
          dropList={dropList}
          header="Done"
          cards={cards.filter((c) => c.list === "Done")}
        />
      </section>
    </main>
  );
}
