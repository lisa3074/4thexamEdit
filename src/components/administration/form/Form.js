import React, { useState, useEffect } from "react";
import FormNav from "./FormNav";
import PersonForm from "./PersonForm";
import PrivateForm from "./PrivateForm";
import WorkForm from "./WorkForm";
export default function Form(props) {
  const [focus, setFocus] = useState(false);
  const [name, setName] = useState();
  const [image, setImage] = useState();
  const [city, setCity] = useState();
  const [country, setCountry] = useState();

  const [division, setDivision] = useState();
  const [email, setEmail] = useState();
  const [position, setPosition] = useState();
  const [date, setDate] = useState();
  const [tel, setTel] = useState();
  const [level, setLevel] = useState();
  const [hours, setHours] = useState();

  const [account, setAccount] = useState();
  const [contact, setContact] = useState();
  const [cpr, setCpr] = useState();
  const [education, setEducation] = useState();
  const [postal, setPostal] = useState();
  const [address, setAddress] = useState();

  const { user, setUser } = props;

  useEffect(() => {
    console.log("User ændret");
    setName(user !== undefined ? user[0].name : "");
    setName(user !== undefined ? user[0].name : "");
    setCountry(user !== undefined ? user[0].country : "");
    setCity(user !== undefined ? user[0].city : "");
    setImage(user !== undefined ? user[0].image : "");

    setPosition(user !== undefined ? user[0].position : "");
    setDivision(user !== undefined ? user[0].division : "");
    setHours(user !== undefined ? user[0].workHours : "");
    setDate(user !== undefined ? user[0].startDate : "");
    setLevel(user !== undefined ? user[0].userLevel : "");
    setEmail(user !== undefined ? user[0].email : "");
    setTel(user !== undefined ? user[0].tel : "");

    setAccount(user !== undefined ? user[0].accountNumber : "");
    setContact(user !== undefined ? user[0].contract : "");
    setEducation(user !== undefined ? user[0].education : "");
    setCpr(user !== undefined ? user[0].cpr : "");
    setPostal(user !== undefined ? user[0].postalCode : "");
    setAddress(user !== undefined ? user[0].streetAndNumber : "");
  }, [user]);

  return (
    <form className="Form">
      <PersonForm
        setFocus={setFocus}
        focus={focus}
        name={name}
        setName={setName}
        setCountry={setCountry}
        country={country}
        city={city}
        setCity={setCity}
        image={image}
        setImage={setImage}
      />
      <WorkForm
        setPosition={setPosition}
        setDivision={setDivision}
        setHours={setHours}
        setDate={setDate}
        setLevel={setLevel}
        setEmail={setEmail}
        setTel={setTel}
        division={division}
        email={email}
        position={position}
        date={date}
        tel={tel}
        level={level}
        hours={hours}
      />
      <PrivateForm
        setAccount={setAccount}
        setContact={setContact}
        setCpr={setCpr}
        setEducation={setEducation}
        setPostal={setPostal}
        setAddress={setAddress}
        account={account}
        cpr={cpr}
        education={education}
        contact={contact}
        postal={postal}
        address={address}
      />
      <FormNav
        user={user}
        setUser={setUser}
        setImage={setImage}
        setCity={setCity}
        setName={setName}
        setCountry={setCountry}
        setPosition={setPosition}
        setDivision={setDivision}
        setHours={setHours}
        setDate={setDate}
        setLevel={setLevel}
        setEmail={setEmail}
        setTel={setTel}
        setAccount={setAccount}
        setContact={setContact}
        setCpr={setCpr}
        setEducation={setEducation}
        setPostal={setPostal}
        setAddress={setAddress}
      />
    </form>
  );
}
