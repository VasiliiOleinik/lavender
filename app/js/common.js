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
    $('.header').addClass('menu-open');
    $(this).find('.dropdown').fadeIn();
    $(this).find('.dropdown').css({'display': 'flex'});
  }, function () {
    $('.header').removeClass('menu-open');
    $(this).find('.dropdown').fadeOut();
    $(this).find('.dropdown').css({'display': 'none'});
  });

  $('#search').on('click', function () {
    $('#search-form').toggleClass('active')
    $('#search-form').fadeToggle();
  });
  $('#close-search').on('click', function() {
    $('#search-form').toggleClass('active')
    $('#search-form').fadeToggle();
  });

  $('#overlay').on('click', function () {
    $('.hamburger').click();
  });

  const height = $(".simple-page-banner.drop .simple-page-banner-title").height();
  if (height < 40) {
    $('.simple-page-banner.drop').css({ 'padding-bottom': '170px' });
  }
  $(window).resize(function () {
    const height = $(".simple-page-banner.drop .simple-page-banner-title").height();
    if (height < 40) {
      $('.simple-page-banner.drop').css({ 'padding-bottom': '170px' });
    }
  });

  AOS.init({ disable: 'mobile' });

});


function calculator(width, height) {
  const distance = 0.4 * 1.4;
  const area = width * height;
  $('#calc-result').text(` ${Math.floor(area / distance)} `);
}