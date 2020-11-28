import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

export default function WorkForm(props) {
  console.log("administration/form || WorkForm.js | WorkForm()");
  const { user, level, hours } = props;

  const handleHoursChange = (e) => {
    props.setHours(e.target.innerText);
    document.querySelector("fieldset.WorkForm > div:nth-child(4) > p").classList.add("hide");
    e.target.innerText
      ? document.querySelector(".UserForm .hours").setAttribute("data-chosen", true)
      : document.querySelector(".UserForm .hours").setAttribute("data-chosen", false);
  };
  const handleLevelChange = (e) => {
    props.setLevel(e.target.innerText);
    document.querySelector("fieldset.WorkForm > div:nth-child(6) > p").classList.add("hide");

    e.target.innerText
      ? document.querySelector(".UserForm .level").setAttribute("data-chosen", true)
      : document.querySelector(".UserForm .level").setAttribute("data-chosen", false);
  };

  const handleDateChange = (e) => {
    props.setDate(e.target.value);
    document.querySelector("fieldset.WorkForm > div:nth-child(5) > p").classList.add("hide");
  };

  const handlePositionChange = (e) => {
    props.setPosition(e.target.value);
    document.querySelector("fieldset.WorkForm > div:nth-child(2) > p").classList.add("hide");
  };
  const handleDivisionChange = (e) => {
    props.setDivision(e.target.innerText);
    document.querySelector("fieldset.WorkForm > div:nth-child(3) > p").classList.add("hide");
    e.target.innerText
      ? document.querySelector(".UserForm .division").setAttribute("data-chosen", true)
      : document.querySelector(".UserForm .division").setAttribute("data-chosen", false);
  };
  const handleEmailChange = (e) => {
    props.setEmail(e.target.value);
    document.querySelector("fieldset.WorkForm > div:nth-child(7) > p").classList.add("hide");
  };
  const handleTelChange = (e) => {
    props.setTel(e.target.value);
    document.querySelector("fieldset.WorkForm > div:nth-child(8) > p").classList.add("hide");
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
  /*   const isDisabled = (e) => {

    const edit = document.querySelector(".WorkForm .email").dataset === "edit" ? true : false;
    console.log(edit);
    return edit;
  }; */
  return (
    <fieldset name="Work" className="WorkForm hide">
      <h2>WORK</h2>
      <div className="input-wrapper">
        <TextField
          required
          name="Position"
          className="position"
          label="Position"
          required
          value={props.position}
          onChange={handlePositionChange}
        />
        <p className="error hide">Fill in a position</p>
      </div>
      <div className="input-wrapper">
        <Autocomplete
          required
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
          renderInput={(params) => <TextField {...params} variant="standard" label="Division *" placeholder="" />}
          data-chosen={false}
        />
        <p className="error hide">Fill in a division</p>
      </div>

      <div className="input-wrapper">
        <Autocomplete
          data-chosen={false}
          required
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
          renderInput={(params) => <TextField {...params} variant="standard" label="Work hours *" placeholder="" />}
        />
        <p className="error hide">Fill how many hours the employee works</p>
      </div>
      <div className="input-wrapper">
        <TextField
          required
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
        <p className="error hide">Fill in a start date</p>
      </div>

      <div className="input-wrapper">
        <Autocomplete
          data-chosen={false}
          required
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
          renderInput={(params) => <TextField {...params} variant="standard" label="User level *" placeholder="" />}
        />
        <p className="error hide">Fill in the employee's user level clearance for this system</p>
      </div>
      <div className="input-wrapper">
        <TextField
          required
          name="Email"
          className="email"
          type="email"
          label="Email"
          value={props.email}
          onChange={handleEmailChange}
        />
        <p className="error hide">Fill in an email</p>
      </div>
      <div className="input-wrapper">
        <TextField
          required
          name="Phone"
          className="phone"
          type="tel"
          label="Phone"
          value={props.tel}
          onChange={handleTelChange}
        />
        <p className="error hide">Fill in a phone number</p>
      </div>
    </fieldset>
  );
}
