import React from "react";
import UserList from "./UserList";
import ViewProfile from "../viewProfile/ViewProfile";
import FilterUsers from "../../navigation/FilterUsers";
export default function MainAdmin(props) {
  return (
    <main className={props.innerWidth < 1000 ? "MainAdmin hide" : "MainAdmin"}>
      <FilterUsers></FilterUsers>
      <UserList></UserList>
      <ViewProfile />
    </main>
  );
}
