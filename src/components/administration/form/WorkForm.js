import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import Autocomplete from "@material-ui/lab/Autocomplete";

export default function WorkForm(props) {
  const { user, level, hours } = props;

  const handleHoursChange = (e) => {
    props.setHours(e.target.innerText);
    e.target.innerText
      ? document.querySelector(".UserForm .hours").setAttribute("data-chosen", true)
      : document.querySelector(".UserForm .hours").setAttribute("data-chosen", false);
  };
  const handleLevelChange = (e) => {
    props.setLevel(e.target.innerText);
    console.log(e.target.innerText);
    e.target.innerText
      ? document.querySelector(".UserForm .level").setAttribute("data-chosen", true)
      : document.querySelector(".UserForm .level").setAttribute("data-chosen", false);
  };

  const handleDateChange = (e) => {
    props.setDate(e.target.value);
  };

  const handlePositionChange = (e) => {
    props.setPosition(e.target.value);
  };
  const handleDivisionChange = (e) => {
    console.log(e.target);
    props.setDivision(e.target.innerText);
    e.target.innerText
      ? document.querySelector(".UserForm .division").setAttribute("data-chosen", true)
      : document.querySelector(".UserForm .division").setAttribute("data-chosen", false);
  };
  const handleEmailChange = (e) => {
    console.log(e.target.parentNode.parentNode.dataset);
    if (e.target.parentNode.parentNode.dataset !== "edit") {
      props.setEmail(e.target.value);
    } else {
      //document.querySelector(".WorkForm .email input").disabled = true;
    }
  };
  console.log(props.email);
  const handleTelChange = (e) => {
    props.setTel(e.target.value);
  };

  const divisions = [
    "Design",
    "Support",
    "Development",
    "Finance",
    "Sales",
    "UX/test",
    "Marketing",
    "Research",
    "Board members",
    "Executive",
  ];
  const workHours = ["Full time", "Part time", "Hourly"];
  const userLevel = ["Administrator", "Regular user", "Board member"];
  const isDisabled = (e) => {
    console.log(e);
    const edit = document.querySelector(".WorkForm .email").dataset === "edit" ? true : false;
    console.log(edit);
    return edit;
  };
  console.log(props.hours);
  return (
    <fieldset name="Work" className="WorkForm hide">
      <h2>WORK</h2>
      <div className="input-wrapper">
        <TextField
          name="Position"
          className="position"
          label="Position"
          required
          value={props.position}
          onChange={handlePositionChange}
        />
      </div>
      <div className="input-wrapper">
        <Autocomplete
          name="Division"
          className="division"
          label="Division"
          required
          options={divisions}
          getOptionLabel={(option) => (option ? option : "")}
          getOptionSelected={(option, value) => option === value}
          onChange={(option) => {
            handleDivisionChange(option);
          }}
          renderInput={(params) => <TextField {...params} variant="standard" label="Division" placeholder="" />}
        />
      </div>

      <div className="input-wrapper">
        <div className="input-wrapper">
          <Autocomplete
            name="Work hours"
            className="hours"
            label="Work hours"
            required
            autoSelect={true}
            options={workHours}
            getOptionLabel={(option) => (option ? option : "")}
            getOptionSelected={(option, value) => option === value}
            onChange={(option) => {
              handleHoursChange(option);
            }}
            renderInput={(params) => <TextField {...params} variant="standard" label="Work hours" placeholder="" />}
          />
        </div>
      </div>
      <div className="input-wrapper">
        <TextField
          className="startDate"
          name="Start date"
          id="date"
          label="On board since"
          type="date"
          value={props.date}
          onChange={handleDateChange}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>

      <div className="input-wrapper">
        <Autocomplete
          name="User level"
          className="level"
          label="User level"
          required
          options={userLevel}
          getOptionLabel={(option) => (option ? option : "")}
          getOptionSelected={(option, value) => option === value}
          onChange={(option) => {
            handleLevelChange(option);
          }}
          renderInput={(params) => <TextField {...params} variant="standard" label="User level" placeholder="" />}
        />
      </div>
      <div className="input-wrapper">
        <TextField
          name="Email"
          className="email"
          type="email"
          label="Email"
          value={props.email}
          onChange={handleEmailChange}
        />
      </div>
      <div className="input-wrapper">
        <TextField
          name="Phone"
          className="phone"
          type="tel"
          label="Phone"
          value={props.tel}
          onChange={handleTelChange}
        />
      </div>
    </fieldset>
  );
}
