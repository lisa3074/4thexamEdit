import React from "react";

export default function Contact() {
  return (
    <article className="Contact userCard">
      <h2 className="heading">CONTACT</h2>
      <div className="info-wrapper">
        <h2>EMAIL</h2>
        <p className="email">
          <a href="mailto:lisa@skatteguiden.dk">lisa@skatteguiden.dk</a>
        </p>

        <h2>TEL</h2>
        <p className="tel">
          <a href="tel:+4531495969">+45 31495969</a>
        </p>
      </div>
    </article>
  );
}
