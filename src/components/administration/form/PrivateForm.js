import React from "react";
import TextField from "@material-ui/core/TextField";
import PublishRoundedIcon from "@material-ui/icons/PublishRounded";
export default function PrivateForm() {
  function findFileName(e) {
    const lastBackSlash = e.target.value.lastIndexOf("\\") + 1;
    const fileName = e.target.value.substring(lastBackSlash, 50);
    document.querySelector(".PrivateForm > .upload-wrapper > label > div > p").textContent = fileName;
  }
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

      <div className="input-wrapper password-safety">
        <TextField name="Password" className="password" label="Password" required />
      </div>
      <div className="upload-wrapper">
        <label className="custom-upload" htmlFor="pdf-upload">
          <div className="flex-wrapper">
            <button className="upload-image float-btn">
              <PublishRoundedIcon />
            </button>
            <p>Upload contract (.pdf)</p>
          </div>
          <input id="pdf-upload" type="file" name="image" onChange={findFileName} />
        </label>
      </div>
    </fieldset>
  );
}
