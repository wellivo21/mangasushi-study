export const removeHidden = function (element) {
  element.classList.remove("hidden");
};

export const addHidden = function (element) {
  element.classList.add("hidden");
};

export const popupMarkup = `
<div class="new-manga-popup">
              <div class="popup-manga-img-title">
                <img src="./src/img/sushi placeholder.webp" alt="Manga Cover" class="new-manga-cover-img">
                <span class="popup-manga-title">Manga title ### # ### Manga title</span>
              </div>
              <div class="new-manga-info">
                <div class="rate">
                  <p class="rates">
                    <span class="stars">&starf; &starf; &starf; &starf; &star;</span>
                    <span class="rating">4.0</span>
                  </p>
                </div>
                <div class="new-manga-description grid grid--2-cols">
                  <span class="popup-question">Rank</span>
                  <p class="popup-answer">XX position, it has XX monthly views</p>                    <span class="popup-question">Alternative</span>
                  <p class="popup-answer">Alternative manga name</p>
                  <span class="popup-question">Author(s)</span>
                  <p class="popup-answer">Author(s) name(s)</p>
                  <span class="popup-question">Grenre(s)</span>
                  <p class="popup-answer">Manga genre(s) Genre#1 Genre#2</p>
                  <span class="popup-question">Summary</span>
                  <p class="popup-answer">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt soluta nulla accusantium, officia animi minima quod iure voluptatum harum! Culpa perferendis molestias consectetur. Error a distinctio voluptatibus possimus maxime recusandae!</p>
                </div>
              </div>
            </div>
            `;

export const toggleLockScroll = function () {
  document.body.classList.toggle("lock-scroll");
};
