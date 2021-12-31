//Load page content before the typing animation
const typeAniText = document.querySelector(".top-container h1");

window.onload = () => {
  typeAniText.classList.add("greeting");
};

// Modal Open and Close
const projects = document.querySelectorAll("[data-target]");
const close_btns = document.querySelectorAll(".close-btn");
const overlay = document.querySelector("#overlay");

projects.forEach((project) => {
  project.addEventListener("click", () => {
    document.querySelector(project.dataset.target).classList.add("active");
    overlay.classList.add("active");
  });
});

close_btns.forEach((close_btn) => {
  close_btn.addEventListener("click", () => {
    document.querySelector(close_btn.dataset.target).classList.remove("active");
    overlay.classList.remove("active");
  });
});

window.onclick = (e) => {
  if (e.target == overlay) {
    const modals = document.querySelectorAll(".modal");
    modals.forEach((modal) => modal.classList.remove("active"));
    overlay.classList.remove("active");
  }
};
