// links animations
const buttonLoader = () => {
  document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".nav-link");

    if (links == null) return;

    links.forEach(function (link) {
      link.addEventListener("click", function (event) {
        links.forEach(function (link) {
          link.classList.remove("clicked");
        });
        event.currentTarget.classList.add("clicked");
      });
    });
  });
};
buttonLoader();

// Search button animation
const searchBtn = document.getElementById("search-btn");
const searchOpen = document.getElementById("search-open");

const Search = () => {
  searchOpen.classList.toggle("active");
};

searchBtn.onclick = (event) => {
  event.stopPropagation();
  Search();
};

document.addEventListener("click", (event) => {
  const isClickInsideSearch = searchOpen.contains(event.target);
  const isClickOnSearchBtn = searchBtn.contains(event.target);

  if (!isClickInsideSearch && !isClickOnSearchBtn) {
    searchOpen.classList.remove("active");
  }
});

$(".js-range-slider").ionRangeSlider({
  type: "double",
  skin: "round",
  prettify_enabled: false,
});

// grid and list view
document.addEventListener("DOMContentLoaded", function () {
  const gridViewButton = document.getElementById("grid");
  const listViewButton = document.getElementById("list");

  const gridView = document.querySelector(".store-grid-view");
  const listView = document.querySelector(".store-list-view");

  const gridListBtn = document.querySelectorAll(".grid-list");
  if (gridViewButton == null) return;
  gridListBtn.forEach((btns) => {
    btns.addEventListener("click", () => {
      const tabId = btns.dataset.id;

      gridListBtn.forEach((d) => d.classList.remove("active"));
      document.getElementById(`${tabId}`).classList.add("active");
    });
  });

  function switchToGridView() {
    gridView.style.display = "block";
    listView.style.display = "none";
  }
  function switchToListView() {
    listView.style.display = "block";
    gridView.style.display = "none";
  }

  gridViewButton.addEventListener("click", switchToGridView);

  listViewButton.addEventListener("click", switchToListView);
});

//  <!-- quantity buttons -->
document.addEventListener("DOMContentLoaded", function () {
  var quantityInput = document.getElementById("quantity");
  var incrementBtn = document.getElementById("increment");
  var decrementBtn = document.getElementById("decrement");
  if (quantityInput == null) return;

  incrementBtn.addEventListener("click", function () {
    var currentValue = parseInt(quantityInput.value);
    if (!isNaN(currentValue)) {
      quantityInput.value = currentValue + 1;
    } else {
      quantityInput.value = 1;
    }
  });

  decrementBtn.addEventListener("click", function () {
    var currentValue = parseInt(quantityInput.value);
    if (!isNaN(currentValue) && currentValue > 1) {
      quantityInput.value = currentValue - 1;
    } else {
      quantityInput.value = 1;
    }
  });
});

//
const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty("--progress", 1 - progress);
      progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    },
  },
});
