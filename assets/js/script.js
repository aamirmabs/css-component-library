// setting up HTML elements
const hamburgerMenuButton = document.getElementById("hamburger-menu-button");
const componentMenuOnMobile = document.getElementById(
  "component-menu-mobile-id"
);
const headerMenu = document.getElementsByClassName("header-menu")[0];

// detecting viewport width and setting header menu visibility
let vw = window.visualViewport.width;
let vh = window.visualViewport.height;

const setHeaderMenuVisibility = () => {
  vw = window.visualViewport.width;
  vh = window.visualViewport.height;

  if (vw < 767) {
    // headerMenu.style.visibility = "hidden";
    headerMenu.classList.add("hidden");
    componentMenuOnMobile.classList.add("hidden");
    // componentMenuOnMobile.style.visibility = "hidden";
  } else if (vw > 767) {
    // headerMenu.style.visibility = "visible";
    headerMenu.classList.remove("hidden");
    componentMenuOnMobile.classList.remove("hidden");
    // componentMenuOnMobile.style.visibility = "visible";
  }
};

const setHeaderMenuVisibilityOnLoad = () => {
  vw = window.visualViewport.width;
  vh = window.visualViewport.height;

  if (vw < 767) {
    // headerMenu.style.visibility = "hidden";
    headerMenu.classList.add("hidden");
    componentMenuOnMobile.classList.add("hidden");
    // componentMenuOnMobile.style.visibility = "hidden";
  } else if (vw > 767) {
    // headerMenu.style.visibility = "visible";
    headerMenu.classList.remove("hidden");
    componentMenuOnMobile.classList.remove("hidden");
    // componentMenuOnMobile.style.visibility = "visible";
  }
};

window.addEventListener("resize", setHeaderMenuVisibility);
window.onload = setHeaderMenuVisibilityOnLoad;

// hamburger menu controller

const hanburgerMenuController = (e) => {
  hamburgerMenuButton.classList.toggle("opened");
  hamburgerMenuButton.setAttribute(
    "aria-expanded",
    hamburgerMenuButton.classList.contains("opened")
  );

  headerMenu.classList.toggle("hidden");
  componentMenuOnMobile.classList.toggle("hidden");
};

hamburgerMenuButton.onclick = hanburgerMenuController;
