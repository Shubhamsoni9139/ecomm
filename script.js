function redirectToHomePage() {
    window.location.href = "#"; // Replace with your actual website URL
}

document.addEventListener("DOMContentLoaded", function() {
const categories = document.querySelector(".categories");
const categorySlider = document.querySelector(".category-slider");
const slideLeft = document.querySelector(".slide.left");
const slideRight = document.querySelector(".slide.right");

let scrollAmount = 0;
const scrollStep = 200; // Adjust this value to control how much the slider moves

// Move the slider to the left
slideLeft.addEventListener("click", function() {
scrollAmount -= scrollStep;
if (scrollAmount < 0) {
    scrollAmount = 0;
}
categories.scrollTo({
    top: 0,
    left: scrollAmount,
    behavior: "smooth"
});
});

// Move the slider to the right
slideRight.addEventListener("click", function() {
scrollAmount += scrollStep;
if (scrollAmount > categories.scrollWidth - categorySlider.offsetWidth) {
    scrollAmount = categories.scrollWidth - categorySlider.offsetWidth;
}
categories.scrollTo({
    top: 0,
    left: scrollAmount,
    behavior: "smooth"
});
});
});

//Sliders

document.addEventListener("DOMContentLoaded", function() {
const promoSlider = document.querySelector(".promotional-slider");
const promoSlides = document.querySelectorAll(".promo-slide");

let currentSlide = 0;
const slideInterval = 3000; // 3 second

function nextSlide() {
promoSlides[currentSlide].style.marginLeft = "-100%";
currentSlide = (currentSlide + 1) % promoSlides.length;
promoSlides[currentSlide].style.marginLeft = "0";
}
function startSlider() {
    setInterval(nextSlide, slideInterval);
}

startSlider();

});


