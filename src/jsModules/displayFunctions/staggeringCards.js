import { gsap } from "gsap";

export function staggeringCards(list) {
  setTimeout(() => {
    gsap.from("." + list + " .panelMargin", {
      duration: 0.1,
      opacity: 0,
      y: -100,
      stagger: 0.1,
      ease: "back.in",
    });
    gsap.to("." + list + " .panelMargin", {
      delay: 0,
      duration: 0.1,
      opacity: 1,
      y: 0,
      stagger: 0.1,
      ease: "back.in",
    });
  }, 10);
}

export function filterStay() {
  setTimeout(() => {
    gsap.to(".FilterTasks", { delay: 0.2, duration: 0.3, y: 0 });
    gsap.to(".relativeContainer", { duration: 0.5, y: -8 });
    gsap.to(".FilterUsers", { delay: 0.2, duration: 0.3, y: 0 });
    gsap.to(".UserList", { duration: 0.5, y: 0 });
  }, 1);
}

export function staggeringProfiles() {
  setTimeout(() => {
    gsap.from(".UserCard", {
      duration: 0.4,
      opacity: 0,
      y: -100,
      stagger: 0.1,
      ease: "back.in",
    });
    gsap.to(".UserCard", {
      delay: 0.4,
      duration: 0.4,
      opacity: 1,
      y: 0,
      stagger: 0.1,
      ease: "back.in",
    });
  }, 10);
}
