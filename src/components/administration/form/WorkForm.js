import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";

export default function WorkForm(props) {
  const { user, level, hours } = props;
  let today;
  props.date !== undefined ? (today = new Date(props.date)) : (today = new Date());
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  const yyyy = today.getFullYear();
  props.setDate(`${yyyy}-${mm}-${dd}`);

  const handleHoursChange = (e) => {
    props.setHours(e.target.value);
  };
  const handleLevelChange = (e) => {
    props.setLevel(e.target.value);
  };

  const handleDateChange = (e) => {
    props.setDate(e.target.value);
  };

  const handlePositionChange = (e) => {
    props.setPosition(e.target.value);
  };
  const handleDivisionChange = (e) => {
    props.setDivision(e.target.value);
  };
  const handleEmailChange = (e) => {
    props.setEmail(e.target.value);
  };
  const handleTelChange = (e) => {
    props.setTel(e.target.value);
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
        <TextField
          name="Division"
          className="division"
          label="Division"
          required
          value={props.division}
          onChange={handleDivisionChange}
        />
      </div>

      <div className="input-wrapper">
        <FormControl>
          <InputLabel id="hours">Work hours</InputLabel>
          <Select
            name="Work hours"
            className="hours"
            labelId="hours"
            value={hours}
            onChange={(e) => {
              handleHoursChange(e);
            }}
            required>
            {console.log(hours)}
            <MenuItem value=" ">Choose</MenuItem>
            <MenuItem value="Full time">Full time</MenuItem>
            <MenuItem value="Part time">Part time</MenuItem>
            <MenuItem value="Hourly">Hourly</MenuItem>
          </Select>
        </FormControl>
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
        <FormControl>
          <InputLabel htmlFor="level">User level</InputLabel>
          <Select name="User level" className="level" id="level" value={level} onChange={handleLevelChange} required>
            {console.log(level)}
            <MenuItem value="Admin">Administrator</MenuItem>
            <MenuItem value="Regular">Regular user</MenuItem>
            <MenuItem value="Board">Board member</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="input-wrapper">
        <TextField
          name="Email"
          className="email"
          type="email"
          label="Email"
          required
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
