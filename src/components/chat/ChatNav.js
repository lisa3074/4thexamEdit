import React from "react";
import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import Grid from "@material-ui/core/Grid";
import { showMenu, sortByDate } from "../../jsModules/displayFunctions/subMenuNavigation";
import DateRangeRoundedIcon from "@material-ui/icons/DateRangeRounded";
import AllInclusiveIcon from "@material-ui/icons/AllInclusive";
import { scrollToBottom } from "../../jsModules/displayFunctions/mainMenuNavigation";
import { GSAP_opacity0To1MenuProfile } from "../../jsModules/displayFunctions/gsap";

var dayjs = require("dayjs");
var customParseFormat = require("dayjs/plugin/customParseFormat");
dayjs.extend(customParseFormat);

export default function ChatNav(props) {
  console.log("chat || ChatNav.js | ChatNav()");

  const { setSortDate } = props;
  console.log(setSortDate);
  const dateChanged = (e) => {
    setSortDate(e.toString().substring(0, 15));
    scrollToBottom();
  };

  return (
    <nav className="ChatNav">
      <div className="nav-wrapper">
        <button
          className="float-btn"
          onClick={() => {
            showMenu();
            GSAP_opacity0To1MenuProfile();
          }}>
          <ArrowBackIosRoundedIcon />
        </button>
        <button className="text-btn" onClick={sortByDate}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justify="space-around" onClick={sortByDate}>
              <DatePicker
                disableToolbar
                variant="inline"
                format="MMMM do, yyyy"
                margin="normal"
                value={props.sortDate}
                className="date"
                onChange={dateChanged}
                name="Date"
                error={false}
                helperText={null}
              />
              <DateRangeRoundedIcon />
            </Grid>
          </MuiPickersUtilsProvider>
        </button>
        <div
          className="float-btn all"
          onClick={() => {
            console.log("clicked");
            setSortDate();
            scrollToBottom();
          }}>
          <AllInclusiveIcon />
        </div>
      </div>
    </nav>
  );
}
