import React, { useState, useEffect, useCallback } from "react";
import { firebaseConfig } from "../../../jsModules/firebase/firebase";
import FormNav from "./FormNav";
import PersonForm from "./PersonForm";
import PrivateForm from "./PrivateForm";
import WorkForm from "./WorkForm";
import { postUser, storeContract } from "../../../jsModules/dbData/postData";
import { storeImage } from "../../../jsModules/dbData/postData";
import { editUser } from "../../../jsModules/dbData/editData";
import {
  clearUserForm,
  editUserResetForm,
  newUserResetForm,
} from "../../../jsModules/displayFunctions/displayEditForm";
import { forwards } from "../../../jsModules/displayFunctions/formNavigation";
import { GSAP_addOpacityUserForm, GSAP_stagProfiles } from "../../../jsModules/displayFunctions/gsap";

export default function Form(props, { history }) {
  //console.log(" administration/form || Form.js | Form()");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [imageFile, setImageFile] = useState();
  const [contractFile, setContractFile] = useState();
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const [division, setDivision] = useState("");
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("");
  const [date, setDate] = useState(new Date());
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
  const [contractPath, setContractPath] = useState("");

  const [error, setError] = useState([null]);
  const { chosenUser, setChosenUser } = props;

  useEffect(() => {
    let today;
    date ? (today = new Date(date)) : (today = new Date());
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const yyyy = today.getFullYear();
    setDate(date ? `${yyyy}-${mm}-${dd}` : "");
  }, [date]);

  function resetForm() {
    // console.log(" administration/form || Form.js | resetForm()");
    setImage("");
    setCity("");
    setName("");
    setCountry("");
    setPosition("");
    setDivision("");
    setHours("");
    setDate(new Date());
    setLevel("");
    setEmail("");
    setTel("");
    setAccount("");
    setContract("");
    setCpr("");
    setEducation("");
    setPostal("");
    setAddress("");
    setImageFile("");
    setChosenUser();
    setFilePath("");
    setFileUrl("");
    setPassword("");
    setContractPath("");
    setContractFile("");
    setTimeout(() => {
      document.querySelector("#file-upload").value = "";
      document.querySelector("#pdf-upload").value = "";
    }, 6000);
    props.setState("");
    setUploadedImage("");
    document.querySelectorAll(".error").forEach((error) => {
      error.classList.add("hide");
    });
  }

  function submit(e) {
    e.preventDefault();
    //console.log(" administration/form || Form.js | submit()");
    const $ = document.querySelector.bind(document);
    forwards();

    if (
      //If one of the below inputs are empty and if .password-safety is not hidden (new user)
      ($(".cpr input").value === "" ||
        $(".account input").value === "" ||
        $(".address input").value === "" ||
        $(".postal input").value === "" ||
        $(".education input").value === "" ||
        $("#pdf-upload").files.length === 0 ||
        $(".password input").value === "") &&
      !document.querySelector(".password-safety").classList.contains("hide")
    ) {
      //If new user and none of the inputs are empty
    } else if (!document.querySelector(".password-safety").classList.contains("hide")) {
      handleSignUp();
      storeContract(contractFile, name, setContractPath, contract);
      storeImage(imageFile, email, setFilePath, image);
      //if edit existing user and none of the fields are empty
    } else if (
      $(".cpr input").value !== "" &&
      $(".account input").value !== "" &&
      $(".address input").value !== "" &&
      $(".postal input").value !== "" &&
      $(".education input").value !== "" &&
      $(".PrivateForm .custom-upload .flex-wrapper p").textContent !== "Upload contract*" &&
      document.querySelector(".password-safety").classList.contains("hide")
    ) {
      storeContract(contractFile, name, setContractPath, contract);
      storeImage(imageFile, email, setFileUrl, image);
    }
  }

  useEffect(() => {
    filePath && contractPath
      ? setTimeout(() => {
          postUser({
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
            contract: contractPath,
            cpr: cpr,
            education: education,
            postalCode: postal,
            streetAndNumber: address,
            password: password,
          });
          document.querySelector(".succes").classList.remove("hide");
          setTimeout(() => {
            GSAP_addOpacityUserForm();
            clear();
            GSAP_stagProfiles();
          }, 1500);
        }, 500)
      : console.log("");
  }, [filePath, contractPath]);

  useEffect(() => {
    fileUrl && contractPath
      ? setTimeout(() => {
          editUser({
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
            contract: contractPath,
            cpr: cpr,
            education: education,
            postalCode: postal,
            streetAndNumber: address,
            id: props.id,
          });
          document.querySelector(".succes").classList.remove("hide");
          setTimeout(() => {
            GSAP_addOpacityUserForm();
            resetForm();
            GSAP_stagProfiles();
          }, 1500);
        }, 500)
      : console.log("");
  }, [fileUrl, contractPath]);

  function clear() {
    //console.log(" administration/form || Form.js | clear()");
    //if new user
    if (!document.querySelector(".password-safety").classList.contains("hide")) {
      if (window.innerWidth < 1000) {
        document.querySelector(".SubMenu").classList.remove("hide");
      }
      newUserResetForm();
      clearUserForm();
      resetForm();
    } else {
      //if existing user
      editUserResetForm();
      clearUserForm();
      resetForm();
      setTimeout(() => {
        document.querySelector(".ViewProfile").classList.remove("hide");
      }, 2000);
    }
  }

  //Fill the form with the chosen users data, if a user has been chosen. Othwerwise add new user.
  useEffect(() => {
    if (chosenUser) {
      setName(chosenUser[0].name);
      setCountry(chosenUser[0].country);
      setCity(chosenUser[0].city);
      setImage(
        chosenUser[0].image
          ? chosenUser[0].image
          : "https://firebasestorage.googleapis.com/v0/b/mmdfinalexam.appspot.com/o/profile_pictures%2Fplaceholder.png?alt=media&token=c06d8e7a-6812-45d0-bff1-af790d20f5b8"
      );

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

  //Post new login to Google authentication (new user). Existing user connot be updated for safety reasons. A user can request a password reset on the login page, but the email cannot be changed.
  const handleSignUp = useCallback(
    async (e) => {
      //console.log(" administration/form || Form.js | handleSignUp()");
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
          name={name}
          setName={setName}
          setCountry={setCountry}
          country={country}
          city={city}
          setCity={setCity}
          image={image}
          setImage={setImage}
          state={props.state}
          setImageFile={setImageFile}
          imageFile={imageFile}
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
          setContractFile={setContractFile}
          contractFile={contractFile}
          name={name}
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
