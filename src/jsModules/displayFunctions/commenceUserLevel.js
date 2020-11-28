export function commenceUserLevel(userLevel) {
  console.log("jsModules || commenceUserLevel.js | commenceUserLevel()");
  if (userLevel === "Administrator") {
    document.querySelectorAll(".admin").forEach((admin) => {
      admin.style.display = null;
    });
  } else if (userLevel === "Regular user") {
    document.querySelectorAll(".admin").forEach((admin) => {
      admin.style.display = "none";
    });
  } else if (userLevel === "Board member") {
    document.querySelectorAll(".admin").forEach((admin) => {
      admin.style.display = "none";
    });
  }
}

export function whichUser(e, id, level) {
  console.log("jsModules || commenceUserLevel.js | whichUser()");
  if (level === "Administrator") {
    document.querySelector(".ViewProfile .ProfileNav.admin .delete").style.display = null;
  }
  if (e.target.classList.contains("primary") && level === "Administrator") {
    document.querySelectorAll(".ViewProfile .admin").forEach((admin) => {
      admin.style.display = null;
    });
  } else if (e.target.classList.contains("primary")) {
    document.querySelectorAll(".ViewProfile .admin").forEach((admin) => {
      admin.style.display = "none";
    });
  } else {
    document.querySelectorAll(".ViewProfile .admin").forEach((admin) => {
      admin.style.display = "none";
    });
    document.querySelector(".ViewProfile[data-user=" + id + "] .ProfileNav.admin").style.display = "flex";
    document.querySelector(".ViewProfile[data-user=" + id + "] .ProfileNav.admin .delete").style.display = "none";
    document.querySelector(".ViewProfile[data-user=" + id + "] .viewPrivate.admin").style.display = "grid";
  }
}
