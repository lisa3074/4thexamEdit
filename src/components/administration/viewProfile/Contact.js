import React from "react";

export default function Contact(props) {
  //console.log("administration/viewProfile || Contact.js | Contact()");
  const mailLink = `"mailto:${props.email}"`;
  const telLink = `"tel:${props.tel}"`;

  return (
    <article className="Contact userCard">
      <h2 className="heading">CONTACT</h2>
      <div className="info-wrapper">
        <h2>EMAIL</h2>
        <p className="email">
          <a href={mailLink}>{props.email}</a>
        </p>

        <h2>TEL</h2>
        <p className="tel">
          <a href={telLink}>{props.tel}</a>
        </p>
      </div>
    </article>
  );
}
