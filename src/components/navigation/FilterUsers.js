import React, { useState } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";

export default function FilterUsers() {
  const [division, setDivision] = useState("");
  const [hours, setHours] = useState("");
  const handleDivisionChange = (event) => {
    setDivision(event.target.value);
  };
  const handleHoursChange = (event) => {
    setHours(event.target.value);
  };

  // console.log(division);
  return (
    <nav className="FilterUsers hide">
      <div className="filter-wrapper">
        <FormControl variant="outlined" className="division">
          <InputLabel htmlFor="division">Division</InputLabel>
          <Select native id="division" value={division} onChange={handleDivisionChange} label="Division">
            <option aria-label="None" value="" />
            <option value="Design">Design</option>
            <option value="Development">Development</option>
            <option value="Finance">Finance</option>
          </Select>
        </FormControl>
        <FormControl variant="outlined" className="hours">
          <InputLabel htmlFor="workHours">Work hours</InputLabel>
          <Select native id="workHours" value={hours} onChange={handleHoursChange} label="Division">
            <option aria-label="None" value="" />
            <option value="Full time">Full time</option>
            <option value="Part time">Part time</option>
            <option value="Hourly">Hourly</option>
          </Select>
        </FormControl>
      </div>
      <div className="input-wrapper">
        <TextField name="Position" className="searchUsers" label="Search" />
        <SearchRoundedIcon className="search-icon" />
      </div>
    </nav>
  );
}
