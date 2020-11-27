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
      document.querySelector(".PrivateForm > div.upload-wrapper > p").classList.add("hide");
    }, 100);
  }

  const handleCprChange = (e) => {
    props.setCpr(e.target.value);
    document.querySelector("fieldset.PrivateForm > div:nth-child(2) > p").classList.add("hide");
  };
  const handleAccountChange = (e) => {
    props.setAccount(e.target.value);
    document.querySelector("fieldset.PrivateForm > div:nth-child(3) > p").classList.add("hide");
  };

  const handleAddressChange = (e) => {
    props.setAddress(e.target.value);
    document.querySelector(".PrivateForm > div:nth-child(4) > p").classList.add("hide");
  };
  const handlePostalChange = (e) => {
    props.setPostal(e.target.value);
    document.querySelector(".PrivateForm > div:nth-child(5) > p").classList.add("hide");
  };
  const handleEducationChange = (e) => {
    props.setEducation(e.target.value);
    document.querySelector(".PrivateForm > div:nth-child(7) > p").classList.add("hide");
  };
  const handlePasswordChange = (e) => {
    props.setPassword(e.target.value);
    document.querySelector(".PrivateForm > div.input-wrapper.password-safety > p").classList.add("hide");
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
        <p className="error hide">Fill out a cpr number or something equalient if the employee is not Danish</p>
      </div>
      <div className="input-wrapper">
        <TextField
          name="Account"
          className="account"
          label="Account number"
          value={props.account}
          onChange={handleAccountChange}
        />
        <p className="error hide">Fill out an account number for the employee</p>
      </div>
      <div className="input-wrapper">
        <TextField
          name="Street / house number"
          className="address"
          label="Street / house number"
          value={props.address}
          onChange={handleAddressChange}
        />
        <p className="error hide">Fill in the employees address (street and house number)</p>
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
        <p className="error hide">Fill in the employee's postal code</p>
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
        <p className="error hide">Fill in a temperary password to the account (should be changed by employee later)</p>
      </div>
      <div className="input-wrapper">
        <TextField
          name="Education"
          className="education"
          label="Education"
          value={props.education}
          onChange={handleEducationChange}
        />
        <p className="error hide">Fill in the employee's education and school</p>
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
        <p className="error hide">Upload a contract (.pdf, .jpg or .png)</p>
      </div>
    </fieldset>
  );
}
