export function expand(theId) {
  console.log("expand");
  console.log("the class: " + theId);
  const theIdClass = `#a${theId}`;
  const theIdClassName = `.a${theId}`;

  document.querySelectorAll(theIdClass + "> div > p").forEach((p) => {
    setTimeout(() => {
      p.classList.toggle("hide");
    }, 500);
    p.classList.toggle("fade_in");
    p.classList.toggle("fade_out");
  });
  document.querySelector(theIdClass + " h2").classList.toggle("biggerFont");
  document.querySelector(theIdClass + " h2").classList.toggle("smallerFont");

  document.querySelector(".MuiAccordion-root.panelMargin" + theIdClassName).classList.toggle("bigger");
  //MuiPaper-root MuiAccordion-root panelMargin smaller a5f1d7f6f8ada1e610003b827 MuiAccordion-rounded MuiPaper-elevation1 MuiPaper-rounded
  document.querySelector(".MuiAccordion-root.panelMargin" + theIdClassName).classList.toggle("smaller");

  document.querySelector(theIdClass + " .edit").classList.toggle("fade_in");
  document.querySelector(theIdClass + " .edit").classList.toggle("fade_out");
  document.querySelector(theIdClass + " .delete").classList.toggle("fade_in");
  document.querySelector(theIdClass + " .delete").classList.toggle("fade_out");
  document.querySelector(theIdClass + " .MuiInput-root").classList.toggle("fade_in");
  document.querySelector(theIdClass + " .MuiInput-root").classList.toggle("fade_out");

  const panel = document.querySelector(".MuiAccordion-root.panelMargin" + theIdClassName);

  if (panel.dataset.state === "visible") {
    document.querySelector(theIdClass + " .delete").classList.toggle("hide");
    document.querySelector(theIdClass + " .edit").classList.toggle("hide");
    document.querySelector(theIdClass + " .MuiInput-root").classList.toggle("hide");
    panel.dataset.state = "hidden";
  } else {
    setTimeout(() => {
      document.querySelector(theIdClass + " .delete").classList.toggle("hide");
      document.querySelector(theIdClass + " .edit").classList.toggle("hide");
      document.querySelector(theIdClass + " .MuiInput-root").classList.toggle("hide");
      panel.dataset.state = "visible";
    }, 500);
  }
}
