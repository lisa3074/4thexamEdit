import React from "react";
import PlannerForm from "./PlannerForm";

export default //navigation component
function NewTask(props) {
  return (
    <>
      <nav className="NewTask showNew hide">
        <PlannerForm header={props.header} onFormSubmit={props.onFormSubmit} />
      </nav>
    </>
  );
}
