import React, { useState } from "react";
import Form from "./Form";
import FormPath from "./FormPath";
import FormNav from "./FormNav";
import PersonForm from "./PersonForm";
import PrivateForm from "./PrivateForm";
import WorkForm from "./WorkForm";
export default function UserForm(props) {
  return (
    <section className="UserForm hide">
      <FormPath />
      <Form
        user={props.user}
        setUser={props.setUser}
        name={props.name}
        setName={props.setName}
        setCountry={props.setCountry}
        country={props.country}
        city={props.city}
        setCity={props.setCity}
        image={props.image}
        setImage={props.setImage}
        setPosition={props.setPosition}
        setDivision={props.setDivision}
        setHours={props.setHours}
        setDate={props.setDate}
        setLevel={props.setLevel}
        setEmail={props.setEmail}
        setTel={props.setTel}
        division={props.division}
        email={props.email}
        position={props.position}
        date={props.date}
        tel={props.tel}
        level={props.level}
        hours={props.hours}
        setAccount={props.setAccount}
        setContact={props.setContact}
        setCpr={props.setCpr}
        setEducation={props.setEducation}
        setPostal={props.setPostal}
        setAddress={props.setAddress}
        account={props.account}
        cpr={props.cpr}
        education={props.education}
        contact={props.contact}
        postal={props.postal}
        address={props.address}
      />
    </section>
  );
}
