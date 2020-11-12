import React from "react";
import UserList from "./UserList";
import ViewProfile from "../viewProfile/ViewProfile";
export default function Main() {
  return (
    <main className="Main hide">
      <UserList></UserList>
      <ViewProfile />
    </main>
  );
}
