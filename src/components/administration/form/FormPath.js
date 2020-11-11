import React from "react";
export default function FormPath() {
  const $ = document.querySelector.bind(document);
  function person() {
    $(".PersonForm").classList.remove("hide");
    $(".WorkForm").classList.add("hide");
    $(".PrivateForm").classList.add("hide");
    $(".float-btn.two").style.backgroundColor = "var(--tietery)";
    $(".float-btn.three").style.backgroundColor = "var(--tietery)";
  }
  function work() {
    $(".WorkForm").classList.remove("hide");
    $(".PersonForm").classList.add("hide");
    $(".PrivateForm").classList.add("hide");
    $(".float-btn.two").style.backgroundColor = "var(--secondary)";
    $(".float-btn.three").style.backgroundColor = "var(--tietery)";
  }
  function privat() {
    $(".PrivateForm").classList.remove("hide");
    $(".PersonForm").classList.add("hide");
    $(".WorkForm").classList.add("hide");
    $(".float-btn.two").style.backgroundColor = "var(--secondary)";
    $(".float-btn.three").style.backgroundColor = "var(--secondary)";
  }
  return (
    <section className="FormPath">
      <h2>Add user</h2>
      <nav className="flex-wrapper">
        <div className="subject" onClick={person}>
          <div className="float-btn one">
            <h3>1</h3>
          </div>
          <p>Person</p>
        </div>

        <div className="line"></div>

        <div className="subject" onClick={work}>
          <div className="float-btn two">
            <h3>2</h3>
          </div>
          <p>Work</p>
        </div>

        <div className="line"></div>
        <div className="subject" onClick={privat}>
          <div className="float-btn three">
            <h3>3</h3>
          </div>
          <p>Private</p>
        </div>
      </nav>
    </section>
  );
}
