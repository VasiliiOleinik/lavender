$(function () {
  $('.reviews-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $(".reviews-slider-prev"),
    nextArrow: $(".reviews-slider-next"),
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
  // Калькулятор старт
  $('#area-width').on('input', function () {
    calculator($(this).val(), $('#area-height').val());
  });
  $('#area-height').on('input', function () {
    calculator($('#area-width').val(), $(this).val());
  });
  // Калькулятор финиш

  $('.header-menu-list-item').hover(function () {
    $(this).find('.dropdown').fadeIn();
  }, function () {
    $(this).find('.dropdown').fadeOut();
  });

  $('#search').on('click', function () {
    $('#search-form').toggleClass('active')
    $('#search-form').fadeToggle();
  });

  $(document).mouseup(function (e) {
    var div = $("#search-form.active");
    if (!div.is(e.target)
      && div.has(e.target).length === 0) {
      div.fadeToggle();
    }
  });

  $('#overlay').on('click', function () {
    $('.hamburger').click();
  });
  
  AOS.init({disable: 'mobile'});
});


function calculator(width, height) {
  const distance = 0.4 * 1.4;
  const area = width * height;
  $('#calc-result').text(` ${Math.floor(area / distance)} `);
}