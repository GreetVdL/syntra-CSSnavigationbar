// function to show and hide menu when hamburger icon is clicked

function showMenu() {
  const hamburgerButton = document.querySelector(".icon-hamburger-icon");
  const hamburgerButtonIcon = document.querySelector(
    ".icon-hamburger-icon::before"
  );
  hamburgerButton.addEventListener("click", () => {
    const subMenuButtons = document.querySelectorAll("#hamburger > li");
    hamburgerButton.classList.toggle("activeHamburger");
    const activatedHamburger = document.querySelector(".activeHamburger");
    if (activatedHamburger === null) {
      subMenuButtons.forEach((subMenu) => {
        subMenu.style.display = "none";
        subMenu.style.zIndex = "1";
      });
    } else {
      subMenuButtons.forEach((subMenu) => {
        subMenu.style.display = "block";
        subMenu.style.zIndex = "1";
      });
    }
  });
}

// call showMenu function when DOM has loaded

window.addEventListener("DOMContentLoaded", () => {
  showMenu();
});
