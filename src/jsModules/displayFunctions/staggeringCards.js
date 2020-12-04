import { gsap } from "gsap";

export function staggeringCards(list) {
  setTimeout(() => {
    gsap.from("." + list + " .panelMargin", {
      duration: 0.5,
      opacity: 0,
      y: -600,
      stagger: 0.1,
      ease: "expo.in",
    });
    gsap.to("." + list + " .panelMargin", {
      delay: 0,
      duration: 0.5,
      opacity: 1,
      y: 0,
      stagger: 0.1,
      ease: "back.in",
    });
  }, 10);
}
export function staggeringCardsDesktop() {
  setTimeout(() => {
    gsap.from(".panelMargin", {
      opacity: 0,
      stagger: 0.1,
      ease: "expo.in",
    });
    gsap.to(".panelMargin", {
      duration: 0.5,
      opacity: 1,
      y: 0,
      stagger: 0.1,
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
      y: -100,
      stagger: 0.1,
      ease: "back.in",
    });
    gsap.to(".UserCard", {
      duration: 1,
      opacity: 1,
      y: 0,
      stagger: 0.1,
      ease: "back.in",
    });
  }, 10);
}
export function staggeringProfilesTo() {
  // gsap.to(".UserCard", { duration: 0.1, opacity: 0 });
  setTimeout(() => {
    gsap.to(".UserCard", { opacity: 0 });

    gsap.to(".UserCard", {
      duration: 1,
      opacity: 1,
      y: 0,
      stagger: 0.1,
      ease: "back.in",
    });
  }, 10);
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
