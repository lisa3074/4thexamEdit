import React from "react";
import TextField from "@material-ui/core/TextField";
import $ from "jquery";
import PublishRoundedIcon from "@material-ui/icons/PublishRounded";

export default function PersonForm(props) {
  //console.log("administration/form || PersonForm.js | PersonForm()");

  const handleName = (e) => {
    props.setName(e.target.value);
    document.querySelector("fieldset.PersonForm > div.input-wrapper > p").classList.add("hide");
  };
  const handleCountry = (e) => {
    props.setCountry(e.target.value);
    document.querySelector("fieldset.PersonForm > div.flex-wrapper > div:nth-child(1) > p").classList.add("hide");
  };
  const handleCity = (e) => {
    props.setCity(e.target.value);
    document.querySelector("fieldset.PersonForm > div.flex-wrapper > div:nth-child(2) > p").classList.add("hide");
  };

  //image prewiev
  function preview(e) {
    //console.log(" administration/form || PersonForm.js | preview()");
    const uploadedImage = $("#file-upload").get(0).files[0];
    if (uploadedImage) {
      const reader = new FileReader();
      reader.onload = function () {
        $(".previewImg").attr("src", reader.result);
      };
      reader.readAsDataURL(uploadedImage);
      props.setUploadedImage(uploadedImage);
      setTimeout(() => {
        const lastBackSlash = e.target.value.lastIndexOf("\\") + 1;
        const fileName = e.target.value.substring(lastBackSlash, 50);
        document.querySelector(".PersonForm > .upload-wrapper > label > div > p").textContent = fileName;
        props.setImage(fileName ? fileName : "");
        props.setImageFile(uploadedImage);
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
            <p>{props.image ? "Change your profile picture" : "Upload image"}</p>
          </div>
          <input
            id="file-upload"
            type="file"
            name="image"
            accept=".png,.jpg,.jpeg,.svg"
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
            : /*  : props.uploadedImage
            ? props.uploadedImage */
              "https://firebasestorage.googleapis.com/v0/b/mmdfinalexam.appspot.com/o/profile_pictures%2Fplaceholder.png?alt=media&token=c06d8e7a-6812-45d0-bff1-af790d20f5b8"
        }
        alt={props.state === "edit" ? props.name : "Avatar"}></img>
    </fieldset>
  );
}
