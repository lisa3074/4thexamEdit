import React from "react";
export default function TopBar(props) {
  console.log(props);
  return (
    <nav className="TopBar">
      <div className="admin-top">AdminTop</div>
      <div className="planner-top hide">PlannerTop</div>
    </nav>
  );
}
