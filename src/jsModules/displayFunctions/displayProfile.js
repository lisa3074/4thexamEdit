export function displayProfile() {
  document.querySelector(".ViewProfile").classList.remove("hide");
  document.querySelector(".UserList").classList.add("hide");
  document.querySelector(".menuIcon").classList.add("hide");
  document.querySelector(".menuBack").classList.remove("hide");
  document.querySelector(".menuSearch").classList.add("hide");
  document.querySelector(".menuEdit").classList.remove("hide");
  document.querySelector(".newUserIcon").classList.add("hide");
  document.querySelector(".menuDelete").classList.remove("hide");
}
export function hidePrivateInfo() {
  console.log("hide privat");
  document.querySelector(".visibilityOff").classList.add("hide");
  document.querySelector(".visibilityOn ").classList.remove("hide");
  document.querySelector(".Private .info-wrapper").classList.add("hide");
}
export function showPrivateInfo() {
  console.log("show privat");
  document.querySelector(".visibilityOn").classList.add("hide");
  document.querySelector(".visibilityOff").classList.remove("hide");
  document.querySelector(".Private .info-wrapper").classList.remove("hide");
}
