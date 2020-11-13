import React from "react";
import MenuNav from "./MenuNav";
import Profile from "./Profile";

export default function Menu(props) {
  return (
    <>
      <nav className={props.innerWidth < 1000 ? "Menu" : "Menu MenuDesktop"}>
        <div className="logo-name">
          <h1>SkatteGuiden</h1>
        </div>
        <Profile></Profile>
        <MenuNav innerWidth={props.innerWidth} setEndpoint={props.setEndpoint}></MenuNav>
      </nav>
    </>
  );
}
