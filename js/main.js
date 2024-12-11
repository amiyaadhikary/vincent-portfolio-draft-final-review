document.addEventListener("click", function (event) {
  const navbarCollapse = document.querySelector(".navbar-collapse");
  const isNavbarOpen = navbarCollapse.classList.contains("show");
  const isClickInsideNavbar = navbarCollapse.contains(event.target);
  const isNavbarLink = event.target.classList.contains("nav-link");

  if (isNavbarOpen) {
    // Close navbar if clicked outside
    if (!isClickInsideNavbar) {
      const navbarToggler = document.querySelector(".navbar-toggler");
      navbarToggler.click(); // Simulate a click to close
    }

    // Close navbar and allow smooth scroll on link click
    if (isNavbarLink) {
      setTimeout(() => {
        const navbarToggler = document.querySelector(".navbar-toggler");
        navbarToggler.click(); // Close navbar after navigation
      }, 300); // Slight delay to ensure the scroll happens
    }
  }
});
