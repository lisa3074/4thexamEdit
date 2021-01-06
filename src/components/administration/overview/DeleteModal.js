import React, { useState, useEffect } from "react";
import { notSure, deleted } from "../../../jsModules/displayFunctions/mainMenuNavigation";
import { deleteAMessage } from "../../../jsModules/dbData/deleteData";
import { editUser } from "../../../jsModules/dbData/editData";
import { GSAP_addOpacityUserForm, GSAP_stagProfiles } from "../../../jsModules/displayFunctions/gsap";
import { resetSubmenu, showCardList } from "../../../jsModules/displayFunctions/subMenuNavigation";
import { resetFilterNav } from "../../../jsModules/displayFunctions/subMenuNavigation";

export default function DeleteModal(props) {
  //console.log("administration/DeleteModal.js || DeleteModal()");

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
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

  const { chosenUserArchive } = props;

  useEffect(() => {
    if (chosenUserArchive) {
      setName(chosenUserArchive[0].name);
      setCountry(chosenUserArchive[0].country);
      setCity(chosenUserArchive[0].city);
      setImage(
        chosenUserArchive[0].image
          ? chosenUserArchive[0].image
          : "https://firebasestorage.googleapis.com/v0/b/mmdfinalexam.appspot.com/o/profile_pictures%2Fplaceholder.png?alt=media&token=c06d8e7a-6812-45d0-bff1-af790d20f5b8"
      );
      setPosition(chosenUserArchive[0].position);
      setDivision(chosenUserArchive[0].division);
      setHours(chosenUserArchive[0].workHours);
      setDate(chosenUserArchive[0].startDate);
      setLevel(chosenUserArchive[0].userLevel);
      setEmail(chosenUserArchive[0].email);
      setTel(chosenUserArchive[0].tel);
      setAccount(chosenUserArchive[0].accountNumber);
      setContract(chosenUserArchive[0].contract);
      setEducation(chosenUserArchive[0].education);
      setCpr(chosenUserArchive[0].cpr);
      setPostal(chosenUserArchive[0].postalCode);
      setAddress(chosenUserArchive[0].streetAndNumber);
      if (chosenUserArchive[0].archivedEmail) {
        setEmail(chosenUserArchive[0].archivedEmail);
      }
    }
  }, [chosenUserArchive]);

  function clearFilter() {
    props.setChosenDivision("");
    props.setChosenHours("");
    props.setSearch("");
    document.querySelector("form.FilterUsers").reset();
    const divisionSpan = document.querySelector("#mui-component-select-Division > span");
    const division = document.querySelector("#mui-component-select-Division");
    const hoursSpan = document.querySelector("#mui-component-select-Hours > span");
    const hours = document.querySelector("#mui-component-select-Hours");

    if (!divisionSpan) {
      division.textContent = "All";
    }
    if (!hoursSpan) {
      hours.textContent = "All";
    }
  }
  function clear() {
    if (window.innerWidth < 1000) {
      console.log("Hide menu");
      document.querySelector(".Menu").classList.add("hide");
      resetSubmenu();
      resetFilterNav();
      showCardList();
    }
    setTimeout(() => {
      resetForm();
    }, 1000);
    clearFilter();
    document.querySelector(".UserList").classList.remove("hide");
    document.querySelector(".ViewProfile").classList.add("hide");
    document.querySelector(".succes").classList.add("hide");
    setTimeout(() => {
      GSAP_addOpacityUserForm();
      GSAP_stagProfiles();
      props.setViewingProfile(false);
      props.setisUSerProfile(false);
    }, 500);
  }

  function resetForm() {
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
  }

  function archiveProfile() {
    editUser({
      image: image,
      city: city,
      name: name,
      country: country,
      position: position,
      division: division,
      workHours: hours,
      startDate: date,
      userLevel: level,
      email: "",
      tel: tel,
      accountNumber: account,
      contract: contract,
      cpr: cpr,
      education: education,
      postalCode: postal,
      streetAndNumber: address,
      id: props.id,
      archivedEmail: email,
    });
    //props.setProfileStatus("archived");
    clear();
  }
  function unArchiveProfile() {
    editUser({
      image: image,
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
      archivedEmail: "",
    });
    // props.setProfileStatus("active");
    clear();
  }

  return (
    <div className="modal-wrapper hide">
      <div className="areYouSure">
        <div className="modal">
          <div className="modal-text">
            <h1>
              You are about to
              {props.systemPart === "planner"
                ? " delete a task"
                : props.systemPart === "chat"
                ? " delete a message"
                : props.systemPart === "admin"
                ? " delete a profile"
                : props.systemPart === "adminArchive"
                ? " archive a profile"
                : " re-activate a profile"}
              !
            </h1>
            <p>
              {props.systemPart === "planner"
                ? "This will remove the task permanently, and it will not be recovereable."
                : props.systemPart === "chat"
                ? "This will remove the message permanently, and it will not be recovereable."
                : props.systemPart === "admin"
                ? "If you do this, the user will no longer be able to log in to the system."
                : props.systemPart === "adminArchive"
                ? "The user will no longer be able to log in to the system, but administrators can still access this user's information from the archive. The profile can also be re-activated from the archive."
                : "The user will be able to log in to the system, if the user login has not been deleted. The profile will be viewable to all users."}
            </p>
            <h3>
              {" "}
              Are you sure you want to
              {props.systemPart === "planner"
                ? " delete this task"
                : props.systemPart === "chat"
                ? " delete this message"
                : props.systemPart === "admin"
                ? " delete this profile"
                : props.systemPart === "adminArchive"
                ? " archive this profile"
                : " unarchive this profile"}
              ?
            </h3>
          </div>
          <button
            className="delete text-btn"
            onClick={() => {
              {
                props.systemPart === "planner"
                  ? props.deleteCard(props.id)
                  : props.systemPart === "chat"
                  ? deleteAMessage(props.messageToDelete)
                  : props.systemPart === "admin"
                  ? props.deleteProfile(props.id)
                  : props.systemPart === "adminArchive"
                  ? archiveProfile()
                  : unArchiveProfile();
              }

              deleted();
              props.setViewingProfile ? props.setViewingProfile(false) : console.log("");
            }}>
            Yes,{" "}
            {props.systemPart === "adminArchive"
              ? " archieve "
              : props.systemPart === "adminUnArchive"
              ? " re-acitvate "
              : " delete "}{" "}
            it
          </button>
          <button className="cancel text-btn" onClick={notSure}>
            No, go back
          </button>
        </div>

        <article className="succes2 hide">
          <progress value="0" max="100" id="loader">
            0%
          </progress>
          <p>Sending</p>
        </article>
      </div>
    </div>
  );
}
