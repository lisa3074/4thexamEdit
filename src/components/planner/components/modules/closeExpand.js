export function closeExpand(theId) {
  const theIdClass = `a${theId}`;
  document.querySelectorAll(".mui-panel.panelMargin").forEach((panel) => {
    if (!panel.classList.contains(theIdClass)) {
      console.log("its a match");
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
    document.querySelectorAll(".expandCard > header > h2").forEach((h2) => {
      if (
        !h2.parentNode.parentNode.parentNode.parentNode.classList.contains(
          theIdClass
        )
      ) {
        h2.classList.remove("biggerFont");
        h2.classList.add("smallerFont");
      }
    });

    /*     document.querySelectorAll(".mui-panel.panelMargin").forEach((panel) => {
        panel.classList.remove("bigger");
        panel.classList.add("smaller");
      }); */

    document.querySelectorAll(".edit").forEach((edit) => {
      if (
        !edit.parentNode.parentNode.parentNode.classList.contains(theIdClass)
      ) {
        edit.classList.remove("fade_in");
        edit.classList.add("fade_out");
        edit.classList.add("hide");
      }
    });
    document.querySelectorAll(".delete").forEach((deleteIt) => {
      if (
        !deleteIt.parentNode.parentNode.parentNode.classList.contains(
          theIdClass
        )
      ) {
        deleteIt.classList.remove("fade_in");
        deleteIt.classList.add("fade_out");
        deleteIt.classList.add("hide");
      }
    });
    document.querySelectorAll(".expandCard+.mui-select").forEach((select) => {
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
