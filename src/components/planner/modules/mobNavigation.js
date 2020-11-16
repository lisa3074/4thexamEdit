import { closeExpand } from "./closeExpand";
export function init() {
  console.log("hidden2");
  document.querySelectorAll(".scrollList").forEach((list) => {
    list.classList.add("hidden2");
  });
}

export function done() {
  console.log("done");
  document.querySelector(".Done1").classList = "Done1 scrollList show";
  document.querySelector(".Doing1").classList = "Doing1 scrollList hidden";
  document.querySelector(".Do1").classList = "To Do1 scrollList hidden";
  document.querySelector(".NewTask").classList = "NewTask hidden";
  document.querySelector(".Done1").addEventListener("transitionend", function () {
    document.querySelector(".Done1").style.transform = "";
  });
  closeExpand();
}

export function doing() {
  console.log("doing");
  document.querySelector(".Done1").classList = "Done1 scrollList hidden";
  document.querySelector(".Doing1").classList = "Doing1 scrollList show";
  document.querySelector(".Do1").classList = "To Do1 scrollList hidden";
  document.querySelector(".NewTask").classList = "NewTask hidden";
  document.querySelector(".Doing1").addEventListener("transitionend", function () {
    document.querySelector(".Doing1").style.transform = "";
  });
  closeExpand();
}
export function todo() {
  console.log("todo");
  document.querySelector(".Done1").classList = "Done1 scrollList hidden";
  document.querySelector(".Doing1").classList = "Doing1 scrollList hidden";
  document.querySelector(".Do1").classList = "To Do1 scrollList show";
  document.querySelector(".NewTask").classList = "NewTask hidden";
  document.querySelector(".To.Do1").addEventListener("transitionend", function () {
    document.querySelector(".To.Do1").style.transform = "";
  });
  closeExpand();
}
export function addTask() {
  console.log("task");
  document.querySelector(".Done1").classList = "Done1 scrollList hidden";
  document.querySelector(".Doing1").classList = "Doing1 scrollList hidden";
  document.querySelector(".Do1").classList = "To Do1 scrollList hidden";
  document.querySelector(".NewTask").classList = "NewTask show";
  document.querySelector(".NewTask").addEventListener("transitionend", function () {
    document.querySelector(".NewTask").style.transform = "";
  });
  closeExpand();
}
