import React from "react";
import ArrowForwardRoundedIcon from "@material-ui/icons/ArrowForwardRounded";
import ClearRoundedIcon from "@material-ui/icons/ClearRounded";
import CheckRoundedIcon from "@material-ui/icons/CheckRounded";
import ArrowBackRoundedIcon from "@material-ui/icons/ArrowBackRounded";
import { clearUserForm } from "../../../jsModules/displayFunctions/displayEditForm";
import { forwards } from "../../../jsModules/displayFunctions/formNavigation";
import { backwards } from "../../../jsModules/displayFunctions/formNavigation";

export default function FormNav(props) {
  function resetForm() {
    props.setImage("");
    props.setCity("");
    props.setName("");
    props.setCountry("");
    props.setPosition("");
    props.setDivision("");
    props.setHours("");
    props.setDate("");
    props.setLevel("");
    props.setEmail("");
    props.setTel("");
    props.setAccount("");
    props.setContact("");
    props.setCpr("");
    props.setEducation("");
    props.setPostal("");
    props.setAddress("");
    props.setUser(undefined);
  }
  console.log(props.user);
  function submit(e) {
    e.preventDefault();
    console.log("submited");
    if (
      document.querySelector(".ViewProfile").classList.contains("hide") &&
      document.querySelector(".password input").value === ""
    ) {
    } else {
      clearUserForm();
      resetForm();
    }
  }

  return (
    <nav className="FormNav">
      <div
        className="float-btn"
        onClick={() => {
          clearUserForm();
          resetForm();
        }}>
        <ClearRoundedIcon />
      </div>
      <div className="float-btn forward" onClick={forwards}>
        <ArrowForwardRoundedIcon />
      </div>
      <div className="float-btn back hide" onClick={backwards}>
        <ArrowBackRoundedIcon />
      </div>
      <button className="float-btn check hide" onClick={submit}>
        <CheckRoundedIcon />
      </button>
    </nav>
  );
}
