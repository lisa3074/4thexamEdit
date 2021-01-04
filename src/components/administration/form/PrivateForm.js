import React from "react";
import TextField from "@material-ui/core/TextField";
import $ from "jquery";
import PublishRoundedIcon from "@material-ui/icons/PublishRounded";
export default function PrivateForm(props) {
  //console.log("administration/form || PrivateForm.js | PrivateForm()");

  function findFileName(e) {
    const file = $("#pdf-upload").get(0).files[0];
    if (file) {
      const readerFile = new FileReader();
      readerFile.readAsDataURL(file);
      setTimeout(() => {
        props.setContractFile(file);
      }, 100);
    }
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
          required
          type="text"
          value={props.cpr}
          inputProps={{ maxLength: 16 }}
          onChange={handleCprChange}
        />
        <p className="error hide">Fill out a cpr number or something equalient if the employee is not Danish</p>
      </div>
      <div className="input-wrapper">
        <TextField
          required
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
          required
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
          required
          name="Postal number"
          type="number"
          className="postal"
          label="Postal code"
          onInput={(e) => {
            e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 8);
          }}
          value={props.postal}
          onChange={handlePostalChange}
        />
        <p className="error hide">Fill in the employee's postal code. Use only numbers!</p>
      </div>
      <div className="input-wrapper password-safety">
        <TextField
          required
          name="Password"
          className="password"
          label="Password"
          value={props.password}
          onChange={handlePasswordChange}
        />
        <p className="error hide">Fill in a temperary password to the account (should be changed by employee later)</p>
      </div>
      <div className="input-wrapper">
        <TextField
          required
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
            <p>
              {props.contract
                ? `A contract for ${props.name} has been stored. Click here if you want to replace the contract.`
                : "Upload contract*"}
            </p>
          </div>
          <input id="pdf-upload" type="file" name="image" accept=".pdf,.doc,.docx,.jpeg,.png" onChange={findFileName} />
        </label>
        <p className="error hide">Upload a contract (.pdf, .jpg or .png)</p>
      </div>
    </fieldset>
  );
}
