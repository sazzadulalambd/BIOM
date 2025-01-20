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
