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

// Tab functionality
const tabs2 = document.querySelectorAll(".tab-button");
const contents2 = document.querySelectorAll(".tab-content");

tabs2.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs2.forEach((t) => t.classList.remove("active", "border-primary"));
    tab.classList.add("active", "border-primary");

    contents2.forEach((content) => content.classList.add("hidden"));
    document.getElementById(tab.dataset.tab).classList.remove("hidden");
  });
});

// Number Count Animation
const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  const animateCount = () => {
    const target = +counter.getAttribute("data-target"); // Get target number
    const current = +counter.innerText; // Get current number
    const increment = target / 200; // Define increment speed

    if (current < target) {
      counter.innerText = Math.ceil(current + increment); // Increment value
      setTimeout(animateCount, 15); // Repeat until complete
    } else {
      counter.innerText = target; // Ensure it ends exactly at the target
    }
  };

  animateCount(); // Start the animation
});

//login modal

function openLoginModal() {
  closeSignupModal();
  document.getElementById("loginmodal").classList.remove("hidden");
  document.getElementById("loginmodal").classList.add("flex");
}

function closeLoginModal() {
  document.getElementById("loginmodal").classList.add("hidden");
  document.getElementById("loginmodal").classList.remove("flex");
}

//signup modal
function openSignupModal() {
  closeLoginModal();
  document.getElementById("signupmodal").classList.remove("hidden");
  document.getElementById("signupmodal").classList.add("flex");
}

function closeSignupModal() {
  document.getElementById("signupmodal").classList.add("hidden");
  document.getElementById("signupmodal").classList.remove("flex");
}

//otp model

function openOtpModal() {
  closeSignupModal();
  closeLoginModal();
  document.getElementById("otpmodal").classList.remove("hidden");
  document.getElementById("otpmodal").classList.add("flex");
}

function closeOtpModal() {
  document.getElementById("otpmodal").classList.add("hidden");
  document.getElementById("otpmodal").classList.remove("flex");
}

//send otp modal

function openSendOtpModal() {
  closeSignupModal();
  closeLoginModal();
  closeOtpModal();
  document.getElementById("sendotpmodal").classList.remove("hidden");
  document.getElementById("sendotpmodal").classList.add("flex");
}

function closeSendOtpModal() {
  document.getElementById("sendotpmodal").classList.add("hidden");
  document.getElementById("sendotpmodal").classList.remove("flex");
}

// Withdraw modal

function openWithdrawModal() {
  document.getElementById("withdrawmodal").classList.remove("hidden");
  document.getElementById("withdrawmodal").classList.add("flex");
}

function closeWithdrawModal() {
  document.getElementById("withdrawmodal").classList.add("hidden");
  document.getElementById("withdrawmodal").classList.remove("flex");
}

//  Change Trainer Modal

function openChangeTrainerModal() {
  document.getElementById("changetrainermodal").classList.remove("hidden");
  document.getElementById("changetrainermodal").classList.add("flex");
}

function closeChangeTrainerModal() {
  document.getElementById("changetrainermodal").classList.add("hidden");
  document.getElementById("changetrainermodal").classList.remove("flex");
}

// JavaScript to handle Next button functionality
const nextButton = document.getElementById("nextButton");
const backButton = document.getElementById("backButton");
const basicInfoSection = document.getElementById("basicInfoSection");
const personalInfoSection = document.getElementById("personalInfoSection");

nextButton.addEventListener("click", () => {
  basicInfoSection.classList.add("hidden");
  personalInfoSection.classList.remove("hidden");

  // Update step indicator
  document
    .querySelector(".bg-primary")
    .classList.replace("bg-primary", "bg-gray-300");
  document
    .querySelector(".text-white")
    .classList.replace("text-white", "text-white");

  personalInfoSection.previousElementSibling
    .querySelector(".bg-gray-300")
    .classList.replace("bg-gray-300", "bg-primary");
  personalInfoSection.previousElementSibling
    .querySelector(".text-paragraph")
    .classList.replace("text-paragraph", "text-primary");
});

backButton.addEventListener("click", () => {
  personalInfoSection.classList.add("hidden");
  basicInfoSection.classList.remove("hidden");

  // Update step indicator
  document
    .querySelector(".bg-primary")
    .classList.replace("bg-primary", "bg-gray-300");
  document
    .querySelector(".text-primary")
    .classList.replace("text-primary", "text-paragraph");

  basicInfoSection.previousElementSibling
    .querySelector(".bg-gray-300")
    .classList.replace("bg-gray-300", "bg-primary");
  basicInfoSection.previousElementSibling
    .querySelector(".text-paragraph")
    .classList.replace("text-paragraph", "text-primary");
});

// JavaScript to handle OTP input
const otpInputs = document.querySelectorAll(".otp-input");

otpInputs.forEach((input, index) => {
  input.addEventListener("input", (e) => {
    // Move to the next input if a digit is entered
    if (e.target.value.length === 1 && index < otpInputs.length - 1) {
      otpInputs[index + 1].focus();
    }
    // Move to the previous input if backspace is pressed and input is empty
    if (
      e.target.value === "" &&
      e.inputType === "deleteContentBackward" &&
      index > 0
    ) {
      otpInputs[index - 1].focus();
    }
  });

  // Prevent entering more than 1 digit
  input.addEventListener("keypress", (e) => {
    if (e.key.match(/[^0-9]/)) {
      e.preventDefault();
    }
  });
});

// dashboard dropdown menu toggle header
function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("hidden");
}

function toggleMenu2() {
  const menu = document.getElementById("menu2");
  menu.classList.toggle("hidden");
}

function toggleMenu3() {
  const menu = document.getElementById("menu3");
  menu.classList.toggle("hidden");
}

function toggleMenu4() {
  const menu = document.getElementById("menu4");
  menu.classList.toggle("hidden");
}





