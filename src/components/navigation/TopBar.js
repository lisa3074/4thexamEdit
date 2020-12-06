import React from "react";
import TextField from "@material-ui/core/TextField";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import ChatBubbleRoundedIcon from "@material-ui/icons/ChatBubbleRounded";
import PersonAddRoundedIcon from "@material-ui/icons/PersonAddRounded";
import AllInclusiveIcon from "@material-ui/icons/AllInclusive";
import AddRoundedIcon from "@material-ui/icons/AddRounded";
import Autocomplete from "@material-ui/lab/Autocomplete";

import { addTask } from "../planner/modules/mobNavigation";
import ChatNav from "../chat/ChatNav";
import { chat, scrollToBottom, newUser } from "../../jsModules/displayFunctions/mainMenuNavigation";
import { fetchAll } from "../../jsModules/displayFunctions/subMenuNavigation";
import { gsap } from "gsap";
import {
  hideViewProfile,
  showChat,
  staggeringCardsDesktop,
  staggeringProfilesFilter,
} from "../../jsModules/displayFunctions/staggeringCards";
export default function TopBar(props) {
  console.log("navigation || TopBar.js | TopBar()");

  const handleChanges = (module) => {
    document.querySelectorAll(".UserCard, .panelMargin").forEach((card) => {
      card.style.opacity = "0";
    });
    module === "admin" ? staggeringProfilesFilter() : staggeringCardsDesktop();
  };

  const handleSearch = (e) => {
    props.setSearch(e.target.value);
    staggeringProfilesFilter();
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
    { category: "Management", color: "#b4b256" },
  ];

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
    <nav className="TopBar" data-state="">
      <div className="admin-top">
        <div className={props.level === "Administrator" ? "grid-wrapper" : "grid-wrapper noNewUser"}>
          <h2 className="sorted">Sorted by</h2>
          <div className="filter-wrapper">
            <Autocomplete
              name="Division"
              className="division"
              label="Division"
              required
              disabled={props.viewingProfile ? true : false}
              options={divisions}
              getOptionLabel={(option) => (option ? option : "")}
              getOptionSelected={(option, value) => option === value}
              onChange={(option) => {
                handleChanges("admin");
                props.setChosenDivision(option.target.innerText === undefined ? "" : option.target.innerText);
              }}
              renderInput={(params) => <TextField {...params} variant="standard" label="Division" placeholder="" />}
            />

            <Autocomplete
              name="Work hours"
              className="hours"
              label="Work hours"
              required
              disabled={props.viewingProfile ? true : false}
              options={workHours}
              getOptionLabel={(option) => (option ? option : "")}
              getOptionSelected={(option, value) => option === value}
              onChange={(option) => {
                handleChanges("admin");
                props.setChosenHours(option.target.innerText === undefined ? "" : option.target.innerText);
              }}
              renderInput={(params) => <TextField {...params} variant="standard" label="Work hours" placeholder="" />}
            />
          </div>
          <div className="input-wrapper">
            <TextField
              name="Position"
              className="searchUsers"
              label="Search"
              onChange={handleSearch}
              disabled={props.viewingProfile ? true : false}
            />
            <SearchRoundedIcon className="search-icon" />
          </div>

          <PersonAddRoundedIcon
            className={props.level === "Administrator" ? "add-user" : "add-user hiddenFromUser"}
            onClick={() => {
              newUser();
              props.setTool("admin");
              props.setViewingProfile(false);
              gsap.to(".UserForm", { duration: 0.5, opacity: 1 });
              hideViewProfile();
            }}
          />
          <div
            className="float-btn"
            onClick={() => {
              chat();
              scrollToBottom();
              gsap.from(".message-container", { duration: 1, opacity: 0 });
              gsap.to(".message-container", { duration: 1, opacity: 1 });
              hideViewProfile();
              props.setViewingProfile(false);
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
                handleChanges("planner");
                props.setChosenCategory(option.target.innerText === undefined ? "" : option.target.innerText);
              }}
              renderInput={(params) => <TextField {...params} variant="standard" label="Category" placeholder="" />}
            />

            <Autocomplete
              className="select employee"
              options={props.users}
              getOptionLabel={(option) => (option.name ? option.name : "")}
              getOptionSelected={(option, value) => option === value}
              filterSelectedOptions
              onChange={(option) => {
                handleChanges("planner");
                props.setChosenEmployee(option.target.innerText === undefined ? "" : option.target.innerText);
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
              showChat();
            }}>
            <ChatBubbleRoundedIcon />
          </div>
        </div>
      </div>
      <div className="chat-top hide">
        <div className="grid-wrapper">
          <div className="filter-wrapper">
            <ChatNav setSortDate={props.setSortDate} sortDate={props.sortDate} />
          </div>

          <div
            className="float-btn all"
            onClick={() => {
              props.setSortDate();
              scrollToBottom();
              fetchAll();
              showChat();
            }}>
            <AllInclusiveIcon />
          </div>
        </div>
      </div>
    </nav>
  );
}
