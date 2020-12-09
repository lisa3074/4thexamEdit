import React from "react";
import UserCard from "./UserCard";
import { GSAP_UserListToTop } from "../../../jsModules/displayFunctions/gsap";
export default function UserList(props) {
  console.log("administration/UserList.js || UserList()");
  if (window.innerWidth < 1000) {
    GSAP_UserListToTop();
  }
  const mappedUsers = props.users.map((user) => (
    <UserCard
      key={user.id}
      signedinUser={props.signedinUser}
      {...user}
      setId={props.setId}
      setViewingProfile={props.setViewingProfile}
      isUSerProfile={props.isUSerProfile}
      setisUSerProfile={props.setisUSerProfile}
    />
  ));
  return (
    <section className="UserList">
      <div className="grid-wrapper">{mappedUsers}</div>
    </section>
  );
}
