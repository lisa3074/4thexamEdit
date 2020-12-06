import { gsap } from "gsap";

export function staggeringCards(list) {
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
export function staggeringCardsDesktop() {
  setTimeout(() => {
    gsap.from(".panelMargin", {
      opacity: 0,
    });
    gsap.to(".panelMargin", {
      duration: 0.5,
      opacity: 1,
      stagger: 0.05,
      ease: "back.in",
    });
  }, 10);
}

export function filterStay() {
  setTimeout(() => {
    gsap.to(".FilterTasks", { delay: 0.1, duration: 0.4, top: 135 });
    gsap.to(".relativeContainer", { duration: 0.5, top: 0 });
    gsap.to(".FilterUsers", { delay: 0.2, duration: 0.3, top: 135 });
    gsap.to(".UserList", { duration: 0.5, top: 0 });
  }, 1);
}

export function staggeringProfiles() {
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
export function staggeringProfilesTo() {
  gsap.to(".UserCard", { opacity: 0 });
  setTimeout(() => {
    gsap.to(".UserCard", { duration: 1, opacity: 1, stagger: 0.1 });
  }, 10);
}
export function staggeringProfilesStart() {
  gsap.to(".UserCard", { delay: 1, duration: 1, opacity: 1, stagger: 0.1 });
}
export function staggeringProfilesFilter() {
  setTimeout(() => {
    gsap.from(".UserCard", { opacity: 0 });
    gsap.to(".UserCard", { delay: 0.2, duration: 1, opacity: 1, stagger: 0.1 });
  }, 10);
}

export function showChat() {
  /*   setTimeout(() => {
    gsap.to(".message-container", { duration: 1, opacity: 1 });
  }, 10); */
}
export function hideCards() {
  setTimeout(() => {
    gsap.to(".UserCard", { opacity: 0 });
  }, 10);
}
export function hidePlanner() {
  setTimeout(() => {
    gsap.to(".panelMargin", { opacity: 0 });
  }, 10);
}
export function hideChat() {
  /*   setTimeout(() => {
    gsap.to(".message-container", { opacity: 0 });
  }, 10); */
}

export function hideViewProfile() {
  setTimeout(() => {
    gsap.to(".userCard, .ProfileNav", { opacity: 0 });
  }, 10);
}

export function staggeringViewProfile() {
  setTimeout(() => {
    gsap.to(".userCard, ProfileNav", {
      duration: 0.5,
      opacity: 1,
      stagger: 0.2,
      ease: "back.in",
    });
  }, 10);
}
export function staggeringMenuNav() {
  if (window.innerWidth < 1000) {
    gsap.to(".MenuNav li", { opacity: 0 });
    setTimeout(() => {
      gsap.to(".MenuNav li", { delay: 0.5, duration: 0.1, opacity: 1, stagger: 0.1 });
    }, 10);
  } else {
    gsap.to(".MenuNav li", { opacity: 1 });
  }
}
