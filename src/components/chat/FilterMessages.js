import React from "react";
import TextField from "@material-ui/core/TextField";
import ClearRoundedIcon from "@material-ui/icons/ClearRounded";
import { sortByDate } from "../../jsModules/displayFunctions/subMenuNavigation";
import { scrollToBottom } from "../../jsModules/displayFunctions/mainMenuNavigation";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import "../../sass/scss/filterUsers.scss";
import { GSAP_sortVisibleMobileChat, GSAP_stagProfilesSort } from "../../jsModules/displayFunctions/gsap";

export default function FilterMessages(props) {
  console.log("planner || FilterTasks.js | FilterMessages()");

  const handleSearch = (e) => {
    props.setChatSearch(e.target.value);
  };

  return (
    <nav className="FilterMessages">
      <form className="filter-wrapper">
        <TextField name="search messages" className="searchMessages" label="Search" onChange={handleSearch} />
        <div className="search-icon" onClick={scrollToBottom}>
          <SearchRoundedIcon />
        </div>
      </form>
    </nav>
  );
}
