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
  let element = e.target;
  while (!element.classList.contains("alert")) {
    element = element.parentNode;
  }
  element.className = "puff-out";
  setTimeout(() => {
    element.style.display = "none";
  }, 1000);
};

// adding event to collection
addEventToHTMLCollection(hideAlertOnClick, "click", alertButtonCollection);
// END hide alert on clicking close button

// START carousel //

// carouselCollection will contain a collection of all carousels on the page
let carouselArray = Array.from(document.getElementsByClassName("carousel"));

// loop over each carousel in the carouselCollection and create a slideshow
carouselArray.forEach((carousel) => {
  let slides = Array.from(carousel.children);
  let index = 0;

  setInterval(() => {
    slides[index].style.display = "none";

    // target next slide
    index = index + 1;
    // check if index is a boundary value and reset
    if (index === -1 || index === slides.length) {
      index = 0;
    }
    slides[index].style.display = "block";
  }, 2500);
});
// END carousel //

// START toasts //
// hide toast on clicking close button on toast
let closeToastButtonsArray = Array.from(
  document.getElementsByClassName("toast-close-button")
);

let hideToastOnClose = (e) => {
  // event could be triggered on close icon or on button
  // we will traverse parent elements till we reach the toast
  let toast = e.target;
  while (!toast.classList.contains("toast")) {
    toast = toast.parentNode;
  }

  toast.classList.remove("fade-in");
  toast.classList.add("fade-out");

  setTimeout(() => {
    toast.style.display = "none";
  }, 1000);
};

closeToastButtonsArray.forEach((closeButton) => {
  closeButton.addEventListener("click", hideToastOnClose);
});

// show live toasts on clicking button
let showLiveToastButton = document.getElementById("show-live-toasts");

let showLiveToasts = (e) => {
  let liveToastContainer = document.getElementById("live-toasts-container-id");

  // show the live toasts container
  liveToastContainer.style.display = "block";
  liveToastContainer.classList.add("fade-in");

  // fade out toast container after 3 seconds
  const fadeoutDuration = 5000;
  setTimeout(() => {
    liveToastContainer.classList.remove("fade-in");
    liveToastContainer.classList.add("fade-out");
  }, fadeoutDuration);

  // hide toasts container after 1 more second
  setTimeout(() => {
    liveToastContainer.classList.remove("fade-out");
    liveToastContainer.style.display = "none";
  }, fadeoutDuration + 1000);
};

showLiveToastButton.addEventListener("click", showLiveToasts);

// END toasts //
