import React from "react";
import TextField from "@material-ui/core/TextField";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import ChatBubbleRoundedIcon from "@material-ui/icons/ChatBubbleRounded";
import PersonAddRoundedIcon from "@material-ui/icons/PersonAddRounded";
import AllInclusiveIcon from "@material-ui/icons/AllInclusive";
import AddRoundedIcon from "@material-ui/icons/AddRounded";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import ClearRoundedIcon from "@material-ui/icons/ClearRounded";
import { addTask } from "../planner/modules/mobNavigation";
import { chat, scrollToBottom, newUser } from "../../jsModules/displayFunctions/mainMenuNavigation";
import { fetchAll } from "../../jsModules/displayFunctions/subMenuNavigation";
import {
  GSAP_addOpacity,
  GSAP_opacity0To1MessageContainer,
  GSAP_removeOpacity,
  GSAP_stagCardsDesktop,
  GSAP_stagProfilesSort,
} from "../../jsModules/displayFunctions/gsap";
import { setUpForm } from "../../jsModules/displayFunctions/displayEditForm";

export default function TopBar(props) {
  console.log("navigation || TopBar.js | TopBar()");

  const handleChanges = (module) => {
    document.querySelectorAll(".UserCard, .panelMargin").forEach((card) => {
      card.style.opacity = "0";
    });
    module === "admin" ? GSAP_stagProfilesSort() : GSAP_stagCardsDesktop();
  };

  const handleSearch = (e) => {
    props.setSearch(e.target.value);
    GSAP_stagProfilesSort();
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

  const mappedUsers = props.users.map((user) => (
    <MenuItem value={user.name} key={user.id}>
      {user.name}
    </MenuItem>
  ));
  const mappedCategories = categories.map((category) => (
    <MenuItem value={category.category} key={category.category}>
      {category.category}
    </MenuItem>
  ));
  const dateChanged = (e) => {
    props.setSortDate(new Date(e.target.value));
    scrollToBottom();
    console.log(new Date(e.target.value));
  };

  const handleChatSearch = (e) => {
    props.setChatSearch(e.target.value);
  };
  const chooseSvg = (e) => {
    console.log(e.target);
    document.querySelectorAll(".TopBar .chat-top .svg-wrapper").forEach((svg) => {
      svg.classList.remove("hide");
    });
    e.target.value !== ""
      ? document.querySelector(".TopBar .chat-top .svg-wrapper.search").classList.add("hide")
      : document.querySelector(".TopBar .chat-top .svg-wrapper.close").classList.add("hide");
  };

  const resetSearch = (e) => {
    document.querySelector(".TopBar .chat-top .svg-wrapper.close").classList.add("hide");
    document.querySelector(".TopBar .chat-top .svg-wrapper.search").classList.remove("hide");

    document.querySelector("#root > section > section > nav.TopBar > div.chat-top > div > form").reset();
    props.setChatSearch("");
  };

  const today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const yyyy = today.getFullYear();
  const todaysDate = `${yyyy}-${mm}-${dd}`;

  return (
    <nav className="TopBar" data-state="">
      <form className="admin-top">
        <div className={props.level === "Administrator" ? "grid-wrapper" : "grid-wrapper noNewUser"}>
          <h2 className="sorted">Sorted by</h2>
          <div className="filter-wrapper">
            <FormControl className="division">
              <InputLabel id="select-division-top">Division</InputLabel>
              <Select
                defaultValue=""
                labelId="select-division-top"
                disabled={props.viewingProfile ? true : false}
                name="Division"
                label="division"
                onChange={(e) => {
                  handleChanges("admin");
                  props.setChosenDivision(e.target.value === undefined ? "" : e.target.value);
                }}
                value={props.chosenDivision}>
                <MenuItem value="All" key="All">
                  All
                </MenuItem>
                {mappedDivision}
              </Select>
            </FormControl>

            <FormControl className="Work hours">
              <InputLabel id="select-hours-top">Work hours</InputLabel>
              <Select
                labelId="select-hours-top"
                name="Hours"
                label="hours"
                disabled={props.viewingProfile ? true : false}
                onChange={(e) => {
                  handleChanges("admin");
                  props.setChosenHours(e.target.value === undefined ? "" : e.target.value);
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
              GSAP_removeOpacity(".UserForm");
              GSAP_addOpacity(".userCard, .ProfileNav");
              setUpForm();
            }}
          />
          <div
            className="float-btn"
            onClick={() => {
              chat();
              scrollToBottom();
              GSAP_opacity0To1MessageContainer();
              GSAP_addOpacity(".userCard, .ProfileNav");
              props.setViewingProfile(false);
            }}>
            <ChatBubbleRoundedIcon />
          </div>
        </div>
      </form>
      <div className="planner-top hide">
        <div className="grid-wrapper">
          <h2 className="sorted">Sorted by</h2>
          <div className="filter-wrapper">
            <FormControl className="category">
              <InputLabel id="select-category-top">Category</InputLabel>
              <Select
                value={categories.category}
                labelId="select-category-top"
                name="category"
                label="category"
                onChange={(e) => {
                  handleChanges("planner");
                  props.setChosenCategory(e.target.value === ("All" || undefined) ? "" : e.target.value);
                }}
                value={props.chosenCategory}>
                <MenuItem value="All" key="All">
                  All
                </MenuItem>
                {mappedCategories}
              </Select>
            </FormControl>

            <FormControl className="employee">
              <InputLabel id="select-employees-top">Employees</InputLabel>
              <Select
                labelId="select-employees-top"
                name="Employees"
                label="Employees"
                onChange={(e) => {
                  handleChanges("planner");
                  props.setChosenEmployee(e.target.value === ("All" || undefined) ? "" : e.target.value);
                }}
                value={props.chosenEmployee}>
                <MenuItem value="All" key="All">
                  All
                </MenuItem>
                {mappedUsers}
              </Select>
            </FormControl>
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
          <h2>Sorted by</h2>

          <form
            className="search-wrapper"
            onSubmit={(e) => {
              e.preventDefault();
            }}>
            <TextField
              name="search messages"
              className="searchMessages"
              label=""
              placeholder="Search"
              onChange={(e) => {
                handleChatSearch(e);
                chooseSvg(e);
              }}
              InputLabelProps={{
                shrink: false,
              }}
            />
            <div className="svg-wrapper search search-icon" onClick={(e) => {}}>
              <SearchRoundedIcon />
            </div>
            <div
              className="svg-wrapper close search-icon hide"
              onClick={(e) => {
                resetSearch(e);
              }}>
              <ClearRoundedIcon />
            </div>
          </form>
          <form
            className="date-wrapper"
            onSubmit={(e) => {
              e.preventDefault();
            }}>
            <TextField
              className="date"
              onChange={dateChanged}
              name="Date"
              id="date"
              label=""
              type="date"
              value={props.date}
              InputProps={{ inputProps: { max: todaysDate } }}
            />
          </form>
          <div
            className="float-btn all"
            onClick={() => {
              props.setSortDate();
              document
                .querySelector("#root > section > section > nav.TopBar > div.chat-top > div > form.date-wrapper")
                .reset();
              scrollToBottom();
              fetchAll();
            }}>
            <AllInclusiveIcon />
          </div>
        </div>
      </div>
    </nav>
  );
}
