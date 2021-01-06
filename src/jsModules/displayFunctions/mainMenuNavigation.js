export function areYouSure() {
  //console.log("jsModules || mainMenuNavigation.js | areYouSure()");
  setTimeout(() => {
    document.querySelectorAll(".modal-wrapper").forEach((modal) => {
      modal.classList.remove("hide");
    });
  }, 100);
}
export function notSure() {
  //console.log("jsModules || mainMenuNavigation.js | notSure()");
  document.querySelectorAll(".modal-wrapper").forEach((modal) => {
    modal.classList.add("hide");
  });
}

export function deleted() {
  document.querySelectorAll(".modal-wrapper").forEach((modal) => {
    modal.classList.add("hide");
  });
}

export function clearFormAdmin() {
  //console.log("navigation || SubMenu.js | clearForm()");
  document.querySelector("form.FilterUsers").reset();
  const divisionSpan = document.querySelector("#mui-component-select-Division > span");
  const division = document.querySelector("#mui-component-select-Division");
  const hoursSpan = document.querySelector("#mui-component-select-Hours > span");
  const hours = document.querySelector("#mui-component-select-Hours");
  document.querySelector("#root > section > section > nav.TopBar > form").reset();

  if (!divisionSpan) {
    division.textContent = "All";
  }
  if (!hoursSpan) {
    hours.textContent = "All";
  }
}

export function administration() {
  //console.log("jsModules || mainMenuNavigation.js | administration()");
  setTimeout(() => {
    document.querySelectorAll(".MainAdmin, .SubMenu, .UserList, .admin-top").forEach((element) => {
      element.classList.remove("hide");
    });
    document.querySelectorAll(".chat-top, .Planner, .ViewProfile, .planner-top, .Chat").forEach((element) => {
      element.classList.add("hide");
    });
    document.querySelector(".TopBar").setAttribute("data-state", "admin");
    if (window.innerWidth < 1000) {
      document.querySelector(".Menu").classList.add("hide");
    }
  }, 200);
  setTimeout(() => {
    document.querySelector(".MainAdmin").scrollTo({ top: 0, left: 0, behavior: "smooth" }); //////scroll to top
  }, 400);
}
export function ownProfile() {
  //console.log("jsModules || mainMenuNavigation.js | administration()");
  setTimeout(() => {
    document.querySelectorAll(".SubMenu, .admin-top").forEach((element) => {
      element.classList.remove("hide");
    });
    document.querySelectorAll(".chat-top, .planner-top").forEach((element) => {
      element.classList.add("hide");
    });
    document.querySelector(".TopBar").setAttribute("data-state", "admin");
    if (window.innerWidth < 1000) {
      document.querySelector(".Menu").classList.add("hide");
    }
  }, 200);
}

export function planner() {
  //console.log("jsModules || mainMenuNavigation.js | planner()");
  document.querySelectorAll(".MainAdmin, .chat-top, .Chat, .admin-top").forEach((element) => {
    element.classList.add("hide");
  });
  document.querySelectorAll(".Planner, .SubMenu, .planner-top").forEach((element) => {
    element.classList.remove("hide");
  });
  document.querySelector(".TopBar").setAttribute("data-state", "planner");
  if (window.innerWidth < 1000) {
    document.querySelector(".menuAddTask").classList.remove("hide");
    document.querySelectorAll(".Menu, .newUserIcon").forEach((element) => {
      element.classList.add("hide");
    });
  }
}

export function chat() {
  //console.log("jsModules || mainMenuNavigation.js | chat()");
  document.querySelectorAll(".MainAdmin, .planner-top, .Planner, .admin-top").forEach((element) => {
    element.classList.add("hide");
  });
  document.querySelectorAll(".chat-top, .Chat").forEach((element) => {
    element.classList.remove("hide");
  });
  document.querySelector(".TopBar").setAttribute("data-state", "chat");
  if (window.innerWidth < 1000) {
    document.querySelectorAll(".Menu, .newUserIcon, .menuAddTask, .SubMenu").forEach((element) => {
      element.classList.add("hide");
    });
  }
}

export function newUser() {
  //console.log("jsModules || mainMenuNavigation.js | newUser()");
  document.querySelectorAll(".ViewProfile, .ViewProfile .UserForm, .MainAdmin, .admin-top").forEach((element) => {
    element.classList.remove("hide");
  });
  document.querySelectorAll(".Chat, .Planner, .planner-top, .chat-top").forEach((element) => {
    element.classList.add("hide");
  });
  document.querySelectorAll(".previewImg, .UserForm").forEach((element) => {
    element.setAttribute("data-state", "new");
  });
  document.querySelector(".TopBar").setAttribute("data-state", "admin");
  if (window.innerWidth < 1000) {
    document.querySelector(".Menu").classList.add("hide");
  }
}

export function scrollToBottom() {
  //console.log("jsModules || mainMenuNavigation.js | scrollToBottom()");
  setTimeout(() => {
    const ul = document.querySelector(".MessageBoard ul");
    const list = document.querySelector(".messageList");
    list.scrollTo({ top: ul.scrollHeight, left: 0, behavior: "smooth" }); //////scroll to bottom (for desktop)
  }, 400);
}
