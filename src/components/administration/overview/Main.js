import React from "react";
import UserList from "./UserList";
import ViewProfile from "../viewProfile/ViewProfile";
import FilterUsers from "../../navigation/FilterUsers";
export default function Main(props) {
  return (
    <main className={props.innerWidth < 1000 ? "Main hide" : "Main"}>
      <FilterUsers></FilterUsers>
      <UserList></UserList>
      <ViewProfile />
    </main>
  );
}
