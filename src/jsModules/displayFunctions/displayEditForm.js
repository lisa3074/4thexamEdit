import placeholder from "../../images/placeholder.png";

export function editUser() {
  //console.log("jsModules || displayEditForm.js | editUser()");
  const $ = document.querySelector.bind(document);
  const $a = document.querySelectorAll.bind(document);
  $(".UserForm").classList.remove("hide");
  $(".PrivateForm .password-safety").classList.add("hide");
  $(".FormPath > h2").textContent = "Edit user";
  $(".PrivateForm .upload-wrapper p").textContent = "Upload contract (.pdf)";
  $(".PrivateForm .password input").setAttribute("required", false);
  $a(".WorkForm .email, .UserForm, .previewImg").forEach((element) => {
    element.setAttribute("data-state", "edit");
  });
}
export function clearUserForm() {
  //console.log("jsModules || displayEditForm.js | clearUserForm()");
  const $ = document.querySelector.bind(document);
  const $a = document.querySelectorAll.bind(document);
  $a(".WorkForm, .PrivateForm, .UserForm, .check, .back").forEach((element) => {
    element.classList.add("hide");
  });
  $a(".PersonForm, .PersonForm .password-safety").forEach((element) => {
    element.classList.remove("hide");
  });
  $("form").reset();
  $(".previewImg").src = placeholder;
  $(".float-btn.three").style.backgroundColor = "var(--tietery)";
  $(".float-btn.two").style.backgroundColor = "var(--tietery)";
  $(".FormPath > h2").textContent = "Add user";
  $(".PrivateForm > .upload-wrapper > label > div > p").textContent = "Upload contract*";
  $(".PersonForm > .upload-wrapper > label > div > p").textContent = "Upload image";
}

export function newUserResetForm() {
  console.log("jsModules || displayEditForm.js | newUserResetForm()");
  const $ = document.querySelector.bind(document);
  setTimeout(() => {
    $(".ViewProfile").classList.add("hide");
    $(".UserList").classList.remove("hide");
    resetDataState();
  }, 500);
}
export function editUserResetForm() {
  //console.log("jsModules || displayEditForm.js | editUserResetForm()");
  const $ = document.querySelector.bind(document);
  $(".ViewProfile").classList.remove("hide");
  $(".UserList").classList.add("hide");
  resetDataState();
}

export function setUpForm() {
  if (document.querySelector(".UserForm[data-state='edit']")) {
    setDataChosen(true);
  } else {
    setDataChosen(false);
  }
}

function resetDataState() {
  const $a = document.querySelectorAll.bind(document);
  $a(".WorkForm .email, .UserForm, .previewImg").forEach((element) => {
    element.setAttribute("data-state", "");
  });
}

function setDataChosen(param) {
  const $a = document.querySelectorAll.bind(document);
  $a(".input-wrapper .hours, .input-wrapper .division, .input-wrapper .level").forEach((element) => {
    element.setAttribute("data-chosen", param);
  });
}
