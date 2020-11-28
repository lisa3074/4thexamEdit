import React from "react";

export default function WorkLoad() {
  console.log("administration/viewProfile || ViewProfile.js | WorkLoad()");
  return (
    <article className="WorkLoad userCard">
      <h2 className="heading">WORKLOAD</h2>
      <div className="info-wrapper">
        {/*   <div className="bar-wrapper"> */}
        <div className="todoBar"></div>
        <div className="todoInfo">
          <h2 className="todo">TO DO</h2>
          <h2 className="todo-number">3</h2>
        </div>
        {/*  </div> */}

        {/* <div className="bar-wrapper"> */}
        <div className="progressBar"></div>
        <div className="progressInfo">
          <h2 className="progress-number">2</h2>
          <h2 className="inProgress">IN PROGRESS</h2>
        </div>
        {/*  </div> */}

        {/*     <div className="bar-wrapper"> */}
        <div className="doneBar"></div>
        <div className="doneInfo">
          <h2 className="done-number">23</h2>
          <h2 className="done">DONE WITHIN 30 DAYS</h2>
        </div>
      </div>
      {/*    </div> */}
    </article>
  );
}
