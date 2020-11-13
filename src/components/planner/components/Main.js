import React from "react";
import List from "./List";

//The list container
export default function Main({
  cards,
  onFormSubmit,
  moveCard,
  deleteCard,
  editCard,
  dragCard,
}) {
  //drag and drop state. Declare the variable and updater function and send them to List, then send the variable to Card
  //In List, call the function onDrop and change the state to the header of the list the card is dropped on. The use the variable in
  //Card to set the list to whatever the variables state is.
  const [dropList, setDropList] = React.useState("");
  return (
    <main className="Main">
      <section className="relativeContainer">
        {/*header is a prop I decided to use. This prop can be referenced by writing {props.header}
      This is a good level to filter data, so we dont pass along too much (save speed)
      Here I say: let cards be all enrties in the card array that match the filter, here the filter is on the list*/}
        <List
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
        <List
          deleteCard={deleteCard}
          moveCard={moveCard}
          editCard={editCard}
          dragCard={dragCard}
          onFormSubmit={onFormSubmit}
          setDropList={setDropList}
          dropList={dropList}
          header="Doing"
          cards={cards.filter((c) => c.list === "Doing")}
        />
        <List
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
