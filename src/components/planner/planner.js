import React from "react";
import Iframe from "react-iframe";
export default function Planner(props) {
  return (
    <main className="Planner hide">
      <Iframe
        url="https://frontnd.ninja/planner/"
        width="100%"
        height="100%"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"
      />
    </main>
  );
}
