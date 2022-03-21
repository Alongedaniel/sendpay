let menuToggler = function () {
  let mobileNav = document.querySelector(".mobile-nav");
  let menuIcon = document.querySelector(".menu-icon");
  let close = document.querySelector(".close");

  menuIcon.addEventListener("click", () => {
    mobileNav.style.transform = "translate(0px)";
  });

  close.addEventListener("click", () => {
    mobileNav.style.transform = "translate(-1000px)";
  });
};
