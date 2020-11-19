export function scroll() {
  console.log("planner/modules/scoll.js || scroll()");
  window.addEventListener("resize", setHeight);

  function setHeight() {
    console.log("planner/modules/scoll.js || setHeight()");
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    /*     console.log(vh); */
    let px = window.innerHeight + "px";
    document.documentElement.style.setProperty("--px", `${px}px`);
    /*     console.log(px); */
  }
}
