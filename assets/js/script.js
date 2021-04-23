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

// function to add event to an HTML Collection
// HTML collections are not iterable
// so if we need to add an event to a collection then we will convert them into an array so that we can traverse over then and add the event to each of the HTML nodes
let addEventToHTMLCollection = (event, eventType, collection) => {
  let array = Array.from(collection);

  array.forEach((element) => {
    element.addEventListener(eventType, event);
  });
};

// START component menu accordion functionality

// event to toggle visibility of a sub-menu items on clicking menu item
const toggleSubMenuItems = (e) => {
  let menuTitle = e.target;
  let subMenuItems = menuTitle.nextElementSibling;

  subMenuItems.classList.toggle("hidden");
};

// adding the event to all menu items
let menuItemCollection = document.getElementsByClassName(
  "desktop-main-menu-item"
);

addEventToHTMLCollection(toggleSubMenuItems, "click", menuItemCollection);
// END component menu accordion functionality

// START hide alert on clicking close button
// collection
let alertButtonCollection = document.getElementsByClassName(
  "alert-close-button"
);

// event
let hideAlertOnClick = (e) => {
  console.log("Close clicked");
  let element = e.target.parentNode;
  console.log(element);

  element.className = "puff-out";
  setTimeout(() => {
    element.style.display = "none";
  }, 1000);
};

// adding event to collection
addEventToHTMLCollection(hideAlertOnClick, "click", alertButtonCollection);
