import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import image from "../../../images/placeholder.png";
import $ from "jquery";
import PublishRoundedIcon from "@material-ui/icons/PublishRounded";
export default function PersonForm(props) {
  /*   const [focus, setFocus] = useState(false);

  function nameFocus(e) {
    setFocus(true);
  } */

  function preview(e) {
    console.log("preview");
    const file = $("input[type=file]").get(0).files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function () {
        $(".previewImg").attr("src", reader.result);
      };
      reader.readAsDataURL(file);
    }
    const lastBackSlash = e.target.value.lastIndexOf("\\") + 1;
    const fileName = e.target.value.substring(lastBackSlash, 50);
    document.querySelector(".PersonForm > .upload-wrapper > label > div > p").textContent = fileName;
  }
  return (
    <fieldset name="Person" className="PersonForm">
      <h2>PERSON</h2>
      <div className="input-wrapper">
        <TextField
          id="name"
          name="Name"
          className="name"
          label="First and last name"
          value={props.text}
          required
          onFocus={() => {
            props.setFocus(true);
          }}
          error={props.text === "" && props.focus}
          onChange={props.handleName}
          helperText={props.text === "" && props.focus ? "You need to fill out your name" : " "}
        />
      </div>
      <div className="flex-wrapper">
        <div className="input-wrapper">
          <TextField name="Country" className="country" label="Country" />
        </div>
        <div className="input-wrapper">
          <TextField name="City" className="city" label="City" />
        </div>
      </div>
      <div className="upload-wrapper">
        <label className="custom-upload" htmlFor="file-upload">
          <div className="flex-wrapper">
            <button className="upload-image float-btn">
              <PublishRoundedIcon />
            </button>
            <p>Upload image</p>
          </div>
          <input id="file-upload" type="file" name="image" onChange={preview} />
        </label>
      </div>

      <img className="previewImg" src={image} alt="Placeholder"></img>
    </fieldset>
  );
}
