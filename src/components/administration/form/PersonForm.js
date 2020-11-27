import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import picture from "../../../images/placeholder.png";
import $ from "jquery";
import PublishRoundedIcon from "@material-ui/icons/PublishRounded";
export default function PersonForm(props) {
  // console.log(user !== undefined ? user[0].name : "");

  const handleName = (e) => {
    console.log(" administration/form || PersonForm.js | handleName()");
    props.setName(e.target.value);
    document.querySelector("fieldset.PersonForm > div.input-wrapper > p").classList.add("hide");
  };
  const handleCountry = (e) => {
    console.log(" administration/form || PersonForm.js | handleCountry()");
    props.setCountry(e.target.value);
    document.querySelector("fieldset.PersonForm > div.flex-wrapper > div:nth-child(1) > p").classList.add("hide");
  };
  const handleCity = (e) => {
    console.log(" administration/form || PersonForm.js | handleCity()");
    props.setCity(e.target.value);
    document.querySelector("fieldset.PersonForm > div.flex-wrapper > div:nth-child(2) > p").classList.add("hide");
  };

  //image prewiev
  function preview(e) {
    console.log(" administration/form || PersonForm.js | preview()");
    const file = $("input[type=file]").get(0).files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function () {
        $(".previewImg").attr("src", reader.result);
      };
      reader.readAsDataURL(file);
      props.setUploadedImage(file);
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
  console.log("uploaded: " + props.uploadedImage, "props:" + props.image, "placeholder: " + picture);
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
          /*      error
          helperText="Just to remember how" */
          onChange={(e) => {
            handleName(e);
          }}
        />
        <p className="error hide">You have to fill in a name of the employee</p>
      </div>
      <div className="flex-wrapper">
        <div className="input-wrapper">
          <TextField
            required
            name="Country"
            className="country"
            label="Country"
            value={props.country}
            onFocus={() => {
              props.setFocus(true);
            }}
            onChange={(e) => {
              handleCountry(e);
            }}
          />
          <p className="error hide">Fill in a country</p>
        </div>
        <div className="input-wrapper">
          <TextField
            required
            name="City"
            className="city"
            label="City"
            value={props.city}
            onFocus={() => {
              props.setFocus(true);
            }}
            onChange={(e) => {
              handleCity(e);
            }}
          />
          <p className="error hide">Fill in a city</p>
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

      <img
        className="previewImg"
        src={
          props.uploadedImage
            ? props.uploadedImage
            : props.image
            ? props.image
            : props.uploadedImage
            ? props.uploadedImage
            : picture
        }
        alt={props.state === "edit" ? props.name : "Avatar"}></img>
    </fieldset>
  );
}
