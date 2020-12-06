import placeholder from "../../images/placeholder.png";

export function editUser() {
  console.log("jsModules || displayEditForm.js | editUser()");
  const $ = document.querySelector.bind(document);
  $(".UserForm").classList.remove("hide");
  $(".FormPath > h2").textContent = "Edit user";

  $(".PrivateForm .password input").setAttribute("required", false);
  $(".PrivateForm .password-safety").classList.add("hide");
  $(".PrivateForm .upload-wrapper p").textContent = "Upload contract (.pdf)";
  $(".WorkForm .email").setAttribute("data-state", "edit");
  $(".UserForm").setAttribute("data-state", "edit");
  $(".previewImg").setAttribute("data-state", "edit");
}
export function clearUserForm() {
  console.log("jsModules || displayEditForm.js | clearUserForm()");
  const $ = document.querySelector.bind(document);
  $(".FormPath > h2").textContent = "Add user";

  $(".UserForm").classList.add("hide");
  $(".PersonForm").classList.remove("hide");
  $(".WorkForm").classList.add("hide");
  $(".PrivateForm").classList.add("hide");
  $(".check").classList.add("hide");
  $(".back").classList.add("hide");
  $("form").reset();
  $(".PrivateForm .password-safety").classList.remove("hide");
  $(".previewImg").src = placeholder;
  $(".float-btn.three").style.backgroundColor = "var(--tietery)";
  $(".float-btn.two").style.backgroundColor = "var(--tietery)";
  document.querySelector(".PrivateForm > .upload-wrapper > label > div > p").textContent = "Upload contract*";
  document.querySelector(".PersonForm > .upload-wrapper > label > div > p").textContent = "Upload image";
}

export function newUserResetForm() {
  console.log("jsModules || displayEditForm.js | newUserResetForm()");
  const $ = document.querySelector.bind(document);
  setTimeout(() => {
    $(".ViewProfile").classList.add("hide");
    $(".UserList").classList.remove("hide");
    $(".WorkForm .email").setAttribute("data-state", "");
    $(".UserForm").setAttribute("data-state", "");
    $(".previewImg").setAttribute("data-state", "");
  }, 500);
}
export function editUserResetForm() {
  console.log("jsModules || displayEditForm.js | editUserResetForm()");
  const $ = document.querySelector.bind(document);
  $(".ViewProfile").classList.remove("hide");
  $(".UserList").classList.add("hide");
  $(".WorkForm .email").setAttribute("data-state", "");
  $(".UserForm").setAttribute("data-state", "");
  $(".previewImg").setAttribute("data-state", "");
}
export function setUpForm() {
  if (document.querySelector(".UserForm[data-state='edit']")) {
    document.querySelector(".input-wrapper .hours").setAttribute("data-chosen", true);
    document.querySelector(".input-wrapper .division").setAttribute("data-chosen", true);
    document.querySelector(".input-wrapper .level").setAttribute("data-chosen", true);
  } else {
    document.querySelector(".input-wrapper .hours").setAttribute("data-chosen", false);
    document.querySelector(".input-wrapper .division").setAttribute("data-chosen", false);
    document.querySelector(".input-wrapper .level").setAttribute("data-chosen", false);
  }
}
