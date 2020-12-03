import { closeExpand } from "./closeExpand";
import { gsap } from "gsap";
import { staggeringCards } from "../../../jsModules/displayFunctions/staggeringCards";

export function navigate(chosen, list1, list2, list3) {
  console.log(chosen);
  console.log("planner/modules || mobNavigation.js | done()");
  gsap.to(".scrollList", { duration: 0, opacity: 0, zIndex: 0, width: "calc(100vw - 1rem)" });
  gsap.to("." + chosen + ".scrollList", { duration: 0, opacity: 1, zIndex: 1, width: "calc(100vw - 1rem)" });
  staggeringCards(chosen);
  document.querySelector(".NewTask").classList = "NewTask hide";
  setTimeout(() => {
    document.querySelectorAll(list1, list2, list3).forEach((element) => {
      element.classList.add("hide");
    });
  }, 1000);
  closeExpand();
}

export function addTask() {
  console.log("planner/modules || mobNavigation.js | addTask()");
  document.querySelector(".NewTask").classList = "NewTask showNew";
  closeExpand();
}

export function closeNewTask() {
  console.log("planner/modules || mobNavigation.js | closeNewTask()");
  document.querySelector(".NewTask").classList = "NewTask hidden hide";
  closeExpand();
}
