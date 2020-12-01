import React, { useState, useEffect, useCallback } from "react";
import { firebaseConfig } from "../../../jsModules/firebase/firebase";
import FormNav from "./FormNav";
import PersonForm from "./PersonForm";
import PrivateForm from "./PrivateForm";
import WorkForm from "./WorkForm";
import { postUser } from "../../../jsModules/dbData/postData";
import { storeImage } from "../../../jsModules/dbData/postData";
import { editUser } from "../../../jsModules/dbData/editData";

import {
  clearUserForm,
  editUserResetForm,
  newUserResetForm,
} from "../../../jsModules/displayFunctions/displayEditForm";
import { forwards } from "../../../jsModules/displayFunctions/formNavigation";

export default function Form(props, { history }) {
  console.log(" administration/form || Form.js | Form()");
  const [focus, setFocus] = useState(false);
  const [name, setName] = useState("");
  const [image, setImage] = useState("avatar.jpg");
  const [imageFile, setImageFile] = useState();
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const [division, setDivision] = useState("");
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("");
  const [date, setDate] = useState("");
  const [tel, setTel] = useState("");
  const [level, setLevel] = useState("");
  const [hours, setHours] = useState("");

  const [account, setAccount] = useState("");
  const [contract, setContract] = useState("");
  const [cpr, setCpr] = useState("");
  const [education, setEducation] = useState("");
  const [postal, setPostal] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [fileUrl, setFileUrl] = useState("");
  const [filePath, setFilePath] = useState("");
  const [uploadedImage, setUploadedImage] = useState();

  const [error, setError] = useState([null]);

  useEffect(() => {
    let today;
    date ? (today = new Date(date)) : (today = new Date());
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();
    setDate(date ? `${yyyy}-${mm}-${dd}` : "");
  }, [date]);

  const { chosenUser, setChosenUser } = props;

  function resetForm() {
    console.log(" administration/form || Form.js | resetForm()");
    setImage("");
    setCity("");
    setName("");
    setCountry("");
    setPosition("");
    setDivision("");
    setHours("");
    setDate("");
    setLevel("");
    setEmail("");
    setTel("");
    setAccount("");
    setContract("");
    setCpr("");
    setEducation("");
    setPostal("");
    setAddress("");
    setImageFile();
    setChosenUser();
    setFilePath("");
    setFileUrl("");
    setPassword("");
    props.setState("");
    setUploadedImage("");
    document.querySelectorAll(".error").forEach((error) => {
      error.classList.add("hide");
    });
  }

  useEffect(() => {
    filePath
      ? onFormSubmit({
          image: filePath,
          city: city,
          name: name,
          country: country,
          position: position,
          division: division,
          workHours: hours,
          startDate: date,
          userLevel: level,
          email: email,
          tel: tel,
          accountNumber: account,
          contract: contract,
          cpr: cpr,
          education: education,
          postalCode: postal,
          streetAndNumber: address,
          password: password,
        })
      : console.log(filePath);
  }, [filePath]);

  useEffect(() => {
    fileUrl
      ? editProfile({
          image: fileUrl,
          city: city,
          name: name,
          country: country,
          position: position,
          division: division,
          workHours: hours,
          startDate: date,
          userLevel: level,
          email: email,
          tel: tel,
          accountNumber: account,
          contract: contract,
          cpr: cpr,
          education: education,
          postalCode: postal,
          streetAndNumber: address,
          id: props.id,
        })
      : console.log(fileUrl);
  }, [fileUrl]);

  function submit(e) {
    e.preventDefault();
    console.log(" administration/form || Form.js | submit()");
    const $ = document.querySelector.bind(document);
    forwards();
    if (
      ($(".cpr input").value === "" ||
        $(".account input").value === "" ||
        $(".address input").value === "" ||
        $(".postal input").value === "" ||
        $(".education input").value === "" ||
        $("#pdf-upload").files.length === 0 ||
        $(".password input").value === "") &&
      !document.querySelector(".password-safety").classList.contains("hide")
    ) {
    } else if (!document.querySelector(".password-safety").classList.contains("hide")) {
      handleSignUp();
      storeImage(imageFile, email, setFilePath, image);
      document.querySelector(".succes").classList.remove("hide");
      setTimeout(() => {
        clear();
      }, 1000);
    } else {
      storeImage(imageFile, email, setFileUrl, image);
      document.querySelector(".succes").classList.remove("hide");
      setTimeout(() => {
        resetForm();
      }, 1000);
    }
  }

  function clear() {
    console.log(" administration/form || Form.js | clear()");
    if (!document.querySelector(".password-safety").classList.contains("hide")) {
      if (window.innerWidth < 1000) {
        document.querySelector(".SubMenu").classList.remove("hide");
      }
      newUserResetForm();
      clearUserForm();
      resetForm();
    } else {
      editUserResetForm();
      clearUserForm();
      resetForm();
      setTimeout(() => {
        document.querySelector(".ViewProfile").classList.remove("hide");
      }, 2000);
    }
  }
  //kaldes herfra med payload fra ovenstående useStates
  async function editProfile(payload) {
    console.log(" administration/form || Form.js | editProfile()");
    editUser(payload);
  }
  async function onFormSubmit(payload) {
    console.log(" administration/form || Form.js | onFormSubmit()");
    postUser(payload);
  }

  useEffect(() => {
    if (chosenUser) {
      setName(chosenUser[0].name);
      setCountry(chosenUser[0].country);
      setCity(chosenUser[0].city);
      setImage(chosenUser[0].image ? chosenUser[0].image : "avatar.jpg");

      setPosition(chosenUser[0].position);
      setDivision(chosenUser[0].division);
      setHours(chosenUser[0].workHours);
      setDate(chosenUser[0].startDate);
      setLevel(chosenUser[0].userLevel);
      setEmail(chosenUser[0].email);
      setTel(chosenUser[0].tel);

      setAccount(chosenUser[0].accountNumber);
      setContract(chosenUser[0].contract);
      setEducation(chosenUser[0].education);
      setCpr(chosenUser[0].cpr);
      setPostal(chosenUser[0].postalCode);
      setAddress(chosenUser[0].streetAndNumber);
    }
  }, [chosenUser]);

  const handleSignUp = useCallback(
    async (e) => {
      console.log(" administration/form || Form.js | handleSignUp()");
      try {
        await firebaseConfig.auth().createUserWithEmailAndPassword(email.toString().trim(), password.toString().trim());
        history.push("/");
      } catch (error) {
        setError(error.message);
      }
    },
    [history, email, password]
  );

  return (
    <>
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
          setImageFile={setImageFile}
          imageFile={imageFile}
          state={props.state}
          uploadedImage={uploadedImage}
          setUploadedImage={setUploadedImage}
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
          setContract={setContract}
          setCpr={setCpr}
          setEducation={setEducation}
          setPostal={setPostal}
          setAddress={setAddress}
          account={account}
          cpr={cpr}
          education={education}
          contract={contract}
          postal={postal}
          address={address}
          password={password}
          setPassword={setPassword}
        />
        <FormNav user={chosenUser} setUser={setChosenUser} submit={submit} clear={clear} />
      </form>

      <article className="succes hide">
        <progress value="0" max="100" id="loader">
          0%
        </progress>
        <p>Sending</p>
      </article>
    </>
  );
}
