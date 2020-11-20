import React from "react";

export default function Work(props) {
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
        <p className="hireDate">{props.startDate}</p>

        <h2>USER RIGHTS</h2>
        <p className="userRights">{props.userLevel}</p>
      </div>
    </article>
  );
}
