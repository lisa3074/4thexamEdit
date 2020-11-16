export function newUser() {
  document.querySelector(".UserForm").classList.remove("hide");
}
export function openMenu() {
  document.querySelector(".Planner").classList.add("hide");
  document.querySelector(".MainAdmin").classList.add("hide");

  document.querySelector(".SubMenu").classList.add("hide");
  document.querySelector(".Menu").classList.remove("hide");
}
export function delegation() {
  !document.querySelector(".ViewProfile").classList.contains("hide") ? showCardList() : showMenu();
}
export function showCardList() {
  document.querySelectorAll(".ViewProfile, .menuBack, .menuEdit, .menuDelete").forEach((element) => {
    element.classList.add("hide");
  });
  document.querySelectorAll(".menuIcon, .UserList, .menuSearch, .newUserIcon").forEach((element) => {
    element.classList.remove("hide");
  });
}
export function showMenu() {
  document.querySelector(".Chat").classList.add("hide");
  document.querySelector(".Menu").classList.remove("hide");
}
export function searchUsers(tool) {
  document.querySelector(".menuSearch").classList.add("hide");
  document.querySelector(".menuClose").classList.remove("hide");
  tool === "admin"
    ? document.querySelector(".FilterUsers").classList.remove("hide")
    : document.querySelector(".FilterTasks").classList.remove("hide");
}
export function closeSearch(tool) {
  document.querySelector(".menuSearch").classList.remove("hide");
  document.querySelector(".menuClose").classList.add("hide");
  tool === "admin"
    ? document.querySelector(".FilterUsers").classList.add("hide")
    : document.querySelector(".FilterTasks").classList.add("hide");

  //RESET LIST/SEARCH
}
