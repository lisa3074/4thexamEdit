import React from "react";
import TextField from "@material-ui/core/TextField";
import image from "../../../images/placeholder.png";
import $ from "jquery";
import PublishRoundedIcon from "@material-ui/icons/PublishRounded";
export default function PersonForm(props) {
  // console.log(user !== undefined ? user[0].name : "");

  const handleName = (e) => {
    props.setName(e.target.value);
    console.log("changed");
  };
  const handleCountry = (e) => {
    props.setCountry(e.target.value);
  };
  const handleCity = (e) => {
    props.setCity(e.target.value);
  };

  console.log(props.image);

  //image prewiev
  function preview(e) {
    console.log("preview");
    const file = $("input[type=file]").get(0).files[0];

    console.log(file);

    if (file) {
      const reader = new FileReader();
      reader.onload = function () {
        $(".previewImg").attr("src", reader.result);
      };
      reader.readAsDataURL(file);
      setTimeout(() => {
        const lastBackSlash = e.target.value.lastIndexOf("\\") + 1;
        const fileName = e.target.value.substring(lastBackSlash, 50);
        document.querySelector(".PersonForm > .upload-wrapper > label > div > p").textContent = fileName;
        props.setImage(fileName ? fileName : "");
        props.setImageFile(file);
        console.log(fileName);
      }, 100);
    }
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
          value={props.name}
          required
          onFocus={() => {
            props.setFocus(true);
          }}
          error={props.text === "" && props.focus}
          onChange={(e) => {
            handleName(e);
          }}
          helperText={props.name === "" && props.focus ? "You need to fill out your name" : " "}
        />
      </div>
      <div className="flex-wrapper">
        <div className="input-wrapper">
          <TextField
            name="Country"
            className="country"
            label="Country"
            value={props.country}
            onChange={(e) => {
              handleCountry(e);
            }}
          />
        </div>
        <div className="input-wrapper">
          <TextField
            name="City"
            className="city"
            label="City"
            value={props.city}
            onChange={(e) => {
              handleCity(e);
            }}
          />
        </div>
      </div>
      <div className="upload-wrapper">
        <label className="custom-upload" htmlFor="file-upload">
          <div className="flex-wrapper">
            <button className="upload-image float-btn">
              <PublishRoundedIcon />
            </button>
            <p>{props.image ? props.image : "Upload image"}</p>
          </div>
          <input
            id="file-upload"
            type="file"
            name="image"
            onChange={(e) => {
              preview(e);
            }}
          />
        </label>
      </div>

      <img className="previewImg" src={image} alt="Placeholder"></img>
    </fieldset>
  );
}
