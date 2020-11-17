import React from "react";
import Button from "muicss/lib/react/button";

export default function SubmitButton(props) {
  return (
    /*    <Button
      disabled={props.disabled}
      color="primary"
      className="btn submit">
      {props.name}
    </Button> */
    <div disabled={props.disabled} color="primary" className="float-btn">
      {props.name}
    </div>
  );
}
