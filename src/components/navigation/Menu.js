import React from "react";
import MenuNav from "./MenuNav";
import Profile from "./Profile";

export default function Menu() {
  return (
    <>
      <nav className="Menu">
        <div className="logo-name">
          <h1>SkatteGuiden</h1>
        </div>
        <Profile></Profile>
        <MenuNav></MenuNav>
      </nav>
      <nav className="MenuDesktop hide">
        <div className="logo-name">
          <h1>SkatteGuiden</h1>
        </div>
        <Profile></Profile>
        <MenuNav></MenuNav>
      </nav>
    </>
  );
}
