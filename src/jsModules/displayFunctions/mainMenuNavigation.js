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
    document.querySelector(".MainAdmin").classList.remove("hide");
    document.querySelector(".SubMenu").classList.remove("hide");
    document.querySelector(".UserList").classList.remove("hide");
    document.querySelector(".admin-top").classList.remove("hide");
    document.querySelector(".chat-top").classList.add("hide");
    document.querySelector(".Planner").classList.add("hide");
    document.querySelector(".ViewProfile").classList.add("hide");
    document.querySelector(".planner-top").classList.add("hide");
    document.querySelector(".TopBar").setAttribute("data-state", "admin");
    document.querySelector(".Chat").classList.add("hide");
    if (window.innerWidth < 1000) {
      document.querySelector(".Menu").classList.add("hide");
    }
  }, 200);
  setTimeout(() => {
    document.querySelector(".MainAdmin").scrollTo({ top: 0, left: 0, behavior: "smooth" }); //////scroll to top
  }, 400);
}
export function planner() {
  //console.log("jsModules || mainMenuNavigation.js | planner()");
  document.querySelector(".MainAdmin").classList.add("hide");
  document.querySelector(".admin-top").classList.add("hide");
  document.querySelector(".chat-top").classList.add("hide");
  document.querySelector(".Chat").classList.add("hide");
  document.querySelector(".Planner").classList.remove("hide");
  document.querySelector(".planner-top").classList.remove("hide");
  document.querySelector(".SubMenu").classList.remove("hide");
  document.querySelector(".TopBar").setAttribute("data-state", "planner");
  if (window.innerWidth < 1000) {
    document.querySelector(".Menu").classList.add("hide");
    document.querySelector(".newUserIcon").classList.add("hide");
    document.querySelector(".menuAddTask").classList.remove("hide");
  }
}
export function chat() {
  //console.log("jsModules || mainMenuNavigation.js | chat()");
  document.querySelector(".admin-top").classList.add("hide");
  document.querySelector(".planner-top").classList.add("hide");
  document.querySelector(".Planner").classList.add("hide");
  document.querySelector(".MainAdmin").classList.add("hide");
  document.querySelector(".chat-top").classList.remove("hide");
  document.querySelector(".TopBar").setAttribute("data-state", "chat");
  document.querySelectorAll(".Chat").forEach((chat) => {
    chat.classList.remove("hide");
  });
  if (window.innerWidth < 1000) {
    document.querySelector(".Menu").classList.add("hide");
    document.querySelector(".newUserIcon").classList.add("hide");
    document.querySelector(".menuAddTask").classList.add("hide");
    document.querySelector(".SubMenu").classList.add("hide");
  }
}
export function newUser() {
  //console.log("jsModules || mainMenuNavigation.js | newUser()");
  document.querySelector(".ViewProfile").classList.remove("hide");
  document.querySelector(".ViewProfile .UserForm").classList.remove("hide");
  document.querySelector(".MainAdmin").classList.remove("hide");
  document.querySelector(".admin-top").classList.remove("hide");
  document.querySelector(".UserForm").setAttribute("data-state", "new");
  document.querySelector(".previewImg").setAttribute("data-state", "new");
  document.querySelector(".Chat").classList.add("hide");
  document.querySelector(".Planner").classList.add("hide");
  document.querySelector(".planner-top").classList.add("hide");
  document.querySelector(".chat-top").classList.add("hide");
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
