import image from "../../images/placeholder.png";

export function forwards() {
  console.log("jsModules || formNavigation.js | forwards()");
  const $ = document.querySelector.bind(document);
  //PERSON FORM VALIDATION
  if (
    ($(".name input").value === "" || $(".country input").value === "" || $(".city input").value === "") &&
    !$(".PersonForm").classList.contains("hide")
  ) {
    if ($(".name input").value === "") {
      $("fieldset.PersonForm > div.input-wrapper > p").classList.remove("hide");
    } else {
      $("fieldset.PersonForm > div.input-wrapper > p").classList.add("hide");
    }
    if ($(".country input").value === "") {
      $("fieldset.PersonForm > div.flex-wrapper > div:nth-child(1) > p").classList.remove("hide");
    } else {
      $("fieldset.PersonForm > div.flex-wrapper > div:nth-child(1) > p").classList.add("hide");
    }
    if ($(".city input").value === "") {
      $("fieldset.PersonForm > div.flex-wrapper > div:nth-child(2) > p").classList.remove("hide");
    } else {
      $("fieldset.PersonForm > div.flex-wrapper > div:nth-child(2) > p").classList.add("hide");
    }
  } else if (!$(".PersonForm").classList.contains("hide")) {
    $(".back").classList.remove("hide");
    $(".WorkForm").classList.remove("hide");
    $(".PersonForm").classList.add("hide");
    $(".float-btn.two").style.backgroundColor = "var(--secondary)";

    //WORK FORM VALDATION
  } else if (
    ($('.level[data-chosen="false"]') ||
      $('.division[data-chosen="false"]') ||
      $('.hours[data-chosen="false"]') ||
      $(".email input").value === "" ||
      $(".startDate input").value === "" ||
      $(".phone input").value === "" ||
      $(".position input").value === "") &&
    !$(".WorkForm").classList.contains("hide")
  ) {
    if ($(".position input").value === "") {
      $("fieldset.WorkForm > div:nth-child(2) > p").classList.remove("hide");
    } else {
      $("fieldset.WorkForm > div:nth-child(2) > p").classList.add("hide");
    }
    if ($('.input-wrapper .division[data-chosen="false"]')) {
      $("fieldset.WorkForm > div:nth-child(3) > p").classList.remove("hide");
    } else {
      $("fieldset.WorkForm > div:nth-child(3) > p").classList.add("hide");
    }
    if ($('.hours[data-chosen="false"]')) {
      $("fieldset.WorkForm > div:nth-child(4) > p").classList.remove("hide");
    } else {
      $("fieldset.WorkForm > div:nth-child(4) > p").classList.add("hide");
    }
    if ($(".startDate input").value === "") {
      console.log("date");
      $("fieldset.WorkForm > div:nth-child(5) > p").classList.remove("hide");
    } else {
      console.log("date");
      $("fieldset.WorkForm > div:nth-child(5) > p").classList.add("hide");
    }
    if ($('.level[data-chosen="false"]')) {
      $("fieldset.WorkForm > div:nth-child(6) > p").classList.remove("hide");
    } else {
      $("fieldset.WorkForm > div:nth-child(6) > p").classList.add("hide");
    }
    if ($(".email input").value === "") {
      $("fieldset.WorkForm > div:nth-child(7) > p").classList.remove("hide");
    } else {
      $("fieldset.WorkForm > div:nth-child(7) > p").classList.add("hide");
    }
    if ($(".phone input").value === "") {
      $("fieldset.WorkForm > div:nth-child(8) > p").classList.remove("hide");
    } else {
      $("fieldset.WorkForm > div:nth-child(8) > p").classList.add("hide");
    }
  } else if (!$(".WorkForm").classList.contains("hide")) {
    $(".PrivateForm").classList.remove("hide");
    $(".WorkForm").classList.add("hide");
    $(".float-btn.three").style.backgroundColor = "var(--secondary)";
    //PRIVATE FORM VAILDATION
  } else if (
    ($(".cpr input").value === "" ||
      $(".account input").value === "" ||
      $(".address input").value === "" ||
      $(".postal input").value === "" ||
      $(".education input").value === "" ||
      $("#pdf-upload").files.length === 0 ||
      $(".password input").value === "") &&
    !$(".PrivateForm").classList.contains("hide")
  ) {
    if ($(".cpr input").value === "") {
      $("fieldset.PrivateForm > div:nth-child(2) > p").classList.remove("hide");
    } else {
      $("fieldset.PrivateForm > div:nth-child(2) > p").classList.add("hide");
    }
    if ($(".account input").value === "") {
      $("fieldset.PrivateForm > div:nth-child(3) > p").classList.remove("hide");
    } else {
      $("fieldset.PrivateForm > div:nth-child(3) > p").classList.add("hide");
    }
    if ($(".address input").value === "") {
      $(".PrivateForm > div:nth-child(4) > p").classList.remove("hide");
    } else {
      $(".PrivateForm > div:nth-child(4) > p").classList.add("hide");
    }
    if ($(".postal input").value === "") {
      $(".PrivateForm > div:nth-child(5) > p").classList.remove("hide");
    } else {
      $(".PrivateForm > div:nth-child(5) > p").classList.add("hide");
    }
    if ($(".password input").value === "") {
      $(".PrivateForm > div.input-wrapper.password-safety > p").classList.remove("hide");
    } else {
      $(".PrivateForm > div.input-wrapper.password-safety > p").classList.add("hide");
    }
    if ($(".education input").value === "") {
      $(".PrivateForm > div:nth-child(7) > p").classList.remove("hide");
    } else {
      $(".PrivateForm > div:nth-child(7) > p").classList.add("hide");
    }
    if ($("#pdf-upload").files.length === 0) {
      $(".PrivateForm > div.upload-wrapper > p").classList.remove("hide");
    } else {
      $(".PrivateForm > div.upload-wrapper > p").classList.add("hide");
    }
  }
  setTimeout(() => {
    !$(".PrivateForm").classList.contains("hide")
      ? $(".check").classList.remove("hide")
      : $(".check").classList.add("hide");
  }, 100);
}
export function backwards() {
  console.log("jsModules || formNavigation.js | backwards()");
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
  console.log("jsModules || formNavigation.js | person()");
  const $ = document.querySelector.bind(document);
  $(".PersonForm").classList.remove("hide");
  $(".WorkForm").classList.add("hide");
  $(".PrivateForm").classList.add("hide");
  $(".float-btn.two").style.backgroundColor = "var(--tietery)";
  $(".float-btn.three").style.backgroundColor = "var(--tietery)";
}
export function work() {
  console.log("jsModules || formNavigation.js | work()");
  const $ = document.querySelector.bind(document);
  $(".WorkForm").classList.remove("hide");
  $(".PersonForm").classList.add("hide");
  $(".PrivateForm").classList.add("hide");
  $(".float-btn.two").style.backgroundColor = "var(--secondary)";
  $(".float-btn.three").style.backgroundColor = "var(--tietery)";
}
export function privat() {
  console.log("jsModules || formNavigation.js | privat()");
  const $ = document.querySelector.bind(document);
  $(".PrivateForm").classList.remove("hide");
  $(".PersonForm").classList.add("hide");
  $(".WorkForm").classList.add("hide");
  $(".float-btn.two").style.backgroundColor = "var(--secondary)";
  $(".float-btn.three").style.backgroundColor = "var(--secondary)";
}
