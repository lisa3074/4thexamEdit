import React from "react";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import { gsap } from "gsap";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import PersonAddRoundedIcon from "@material-ui/icons/PersonAddRounded";
import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import EditRoundedIcon from "@material-ui/icons/EditRounded";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import AddRoundedIcon from "@material-ui/icons/AddRounded";
import { editUser } from "../../jsModules/displayFunctions/displayEditForm";
import { resetSubmenu } from "../../jsModules/displayFunctions/subMenuNavigation";
import { areYouSure } from "../../jsModules/displayFunctions/mainMenuNavigation";
import {
  openMenu,
  delegation,
  searchUsers,
  closeSearch,
  resetFilterNav,
} from "../../jsModules/displayFunctions/subMenuNavigation";
import { filterStay, staggeringCards, staggeringProfiles } from "../../jsModules/displayFunctions/staggeringCards";
import { newUser } from "../../jsModules/displayFunctions/mainMenuNavigation";
import { addTask } from "../planner/modules/mobNavigation";

export default function SubMenu(props) {
  console.log("navigation || SubMenu.js | SubMenu()");
  const tool = props.tool;
  const endpoint = props.endpoint;

  function removeDelete() {
    console.log("navigation || SubMenu.js | removeDelete()");
    document.querySelectorAll(".modal-wrapper").forEach((modal) => {
      modal.classList.add("hide");
    });
  }

  const person = document.querySelector(".Person");
  /* const isProfileShown = */
  /*   person != (undefined && null) ? (person.classList.contains("hide") ? false : true) : console.log("nothing"); */
  const isPrivateShown = document.querySelector(".Person");

  return (
    <nav className="SubMenu hide">
      <div
        className="menuIcon"
        onClick={() => {
          openMenu();
          resetFilterNav();
          tool === "planner" ? resetSubmenu() : openMenu();
          gsap.from(".Menu", { delay: 0, duration: 1, autoAlpha: 0 });
          gsap.to(".Menu", { delay: 0, duration: 1, autoAlpha: 1 });
          gsap.to(".FilterUsers", { duration: 0.5, y: -140 });
          gsap.to(".UserList", { duration: 0.5, y: -140 });
          gsap.to(".FilterTasks", { duration: 0.5, y: -80 });
          gsap.to(".relativeContainer", { duration: 0.3, y: -80 });
        }}>
        <MenuRoundedIcon />
      </div>
      <div
        className="menuBack hide"
        onClick={() => {
          delegation(tool);
          removeDelete();
          props.setViewingProfile(false);
          props.setisUSerProfile(false);
          /*    gsap.to(".FilterUsers", { duration: 0.5, y: -140 });
          gsap.to(".UserList", { duration: 0.5, y: -140 }); */
        }}>
        <ArrowBackIosRoundedIcon />
      </div>
      <div
        className={
          props.level === "Administrator" || props.isUSerProfile
            ? "float-btn"
            : props.level !== "Administrator" && props.viewingProfile
            ? "float-btn hiddenFromUser"
            : "float-btn"
        }>
        <div
          className="menuSearch"
          onClick={() => {
            searchUsers(props.tool);
            filterStay();
          }}>
          {props.tool === "admin" ? <SearchRoundedIcon /> : <SearchRoundedIcon />}
        </div>
        <div
          className="menuEdit hide"
          onClick={(e) => {
            editUser();
            removeDelete();
            props.editProfile(props.id);
            gsap.to(".UserForm", { duration: 0.5, opacity: 1 });
          }}>
          <EditRoundedIcon />
        </div>
        <div
          className="menuClose hide"
          onClick={() => {
            closeSearch(props.tool);
            props.setChosenCategory("");
            props.setChosenEmployee("");
            gsap.to(".FilterUsers", { duration: 0.5, y: -140 });
            gsap.to(".UserList", { delay: 0.2, duration: 0.3, y: -140 });
            gsap.to(".FilterTasks", { duration: 0.5, y: -80 });
            gsap.to(".relativeContainer", { delay: 0.2, duration: 0.3, y: -80 });

            staggeringCards(props.list);
            staggeringProfiles();
          }}>
          <CloseRoundedIcon />
        </div>
      </div>
      <div
        className={props.level === "Administrator" ? "newUserIcon" : "newUserIcon hiddenFromUser"}
        onClick={() => {
          newUser();

          gsap.to(".UserForm", { duration: 0.5, autoAlpha: 1 });
        }}>
        <PersonAddRoundedIcon />
      </div>
      <div
        className={props.level === "Administrator" ? "menuDelete hide" : "menuDelete hide hiddenFromUser"}
        onClick={() => {
          areYouSure();
          props.setSystemPart("admin");
        }}>
        <DeleteRoundedIcon />
      </div>
      <div
        className="menuAddTask hide"
        onClick={() => {
          addTask();
          closeSearch(props.tool);
          gsap.to(".UserList", { duration: 0.5, y: -140 });
          gsap.to(".FilterTasks", { duration: 0.5, y: -80 });
          gsap.to(".relativeContainer", { delay: 0.2, duration: 0.3, y: -80 });
        }}>
        <AddRoundedIcon />
      </div>
    </nav>
  );
}
