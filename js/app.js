document.addEventListener("DOMContentLoaded", () => {
  /**
   * How it works
   */
  const tabItems = document.querySelectorAll(".tabs__item");
  const imageWrappers = document.querySelectorAll(".image-wrapper");

  // Show first image wrapper by default
  imageWrappers[0].classList.add("active");

  tabItems.forEach((tab) => {
    tab.addEventListener("click", () => {
      // Remove active class from all tabs
      tabItems.forEach((item) => item.classList.remove("active"));

      // Add active class to clicked tab
      tab.classList.add("active");

      // Get the tab number from data-tab attribute
      const tabNumber = tab.getAttribute("data-tab");

      // Remove active class from all image wrappers
      imageWrappers.forEach((wrapper) => {
        wrapper.classList.remove("active");
      });

      // Add active class to corresponding image wrapper
      const activeImage = document.querySelector(
        `.image-wrapper[data-tab="${tabNumber}"]`
      );
      activeImage.classList.add("active");
    });
  });

  // next code
});
