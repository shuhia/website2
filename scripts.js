const header = document.querySelector(".header");

let lastKnownScrollPosition = 0;
let ticking = false;

document.addEventListener("scroll", function (e) {
  if (!ticking) {
    window.requestAnimationFrame(function () {
      const scrollY = window.scrollY;
      if (scrollY > lastKnownScrollPosition) {
        // On scroll down
        header.classList.add("header-up");
      } else {
        // On scroll up
        header.classList.remove("header-up");
      }
      ticking = false;
      lastKnownScrollPosition = scrollY;
    });

    ticking = true;
  }
});
