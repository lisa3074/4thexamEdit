import React from "react";
import UserList from "./UserList";
import ViewProfile from "../viewProfile/ViewProfile";
import FilterUsers from "./FilterUsers";
export default function Main() {
  return (
    <main className="Main hide">
      <FilterUsers></FilterUsers>
      <UserList></UserList>
      <ViewProfile />
    </main>
  );
}
