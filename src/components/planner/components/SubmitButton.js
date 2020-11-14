import React from "react";

import CheckRoundedIcon from "@material-ui/icons/CheckRounded";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";

import Button from "@material-ui/core/Button";
export default function SubmitButton(props) {
  return (
    <>
      <div disabled={props.disabled} className={"btn submit float-btn"}>
        <CheckRoundedIcon />
      </div>
      <div disabled={props.disabled} className={"btn submit float-btn"}>
        <CloseRoundedIcon />
      </div>
      {/*       <Button disabled={props.disabled} className="btn submit text-btn">
        {props.name}
      </Button> */}
    </>
  );
}
