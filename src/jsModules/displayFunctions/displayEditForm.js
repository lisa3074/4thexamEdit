import image from "../../images/lisa2020.jpg";
import placeholder from "../../images/placeholder.png";

export function editUser() {
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
  document.querySelector(".PrivateForm > .upload-wrapper > label > div > p").textContent = "Upload contract";
  document.querySelector(".PersonForm > .upload-wrapper > label > div > p").textContent = "Upload image";
}

export function newUserResetForm() {
  const $ = document.querySelector.bind(document);
  $(".ViewProfile").classList.add("hide");
  $(".UserList").classList.remove("hide");
  $(".WorkForm .email").setAttribute("data-state", "");
  $(".UserForm").setAttribute("data-state", "");
  $(".previewImg").setAttribute("data-state", "");
}
export function editUserResetForm() {
  const $ = document.querySelector.bind(document);
  $(".ViewProfile").classList.remove("hide");
  $(".UserList").classList.add("hide");
  $(".WorkForm .email").setAttribute("data-state", "");
  $(".UserForm").setAttribute("data-state", "");
  $(".previewImg").setAttribute("data-state", "");
}
