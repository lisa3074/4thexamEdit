import React from "react";
import { done, doing, todo, addTask } from "./modules/mobNavigation";

export default function MobNav(props) {
  return (
    <section className="mob_nav">
      <div onClick={done} className="navDone">
        <p>Done</p>
      </div>
      <div onClick={doing} className="navDoing">
        <p>Doing</p>
      </div>
      <div onClick={todo} className="navTodo">
        <p>To do</p>
      </div>
      <div onClick={addTask} className="navAdd">
        <p>Add task</p>
      </div>
    </section>
  );
}
