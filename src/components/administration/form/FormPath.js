import React from "react";
import { person, work, privat } from "../../../jsModules/displayFunctions/formNavigation";
export default function FormPath() {
  //console.log("administration/form || FormPath.js | FormPath()");

  return (
    <section className="FormPath">
      <h2>Add user</h2>
      <nav className="flex-wrapper">
        <div
          className="subject"
          onClick={() => {
            person();
          }}>
          <div className="float-btn one">
            <h3>1</h3>
          </div>
          <p>Person</p>
        </div>

        <div className="line"></div>

        <div
          className="subject"
          onClick={() => {
            work();
          }}>
          <div className="float-btn two">
            <h3>2</h3>
          </div>
          <p>Work</p>
        </div>

        <div className="line"></div>
        <div
          className="subject"
          onClick={() => {
            privat();
          }}>
          <div className="float-btn three">
            <h3>3</h3>
          </div>
          <p>Private</p>
        </div>
      </nav>
    </section>
  );
}
