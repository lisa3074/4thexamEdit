import { closeExpand } from "./closeExpand";
export function popUp(theId) {
  console.log("planner/modules || editPopup.js | popUp()");
  document.querySelector(theId).classList.remove("hide");
  document.querySelectorAll(".scrollList").forEach((list) => {
    list.style.overflow = "";
    list.style.overflow = "hidden";
  });
  if (window.innerWidth < 1000) {
    document.querySelectorAll(".SubMenu, .PlannerNav").forEach((element) => {
      element.style.display = "none";
    });
  }
}

export function close(theId) {
  console.log("planner/modules || editPopup.js | close()");
  document.querySelector(theId).classList.add("hide");
  document.querySelectorAll(".scrollList").forEach((list) => {
    list.style.overflow = "initial";
    list.style.overflowY = "scroll";
  });
  if (window.innerWidth < 1000) {
    document.querySelectorAll(".SubMenu, .PlannerNav").forEach((element) => {
      element.style.display = null;
    });
  }
  closeExpand();
}
