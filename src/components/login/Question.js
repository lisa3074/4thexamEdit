import React from "react";
export default function Question() {
  //console.log("login || Question.js | Question()");
  return (
    <div className="Question hide">
      <h2>Why can I not sign up?</h2>
      <p>
        To sign in, you need a login from one of the administrators. You can not sign up yourself. If you work for
        Skatteguiden, and have not yet been given a login, you can contact an admin by clicking{" "}
        <a href="mailto:admin@skatteguiden.dk">here</a>.
      </p>
    </div>
  );
}
