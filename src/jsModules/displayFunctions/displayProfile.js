export function displayProfile(userId) {
  //console.log("jsModules || displayProfile.js | displayProfile()");
  document.querySelectorAll(".ViewProfile, .MainAdmin").forEach((element) => {
    element.classList.remove("hide");
  });
  document.querySelectorAll(".UserList, .Chat, .Planner").forEach((element) => {
    element.classList.add("hide");
  });
  document.querySelector(".ViewProfile").setAttribute("data-user", userId);
  if (window.innerWidth < 1000) {
    document.querySelector(".Menu").classList.add("hide");
    document.querySelectorAll(".SubMenu, .MainAdmin").forEach((element) => {
      element.classList.remove("hide");
    });
    setSubmMenu();
  }
  setTimeout(() => {
    document.querySelector(".MainAdmin").scrollTo({ top: 0, left: 0, behavior: "smooth" }); //////scroll to top
  }, 400);
}
export function hidePrivateInfo() {
  document.querySelectorAll(".visibilityOff, .Private .info-wrapper").forEach((element) => {
    element.classList.add("hide");
  });
  document.querySelector(".visibilityOn ").classList.remove("hide");
}
export function showPrivateInfo() {
  //console.log("jsModules || displayProfile.js | showPrivateInfo()");
  document.querySelector(".visibilityOn").classList.add("hide");
  document.querySelectorAll(".visibilityOff, .Private .info-wrapper").forEach((element) => {
    element.classList.remove("hide");
  });
}
export function setSubmMenu() {
  //console.log("jsModules || displayProfile.js | setSubmMenu()");
  document.querySelectorAll(".menuBack, .menuEdit, .menuDelete").forEach((element) => {
    element.classList.remove("hide");
  });
  document.querySelectorAll(".newUserIcon, .menuSearch, .menuIcon, .menuClose").forEach((element) => {
    element.classList.add("hide");
  });
}
