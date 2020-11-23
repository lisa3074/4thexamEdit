import React, { useState } from "react";
import { person } from "../../../jsModules/displayFunctions/formNavigation";
import UserForm from "../form/UserForm";
import Contact from "./Contact";
import Person from "./Person";
import Private from "./Private";
import ProfileNav from "./ProfileNav";
import Work from "./Work";
import WorkLoad from "./WorkLoad";
import { deleteUser } from "../../../jsModules/dbData/deleteData";

export default function ViewProfile(props) {
  const [user, setUser] = useState();
  const mappedPerson = props.user.map((user) => <Person key={user.id} {...user} />);
  const mappedWork = props.user.map((user) => <Work key={user.id} {...user} />);
  const mappedContact = props.user.map((user) => <Contact key={user.id} {...user} />);
  const mappedPrivate = props.user.map((user) => <Private key={user.id} {...user} />);
  console.log(props);
  function editProfile(id) {
    console.log("edit cicked");
    const user = props.users.filter((user) => user.id === id);
    setUser(user);
  }
  console.log(props);
  async function deleteProfile(id) {
    console.log("delete clicked " + id);
    //deletes the card from the UI right away
    const newUsers = props.users.filter((user) => user.id !== id);
    props.setUsers(newUsers);
    //then deletes it from the DB
    deleteUser(id);
  }

  //kaldes herfra med payload fra ovenstående useStates
  async function editUser(payload, id, name, workHours, division, position) {
    console.log("edit clicked " + id);
    //console.log("payload " + JSON.stringify(payload));
    editProfile(props.setUsers, payload, id, name, workHours, division, position, props.users);
  }
  return (
    <section className="ViewProfile hide">
      <ul className="viewPerson">{mappedPerson}</ul>
      <ul className="viewWork">{mappedWork}</ul>
      <ul className="viewContact">{mappedContact}</ul>
      <WorkLoad users={props.users.filter((person) => person.id === props.id)} />
      <ul className="viewPrivate">{mappedPrivate}</ul>

      <div className="empty"></div>
      <ProfileNav id={props.id} deleteProfile={deleteProfile} editProfile={editProfile} />
      <UserForm user={user} setUser={setUser} id={props.id} />
    </section>
  );
}
