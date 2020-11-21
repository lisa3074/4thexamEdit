import React, { useState, useEffect } from "react";
import Menu from "../../navigation/Menu";
import MainAdmin from "./MainAdmin";
import TopBar from "../../navigation/TopBar";
import SubMenu from "../../navigation/SubMenu";
import UserForm from "../form/UserForm";
import Planner from "../../planner/Planner";
import CircularProgress from "@material-ui/core/CircularProgress";
import Chat from "../../chat/Chat";
import { getUsers } from "../../../jsModules/dbData/getData";
import { deleteProfile } from "../../../jsModules/dbData/deleteData";
import { editProfile } from "../../../jsModules/dbData/editData";

export default function Administration(props) {
  console.log("administration/Administration.js || Administration.js");
  const [tool, setTool] = useState("");
  const [chosenCat, setChosenCat] = useState(undefined);
  const [chosenEmployee, setChosenEmployee] = useState(undefined);
  const [chosenDivision, setChosenDivision] = useState("");
  const [chosenHours, setChosenHours] = useState("");
  const [search, setSearch] = useState("");
  //const currentUser = AuthProvider();
  const [users, setUsers] = useState([]);
  /*   const [user, setUser] = useState(); */

  /*  const [name, setName] = useState();
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
  const [address, setAddress] = useState(); */
  useEffect(() => {
    console.log("get ændret");
    getUsers(setUsers);
  }, []);

  /*   useEffect(() => {
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
  }, [user]); */

  async function deleteUser(id) {
    console.log("delete clicked " + id);
    //deletes the card from the UI right away
    const newUsers = users.filter((user) => user.id !== id);
    setUsers(newUsers);
    //then deletes it from the DB
    deleteProfile(id);
  }
  /*   function editProfile(id) {
    console.log("edit cicked");
    const user = users.filter((user) => user.id === id);
    setUser(user);
  } */

  //kaldes herfra med payload fra ovenstående useStates
  async function editUser(payload, id, name, workHours, division, position) {
    console.log("edit clicked " + id);
    //console.log("payload " + JSON.stringify(payload));
    editProfile(setUsers, payload, id, name, workHours, division, position, users);
  }

  return (
    <section className="Administration">
      <div className="loading-page">
        <div>
          <CircularProgress color="primary" />
        </div>
      </div>
      <TopBar
        endpoint={props.endpoint}
        setChosenCat={setChosenCat}
        setChosenEmployee={setChosenEmployee}
        setChosenDivision={setChosenDivision}
        setChosenHours={setChosenHours}
        setSearch={setSearch}></TopBar>
      <Menu setEndpoint={props.setEndpoint} setTool={setTool}></Menu>
      <MainAdmin
        setChosenCat={setChosenCat}
        setChosenEmployee={setChosenEmployee}
        users={users}
        chosenDivision={chosenDivision}
        chosenHours={chosenHours}
        search={search}
        deleteUser={deleteUser}
        editProfile={editProfile}></MainAdmin>
      <Planner
        chosenCat={chosenCat}
        chosenEmployee={chosenEmployee}
        setChosenCat={setChosenCat}
        setChosenEmployee={setChosenEmployee}
      />
      <Chat />
      {/*  <UserForm
        user={user}
        setUser={setUser}
        name={name}
        setName={setName}
        setCountry={setCountry}
        country={country}
        city={city}
        setCity={setCity}
        image={image}
        setImage={setImage}
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
 */}
      <SubMenu
        endpoint={props.endpoint}
        tool={tool}
        setChosenCat={setChosenCat}
        setChosenEmployee={setChosenEmployee}></SubMenu>
      {/* 
      <p>{credentials != undefined ? credentials.email : ""}</p> */}
    </section>
  );
}
