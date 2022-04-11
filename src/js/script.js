import { removeHidden, addHidden } from "./helpers.js";

// Element Selectors
const moreListEl = document.querySelector(".more-list");
const moreListItemsEl = document.querySelector(".more-list-items");

const moreMenu = function () {
  moreListEl.addEventListener("mouseover", function () {
    removeHidden(moreListItemsEl);
  });
  moreListEl.addEventListener("mouseout", function () {
    addHidden(moreListItemsEl);
  });
  moreListItemsEl.addEventListener("mouseout", function () {
    addHidden(moreListItemsEl);
  });
};

const init = function () {
  moreMenu();
};

init();
