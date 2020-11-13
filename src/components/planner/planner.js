import React from "react";
import SubMenu from "../navigation/SubMenu";
import Menu from "../navigation/Menu";
import TopBar from "../navigation/TopBar";
export default function Planner(props) {
  return (
    <main className="Planner">
      <TopBar endpoint={props.endpoint}></TopBar>
      <Menu innerWidth={props.innerWidth} setEndpoint={props.setEndpoint}></Menu>
      <SubMenu endpoint={props.endpoint}></SubMenu>
    </main>
  );
}
