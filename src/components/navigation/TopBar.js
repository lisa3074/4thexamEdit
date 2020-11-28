import React from "react";
import TextField from "@material-ui/core/TextField";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import ChatBubbleRoundedIcon from "@material-ui/icons/ChatBubbleRounded";
import PersonAddRoundedIcon from "@material-ui/icons/PersonAddRounded";
import AllInclusiveIcon from "@material-ui/icons/AllInclusive";
import AddRoundedIcon from "@material-ui/icons/AddRounded";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { addTask } from "../planner/modules/mobNavigation";
import { fetchAll } from "../../jsModules/displayFunctions/subMenuNavigation";
import ChatNav from "../chat/ChatNav";
import { chat, scrollToBottom } from "../../jsModules/displayFunctions/mainMenuNavigation";
export default function TopBar(props) {
  console.log("navigation || TopBar.js | TopBar()");
  const handleDivision = (event) => {
    props.setChosenDivision(event.target.innerText);
  };

  const handleHours = (e) => {
    props.setChosenHours(e.target.innerText);
  };
  const handleCategory = (e) => {
    props.setChosenCat(e.target.innerText);
  };
  const handleEmployee = (e) => {
    props.setChosenEmployee(e.target.innerText);
  };
  const handleSearch = (e) => {
    props.setSearch(e.target.value);
  };

  const categories = [
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
  const users = ["Lisa Søndergaard", "Rune Jensen", "Mikkel Hansen", "Anja Andersen", "Gry Trampedach", "Bob Hund"];
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
    <nav className="TopBar">
      <div className="admin-top">
        <div className="grid-wrapper">
          <h2 className="sorted">Sorted by</h2>
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
                handleDivision(option);
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
                handleHours(option);
              }}
              renderInput={(params) => <TextField {...params} variant="standard" label="Work hours" placeholder="" />}
            />
          </div>
          <div className="input-wrapper">
            <TextField name="Position" className="searchUsers" label="Search" onChange={handleSearch} />
            <SearchRoundedIcon className="search-icon" />
          </div>

          <PersonAddRoundedIcon className="add-user admin" />
          <div
            className="float-btn"
            onClick={() => {
              chat();
              scrollToBottom();
            }}>
            <ChatBubbleRoundedIcon />
          </div>
        </div>
      </div>
      <div className="planner-top hide">
        <div className="grid-wrapper">
          <h2 className="sorted">Sorted by</h2>
          <div className="filter-wrapper">
            <Autocomplete
              className="category"
              label="Category"
              name="Category"
              options={categories}
              getOptionLabel={(option) => (option.category ? option.category : "")}
              getOptionSelected={(option, value) => option.category === value.category}
              filterSelectedOptions
              onChange={(option) => {
                handleCategory(option);
              }}
              renderInput={(params) => <TextField {...params} variant="standard" label="Category" placeholder="" />}
            />

            <Autocomplete
              className="select"
              options={users}
              getOptionLabel={(option) => (option ? option : "")}
              getOptionSelected={(option, value) => option === value}
              filterSelectedOptions
              onChange={(values) => {
                handleEmployee(values);
              }}
              renderInput={(params) => <TextField {...params} variant="standard" label="Employee" placeholder="" />}
            />
          </div>
          <div className="input-wrapper"></div>

          <AddRoundedIcon className="add-task" onClick={addTask} />
          <div
            className="float-btn"
            onClick={() => {
              chat();
              scrollToBottom();
            }}>
            <ChatBubbleRoundedIcon />
          </div>
        </div>
      </div>
      <div className="chat-top hide">
        <div className="grid-wrapper">
          <h2 className="sorted">Sorted by</h2>
          <div className="filter-wrapper">
            <ChatNav />
          </div>

          <div className="float-btn all" onClick={fetchAll}>
            {/*   <p>All</p> */}
            <AllInclusiveIcon />
          </div>
        </div>
      </div>
    </nav>
  );
}
