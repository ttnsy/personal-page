// Sidebar
const navLinkEls = document.querySelectorAll(".nav__link");
const sectionEls = document.querySelectorAll(".section");

let currentSection = "about";
window.addEventListener("scroll", () => {
  sectionEls.forEach((sectionEl) => {
    if (window.scrollY >= sectionEl.offsetTop) {
      currentSection = sectionEl.id;
    }
  });

  navLinkEls.forEach((navLinkEl) => {
    if (navLinkEl.href.includes(currentSection)) {
      document.querySelector(".active").classList.remove("active");
      navLinkEl.classList.add("active");
    }
  });
});

// confetti
import confetti from "canvas-confetti";
const myCanvas = document.createElement("canvas");

myCanvas.style.width = "100vw";
myCanvas.style.height = "100vh";
myCanvas.style.position = "fixed";
myCanvas.style.marginLeft = "22%";
myCanvas.style.inset = 0;
myCanvas.style.right = 0;
myCanvas.style.zIndex = -10;

document.body.append(myCanvas);

const confettiTextEl = document.querySelector(".text_confetti");

confettiTextEl.addEventListener("click", () => {
  const myConfetti = confetti.create(myCanvas, {
    resize: true,
    useWorker: true,
  });

  myConfetti({
    particleCount: 200,
    spread: 200,
  });
});
