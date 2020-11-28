import { closeExpand } from "./closeExpand";
export function popUp(theId) {
  console.log("planner/modules || editPopup.js | popUp()");
  document.querySelector(theId).classList.remove("hide");
  document.querySelectorAll(".scrollList").forEach((list) => {
    list.style.overflow = "";
    list.style.overflow = "hidden";
  });
}

export function close(theId) {
  console.log("planner/modules || editPopup.js | close()");
  document.querySelector(theId).classList.add("hide");
  document.querySelectorAll(".scrollList").forEach((list) => {
    list.style.overflow = "initial";
    list.style.overflowY = "scroll";
  });
  closeExpand();
}
