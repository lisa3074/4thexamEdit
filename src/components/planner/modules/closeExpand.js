export function closeExpand(theId) {
  console.log("planner/modules || closeExpand.js | closeExpand()");
  const theIdClass = `a${theId}`;
  document.querySelectorAll(".mui-panel.panelMargin").forEach((panel) => {
    if (!panel.classList.contains(theIdClass)) {
      panel.classList.remove("bigger");
      panel.classList.add("smaller");
    }

    document.querySelectorAll(".expandCard > header > h1").forEach((h1) => {
      if (!h1.parentNode.parentNode.parentNode.parentNode.classList.contains(theIdClass)) {
        h1.classList.remove("biggerFont");
        h1.classList.add("smallerFont");
      }
    });

    document.querySelectorAll(".edit, .deleteIt, .expandCard > p").forEach((element) => {
      if (!element.parentNode.parentNode.parentNode.classList.contains(theIdClass)) {
        element.classList.add("hide");
      }
    });

    document.querySelectorAll(".assignedTo+.MuiFormControl-root").forEach((select) => {
      if (!select.parentNode.parentNode.classList.contains(theIdClass)) {
        select.classList.add("hide");
      }
    });

    document.querySelectorAll(".mui-panel.panelMargin").forEach((muiPanel) => {
      if (!muiPanel.classList.contains(theIdClass)) {
        muiPanel.dataset.state = "hidden";
      }
    });
  });
}
