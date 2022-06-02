const searchForm = document.querySelector(".search-form");
const headerNav = document.getElementById("header-nav");

function openSearch() {
  searchForm.classList.add("search-open");
}

function closeSearch() {
  searchForm.classList.remove("search-open");
}

function openNav() {
  headerNav.classList.add("header-nav-open");
}

function closeNav() {
  headerNav.classList.remove("header-nav-open");
}
