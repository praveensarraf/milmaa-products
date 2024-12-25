"use strict";

// scrollTop
window.addEventListener("scroll", function () {
  const scrollTop = document.getElementById("scrollTop");

  if (window.scrollY >= 560) {
    scrollTop.classList.add("showScrollTop");
  } else {
    scrollTop.classList.remove("showScrollTop");
  }

  scrollTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

// Navbar
document.addEventListener("DOMContentLoaded", function () {
  let navbar = document.querySelector(".navbar");
  let searchBox = document.querySelector(".search-box .bx-search");
  searchBox.addEventListener("click", () => {
    navbar.classList.toggle("showInput");
    if (navbar.classList.contains("showInput")) {
      searchBox.classList.replace("bx-search", "bx-x");
    } else {
      searchBox.classList.replace("bx-x", "bx-search");
    }
  });

  // sidebar open close js code
  let navLinks = document.querySelector(".nav-links");
  let navLinksAnchor = document.querySelectorAll(".nav-links a");
  let menuOpenBtn = document.querySelector(".navbar .bx-menu");
  let menuCloseBtn = document.querySelector(".nav-links .bx-x");
  let body = document.body;

  if (menuOpenBtn) {
    menuOpenBtn.onclick = function () {
      navLinks.style.left = "0";
    };
  }

  if (menuCloseBtn) {
    menuCloseBtn.onclick = function () {
      navLinks.style.left = "-100%";
    };
  }

  menuOpenBtn.addEventListener("click", () => {
    navLinks.classList.add("active");
    body.classList.add("dimmed");
  });

  menuCloseBtn.addEventListener("click", () => {
    navLinks.classList.remove("active");
    body.classList.remove("dimmed");
  });

  navLinksAnchor.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      body.classList.remove("dimmed");
    });
  });

  document.addEventListener("click", (e) => {
    if (
      !navLinks.contains(e.target) &&
      !menuOpenBtn.contains(e.target) &&
      !menuCloseBtn.contains(e.target)
    ) {
      navLinks.classList.remove("active");
      body.classList.remove("dimmed");
      navLinks.style.left = "-100%";
    }
  });


  // sidebar submenu open close js code
  let blogArrow = document.querySelector(".blog-arrow");
  if (blogArrow) {
    blogArrow.onclick = function () {
      navLinks.classList.toggle("show1");
    };
  }

  let moreArrow = document.querySelector(".more-arrow");
  if (moreArrow) {
    moreArrow.onclick = function () {
      navLinks.classList.toggle("show2");
    };
  }

  let shopArrow = document.querySelector(".shop-arrow");
  if (shopArrow) {
    shopArrow.onclick = function () {
      navLinks.classList.toggle("show3");
    };
  }
});

const copyrightYear = document.querySelector("#copyrightYear");
copyrightYear.innerHTML = new Date().getFullYear();
