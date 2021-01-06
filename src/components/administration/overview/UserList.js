import React from "react";
import UserCard from "./UserCard";
import { GSAP_UserListToTop } from "../../../jsModules/displayFunctions/gsap";
export default function UserList(props) {
  //console.log("administration/UserList.js || UserList()");
  const { profileStatus } = props;
  if (window.innerWidth < 1000) {
    GSAP_UserListToTop();
  }
  const UserList = document.querySelector(".UserList")
    ? document.querySelector(".UserList").getAttribute("data-state")
    : console.log();
  const mappedUsers = props.users.map((user) =>
    user.email !== "" && profileStatus === "active" ? (
      <UserCard
        key={user.id}
        signedinUser={props.signedinUser}
        {...user}
        setId={props.setId}
        setViewingProfile={props.setViewingProfile}
        isUSerProfile={props.isUSerProfile}
        setisUSerProfile={props.setisUSerProfile}
        profileStatus={props.profileStatus}
      />
    ) : user.email === "" && profileStatus === "archived" ? (
      <UserCard
        key={user.id}
        signedinUser={props.signedinUser}
        {...user}
        setId={props.setId}
        setViewingProfile={props.setViewingProfile}
        isUSerProfile={props.isUSerProfile}
        setisUSerProfile={props.setisUSerProfile}
        profileStatus={props.profileStatus}
      />
    ) : (
      console.log()
    )
  );
  const archivedProfiles =
    props.profileStatus === "archived" ? <h1 className="archivedProfiles float-btn">Archive</h1> : <></>;
  return (
    <section className="UserList">
      {archivedProfiles}
      <div className="grid-wrapper">{mappedUsers}</div>
    </section>
  );
}
