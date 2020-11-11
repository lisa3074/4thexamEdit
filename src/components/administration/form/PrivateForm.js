import React from "react";
import TextField from "@material-ui/core/TextField";
export default function PrivateForm() {
  return (
    <fieldset className="PrivateForm hide">
      <h2>PRIVATE</h2>
      <div className="input-wrapper">
        <TextField name="CPR" className="cpr" label="CPR or equalient" error helperText="Just to remember how" />
      </div>
      <div className="input-wrapper">
        <TextField name="Account number" className="account" label="Account number" />
      </div>
      <div className="input-wrapper">
        <TextField name="Street / house number" className="address" label="Street / house number" />
      </div>
      <div className="input-wrapper">
        <TextField name="Postal number" type="number" className="postal" label="Postal code" />
      </div>
      <div className="input-wrapper">
        <TextField name="Education" className="education" label="Education" />
      </div>
      <div className="input-wrapper">
        <TextField name="Phone" className="phone" type="tel" label="Phone" />
      </div>
      <div className="input-wrapper">
        <TextField name="Password" className="password" label="Password" required />
      </div>
    </fieldset>
  );
}
