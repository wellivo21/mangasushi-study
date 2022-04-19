import {
  removeHidden,
  addHidden,
  popupMarkup,
  toggleLockScroll,
} from "./helpers.js";

// Element Selectors
const moreListEl = document.querySelector(".more-list");
const moreListItemsEl = document.querySelector(".more-list-items");
const newMangaCoverImgAllEl = document.querySelectorAll(".new-manga-cover-img");
const navButtonEl = document.querySelector(".btn-mobile-nav");
const mobileNavLinksEl = document.querySelector(".mobile-nav-links");
const closeButtonNavEl = document.querySelector(".close-btn-nav");

///////////////////////
const moreMenu = function () {
  moreListEl.addEventListener("mouseenter", function () {
    removeHidden(moreListItemsEl);
  });
  moreListEl.addEventListener("mouseleave", function () {
    addHidden(moreListItemsEl);
  });
};

const popup = function () {
  newMangaCoverImgAllEl.forEach((coverImgEl) => {
    const closestNewManga = coverImgEl.closest(".new-manga");

    coverImgEl.addEventListener("mouseenter", () => {
      closestNewManga.insertAdjacentHTML("beforeend", popupMarkup);
    });

    coverImgEl.addEventListener("mouseleave", () => {
      const popupEl = document.querySelector(".new-manga-popup");
      closestNewManga.removeChild(popupEl);
    });
  });
};

const navMenu = function () {
  navButtonEl.addEventListener("click", () => {
    removeHidden(mobileNavLinksEl);
    toggleLockScroll();
  });
  closeButtonNavEl.addEventListener("click", () => {
    addHidden(mobileNavLinksEl);
    toggleLockScroll();
  });
};

///////////////////////////
// INIT
const init = function () {
  moreMenu();
  popup();
  navMenu();
};

init();
