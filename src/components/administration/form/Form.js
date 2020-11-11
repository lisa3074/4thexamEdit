import React from "react";
import FormNav from "./FormNav";
import PersonForm from "./PersonForm";
import PrivateForm from "./PrivateForm";
import WorkForm from "./WorkForm";
export default function Form() {
  return (
    <form className="Form">
      <PersonForm />
      <WorkForm />
      <PrivateForm />
      <FormNav />
    </form>
  );
}
