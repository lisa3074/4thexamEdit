import React from "react";

export default function Work(props) {
  console.log("administration/viewProfile || ViewProfile.js | Work()");
  let today;
  props.startDate !== undefined ? (today = new Date(props.startDate)) : (today = new Date());
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  const yyyy = today.getFullYear();
  console.log(`${yyyy}-${mm}-${dd}`);
  const startDate = `${yyyy}-${mm}-${dd}`;
  console.log(new Date().getTime());
  return (
    <article className="Work userCard">
      <h2 className="heading">WORK</h2>
      <div className="info-wrapper">
        <h2>POSITION</h2>
        <p className="position">{props.position}</p>

        <h2>DIVISION</h2>
        <p className="division">{props.division}</p>

        <h2>COUNTRY / CITY</h2>
        <p className="countryCity">
          {props.country} / {props.city}
        </p>

        <h2>WORK HOURS</h2>
        <p className="workHours">{props.workHours}</p>

        <h2>ON BOARD SINCE</h2>
        <p className="hireDate">{startDate}</p>

        <h2>USER RIGHTS</h2>
        <p className="userRights">{props.userLevel}</p>
      </div>
    </article>
  );
}
