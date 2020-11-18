import React, { useState } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import "../../sass/scss/filterUsers.scss";

export default function FilterTasks() {
  console.log("planner/FilterTasks.js || FilterTasks()");
  const [category, setCategory] = useState("");
  const [emplpyee, setEmployee] = useState("");
  const handleCategoryChange = (event) => {
    console.log("planner/FilterTasks.js || handleCategoryChange()");
    setCategory(event.target.value);
  };
  const handleEmployeeChange = (event) => {
    console.log("planner/FilterTasks.js || handleEmployeeChange()");
    setEmployee(event.target.value);
  };

  return (
    <nav className="FilterTasks hide">
      <div className="filter-wrapper">
        <FormControl variant="outlined" className="category">
          <InputLabel htmlFor="category">Category</InputLabel>
          <Select native id="category" value={category} onChange={handleCategoryChange} label="Category">
            <option aria-label="None" value="" />
            <option value="Design">Design</option>
            <option value="Development">Development</option>
            <option value="Finance">Finance</option>
          </Select>
        </FormControl>
        <FormControl variant="outlined" className="employee">
          <InputLabel htmlFor="employee">Work hours</InputLabel>
          <Select native id="employee" value={emplpyee} onChange={handleEmployeeChange} label="Employee">
            <option aria-label="None" value="" />
            <option value="Full time">Full time</option>
            <option value="Part time">Part time</option>
            <option value="Hourly">Hourly</option>
          </Select>
        </FormControl>
      </div>
    </nav>
  );
}
