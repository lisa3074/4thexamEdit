export function expand(theId) {
  console.log("planner/modules/expand.js || expand()");
  console.log("the class: " + theId);
  const theIdClass = `#a${theId}`;
  const theIdClassName = `.a${theId}`;

  document.querySelectorAll(theIdClass + "> .expandCard > p").forEach((p) => {
    setTimeout(() => {
      p.classList.toggle("hide");
    }, 500);
    p.classList.toggle("fade_in");
    p.classList.toggle("fade_out");
  });

  document.querySelector(theIdClass + " .flex-wrapper").classList.add("fade_out_fast");
  document.querySelector(theIdClass + " .assignedTo").classList.add("fade_out_fast");
  setTimeout(() => {
    document.querySelector(theIdClass + " .assignedTo").classList.add("fade_in_fast");
    document.querySelector(theIdClass + " .flex-wrapper").classList.add("fade_in_fast");
    document.querySelector(theIdClass + " .assignedTo").classList.remove("fade_out_fast");
    document.querySelector(theIdClass + " .flex-wrapper").classList.remove("fade_out_fast");
  }, 600);

  document.querySelector(theIdClass + " h1").classList.toggle("biggerFont");
  document.querySelector(theIdClass + " h1").classList.toggle("smallerFont");

  document.querySelector(".mui-panel.panelMargin" + theIdClassName).classList.toggle("bigger");

  document.querySelector(".mui-panel.panelMargin" + theIdClassName).classList.toggle("smaller");

  document.querySelector(theIdClass + " .edit").classList.toggle("fade_in");
  document.querySelector(theIdClass + " .edit").classList.toggle("fade_out");
  document.querySelector(theIdClass + " .delete").classList.toggle("fade_in");
  document.querySelector(theIdClass + " .delete").classList.toggle("fade_out");
  document.querySelector(theIdClass + " .MuiFormControl-root").classList.toggle("fade_in");
  document.querySelector(theIdClass + " .MuiFormControl-root").classList.toggle("fade_out");

  const panel = document.querySelector(".mui-panel.panelMargin" + theIdClassName);

  if (panel.dataset.state === "visible") {
    document.querySelector(theIdClass + " .delete").classList.toggle("hide");
    document.querySelector(theIdClass + " .edit").classList.toggle("hide");
    document.querySelector(theIdClass + " .MuiFormControl-root").classList.toggle("hide");
    panel.dataset.state = "hidden";
  } else {
    setTimeout(() => {
      document.querySelector(theIdClass + " .delete").classList.toggle("hide");
      document.querySelector(theIdClass + " .edit").classList.toggle("hide");
      document.querySelector(theIdClass + " .MuiFormControl-root").classList.toggle("hide");
      panel.dataset.state = "visible";
    }, 500);
  }
}
