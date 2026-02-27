//スムーススクロール
$('a[href^="#"]').on('click', function () {
  var speed = 300;
  var href = $(this).attr("href");
  var target = $(href == "#" || href == "" ? 'html' : href);
  var position = target.offset().top;
  $("html, body").animate({
    scrollTop: position
  }, speed, "swing");
  return false;
});

//fv-slider
const swiper = new Swiper("#js-slider-swiper", {
  slidesPerView: 3,
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
      centeredSlides: true,
        spaceBetween: 24,
    },
    500: {
      slidesPerView: 1.7,
      centeredSlides: true,
      spaceBetween: 40,
    },
    900: {
      slidesPerView: 2.7,
      centeredSlides: true,
        spaceBetween: 60,
    },
    1200: {
      slidesPerView: 3.7,
      centeredSlides: true,
        spaceBetween: 60,
    },
    1500: {
      slidesPerView: 4.7,
      centeredSlides: true,
        spaceBetween: 60,
    },
  },
});

