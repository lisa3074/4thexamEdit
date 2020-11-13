import React from "react";
export default function TopBar(props) {
  return (
    <nav className="TopBar">
      <div>{props.endpoint === "administration" ? "HEJ" : "NEJ"}</div>
    </nav>
  );
}
