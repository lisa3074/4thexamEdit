import React, { useState } from "react";
import FormNav from "./FormNav";
import PersonForm from "./PersonForm";
import PrivateForm from "./PrivateForm";
import WorkForm from "./WorkForm";
export default function Form(props) {
  const [focus, setFocus] = useState(false);

  return (
    <form className="Form">
      <PersonForm
        setFocus={setFocus}
        focus={focus}
        name={props.name}
        setName={props.setName}
        setCountry={props.setCountry}
        country={props.country}
        city={props.city}
        setCity={props.setCity}
        image={props.image}
        setImage={props.setImage}
      />
      <WorkForm
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
      />
      <PrivateForm
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
      <FormNav
        user={props.user}
        setUser={props.setUser}
        setImage={props.setImage}
        setCity={props.setCity}
        setName={props.setName}
        setCountry={props.setCountry}
        setPosition={props.setPosition}
        setDivision={props.setDivision}
        setHours={props.setHours}
        setDate={props.setDate}
        setLevel={props.setLevel}
        setEmail={props.setEmail}
        setTel={props.setTel}
        setAccount={props.setAccount}
        setContact={props.setContact}
        setCpr={props.setCpr}
        setEducation={props.setEducation}
        setPostal={props.setPostal}
        setAddress={props.setAddress}
      />
    </form>
  );
}
