import React from "react";
import SubMenu from "../navigation/SubMenu";
import Menu from "../navigation/Menu";
import TopBar from "../navigation/TopBar";
import AppPlanner from "./components/App";
export default function Planner(props) {
  return (
    <main className="Planner hide">
      <AppPlanner />
    </main>
  );
}
