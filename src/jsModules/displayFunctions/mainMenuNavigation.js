export function administration(innerWidth) {
  setTimeout(() => {
    console.log("admi");
    if (innerWidth < 1000) {
      document.querySelector(".Menu").classList.add("hide");
    }
    document.querySelector(".Main").classList.remove("hide");
    document.querySelector(".SubMenu").classList.remove("hide");
    document.querySelector(".ViewProfile").classList.add("hide");
    document.querySelector(".UserList").classList.remove("hide");
  }, 100);
}
export function planner(innerWidth) {
  setTimeout(() => {
    console.log("admi");
    if (innerWidth < 1000) {
      document.querySelector(".Menu").classList.add("hide");
    }
    document.querySelector(".Planner").classList.remove("hide");
    document.querySelector(".SubMenu").classList.remove("hide");
    //  document.querySelector(".ViewProfile").classList.add("hide");
    // document.querySelector(".UserList").classList.remove("hide");
  }, 100);
}
export function newUser() {
  setTimeout(() => {
    document.querySelector(".UserForm").classList.remove("hide");
  }, 100);
}
