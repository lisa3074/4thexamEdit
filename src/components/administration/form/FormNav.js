import React from "react";
import ArrowForwardRoundedIcon from "@material-ui/icons/ArrowForwardRounded";
import ClearRoundedIcon from "@material-ui/icons/ClearRounded";
import CheckRoundedIcon from "@material-ui/icons/CheckRounded";
import ArrowBackRoundedIcon from "@material-ui/icons/ArrowBackRounded";
import image from "../../../images/placeholder.png";

export default function FormNav() {
  const $ = document.querySelector.bind(document);

  function forward() {
    if (!$(".PersonForm").classList.contains("hide")) {
      $(".back").classList.remove("hide");
      $(".WorkForm").classList.remove("hide");
      $(".PersonForm").classList.add("hide");

      $(".float-btn.two").style.backgroundColor = "var(--secondary)";
    } else if (!$(".WorkForm").classList.contains("hide")) {
      $(".PrivateForm").classList.remove("hide");
      $(".WorkForm").classList.add("hide");
      $(".float-btn.three").style.backgroundColor = "var(--secondary)";
    }
    setTimeout(() => {
      !$(".PrivateForm").classList.contains("hide")
        ? $(".check").classList.remove("hide")
        : $(".check").classList.add("hide");
    }, 100);
  }
  function backwards() {
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

  function submit(e) {
    e.preventDefault();
    console.log("submited");
    resetForm();
  }

  function resetForm() {
    $(".UserForm").classList.add("hide");
    $(".PersonForm").classList.remove("hide");
    $(".WorkForm").classList.add("hide");
    $(".PrivateForm").classList.add("hide");
    $(".check").classList.add("hide");
    $(".back").classList.add("hide");
    $("form").reset();
    $(".previewImg").src = image;
    $(".float-btn.three").style.backgroundColor = "var(--tietery)";
    $(".float-btn.two").style.backgroundColor = "var(--tietery)";
    document.querySelector(".WorkForm > .upload-wrapper > label > div > p").textContent = "Upload contract";
    document.querySelector(".PersonForm > .upload-wrapper > label > div > p").textContent = "Upload image";
  }
  return (
    <nav className="FormNav">
      <div className="float-btn" onClick={resetForm}>
        <ClearRoundedIcon />
      </div>
      <div className="float-btn forward" onClick={forward}>
        <ArrowForwardRoundedIcon />
      </div>
      <div className="float-btn back hide" onClick={backwards}>
        <ArrowBackRoundedIcon />
      </div>
      <button className="float-btn check hide" disabled onClick={submit}>
        <CheckRoundedIcon />
      </button>
    </nav>
  );
}
