function openMenu() {
    document.getElementById("demo").classList.add('active');
    document.getElementsByClassName("header-left")[0].classList.add('active');
  }

function closeMenu() {
    document.getElementById("demo").classList.remove('active');
    document.getElementsByClassName("header-left")[0].classList.remove('active');
  }

  function openSearch() {
    document.getElementById("nav_search").classList.add('active');
    document.getElementsByClassName("header-left")[0].classList.add('active');
  }

function closeSearch() {
    document.getElementById("nav_search").classList.remove('active');
    document.getElementsByClassName("header-left")[0].classList.remove('active');
  }



new Swiper(".listProduct", {
  slidesPerView: 3,
  spaceBetween: 30,
  cssMode: true,
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
  breakpoints: {
      300: {
          slidesPerView: 2,
          spaceBetween: 10,
      },
      700: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1024: {
          slidesPerView: 3,
          spaceBetween: 30,
      },
      1500: {
          slidesPerView: 3,
          spaceBetween: 30,
      },
  },
  mousewheel: true,
  keyboard: true,
});

new Swiper(".mySwiper-banner", {
  slidesPerView: 1,
  cssMode: true,
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
  mousewheel: true,
  keyboard: true,
});