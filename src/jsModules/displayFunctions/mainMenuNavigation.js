export function administration(innerWidth) {
  console.log(innerWidth);
  console.log("admin");
  if (innerWidth < 1000) {
    document.querySelector(".Menu").classList.add("hide");
  }
  document.querySelector(".MainAdmin").classList.remove("hide");
  document.querySelector(".Planner").classList.add("hide");
  document.querySelector(".SubMenu").classList.remove("hide");
  document.querySelector(".ViewProfile").classList.add("hide");
  document.querySelector(".UserList").classList.remove("hide");
  document.querySelector(".admin-top").classList.remove("hide");
  document.querySelector(".planner-top").classList.add("hide");
}
export function planner(innerWidth) {
  console.log("planner");
  if (innerWidth < 1000) {
    document.querySelector(".Menu").classList.add("hide");
  }
  document.querySelector(".MainAdmin").classList.add("hide");
  document.querySelector(".Planner").classList.remove("hide");
  document.querySelector(".admin-top").classList.add("hide");
  document.querySelector(".planner-top").classList.remove("hide");
  document.querySelector(".SubMenu").classList.remove("hide");
}
export function newUser() {
  document.querySelector(".UserForm").classList.remove("hide");
}
