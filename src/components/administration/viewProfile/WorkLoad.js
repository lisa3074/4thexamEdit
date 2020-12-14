import React, { useEffect } from "react";

export default function WorkLoad(props) {
  console.log("administration/viewProfile || ViewProfile.js | WorkLoad()");

  const chosenUser = props.user ? props.user.map((entry) => entry.name.toString()) : "";
  const todo = props.cards.filter(
    (c) => c.list === "To Do" && c.assignedTo.filter((user) => user.name.toString().includes(chosenUser)).length
  ).length;
  const progress = props.cards.filter(
    (c) => c.list === "In progress" && c.assignedTo.filter((user) => user.name.toString().includes(chosenUser)).length
  ).length;
  const done = props.cards.filter(
    (c) => c.list === "Done" && c.assignedTo.filter((user) => user.name.toString().includes(chosenUser)).length
  ).length;

  useEffect(() => {
    const todoBar = document.querySelector(".todoBar");
    const progressBar = document.querySelector(".progressBar");
    const doneBar = document.querySelector(".doneBar");
    todoBar.style.setProperty("--height", todo.toString());
    progressBar.style.setProperty("--height", progress.toString());
    doneBar.style.setProperty("--height", done.toString());
  }, [chosenUser]);

  return (
    <article className="WorkLoad userCard">
      <h2 className="heading">WORKLOAD</h2>
      <div className="info-wrapper">
        <div className="todoBar bar"></div>
        <div className="todoInfo">
          <h2 className="todo">TO DO</h2>
          <h2 className="todo-number">{todo.toString()}</h2>
        </div>

        <div className="progressBar bar"></div>
        <div className="progressInfo">
          <h2 className="progress-number">{progress.toString()}</h2>
          <h2 className="inProgress">IN PROGRESS</h2>
        </div>

        <div className="doneBar bar"></div>
        <div className="doneInfo">
          <h2 className="done-number">{done.toString()}</h2>
          <h2 className="done">DONE WITHIN 14 DAYS</h2>
        </div>
      </div>
    </article>
  );
}
