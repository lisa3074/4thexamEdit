import React, { useState } from "react";
import Form from "./Form";
import FormPath from "./FormPath";
import FormNav from "./FormNav";
import PersonForm from "./PersonForm";
import PrivateForm from "./PrivateForm";
import WorkForm from "./WorkForm";
export default function UserForm() {
  const [user, setUser] = useState([]);

  return (
    <section className="UserForm hide">
      <FormPath />
      <Form />
    </section>
  );
}
