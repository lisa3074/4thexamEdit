import React from "react";
import UserCard from "./UserCard";
export default function UserList(props) {
  console.log("administration/UserList.js || UserList()");
  const mappedUsers = props.users.map((user) => (
    <UserCard
      key={user.id}
      signedinUser={props.signedinUser}
      {...user}
      setId={props.setId}
      setViewingProfile={props.setViewingProfile}
    />
  ));
  return (
    <section className="UserList">
      <div className="grid-wrapper">{mappedUsers}</div>
    </section>
  );
}
