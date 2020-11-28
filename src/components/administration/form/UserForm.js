import React, { useState } from "react";
import Form from "./Form";
import FormPath from "./FormPath";

export default function UserForm(props) {
  console.log("administration/form || UserForm.js | UserForm()");
  return (
    <section className="UserForm hide ">
      <FormPath />
      <Form
        chosenUser={props.chosenUser}
        setChosenUser={props.setChosenUser}
        id={props.id}
        state={props.state}
        setState={props.setState}
      />
    </section>
  );
}
