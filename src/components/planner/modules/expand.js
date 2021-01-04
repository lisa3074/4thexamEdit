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
    document
      .querySelectorAll(theIdClass + " .delete, " + theIdClass + " .edit, " + theIdClass + " .MuiFormControl-root")
      .forEach((element) => {
        element.classList.add("hide");
      });
    panel.dataset.state = "hidden";
  } else {
    document
      .querySelectorAll(theIdClass + " .delete, " + theIdClass + " .edit, " + theIdClass + " .MuiFormControl-root")
      .forEach((element) => {
        element.classList.remove("hide");
      });
    panel.dataset.state = "visible";
  }
}
