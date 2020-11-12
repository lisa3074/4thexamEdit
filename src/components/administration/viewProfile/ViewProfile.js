import React from "react";
import Contact from "./Contact";
import Person from "./Person";
import Private from "./Private";
import Work from "./Work";
import WorkLoad from "./WorkLoad";

export default function ViewProfile() {
  return (
    <section className="ViewProfile hide">
      <Person />
      <Work />
      <Contact />
      <WorkLoad />
      <Private />
    </section>
  );
}
