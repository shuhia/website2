const header = document.querySelector(".header");
const image = document.querySelector(".img-hero");
const footer = document.querySelector(".footer");

let lastKnownScrollPosition = 0;
let ticking = false;

document.addEventListener("scroll", function (e) {
  if (!ticking) {
    window.requestAnimationFrame(function () {
      const scrollY = window.scrollY;
      if (scrollY > lastKnownScrollPosition) {
        // On scroll down
        image.classList.add("side-image");
        header.classList.add("header-up");
        footer.classList.add("footer-down");
      } else {
        // On scroll up
        image.classList.remove("side-image");
        header.classList.remove("header-up");
        footer.classList.remove("footer-down");
      }
      ticking = false;
      lastKnownScrollPosition = scrollY;
    });

    ticking = true;
  }
});
