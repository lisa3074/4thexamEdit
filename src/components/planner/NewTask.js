import React from "react";

import PlannerForm from "./PlannerForm";
import MobNav from "./MobNav";

export default //navigation component
function NewTask(props) {
  return (
    <>
      <nav className="NewTask show hide">
        <PlannerForm header={props.header} onFormSubmit={props.onFormSubmit} />
      </nav>
      <MobNav />
    </>
  );
}
