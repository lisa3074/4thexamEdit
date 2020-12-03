import React from "react";
import UserCard from "./UserCard";
import { gsap } from "gsap";
export default function UserList(props) {
  console.log("administration/UserList.js || UserList()");
  if (window.innerWidth < 1000) {
    gsap.to(".UserList", { duration: 0.5, y: -140 });
  }
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
