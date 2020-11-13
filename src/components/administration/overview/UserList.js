import React from "react";
import UserCard from "./UserCard";
export default function UserList() {
  return (
    <section className="UserList">
      <div className="grid-wrapper">
        <UserCard></UserCard>
        <UserCard></UserCard>
        <UserCard></UserCard>
        <UserCard></UserCard>
        <UserCard></UserCard>
      </div>
    </section>
  );
}
