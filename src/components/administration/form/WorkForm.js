import React from "react";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";

export default function WorkForm(props) {
  console.log("administration/form || WorkForm.js | WorkForm()");
  const { user, level, hours, division } = props;

  const handleHoursChange = (e) => {
    props.setHours(e.target.value);
    document.querySelector("fieldset.WorkForm > div:nth-child(4) > p").classList.add("hide");
    e.target.value
      ? document.querySelector(".UserForm .hours").setAttribute("data-chosen", true)
      : document.querySelector(".UserForm .hours").setAttribute("data-chosen", false);
  };
  const handleLevelChange = (e) => {
    props.setLevel(e.target.value);
    document.querySelector("fieldset.WorkForm > div:nth-child(6) > p").classList.add("hide");

    e.target.value
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
    props.setDivision(e.target.value);
    document.querySelector("fieldset.WorkForm > div:nth-child(3) > p").classList.add("hide");
    e.target.value
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
  const mappedDivisions = divisions.map((division) => (
    <MenuItem value={division} key={division}>
      {division}
    </MenuItem>
  ));
  const workHours = ["Full time", "Part time", "Hourly"];
  const mappedHours = workHours.map((hours) => (
    <MenuItem value={hours} key={hours}>
      {hours}
    </MenuItem>
  ));
  const userLevel = ["Administrator", "Regular user", "Board member"];
  const mappedLevel = userLevel.map((level) => (
    <MenuItem value={level} key={level}>
      {level}
    </MenuItem>
  ));

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
        <FormControl className="division" data-chosen={false}>
          <InputLabel id="select-division">Division *</InputLabel>
          <Select
            labelId="select-division"
            name="division"
            label="Division"
            onChange={(e) => {
              handleDivisionChange(e);
            }}
            value={division}>
            {mappedDivisions}
            {console.log(division)}
          </Select>
        </FormControl>
        <p className="error hide">Fill in a division</p>
      </div>

      <div className="input-wrapper">
        <FormControl className="hours" data-chosen={false}>
          <InputLabel id="select-hours">Work hours *</InputLabel>
          <Select
            labelId="select-hours"
            name="Work hours"
            label="Work hours"
            onChange={(e) => {
              handleHoursChange(e);
            }}
            value={props.hours}>
            {mappedHours}
            {console.log(props.hours)}
          </Select>
        </FormControl>
        <p className="error hide">Fill how many hours the employee works</p>
      </div>
      <div className="input-wrapper">
        <TextField
          required
          onKeyDown="return false"
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
        <FormControl className="level" data-chosen={false}>
          <InputLabel id="select-level">User level *</InputLabel>
          <Select
            labelId="select-level"
            name="User level"
            label="User level"
            onChange={(e) => {
              handleLevelChange(e);
            }}
            value={props.level}>
            {mappedLevel}
            {console.log(props.level)}
          </Select>
        </FormControl>
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
