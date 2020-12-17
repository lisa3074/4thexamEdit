import React from "react";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import "../../sass/scss/filterUsers.scss";
import { GSAP_stagCards, GSAP_sortVisibleMobileTasks } from "../../jsModules/displayFunctions/gsap";

export default function FilterTasks(props) {
  //console.log("planner || FilterTasks.js | FilterTasks()");

  const { users } = props;

  const handleCategory = (e) => {
    const value = e.target.value === "All" ? "" : e.target.value;
    props.setChosenCategory(value);
    GSAP_stagCards(props.list);
    GSAP_sortVisibleMobileTasks();
  };
  const handleEmployee = (e) => {
    const value = e.target.value === "All" ? "" : e.target.value;
    props.setChosenEmployee(value);
    GSAP_stagCards(props.list);
    GSAP_sortVisibleMobileTasks();
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
    { category: "Management", color: "#b4b256" },
  ];

  const mappedUsers = users.map((user) => (
    <MenuItem value={user.name} key={user.id}>
      {user.name}
    </MenuItem>
  ));
  const mappedCategories = categories.map((category) => (
    <MenuItem value={category.category} key={category.category}>
      {category.category}
    </MenuItem>
  ));

  return (
    <nav className="FilterTasks">
      <div className="filter-wrapper">
        <FormControl className="category">
          <InputLabel id="select-category">Category</InputLabel>
          <Select
            value={categories.category}
            labelId="select-category"
            name="category"
            label="category"
            onChange={(e) => {
              handleCategory(e);
            }}
            value={props.chosenCategory}>
            {mappedCategories}
          </Select>
        </FormControl>
        <FormControl className="employee">
          <InputLabel id="select-employees">Employees</InputLabel>
          <Select
            labelId="select-employees"
            name="Employees"
            label="Employees"
            onChange={(e) => {
              handleEmployee(e);
            }}
            value={props.chosenEmployee}>
            <MenuItem value="All" key="All">
              All
            </MenuItem>
            {mappedUsers}
          </Select>
        </FormControl>
      </div>
    </nav>
  );
}
