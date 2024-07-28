var header = document.getElementById("header");
let allow = true;
window.addEventListener("scroll", function () {
  let y = window.scrollY;
  if (y > 80 && allow) {
    header.style.transition = "0.5s";
    header.style.top = "-180px";
    setTimeout(() => {
      header.classList.add("stick");
    }, 1);
    setTimeout(() => {
      header.style.position = "fixed";
      header.style.top = "0px";
      header.classList.remove("stick");
    }, 190);
    allow = false;
  }
  if (y == 0) {
    allow = true;
    header.style.position = "absolute";
    header.style.top = "0px";
  }
});

var closeBtn = document.getElementById("close-btn");
var menuBtn = document.getElementById("menu-btn");
var menu = document.getElementById("menu");

closeBtn.addEventListener("click", () => {
  menu.classList.remove("show");
});
menuBtn.addEventListener("click", () => {
  menu.classList.add("show");
});

//Slide
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});

var questionBtn = document.querySelectorAll(".question-btn");
var answer = document.querySelectorAll(".answer");

questionBtn.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    if (!answer[index].classList.contains("show")) {
      answer[index].classList.add("show");
      btn.classList.add("show");
    } else {
      answer[index].classList.remove("show");
      btn.classList.remove("show");
    }
  });
});
