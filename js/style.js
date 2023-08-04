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


  var swiper = new Swiper("#mySwiper", { 
    slidesPerView: 5,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  navigation: {
  nextEl: ".swiper-button-next",
  prevEl: ".swiper-button-prev",
},
});