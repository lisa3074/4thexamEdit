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
import DeleteModal from "../overview/DeleteModal";
import { showCardList } from "../../../jsModules/displayFunctions/subMenuNavigation";

export default function ViewProfile(props) {
  console.log(props);
  const [user, setUser] = useState();
  const [state, setState] = useState();
  console.log(props.user);
  const mappedPerson = props.user.map((user) => <Person key={user.id} {...user} />);
  const mappedWork = props.user.map((user) => <Work key={user.id} {...user} />);
  const mappedContact = props.user.map((user) => <Contact key={user.id} {...user} />);
  const mappedPrivate = props.user.map((user) => <Private key={user.id} {...user} />);

  function editProfile(id) {
    console.log("edit cicked");
    const user = props.users.filter((user) => user.id === id);
    setUser(user);
    setState("edit");
    console.log(id);
  }

  async function deleteProfile(id) {
    console.log("delete clicked " + id);
    deleteUser(id);
    document.querySelector(".ViewProfile").classList.add("hide");
    document.querySelector(".UserList").classList.remove("hide");
    document.querySelector(".modal-wrapper").classList.add("hide");
    showCardList();
  }

  return (
    <section className="ViewProfile hide">
      <ul className="viewPerson">{mappedPerson}</ul>
      <ul className="viewWork">{mappedWork}</ul>
      <ul className="viewContact">{mappedContact}</ul>
      <WorkLoad users={props.users.filter((person) => person.id === props.id)} />
      <ul className="viewPrivate admin">{mappedPrivate}</ul>

      <div className="empty"></div>
      <ProfileNav
        id={props.id}
        deleteProfile={deleteProfile}
        editProfile={editProfile}
        setSystemPart={props.setSystemPart}
        systemPart={props.systemPart}
      />
      <UserForm user={user} setUser={setUser} id={props.id} state={state} setState={setState} />
      <DeleteModal deleteProfile={deleteProfile} id={props.id} systemPart={props.systemPart} />
    </section>
  );
}
