import image from "../../images/placeholder.png";

export function forwards() {
  console.log("forwards");
  const $ = document.querySelector.bind(document);
  if ($(".name input").value === "" && !$(".PersonForm").classList.contains("hide")) {
    console.log("no input");
  } else if (!$(".PersonForm").classList.contains("hide")) {
    $(".back").classList.remove("hide");
    $(".WorkForm").classList.remove("hide");
    $(".PersonForm").classList.add("hide");
    $(".float-btn.two").style.backgroundColor = "var(--secondary)";
  } else if (
    ($(".level").dataset.chosen === false ||
      $(".division").dataset.chosen === false ||
      $(".hours").dataset.chosen === false ||
      $(".email input").value === "" ||
      $(".startDate input").value === "" ||
      $(".phone input").value === "" ||
      $(".position input").value === "") &&
    !$(".WorkForm").classList.contains("hide")
  ) {
  } else if (!$(".WorkForm").classList.contains("hide")) {
    $(".PrivateForm").classList.remove("hide");
    $(".WorkForm").classList.add("hide");
    $(".float-btn.three").style.backgroundColor = "var(--secondary)";
  } else if ($(".cpr input").value === "" && !$(".PrivateForm").classList.contains("hide")) {
  } else if ($(".ViewProfile").classList.contains("hide")) {
    if ($(".password input").value === "" && !$(".PrivateForm").classList.contains("hide")) {
    }
  }
  setTimeout(() => {
    !$(".PrivateForm").classList.contains("hide")
      ? $(".check").classList.remove("hide")
      : $(".check").classList.add("hide");
  }, 100);
}
export function backwards() {
  console.log("forwards");
  const $ = document.querySelector.bind(document);
  if (!$(".WorkForm").classList.contains("hide")) {
    $(".PersonForm").classList.remove("hide");
    $(".WorkForm").classList.add("hide");
    $(".back").classList.add("hide");
    $(".float-btn.two").style.backgroundColor = "var(--tietery)";
  } else if (!$(".PrivateForm").classList.contains("hide")) {
    $(".WorkForm").classList.remove("hide");
    $(".PrivateForm").classList.add("hide");
    $(".float-btn.three").style.backgroundColor = "var(--tietery)";
  }
  setTimeout(() => {
    !$(".PrivateForm").classList.contains("hide")
      ? $(".check").classList.remove("hide")
      : $(".check").classList.add("hide");
  }, 100);
}

export function person() {
  const $ = document.querySelector.bind(document);
  $(".PersonForm").classList.remove("hide");
  $(".WorkForm").classList.add("hide");
  $(".PrivateForm").classList.add("hide");
  $(".float-btn.two").style.backgroundColor = "var(--tietery)";
  $(".float-btn.three").style.backgroundColor = "var(--tietery)";
}
export function work() {
  const $ = document.querySelector.bind(document);
  $(".WorkForm").classList.remove("hide");
  $(".PersonForm").classList.add("hide");
  $(".PrivateForm").classList.add("hide");
  $(".float-btn.two").style.backgroundColor = "var(--secondary)";
  $(".float-btn.three").style.backgroundColor = "var(--tietery)";
}
export function privat() {
  const $ = document.querySelector.bind(document);
  $(".PrivateForm").classList.remove("hide");
  $(".PersonForm").classList.add("hide");
  $(".WorkForm").classList.add("hide");
  $(".float-btn.two").style.backgroundColor = "var(--secondary)";
  $(".float-btn.three").style.backgroundColor = "var(--secondary)";
}
