$(function () {
  $('.reviews-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow:$(".reviews-slider-prev"),
    nextArrow:$(".reviews-slider-next")
  });
});
