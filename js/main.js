$(function () {

  let wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: true,
    live: true
  });
	$(document).on('click', '#button-close', function() {
    $.fn.fancybox.close();
});
  wow.init();

  $(".tan").on("click", function () {
    $(this).closest(".tan").toggleClass("open-menu");
  });

  $.fancybox.defaults.backFocus = false;

  new Swiper(".partners-slider > .swiper", {
    slidesPerView: 6,
    slidesPerGroup: 3,
    pagination: {
      el: ".partners-slider .swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: '.partners-slider .swiper-next',
      prevEl: '.partners-slider .swiper-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 8,
      },
      576: {
        slidesPerView: 2,
      },
      768: {
        spaceBetween: 16,
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 6,
      },
    },
  });



});

