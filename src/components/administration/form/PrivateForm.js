import React from "react";
import TextField from "@material-ui/core/TextField";
import PublishRoundedIcon from "@material-ui/icons/PublishRounded";
export default function PrivateForm(props) {
  function findFileName(e) {
    const lastBackSlash = e.target.value.lastIndexOf("\\") + 1;
    const fileName = e.target.value.substring(lastBackSlash, 50);
    document.querySelector(".PrivateForm > .upload-wrapper > label > div > p").textContent = fileName;
  }

  const handleCprChange = (e) => {
    props.setCpr(e.target.value);
    console.log("changed");
  };
  const handleAccountChange = (e) => {
    props.setAccount(e.target.value);
  };
  const handleContractChange = (e) => {
    props.setContract(e.target.value);
  };
  const handleAddressChange = (e) => {
    props.setAddress(e.target.value);
  };
  const handlePostalChange = (e) => {
    props.setPostal(e.target.value);
  };
  const handleEducationChange = (e) => {
    props.setEducation(e.target.value);
  };

  return (
    <fieldset className="PrivateForm hide">
      <h2>PRIVATE</h2>
      <div className="input-wrapper">
        <TextField
          name="CPR"
          className="cpr"
          label="CPR or equalient"
          /*      error
          helperText="Just to remember how" */
          value={props.cpr}
          onChange={handleCprChange}
        />
      </div>
      <div className="input-wrapper">
        <TextField
          name="Account number"
          className="account"
          label="Account number"
          value={props.account}
          onClick={handleAccountChange}
        />
      </div>
      <div className="input-wrapper">
        <TextField
          name="Street / house number"
          className="address"
          label="Street / house number"
          value={props.address}
          onClick={handleAddressChange}
        />
      </div>
      <div className="input-wrapper">
        <TextField
          name="Postal number"
          type="number"
          className="postal"
          label="Postal code"
          value={props.postal}
          onClick={handlePostalChange}
        />
      </div>
      <div className="input-wrapper">
        <TextField
          name="Education"
          className="education"
          label="Education"
          value={props.education}
          onClick={handleEducationChange}
        />
      </div>

      <div className="input-wrapper password-safety">
        <TextField
          name="Password"
          className="password"
          label="Password"
          required
          value={props.password}
          onClick={handleContractChange}
        />
      </div>
      <div className="upload-wrapper">
        <label className="custom-upload" htmlFor="pdf-upload">
          <div className="flex-wrapper">
            <button className="upload-image float-btn">
              <PublishRoundedIcon />
            </button>
            <p>{props.contract}</p>
          </div>
          <input id="pdf-upload" type="file" name="image" onChange={findFileName} />
        </label>
      </div>
    </fieldset>
  );
}
