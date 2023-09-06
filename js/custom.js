// open and nev menu
const menu = document.querySelector(".menu");
const menuBtn = document.querySelector("#menuOpen");
const closeBtn = document.querySelector("#menuOff");

menuBtn.addEventListener("click", () => {
  menu.style.display = " flex";
  closeBtn.style.display = "inline-block";
  menuBtn.style.display = "none";
});
// clos nav menu
const closeNev = () => {
  menu.style.display = "none";
  closeBtn.style.display = "none";
  menuBtn.style.display = "inline-block";
};
closeBtn.addEventListener("click", closeNev);

// nav color chang

window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 100);
});
