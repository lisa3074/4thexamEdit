import React from "react";

import UserForm from "../form/UserForm";
import Contact from "./Contact";
import Person from "./Person";
import Private from "./Private";
import ProfileNav from "./ProfileNav";
import Work from "./Work";
import WorkLoad from "./WorkLoad";
import { deleteUser } from "../../../jsModules/dbData/deleteData";
import { GSAP_stagProfiles } from "../../../jsModules/displayFunctions/gsap";
import DeleteModal from "../overview/DeleteModal";
import { showCardList } from "../../../jsModules/displayFunctions/subMenuNavigation";

export default function ViewProfile(props) {
  //console.log("administration/viewProfile || ViewProfile.js | ViewProfile()");

  const mappedPerson = props.user.map((user) => (
    <Person
      key={user.id}
      {...user}
      editProfile={props.editProfile}
      level={props.level}
      isUSerProfile={props.isUSerProfile}
    />
  ));
  const mappedWork = props.user.map((user) => <Work key={user.id} {...user} />);
  const mappedContact = props.user.map((user) => (
    <Contact key={user.id} {...user} profileStatus={props.profileStatus} />
  ));
  const mappedPrivate = props.user.map((user) => (
    <Private key={user.id} {...user} level={props.level} isUSerProfile={props.isUSerProfile} />
  ));

  async function deleteProfile(id) {
    //console.log("administration/viewProfile || ViewProfile.js | deleteProfile()");
    deleteUser(id);
    document.querySelector(".ViewProfile").classList.add("hide");
    document.querySelector(".UserList").classList.remove("hide");
    document.querySelector(".modal-wrapper").classList.add("hide");
    showCardList();
    GSAP_stagProfiles();
  }

  return (
    <section className="ViewProfile hide">
      <ul className="viewPerson">{mappedPerson}</ul>
      <ul className="viewPrivate">{mappedPrivate}</ul>
      <ul className="viewContact">{mappedContact}</ul>
      <WorkLoad users={props.users.filter((person) => person.id === props.id)} cards={props.cards} user={props.user} />
      <ul className="viewWork">{mappedWork}</ul>

      <div className="empty"></div>
      <ProfileNav
        profileStatus={props.profileStatus}
        id={props.id}
        editProfileArchive={props.editProfileArchive}
        editProfile={props.editProfile}
        setSystemPart={props.setSystemPart}
        level={props.level}
        isUSerProfile={props.isUSerProfile}
      />
      <UserForm
        profileStatus={props.profileStatus}
        chosenUser={props.chosenUser}
        setChosenUser={props.setChosenUser}
        id={props.id}
        state={props.state}
        setState={props.setState}
      />
      <DeleteModal
        setChosenHours={props.setChosenHours}
        setChosenDivision={props.setChosenDivision}
        setSearch={props.setSearch}
        chosenUserArchive={props.chosenUserArchive}
        setProfileStatus={props.setProfileStatus}
        deleteProfile={deleteProfile}
        id={props.id}
        systemPart={props.systemPart}
        setViewingProfile={props.setViewingProfile}
        setisUSerProfile={props.setisUSerProfile}
      />
    </section>
  );
}
