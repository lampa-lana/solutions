$(document).ready(function () {
  var reviewsSlider = new Swiper('.us-slider', {
    // Optional parameters
    loop: true,
    keyboard: {
      enabled: true,
    },
    // Navigation arrows
    navigation: {
      nextEl: '.us-slider__button-next',
      prevEl: '.us-slider__button-prev',
    },
  });