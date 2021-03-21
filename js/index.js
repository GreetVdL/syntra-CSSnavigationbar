// function to show menu whem hamburger icon is clicked

function showMenu() {
  const hamburgerButton = document.querySelector(".icon-hamburger-icon");
  hamburgerButton.addEventListener("click", () => {
    const subMenuButtons = document.querySelectorAll("#hamburger > li");
    subMenuButtons.forEach((subMenu) => {
      subMenu.style.display = "block";
      subMenu.style.zIndex = "1";
    });
  });
}

// call showMenu function when DOM has loaded

window.addEventListener("DOMContentLoaded", () => {
  showMenu();
});
