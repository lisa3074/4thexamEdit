import image from "../../images/lisa2020.jpg";
import placeholder from "../../images/placeholder.png";

export function editUser() {
  const $ = document.querySelector.bind(document);
  $(".UserForm").classList.remove("hide");
  $(".FormPath > h2").textContent = "Edit user";
  $(".PersonForm .name input").value = "Lisa Søndergaard";
  $(".PersonForm .country input").value = "Denmark";
  $(".PersonForm .city input").value = "Copenhagen K";
  $(".PersonForm .upload-wrapper p").textContent = "lisa2020.jpg";
  $(".PersonForm img").src = image;
  $(".PersonForm .name input").value = "Lisa Søndergaard";
  $(".PersonForm .country input").value = "Denmark";
  $(".PersonForm .city input").value = "Copenhagen K";
  $(".PersonForm img").src = image;
  //work
  $(".WorkForm .position input").value = "Frontend developer";
  $(".WorkForm .division input").value = "Development";
  $(".WorkForm .hours input").value = "full time";
  $(".WorkForm .startDate input").value = "2020-11-01";
  $(".WorkForm .level input").value = "admin";
  $(".WorkForm .email input").value = "lisa@skatteguiden.dk";
  $(".WorkForm .phone input").value = "+45 31495969";
  //Private
  $(".PrivateForm .cpr input").value = "130284-3232";
  $(".PrivateForm .account input").value = "1234 12345678";
  $(".PrivateForm .address input").value = "Rørholmsgade 15, st th.";
  $(".PrivateForm .postal input").value = "1352";
  $(".PrivateForm .education input").value = "Multimedia Designer";
  $(".PrivateForm .password input").value = "password";
  $(".PrivateForm .password input").setAttribute("required", false);
  $(".PrivateForm .password-safety").classList.add("hide");
  $(".PrivateForm .upload-wrapper p").textContent = "contract-lisa-søndergaard.pdf";
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
  $(".previewImg").src = placeholder;
  $(".float-btn.three").style.backgroundColor = "var(--tietery)";
  $(".float-btn.two").style.backgroundColor = "var(--tietery)";
  document.querySelector(".PrivateForm > .upload-wrapper > label > div > p").textContent = "Upload contract";
  document.querySelector(".PersonForm > .upload-wrapper > label > div > p").textContent = "Upload image";
}
