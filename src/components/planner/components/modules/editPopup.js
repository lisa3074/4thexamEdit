import { closeExpand } from "./closeExpand";
export function popUp(theId) {
  console.log(theId);
  console.log("popUp");
  document.querySelector(theId).classList.remove("hide");
  document.querySelectorAll(".scrollList").forEach((list) => {
    list.style.overflow = "";
    list.style.overflow = "hidden";
  });
}

export function close(theId) {
  console.log(theId);
  console.log("close");
  document.querySelector(theId).classList.add("hide");
  document.querySelectorAll(".scrollList").forEach((list) => {
    list.style.overflow = "initial";
    list.style.overflowY = "scroll";
  });
  closeExpand();
  /* document.querySelectorAll(".expandCard > p").forEach((p) => {
    setTimeout(() => {
      p.classList.add("hide");
    }, 500);
    p.classList.remove("fade_in");
    p.classList.add("fade_out");
  });
  document.querySelectorAll("mui-panel.panelMargin > h2").forEach((h2) => {
    h2.classList.remove("biggerFont");
    h2.classList.add("smallerFont");
  });

  document.querySelectorAll(".mui-panel.panelMargin").forEach((panel) => {
    panel.classList.remove("bigger");
    panel.classList.add("smaller");
  });

  document.querySelectorAll(".edit").forEach((edit) => {
    edit.classList.remove("fade_in");
    edit.classList.add("fade_out");
  });
  document.querySelectorAll(".delete").forEach((deleteIt) => {
    deleteIt.classList.remove("fade_in");
    deleteIt.classList.add("fade_out");
  });
  document.querySelectorAll(".mui-select").forEach((select) => {
    select.classList.remove("fade_in");
    select.classList.add("fade_out");
  });

  document.querySelectorAll(".mui-panel.panelMargin").forEach((muiPanel) => {
    muiPanel.dataset.state = "hidden";
  }); */
}
