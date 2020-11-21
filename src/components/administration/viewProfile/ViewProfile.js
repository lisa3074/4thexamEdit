import React from "react";
import { person } from "../../../jsModules/displayFunctions/formNavigation";
import Contact from "./Contact";
import Person from "./Person";
import Private from "./Private";
import ProfileNav from "./ProfileNav";
import Work from "./Work";
import WorkLoad from "./WorkLoad";

export default function ViewProfile(props) {
  const mappedPerson = props.users.map((user) => <Person key={user.id} {...user} />);
  const mappedWork = props.users.map((user) => <Work key={user.id} {...user} />);
  const mappedContact = props.users.map((user) => <Contact key={user.id} {...user} />);
  const mappedPrivate = props.users.map((user) => <Private key={user.id} {...user} />);

  return (
    <section className="ViewProfile hide">
      <ul className="viewPerson">{mappedPerson}</ul>
      <ul className="viewWork">{mappedWork}</ul>
      <ul className="viewContact">{mappedContact}</ul>
      <WorkLoad users={props.users.filter((person) => person.id === props.id)} />
      <ul className="viewPrivate">{mappedPrivate}</ul>

      <div className="empty"></div>
      <ProfileNav id={props.id} deleteUser={props.deleteUser} editProfile={props.editProfile} />
    </section>
  );
}
