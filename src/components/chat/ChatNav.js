import React, { useState } from "react";
import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import Grid from "@material-ui/core/Grid";
import { showMenu } from "../../jsModules/displayFunctions/subMenuNavigation";
import DateRangeRoundedIcon from "@material-ui/icons/DateRangeRounded";
var dayjs = require("dayjs");
var customParseFormat = require("dayjs/plugin/customParseFormat");
dayjs.extend(customParseFormat);

export default function ChatNav() {
  let [date, setDate] = useState(new Date());
  const dateChanged = (e) => {
    setDate(e);
  };
  return (
    <nav className="ChatNav">
      <div className="nav-wrapper">
        <button className="float-btn" onClick={showMenu}>
          <ArrowBackIosRoundedIcon />
        </button>
        <button className="text-btn">
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justify="space-around">
              <DatePicker
                disableToolbar
                variant="inline"
                format="MMMM do, yyyy"
                margin="normal"
                value={date}
                className="date"
                onChange={dateChanged}
                name="Date"
                error={false}
                helperText={null}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
              <DateRangeRoundedIcon />
            </Grid>
          </MuiPickersUtilsProvider>
        </button>
      </div>
    </nav>
  );
}
