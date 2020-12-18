export function newUser() {
  //console.log("jsModules || subMenuNavigation.js | newUser()");
  document.querySelector(".UserForm").classList.remove("hide");
}

export function openMenu() {
  //console.log("jsModules || subMenuNavigation.js | openMenu()");
  document.querySelector(".Planner").classList.add("hide");
  document.querySelector(".MainAdmin").classList.add("hide");
  document.querySelector(".Chat").classList.add("hide");
  document.querySelector(".SubMenu").classList.add("hide");
  document.querySelector(".Menu").classList.remove("hide");
}

export function delegation() {
  //console.log("jsModules || subMenuNavigation.js | delegation()");
  !document.querySelector(".ViewProfile").classList.contains("hide") ? showCardList() : showMenu();
}

export function resetSubmenu() {
  //console.log("jsModules || subMenuNavigation.js | resetSubmenu()");
  document.querySelector(".newUserIcon").classList.remove("hide");
  document.querySelector(".menuAddTask").classList.add("hide");
}

export function showCardList() {
  //console.log("jsModules || subMenuNavigation.js | showCardList()");
  document.querySelectorAll(".ViewProfile, .menuBack, .menuEdit, .menuDelete").forEach((element) => {
    element.classList.add("hide");
    setTimeout(() => {
      document.querySelector(".UserList").scrollTo({ top: 0, left: 0, behavior: "smooth" }); //////scroll to top
    }, 400);
  });
  document.querySelectorAll(".menuIcon, .UserList, .menuSearch, .newUserIcon").forEach((element) => {
    element.classList.remove("hide");
  });
}

export function showMenu() {
  //console.log("jsModules || subMenuNavigation.js | showMenu()");
  document.querySelector(".Chat").classList.add("hide");
  document.querySelector(".Menu").classList.remove("hide");
}

export function searchUsers(tool) {
  //console.log("jsModules || subMenuNavigation.js | searchUsers()");
  document.querySelector(".menuSearch").classList.add("hide");
  document.querySelector(".menuClose").classList.remove("hide");
  document.querySelector(".PlannerNav .search-wrapper").classList.add("hide");
  document.querySelector(".close-wrapper").classList.remove("hide");
}

export function closeSearch(tool) {
  //console.log("jsModules || subMenuNavigation.js | closeSearch()");
  document.querySelector(".menuSearch").classList.remove("hide");
  document.querySelector(".menuClose").classList.add("hide");
  document.querySelector(".PlannerNav .search-wrapper").classList.remove("hide");
  document.querySelector(".close-wrapper").classList.add("hide");
}

export function resetFilterNav() {
  //console.log("jsModules || subMenuNavigation.js | resetFilterNav()");
  document.querySelector(".menuClose").classList.add("hide");
  document.querySelector(".menuSearch").classList.remove("hide");
}

//TOP MENU

export function fetchAll() {
  //console.log("jsModules || subMenuNavigation.js | fetchAll()");

  document.querySelectorAll("div.showAll").forEach((cancel) => {
    cancel.classList.add("hide");
  });
}
