import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { gsap } from "gsap";

export default function FilterUsers(props) {
  console.log("navigation || FilterUsers.js | FilterUsers()");

  const handleDivisionChange = (event) => {
    props.setChosenDivision(event.target.innerText);
    setTimeout(() => {
      gsap.from(".UserCard", { duration: 1, autoAlpha: 0 });
      gsap.to(".UserCard", { duration: 1, autoAlpha: 1 });
      gsap.from(".UserList", { duration: 0.5, y: 0 });
      gsap.to(".UserList", { duration: 0.5, y: 0 });
    }, 1);
  };
  const handleHoursChange = (event) => {
    props.setChosenHours(event.target.innerText);
    setTimeout(() => {
      gsap.from(".UserCard", { duration: 2, autoAlpha: 0 });
      gsap.to(".UserCard", { duration: 2, autoAlpha: 1 });
      gsap.from(".UserList", { duration: 0.5, y: 0 });
      gsap.to(".UserList", { duration: 0.5, y: 0 });
    }, 1);
  };
  const handleSearch = (e) => {
    props.setSearch(e.target.value);
    setTimeout(() => {
      gsap.from(".UserCard", { duration: 2, autoAlpha: 0 });
      gsap.to(".UserCard", { duration: 2, autoAlpha: 1 });
      gsap.from(".UserList", { duration: 0.5, y: 0 });
      gsap.to(".UserList", { duration: 0.5, y: 0 });
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

  return (
    <nav className="FilterUsers">
      <div className="filter-wrapper">
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

        <Autocomplete
          name="Work hours"
          className="hours"
          label="Work hours"
          required
          options={workHours}
          getOptionLabel={(option) => (option ? option : "")}
          getOptionSelected={(option, value) => option === value}
          onChange={(option) => {
            handleHoursChange(option);
          }}
          renderInput={(params) => <TextField {...params} variant="standard" label="Work hours" placeholder="" />}
        />
      </div>
      <div className="input-wrapper">
        <TextField name="Position" className="searchUsers" label="Search" onChange={handleSearch} />
        <SearchRoundedIcon className="search-icon" />
      </div>
    </nav>
  );
}
