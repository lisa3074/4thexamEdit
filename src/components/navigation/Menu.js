import React from "react";
import MenuNav from "./MenuNav";
import Profile from "./Profile";
import gsap from "gsap";
export default function Menu(props) {
  console.log("navigation || Menu.js | Menu()");
  //gsap.to(".Menu", { delay: 1, duration: 1, autoAlpha: 1 });
  //gsap.from(".Profile, .MenuNav", { delay: 0, duration: 1, autoAlpha: 0 });
  gsap.to(".Profile, .MenuNav", { delay: 1, duration: 1, autoAlpha: 1 });
  return (
    <>
      <nav className={window.innerWidth < 1000 ? "Menu" : "Menu MenuDesktop"}>
        <div className="logo-name">
          <h1>SkatteGuiden</h1>
        </div>
        <Profile
          signedinUser={props.signedinUser}
          setId={props.setId}
          setisUSerProfile={props.setisUSerProfile}></Profile>
        <MenuNav
          setEndpoint={props.setEndpoint}
          setTool={props.setTool}
          level={props.level}
          setisUSerProfile={props.setisUSerProfile}
          setViewingProfile={props.setViewingProfile}
          setChosenCategory={props.setChosenCategory}
          setChosenEmployee={props.setChosenEmployee}
          setChosenDivision={props.setChosenDivision}
          setChosenHours={props.setChosenHours}></MenuNav>
      </nav>
    </>
  );
}
