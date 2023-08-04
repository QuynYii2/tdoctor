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