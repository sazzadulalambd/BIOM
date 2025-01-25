// tailwind.config.js
tailwind.config = {
  theme: {
    extend: {
      colors: {
        heading: "#202244", // Heading text color
        paragraph: "#777777", // Paragraph text color
        white: "#FFFFFF", // White text color
        primary: "#051355", // Primary color
      },
    },
  },
};

//slick slider
$(document).ready(function () {
  $(".slider").slick({
    dots: true, // Enables navigation dots
    infinite: true, // Infinite scrolling
    speed: 500, // Transition speed
    slidesToShow: 1, // Number of slides to show at a time
    slidesToScroll: 1, // Number of slides to scroll
    autoplay: true, // Auto-slide
    autoplaySpeed: 3000, // Auto-slide delay (ms)
  });
});

//tabs

// Select all tabs and content sections
const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".content");

// Add click event to tabs
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // Remove active state from all tabs
    tabs.forEach((t) => t.classList.remove("text-primary", "font-bold"));
    tab.classList.add("text-primary", "font-bold");

    // Hide all content sections
    contents.forEach((content) => content.classList.add("hidden"));

    // Show the content section that matches the clicked tab
    const target = document.getElementById(tab.dataset.tab);
    console.log(target.classList);
    if (target) target.classList.remove("hidden");
  });
});

//Accordion
function toggleAccordion(id) {
  const content = document.getElementById(id);
  if (content.classList.contains("hidden")) {
    content.classList.remove("hidden");
  } else {
    content.classList.add("hidden");
  }
}
