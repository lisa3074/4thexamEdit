import React from "react";
import UserCard from "./UserCard";
export default function UserList(props) {
  console.log(props.users);
  const mappedUsers = props.users.map((user) => <UserCard key={user.id} {...user} setId={props.setId} />);
  return (
    <section className="UserList">
      <div className="grid-wrapper">{mappedUsers}</div>
    </section>
  );
}
