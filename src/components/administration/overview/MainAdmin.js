import React, { useState } from "react";
import UserList from "./UserList";
import ViewProfile from "../viewProfile/ViewProfile";
import FilterUsers from "../../navigation/FilterUsers";
export default function MainAdmin(props) {
  console.log("administration/MainAdmin.js || MainAdmin()");

  return (
    <main className={window.innerWidth < 1000 ? "MainAdmin hide" : "MainAdmin"}>
      <FilterUsers
        setChosenDivision={props.setChosenDivision}
        setChosenHours={props.setChosenHours}
        setSearch={props.setSearch}></FilterUsers>
      <UserList
        setId={props.setId}
        signedinUser={props.signedinUser}
        users={
          props.chosenHours !== (undefined && "") &&
          props.chosenDivision !== (undefined && "") &&
          props.search !== (undefined && "")
            ? props.users.filter(
                (user) =>
                  user.division.includes(props.chosenDivision) &&
                  user.workHours.includes(props.chosenHours) &&
                  (user.name.toLowerCase().includes(props.search.toLowerCase()) ||
                    user.position.toLowerCase().includes(props.search.toLowerCase()) ||
                    user.workHours.toLowerCase().includes(props.search.toLowerCase()))
              )
            : props.chosenHours !== (undefined && "")
            ? props.users.filter((user) => user.workHours.includes(props.chosenHours))
            : props.chosenDivision !== (undefined && "")
            ? props.users.filter((user) => user.division.includes(props.chosenDivision))
            : props.search !== (undefined && "")
            ? props.users.filter((user) => user.name.toLowerCase().includes(props.search.toLowerCase()))
            : props.users
        }
      />
      <ViewProfile
        user={props.users.filter((person) => person.id === props.id)}
        users={props.users}
        id={props.id}
        setUsers={props.setUsers}
        setSystemPart={props.setSystemPart}
        systemPart={props.systemPart}
        editProfile={props.editProfile}
        chosenUser={props.chosenUser}
        setChosenUser={props.setChosenUser}
        state={props.state}
        setState={props.setState}
      />
    </main>
  );
}
