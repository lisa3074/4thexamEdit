import React from "react";
import MenuNav from "./MenuNav";
import Profile from "./Profile";

export default function Menu(props) {
  console.log("navigation || Menu.js | Menu()");
  return (
    <>
      <nav className={window.innerWidth < 1000 ? "Menu" : "Menu MenuDesktop"}>
        <div className="logo-name">
          <h1>SkatteGuiden</h1>
        </div>
        <Profile signedinUser={props.signedinUser} setId={props.setId}></Profile>
        <MenuNav setEndpoint={props.setEndpoint} setTool={props.setTool}></MenuNav>
      </nav>
    </>
  );
}
