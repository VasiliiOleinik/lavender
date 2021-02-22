$(function () {
  $('.reviews-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow:$(".reviews-slider-prev"),
    nextArrow:$(".reviews-slider-next"),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  });

  $('.product-carousel-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.product-carousel-nav'
  });
  $('.product-carousel-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.product-carousel-for',
    dots: false,
    focusOnSelect: true
  });
  AOS.init();
});
