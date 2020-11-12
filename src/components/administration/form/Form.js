import React, { useState } from "react";
import FormNav from "./FormNav";
import PersonForm from "./PersonForm";
import PrivateForm from "./PrivateForm";
import WorkForm from "./WorkForm";
export default function Form() {
  const [text, setText] = useState("");
  const [focus, setFocus] = useState(false);
  //Til skræk og advarsel. Skal sansynligvis helt op til App.js og indlæses af både ProfileView.js og FormNav.js
  function handleName(e) {
    setText(e.target.value);
  }

  return (
    <form className="Form">
      <PersonForm text={text} handleName={handleName} setFocus={setFocus} focus={focus} />
      <WorkForm />
      <PrivateForm />
      <FormNav setText={setText} />
    </form>
  );
}
