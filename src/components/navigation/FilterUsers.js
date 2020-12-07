import React from "react";
import TextField from "@material-ui/core/TextField";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { GSAP_sortVisibleMobile, GSAP_stagProfilesSort } from "../../jsModules/displayFunctions/gsap";

export default function FilterUsers(props) {
  console.log("navigation || FilterUsers.js | FilterUsers()");
  console.log(props.chosenHours);

  const handleDivisionChange = (e) => {
    const value = e.target.value === "All" ? "" : e.target.value;
    props.setChosenDivision(value);
    setTimeout(() => {
      GSAP_stagProfilesSort();
      GSAP_sortVisibleMobile();
    }, 10);
  };
  const handleHoursChange = (e) => {
    const value = e.target.value === "All" ? "" : e.target.value;
    props.setChosenHours(value);
    setTimeout(() => {
      GSAP_stagProfilesSort();
      GSAP_sortVisibleMobile();
    }, 1);
  };
  const handleSearch = (e) => {
    props.setSearch(e.target.value);
    setTimeout(() => {
      GSAP_stagProfilesSort();
      GSAP_sortVisibleMobile();
    }, 1);
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
  const mappedDivision = divisions.map((division) => (
    <MenuItem value={division} key={division}>
      {division}
    </MenuItem>
  ));
  const mappedHours = workHours.map((hours) => (
    <MenuItem value={hours} key={hours}>
      {hours}
    </MenuItem>
  ));
  return (
    <form className="FilterUsers">
      <div className="filter-wrapper">
        <FormControl className="division">
          <InputLabel id="select-division">Division</InputLabel>
          <Select
            defaultValue=""
            labelId="select-division"
            name="Division"
            label="division"
            onChange={(e) => {
              handleDivisionChange(e);
            }}
            value={props.chosenDivision}>
            <MenuItem value="All" key="All">
              All
            </MenuItem>
            {mappedDivision}
          </Select>
        </FormControl>
        <FormControl className="Work hours">
          <InputLabel id="select-hours">Work hours</InputLabel>
          <Select
            labelId="select-hours"
            name="hours"
            label="hours"
            onChange={(e) => {
              handleHoursChange(e);
            }}
            value={props.chosenHours}>
            <MenuItem value="All" key="All">
              All
            </MenuItem>
            {mappedHours}
          </Select>
        </FormControl>
      </div>
      <div className="input-wrapper">
        <TextField name="Position" className="searchUsers" label="Search" onChange={handleSearch} />
        <SearchRoundedIcon className="search-icon" />
      </div>
    </form>
  );
}
