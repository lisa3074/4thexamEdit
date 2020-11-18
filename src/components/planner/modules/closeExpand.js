export function closeExpand(theId) {
  console.log("planner/modules/closeExpand.js || closeExpand()");
  const theIdClass = `a${theId}`;
  document.querySelectorAll(".mui-panel.panelMargin").forEach((panel) => {
    if (!panel.classList.contains(theIdClass)) {
      panel.classList.remove("bigger");
      panel.classList.add("smaller");
    }
    document.querySelectorAll(".expandCard > p").forEach((p) => {
      if (!p.parentNode.parentNode.parentNode.classList.contains(theIdClass)) {
        setTimeout(() => {
          p.classList.add("hide");
        }, 500);
        p.classList.remove("fade_in");
        p.classList.add("fade_out");
      }
    });
    document.querySelectorAll(".expandCard > header > h1").forEach((h1) => {
      if (!h1.parentNode.parentNode.parentNode.parentNode.classList.contains(theIdClass)) {
        h1.classList.remove("biggerFont");
        h1.classList.add("smallerFont");
      }
    });

    document.querySelectorAll(".flex-wrapper, .assignedTo").forEach((wrapper) => {
      if (
        !wrapper.parentNode.parentNode.parentNode.classList.contains(theIdClass) &&
        wrapper.classList.contains("fade_in_fast")
      ) {
        wrapper.classList.remove("fade_in_fast");
        wrapper.classList.add("fade_out_fast");
        setTimeout(() => {
          wrapper.classList.remove("fade_out_fast");
          wrapper.classList.add("fade_in_fast");
        }, 600);
        setTimeout(() => {
          wrapper.classList.remove("fade_in_fast");
        }, 1000);
      }
    });

    document.querySelectorAll(".edit").forEach((edit) => {
      if (!edit.parentNode.parentNode.parentNode.classList.contains(theIdClass)) {
        edit.classList.remove("fade_in");
        edit.classList.add("fade_out");
        edit.classList.add("hide");
      }
    });
    document.querySelectorAll(".delete").forEach((deleteIt) => {
      if (!deleteIt.parentNode.parentNode.parentNode.classList.contains(theIdClass)) {
        deleteIt.classList.remove("fade_in");
        deleteIt.classList.add("fade_out");
        deleteIt.classList.add("hide");
      }
    });
    document.querySelectorAll(".assignedTo+.MuiFormControl-root").forEach((select) => {
      if (!select.parentNode.parentNode.classList.contains(theIdClass)) {
        select.classList.remove("fade_in");
        select.classList.add("fade_out");
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
