import React from "react";
import UserList from "./UserList";
import ViewProfile from "../viewProfile/ViewProfile";
import FilterUsers from "../../navigation/FilterUsers";
export default function MainAdmin(props) {
  //console.log("administration/MainAdmin.js || MainAdmin()");

  return (
    <main className={window.innerWidth < 1000 ? "MainAdmin hide" : "MainAdmin"}>
      <FilterUsers
        setChosenDivision={props.setChosenDivision}
        setChosenHours={props.setChosenHours}
        setSearch={props.setSearch}
        chosenHours={props.chosenHours}
        chosenDivision={props.chosenDivision}></FilterUsers>
      <UserList
        profileStatus={props.profileStatus}
        setId={props.setId}
        setViewingProfile={props.setViewingProfile}
        signedinUser={props.signedinUser}
        isUSerProfile={props.isUSerProfile}
        setisUSerProfile={props.setisUSerProfile}
        users={
          //If all filter options is in use:
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
            : //If only Hours and search is in use
            props.chosenHours !== (undefined && "") && props.search !== (undefined && "")
            ? props.users.filter(
                (user) =>
                  user.workHours.includes(props.chosenHours) &&
                  (user.name.toLowerCase().includes(props.search.toLowerCase()) ||
                    user.position.toLowerCase().includes(props.search.toLowerCase()) ||
                    user.workHours.toLowerCase().includes(props.search.toLowerCase()))
              )
            : //If only Division and search is in use
            props.chosenDivision !== (undefined && "") && props.search !== (undefined && "")
            ? props.users.filter(
                (user) =>
                  user.division.includes(props.chosenDivision) &&
                  (user.name.toLowerCase().includes(props.search.toLowerCase()) ||
                    user.position.toLowerCase().includes(props.search.toLowerCase()) ||
                    user.workHours.toLowerCase().includes(props.search.toLowerCase()))
              )
            : //If only Hours is in use
            props.chosenHours !== (undefined && "")
            ? props.users.filter((user) => user.workHours.includes(props.chosenHours))
            : //If only Division is in use
            props.chosenDivision !== (undefined && "")
            ? props.users.filter((user) => user.division.includes(props.chosenDivision))
            : //If only search is in use
            props.search !== (undefined && "")
            ? props.users.filter((user) => user.name.toLowerCase().includes(props.search.toLowerCase()))
            : props.users
        }
      />
      <ViewProfile
        editProfileArchive={props.editProfileArchive}
        chosenUserArchive={props.chosenUserArchive}
        setChosenHours={props.setChosenHours}
        setChosenDivision={props.setChosenDivision}
        setSearch={props.setSearch}
        user={props.users.filter((person) => person.id === props.id)}
        profileStatus={props.profileStatus}
        setProfileStatus={props.setProfileStatus}
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
        level={props.level}
        isUSerProfile={props.isUSerProfile}
        cards={props.cards}
        setViewingProfile={props.setViewingProfile}
        setisUSerProfile={props.setisUSerProfile}
      />
    </main>
  );
}
