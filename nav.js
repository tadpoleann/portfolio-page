// navigation burger
const primaryNav = document.querySelector("#navbar");
const navToggle = document.querySelector(".mobile-nav-toggle");
const navLink = document.querySelectorAll(".nav-link");

checkVisibility = () => {
  const visibility = primaryNav.getAttribute("data-visible");
  if (visibility === "false") {
    primaryNav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else {
    primaryNav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
};

navToggle.addEventListener("click", checkVisibility);
navLink.forEach((n) => n.addEventListener("click", checkVisibility));

//nav scroll
window.onscroll = () => {
  const nav = document.querySelector("#navbar");
  if (this.scrollY <= 10) nav.className = "";
  else nav.className = "scroll";
};
