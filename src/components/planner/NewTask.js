import React from "react";

import Form from "./Form";
import MobNav from "./MobNav";

export default //navigation component
function NewTask(props) {
  return (
    <>
      <nav className="NewTask show hide">
        <Form header={props.header} onFormSubmit={props.onFormSubmit} />
      </nav>
      <MobNav />
    </>
  );
}
