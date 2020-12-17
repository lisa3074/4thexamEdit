export function expand(theId) {
  //console.log("planner/modules || expand.js | expand()");
  const theIdClass = `#a${theId}`;
  const theIdClassName = `.a${theId}`;

  document.querySelectorAll(theIdClass + "> .expandCard > p").forEach((p) => {
    p.classList.toggle("hide");
  });

  document.querySelector(theIdClass + " h1").classList.toggle("biggerFont");
  document.querySelector(theIdClass + " h1").classList.toggle("smallerFont");

  document.querySelector(".mui-panel.panelMargin" + theIdClassName).classList.toggle("bigger");
  document.querySelector(".mui-panel.panelMargin" + theIdClassName).classList.toggle("smaller");

  const panel = document.querySelector(".mui-panel.panelMargin" + theIdClassName);

  if (panel.dataset.state === "visible") {
    document.querySelector(theIdClass + " .delete").classList.add("hide");
    document.querySelector(theIdClass + " .edit").classList.add("hide");
    document.querySelector(theIdClass + " .MuiFormControl-root").classList.add("hide");
    panel.dataset.state = "hidden";
  } else {
    document.querySelector(theIdClass + " .delete").classList.remove("hide");
    document.querySelector(theIdClass + " .edit").classList.remove("hide");
    document.querySelector(theIdClass + " .MuiFormControl-root").classList.remove("hide");
    panel.dataset.state = "visible";
  }
}
