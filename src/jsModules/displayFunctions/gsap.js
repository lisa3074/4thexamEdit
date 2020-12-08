import { gsap } from "gsap";

//STAGGERING ANIMATIONS
export function GSAP_stagCards(list) {
  console.log("jsModules || gsap.js | GSAP_stagCards()");
  setTimeout(() => {
    gsap.from("." + list + " .panelMargin", {
      duration: 0.5,
      opacity: 0,
      top: -500,
      stagger: 0.1,
      ease: "expo.in",
    });
    gsap.to("." + list + " .panelMargin", {
      delay: 0,
      duration: 0.5,
      opacity: 1,
      top: 0,
      stagger: 0.1,
      ease: "back.in",
    });
  }, 10);
}

export function GSAP_stagCardsDesktop() {
  console.log("jsModules || gsap.js | GSAP_plannerListsAnimtionMobile()");
  setTimeout(() => {
    gsap.from(".panelMargin", {
      opacity: 0,
    });
    gsap.to(".panelMargin", {
      duration: 1,
      opacity: 1,
      stagger: 0.05,
      ease: "back.in",
    });
  }, 10);
}

export function GSAP_stagProfiles() {
  console.log("jsModules || gsap.js | GSAP_stagProfiles()");
  setTimeout(() => {
    gsap.from(".UserCard", {
      opacity: 0,
      stagger: 0.1,
      ease: "back.in",
    });
    gsap.to(".UserCard", {
      duration: 1,
      opacity: 1,
      stagger: 0.1,
      ease: "back.in",
    });
  }, 10);
}
export function GSAP_stagProfilesMenuNav() {
  console.log("jsModules || gsap.js | GSAP_stagProfilesMenuNav()");
  gsap.to(".UserCard", { opacity: 0 });
  setTimeout(() => {
    gsap.to(".UserCard", { duration: 0.5, opacity: 1, stagger: 0.05 });
  }, 10);
}
export function GSAP_stagProfilesStartup() {
  console.log("jsModules || gsap.js | GSAP_stagProfilesStartup()");
  gsap.to(".UserCard", { delay: 1, duration: 1, opacity: 1, stagger: 0.1 });
}
export function GSAP_stagProfilesSort() {
  console.log("jsModules || gsap.js | GSAP_stagProfilesSort()");
  setTimeout(() => {
    gsap.from(".UserCard", { opacity: 0 });
    gsap.to(".UserCard", { delay: 0.2, duration: 1, opacity: 1, stagger: 0.1 });
  }, 10);
}

export function GSAP_stagViewProfile() {
  console.log("jsModules || gsap.js | GSAP_stagViewProfile()");
  setTimeout(() => {
    gsap.to(".userCard, ProfileNav", {
      duration: 0.2,
      opacity: 1,
      stagger: 0.05,
      //ease: "back.in",
    });
  }, 10);
}
export function GSAP_stagMenuNav() {
  console.log("jsModules || gsap.js | GSAP_stagMenuNav()");
  if (window.innerWidth < 1000) {
    gsap.to(".MenuNav li", { opacity: 0 });
    setTimeout(() => {
      gsap.to(".MenuNav li", { delay: 0.5, duration: 0.1, opacity: 1, stagger: 0.1 });
    }, 10);
  } else {
    gsap.to(".MenuNav li", { opacity: 1 });
  }
}

//POSITIONING ANIMATIONS
export function GSAP_plannerListsAnimtionMobile(list) {
  console.log("jsModules || gsap.js | GSAP_plannerListsAnimtionMobile()");
  console.log("planner/modules || mobNavigation.js | done() | GSAP_plannerListsAnimtionMobile");
  gsap.to(".scrollList", { duration: 0, opacity: 0, zIndex: 0, width: "calc(100vw - 1rem)" });
  gsap.to("." + list + ".scrollList", { duration: 0, opacity: 1, zIndex: 1, width: "calc(100vw - 1rem)" });
}

export function GSAP_sortVisibleMobile() {
  console.log("jsModules || gsap.js | GSAP_sortVisibleMobile()");
  setTimeout(() => {
    gsap.to(".FilterTasks", { delay: 0.1, duration: 0.4, top: 135 });
    gsap.to(".relativeContainer", { duration: 0.5, top: 0 });
    gsap.to(".FilterUsers", { delay: 0.2, duration: 0.3, top: 135 });
    gsap.to(".UserList", { duration: 0.5, top: 0 });
  }, 1);
}
export function GSAP_sortInvisibleMobile() {
  console.log("jsModules || gsap.js | GSAP_sortInvisibleMobile()");
  gsap.to(".UserList", { duration: 0.5, top: -140 });
  gsap.to(".relativeContainer", { duration: 0.3, top: -80 });
}
export function GSAP_sortInvisibleFilterMobile() {
  console.log("jsModules || gsap.js | GSAP_sortInvisibleFilterMobile()");
  gsap.to(".FilterUsers", { duration: 0.5, top: -140 });
  gsap.to(".FilterTasks", { duration: 0.5, top: -80 });
}

export function GSAP_UserListToTop() {
  console.log("jsModules || gsap.js | GSAP_UserListToTop()");
  gsap.to(".UserList", { duration: 0.5, top: -140 });
}

//OPACITY SPECIEL
export function GSAP_opacity0To1MenuProfile() {
  console.log("jsModules || gsap.js | GSAP_opacity0To1MenuProfile()");
  gsap.from(".Profile, .MenuNav", { delay: 0, duration: 1, autoAlpha: 0 });
  gsap.to(".Profile, .MenuNav", { delay: 0, duration: 1, autoAlpha: 1 });
}
export function GSAP_opacity0To1NamePopup() {
  console.log("jsModules || gsap.js | GSAP_opacity0To1NamePopup()");
  gsap.from(".name-popup", { duration: 0.5, opacity: 0 });
  gsap.to(".name-popup", { duration: 0.5, opacity: 1 });
}
export function GSAP_opacity0To1MessageContainer() {
  console.log("jsModules || gsap.js | GSAP_opacity0To1MessageContainer()");
  gsap.from(".message-container", { duration: 1, opacity: 0 });
  gsap.to(".message-container", { duration: 1, opacity: 1 });
}

export function GSAP_addOpacityUserForm() {
  console.log("jsModules || gsap.js | GSAP_addOpacityUserForm()");
  setTimeout(() => {
    gsap.to(".UserForm", { duration: 0.5, opacity: 0 });
  }, 10);
}

export function GSAP_removeOpacityMenuProfile() {
  console.log("jsModules || gsap.js | GSAP_removeOpacityMenuProfile()");
  gsap.to(".Profile, .MenuNav", { delay: 1, duration: 1, autoAlpha: 1 });
}

//OPACITY GENEREL
export function GSAP_addOpacity(element) {
  console.log("jsModules || gsap.js | GSAP_addOpacity()");
  console.log("ADD OPACITY");
  setTimeout(() => {
    gsap.to(element, { opacity: 0 });
  }, 10);
}
export function GSAP_removeOpacity(element) {
  console.log("jsModules || gsap.js | GSAP_removeOpacity()");
  setTimeout(() => {
    gsap.to(element, { duration: 0.5, opacity: 1 });
  }, 10);
}
