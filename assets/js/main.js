/**
* Template Name: Kelly
* Template URL: https://bootstrapmade.com/kelly-free-bootstrap-cv-resume-html-template/
* Updated: Aug 07 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function () {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const body = document.querySelector("body");
    const header = document.querySelector("#header");

    if (
      !header.classList.contains("scroll-up-sticky") &&
      !header.classList.contains("sticky-top") &&
      !header.classList.contains("fixed-top")
    ) {
      return;
    }

    window.scrollY > 100
      ? body.classList.add("scrolled")
      : body.classList.remove("scrolled");
  }

  document.addEventListener("scroll", toggleScrolled);
  window.addEventListener("load", toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector(".mobile-nav-toggle");

  function mobileNavToggle() {
    document.querySelector("body").classList.toggle("mobile-nav-active");
    mobileNavToggleBtn.classList.toggle("bi-list");
    mobileNavToggleBtn.classList.toggle("bi-x");
  }

  if (mobileNavToggleBtn) {
    mobileNavToggleBtn.addEventListener("click", mobileNavToggle);
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll("#navmenu a").forEach((navmenu) => {
    navmenu.addEventListener("click", () => {
      if (document.querySelector(".mobile-nav-active")) {
        mobileNavToggle();
      }
    });
  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll(".navmenu .toggle-dropdown").forEach((navmenu) => {
    navmenu.addEventListener("click", function (e) {
      e.preventDefault();
      this.parentNode.classList.toggle("active");
      this.parentNode.nextElementSibling.classList.toggle("dropdown-active");
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector("#preloader");
  if (preloader) {
    window.addEventListener("load", () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  const scrollTop = document.querySelector(".scroll-top");

  function toggleScrollTop() {
    if (!scrollTop) return;

    window.scrollY > 100
      ? scrollTop.classList.add("active")
      : scrollTop.classList.remove("active");
  }

  if (scrollTop) {
    scrollTop.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  window.addEventListener("load", toggleScrollTop);
  document.addEventListener("scroll", toggleScrollTop);

  /**
   * Animation on scroll init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }

  window.addEventListener("load", aosInit);

  /**
   * Animate skills on reveal
   */
  document.querySelectorAll(".skills-animation").forEach((item) => {
    new Waypoint({
      element: item,
      offset: "80%",
      handler: function () {
        item.querySelectorAll(".progress .progress-bar").forEach((el) => {
          el.style.width = el.getAttribute("aria-valuenow") + "%";
        });
      },
    });
  });

  /**
   * Pure Counter
   */
  new PureCounter();

  /**
   * Init Swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach((swiperElement) => {
      const config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      new Swiper(swiperElement, config);
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * GLightbox
   */
  GLightbox({
    selector: ".glightbox",
  });

  /**
   * Init Isotope layouts and filters  ✅ FIXED
   */
  document.querySelectorAll(".isotope-layout").forEach((isotopeItem) => {
    const layout = isotopeItem.getAttribute("data-layout") ?? "masonry";
    const filter = isotopeItem.getAttribute("data-default-filter") ?? "*";
    const sort = isotopeItem.getAttribute("data-sort") ?? "original-order";

    let initIsotope;

    imagesLoaded(
      isotopeItem.querySelector(".isotope-container"),
      function () {
        initIsotope = new Isotope(
          isotopeItem.querySelector(".isotope-container"),
          {
            itemSelector: ".isotope-item",
            layoutMode: layout,
            filter: filter,
            sortBy: sort,
          }
        );
      }
    );

    isotopeItem.querySelectorAll(".isotope-filters li").forEach((filterBtn) => {
      filterBtn.addEventListener("click", function () {
        isotopeItem
          .querySelector(".isotope-filters .filter-active")
          .classList.remove("filter-active");

        this.classList.add("filter-active");

        initIsotope.arrange({
          filter: this.getAttribute("data-filter"),
        });

        aosInit();
      });
    });
  });
})();
