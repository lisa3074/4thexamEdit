import React, { useEffect, useState } from "react";
import MainPlanner from "./MainPlanner";
import NewTask from "./NewTask";
import { scroll } from "./modules/scroll";
import { postCard } from "../../jsModules/dbData/postData";
import { deleteACard } from "../../jsModules/dbData/deleteData";
import { editACard, dragACard } from "../../jsModules/dbData/editData";
import AddIcon from "@material-ui/icons/Add";
import "../../sass/scss/planner/style.scss";
import "../../sass/scss/planner/newTask.scss";
import "../../sass/scss/planner/form.scss";
import "../../sass/scss/planner/list.scss";
import "../../sass/scss/planner/edit.scss";
import "../../sass/scss/planner/cards.scss";
import "../../sass/scss/planner/animations.scss";
import "../../sass/scss/planner/navigation.scss";
import { GSAP_stagCardsDesktop, GSAP_stagCards, GSAP_sortInvisibleMobile } from "../../jsModules/displayFunctions/gsap";
import { addTask } from "./modules/mobNavigation";

export default function Planner(props) {
  //console.log("planner || Planner.js | Planner()");
  const { cards } = props;
  /*   useEffect(() => {
    if (window.innerWidth > 1000) {
      if (props.plannerClicked) {
        GSAP_stagCardsDesktop();
      } else {
        GSAP_stagCards();
      }
    } else if (window.innerWidth < 1000 && !props.plannerClicked) {
      GSAP_sortInvisibleMobile();
    }
  }, [cards]); */

  scroll();

  async function onFormSubmit(data) {
    //console.log("planner || Planner.js | onFormSubmit()");
    postCard(data, cards);
  }
  async function deleteCard(id) {
    //console.log("planne || Planner.js | deleteCard()");
    deleteACard(id);
  }

  async function moveCard(payload, id) {
    //console.log("planner || Planner.js | moveCard()");
    dragACard(payload, id);
  }
  async function dragCard(payload, id) {
    //console.log("planner || Planner.js | dragCard()");
    dragACard(payload, id);
  }
  async function editCard(payload) {
    //console.log("planner || Planner.js | editCard()");
    editACard(payload);
  }

  return (
    <main className="Planner hide" data-state="chosen">
      <section className="planner-wrapper">
        {cards === "" && <h1>LOADING</h1>}
        <nav className="NewTask showNew hide">
          <NewTask onFormSubmit={onFormSubmit} users={props.users} setTaskList={props.setTaskList} />
        </nav>
        <MainPlanner
          plannerClicked={props.plannerClicked}
          setTaskList={props.setTaskList}
          taskList={props.taskList}
          deleteCard={deleteCard}
          moveCard={moveCard}
          editCard={editCard}
          dragCard={dragCard}
          cards={cards}
          chosenCategory={props.chosenCategory}
          chosenEmployee={props.chosenEmployee}
          setChosenCategory={props.setChosenCategory}
          setChosenEmployee={props.setChosenEmployee}
          users={props.users}
          setSystemPart={props.setSystemPart}
          systemPart={props.systemPart}
          tool={props.tool}
          setTool={props.setTool}
          setList={props.setList}
          list={props.list}
        />
      </section>
      <button
        className="float-btn add-task"
        onClick={() => {
          addTask();
        }}>
        <AddIcon />
      </button>
    </main>
  );
}
