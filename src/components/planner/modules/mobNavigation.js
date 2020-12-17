import { closeExpand } from "./closeExpand";
import { GSAP_stagCards, GSAP_plannerListsAnimtionMobile } from "../../../jsModules/displayFunctions/gsap";

export function navigate(chosen, list1, list2, list3) {
  //console.log("planner/modules || mobNavigation.js | done()");
  GSAP_plannerListsAnimtionMobile(chosen);
  GSAP_stagCards(chosen);
  document.querySelector(".NewTask").classList = "NewTask hide";
  setTimeout(() => {
    document.querySelectorAll(list1, list2, list3).forEach((element) => {
      element.classList.add("hide");
    });
  }, 1000);
  closeExpand();
}

export function addTask() {
  //console.log("planner/modules || mobNavigation.js | addTask()");
  document.querySelector(".NewTask").classList = "NewTask showNew";
  document.querySelector(".TopBar").setAttribute("data-state", "planner");
  closeExpand();
}

export function closeNewTask() {
  //console.log("planner/modules || mobNavigation.js | closeNewTask()");
  document.querySelector(".NewTask").classList = "NewTask hidden hide";
  closeExpand();
}
