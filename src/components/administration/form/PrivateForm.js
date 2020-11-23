import React from "react";
import TextField from "@material-ui/core/TextField";
import PublishRoundedIcon from "@material-ui/icons/PublishRounded";
export default function PrivateForm(props) {
  console.log(props);

  function findFileName(e) {
    setTimeout(() => {
      const lastBackSlash = e.target.value.lastIndexOf("\\") + 1;
      const fileName = e.target.value.substring(lastBackSlash, 50);
      document.querySelector(".PrivateForm > .upload-wrapper > label > div > p").textContent = fileName;
      props.setContract(fileName);
    }, 100);
  }

  const handleCprChange = (e) => {
    props.setCpr(e.target.value);
    console.log("changed");
  };
  const handleAccountChange = (e) => {
    props.setAccount(e.target.value);
  };
  /*  const handleContractChange = (e) => {
    props.setContract(e.target.value);
  }; */
  const handleAddressChange = (e) => {
    props.setAddress(e.target.value);
  };
  const handlePostalChange = (e) => {
    props.setPostal(e.target.value);
  };
  const handleEducationChange = (e) => {
    props.setEducation(e.target.value);
  };
  const handlePasswordChange = (e) => {
    props.setPassword(e.target.value);
  };
  console.log(props.cpr);
  console.log(props.account);
  console.log(props.address);
  console.log(props.postal);
  console.log(props.education);

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
          name="Account"
          className="account"
          label="Account number"
          value={props.account}
          onChange={handleAccountChange}
        />
      </div>
      <div className="input-wrapper">
        <TextField
          name="Street / house number"
          className="address"
          label="Street / house number"
          value={props.address}
          onChange={handleAddressChange}
        />
      </div>
      <div className="input-wrapper">
        <TextField
          name="Postal number"
          type="number"
          className="postal"
          label="Postal code"
          value={props.postal}
          onChange={handlePostalChange}
        />
      </div>
      <div className="input-wrapper">
        <TextField
          name="Education"
          className="education"
          label="Education"
          value={props.education}
          onChange={handleEducationChange}
        />
      </div>

      <div className="input-wrapper password-safety">
        <TextField
          name="Password"
          className="password"
          label="Password"
          required
          value={props.password}
          onChange={handlePasswordChange}
        />
      </div>
      <div className="upload-wrapper">
        <label className="custom-upload" htmlFor="pdf-upload">
          <div className="flex-wrapper">
            <button className="upload-image float-btn">
              <PublishRoundedIcon />
            </button>
            <p>{props.contract ? props.contract : "Upload contract"}</p>
          </div>
          <input id="pdf-upload" type="file" name="image" onChange={findFileName} />
        </label>
      </div>
    </fieldset>
  );
}
