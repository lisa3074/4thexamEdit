import React from "react";

import Form from "./Form";
import MobNav from "./MobNav";

export default //navigation component
function Nav(props) {
  return (
    <>
      <nav className="Nav show">
        <div className="bg">
          <h2>ADD TASK</h2>
        </div>
        <Form header={props.header} onFormSubmit={props.onFormSubmit} />
      </nav>
      <MobNav />
    </>
  );
}
