export function newUser() {
  document.querySelector(".UserForm").classList.remove("hide");
}
export function openMenu() {
  document.querySelector(".Main").classList.add("hide");
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
