import React, { useState } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import ChatBubbleRoundedIcon from "@material-ui/icons/ChatBubbleRounded";
import PersonAddRoundedIcon from "@material-ui/icons/PersonAddRounded";
import AddRoundedIcon from "@material-ui/icons/AddRounded";
export default function TopBar(props) {
  console.log(props);
  const [division, setDivision] = useState("");
  const [hours, setHours] = useState("");
  const [category, setCategory] = useState("");
  const [employee, setEmployee] = useState("");
  const handleDivision = (event) => {
    setDivision(event.target.value);
  };
  const handleHours = (event) => {
    setHours(event.target.value);
  };
  const handleCategory = (event) => {
    setCategory(event.target.value);
  };
  const handleEmployee = (event) => {
    setEmployee(event.target.value);
  };

  return (
    <nav className="TopBar">
      <div className="admin-top">
        <div className="grid-wrapper">
          <h2 className="sorted">Sorted by</h2>
          <div className="filter-wrapper">
            <FormControl className="division">
              <InputLabel htmlFor="division">Division</InputLabel>
              <Select native id="division" value={division} onChange={handleDivision} displayEmpty label="Division">
                <option aria-label="None" value="" />
                <option value="Design">Design</option>
                <option value="Development">Development</option>
                <option value="Finance">Finance</option>
              </Select>
            </FormControl>
            <FormControl className="hours">
              <InputLabel htmlFor="workHours">Work hours</InputLabel>
              <Select native id="workHours" value={hours} onChange={handleHours} label="Division">
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

          <PersonAddRoundedIcon className="add-user" />
          <div className="float-btn">
            <ChatBubbleRoundedIcon />
          </div>
        </div>
      </div>
      <div className="planner-top hide">
        <div className="grid-wrapper">
          <h2 className="sorted">Sorted by</h2>
          <div className="filter-wrapper">
            <FormControl className="select">
              <InputLabel htmlFor="category">Category</InputLabel>
              <Select native id="category" value={category} onChange={handleCategory} label="Category">
                <option aria-label="None" value="" />
                <option value="Design">Design</option>
                <option value="Development">Development</option>
                <option value="Finance">Finance</option>
              </Select>
            </FormControl>
            <FormControl className="select">
              <InputLabel htmlFor="employee">Employee</InputLabel>
              <Select native id="employee" value={employee} onChange={handleEmployee} label="Emplyoee">
                <option aria-label="None" value="" />
                <option value="Lisa Søndergaard">Lisa Søndergaard</option>
                <option value="Christina Jørgensen">Christina Jørgensen </option>
                <option value="Louie Marino">Louie Marino</option>
              </Select>
            </FormControl>
          </div>
          <div className="input-wrapper"></div>

          <AddRoundedIcon className="add-task" />
          <div className="float-btn">
            <ChatBubbleRoundedIcon />
          </div>
        </div>
      </div>
    </nav>
  );
}
