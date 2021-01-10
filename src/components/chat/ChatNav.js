import React, { useState } from "react";
import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import Grid from "@material-ui/core/Grid";
import { fetchAll, resetSubmenu, showMenu } from "../../jsModules/displayFunctions/subMenuNavigation";
import DateRangeRoundedIcon from "@material-ui/icons/DateRangeRounded";
import { scrollToBottom } from "../../jsModules/displayFunctions/mainMenuNavigation";
import {
  GSAP_sortVisibleMobileChat,
  GSAP_sortInvisibleMessagesMobile,
  GSAP_opacity0To1MenuProfile,
} from "../../jsModules/displayFunctions/gsap";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import ClearRoundedIcon from "@material-ui/icons/ClearRounded";
import FilterMessages from "./FilterMessages";

var dayjs = require("dayjs");
var customParseFormat = require("dayjs/plugin/customParseFormat");
dayjs.extend(customParseFormat);

export default function ChatNav(props) {
  //console.log("chat || ChatNav.js | ChatNav()");
  const [searching, setSearching] = useState(false);
  const { setSortDate } = props;

  //CHANGE HANDLERS
  const dateChanged = (e) => {
    setSortDate(e.toString().substring(0, 15));
    scrollToBottom();
    document.querySelectorAll("div.showAll").forEach((cancel) => {
      cancel.classList.remove("hide");
    });
  };

  //SEARCH / RESET SEARCH
  const chooseSvg = (e) => {
    document.querySelectorAll(".ChatNav .svg-wrapper").forEach((svg) => {
      svg.classList.remove("hide");
    });
    e.target.classList.add("hide");
    !searching ? GSAP_sortVisibleMobileChat() : GSAP_sortInvisibleMessagesMobile();
    setTimeout(() => {
      scrollToBottom();
    }, 200);
  };

  //RESET FORM
  const resetSearch = () => {
    document.querySelector("#root > section > section > main.Chat > div > nav.FilterMessages > form").reset();
    props.setChatSearch("");
  };

  return (
    <>
      <nav className="ChatNav">
        <div className="nav-wrapper">
          <button
            className="float-btn"
            onClick={() => {
              showMenu();
              GSAP_opacity0To1MenuProfile();
              resetSubmenu();
              props.setOnChat(false);
            }}>
            <ArrowBackIosRoundedIcon />
          </button>
          <button className="text-btn">
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid container justify="space-around">
                <DatePicker
                  maxDate={new Date()}
                  disableToolbar
                  autoOk={true}
                  variant="inline"
                  format="MMM dd. yyyy"
                  margin="normal"
                  value={props.sortDate}
                  placeholder="All dates"
                  className="date"
                  onChange={dateChanged}
                  name="Date"
                  error={false}
                  helperText={null}
                  PopoverProps={{ style: { ...{ left: "7px", top: "20px", zIndex: 0 } } }}
                />

                <DateRangeRoundedIcon />
              </Grid>
            </MuiPickersUtilsProvider>
          </button>

          <div
            className="svg-wrapper search"
            onClick={(e) => {
              setSearching(true);
              chooseSvg(e);
            }}>
            <SearchRoundedIcon />
          </div>
          <div
            className="svg-wrapper close hide"
            onClick={(e) => {
              setSearching(false);
              chooseSvg(e);
              resetSearch();
            }}>
            <ClearRoundedIcon />
          </div>

          <div
            className="showAll hide"
            onClick={() => {
              setSortDate(null);
              scrollToBottom();
              fetchAll();
            }}>
            <ClearRoundedIcon />
          </div>
        </div>
      </nav>
      <FilterMessages setChatSearch={props.setChatSearch} chatSearch={props.chatSearch} />
    </>
  );
}
