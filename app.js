const degree = 6;
const hr = document.querySelector("#hr");
const min = document.querySelector("#min");
const sec = document.querySelector("#sec");

setInterval(() => {
  const date = new Date();
  const hh = date.getHours() * 30;
  const mm = date.getMinutes() * degree;
  const ss = date.getSeconds() * degree;

  hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  min.style.transform = `rotateZ(${mm}deg)`;
  sec.style.transform = `rotateZ(${ss}deg)`;
});

// ---------------------------------------------------

const clock = document.querySelector(".clock");
const toggle = document.querySelector("#toggle-dark");
const body = document.querySelector("body");
const img = document.querySelector("img");

console.log(toggle);

toggle.addEventListener("click", () => {
  toggle.classList.toggle("bi-moon");
  if (toggle.classList.contains("bi-moon")) {
    gsap.fromTo("#toggle-dark", 1, { x: "2rem" }, { x: "0" });
    clock.classList.add("dark");
    body.style.background = "#b7b7ee8c";
    body.style.transition = "2s";
    toggle.style.color = "#F5F3CE";
    img.src = "images/dark.png";
  } else {
    gsap.fromTo("#toggle-dark", 1, { x: "2rem" }, { x: "0" });
    clock.classList.remove("dark");
    body.style.background = "#b694945c";
    body.style.transition = "2s";
    toggle.style.color = "orange";
    img.src = "images/light.png";
  }
});
