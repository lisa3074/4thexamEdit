import React from "react";

import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import "../../sass/scss/filterUsers.scss";

export default function FilterTasks(props) {
  console.log("planner || FilterTasks.js | FilterTasks()");

  const handleCategory = (e) => {
    const value = e.target.innerText === "All" ? undefined : e.target.innerText;
    props.setChosenCat(value);
  };
  const handleEmployee = (e) => {
    const value = e.target.innerText === "All" ? undefined : e.target.innerText;
    props.setChosenEmployee(value);
  };

  const categories = [
    { category: "All", color: "" },
    { category: "Design", color: "#374d62" },
    { category: "Support", color: "#f44336" },
    { category: "Development", color: "#1ec69a" },
    { category: "Finance", color: "#9b9b9b" },
    { category: "Sales", color: "#fb6126" },
    { category: "Test", color: "#f0c75d" },
    { category: "UX", color: "#d98c6a" },
    { category: "Marketing", color: "#222224" },
    { category: "Research", color: "#34d0d5" },
    { category: "Documentation", color: "#b4b256" },
  ];
  const users = [
    "All",
    "Lisa Søndergaard",
    "Rune Jensen",
    "Mikkel Hansen",
    "Anja Andersen",
    "Gry Trampedach",
    "Bob Hund",
  ];

  return (
    <nav className="FilterTasks hide">
      <div className="filter-wrapper">
        <Autocomplete
          selectOnFocus={true}
          defaultValue={categories[0]}
          className="category"
          label="Category"
          name="Category"
          options={categories}
          getOptionLabel={(option) => (option.category ? option.category : "")}
          getOptionSelected={(option, value) => option.category === value.category}
          onChange={(option) => {
            handleCategory(option);
          }}
          renderInput={(params) => <TextField {...params} variant="standard" label="Category" placeholder="" />}
        />

        <Autocomplete
          className="select"
          defaultValue={users[0]}
          options={users}
          getOptionLabel={(option) => (option ? option : "")}
          getOptionSelected={(option, value) => option === value}
          onChange={(values) => {
            handleEmployee(values);
          }}
          renderInput={(params) => <TextField {...params} variant="standard" label="Employee" placeholder="" />}
        />
      </div>
    </nav>
  );
}
