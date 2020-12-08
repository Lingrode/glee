// const { default: Swiper } = require("swiper");
// const { default: Swiper } = require("swiper");

$(function () {

  $('.product-tabs__top-item').on('click', function (e) {
    e.preventDefault();
    $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
    $(this).addClass('product-tabs__top-item--active');

    $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
    $($(this).attr('href')).addClass('product-tabs__content-item--active');
  });

  $('.shop-content__filter-btn').on('click', function () {
    $('.shop-content__filter-btn').removeClass('shop-content__filter-btn--active')
    $(this).addClass('shop-content__filter-btn--active')
  })

  $('.button-list').on('click', function () {
    $('.product-item').addClass('product-item--list');
  })

  $('.product-one__input').styler()

  var productThumbs = new Swiper('.product-slide__thumb', {
    spaceBetween: 10,
    slidesPerView: 3,
    // freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    direction: 'vertical',
    height: '160px',
    spaceBetween: '0px'
  });
  var productBig = new Swiper('.product-slide__big', {
    // height: '530px',
    slidesPerView: 1,
    spaceBetween: 10,
    // effect: 'fade',
    thumbs: {
      swiper: productThumbs
    }
  });

  var relatedSwiper = new Swiper('.related__items', {
    slidesPerView: 4,
    spaceBetween: 30,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })

  // $('.related__items').slick({
  //   arrows: true,
  //   slidesToShow: 4,
  //   slidesToScroll: 1
  // })

  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 4000
  });

  $('.filter-price__input').ionRangeSlider({
    type: "double",
    prefix: "$",
    step: "0.01",
    onStart: function (data) {
      $('.filter-price__from').text(data.from),
        $('.filter-price__to').text(data.to)
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from),
        $('.filter-price__to').text(data.to)
    }
  });

  $('.star').rateYo({
    starWidth: "15px",
    spacing: "5px",
    readOnly: true,
    ratedFill: "#ffcc00",
    normalFill: "#d6d6d6",
    starSvg: "<svg width='50' height='50' viewBox='0 0 256 256'>" +
      "<rect fill='none'>" +
      "</rect>" +
      "<path d='M132.41106,190.73266l50.43543,31.95385c6.44693,4.08451,14.45124-1.99032,12.53819-9.51579l-14.57192-57.32241a8.75742,8.75742,0,0,1,2.83756-8.87589l45.2273-37.64345c5.94268-4.9462,2.87542-14.80876-4.75965-15.30428l-59.06388-3.83326a8.41836,8.41836,0,0,1-7.24792-5.3506l-22.02834-55.473a8.31887,8.31887,0,0,0-15.55566,0L98.19383,84.84083a8.41836,8.41836,0,0,1-7.24792,5.3506L31.882,94.02469c-7.63507.49552-10.70233,10.35808-4.75965,15.30428l45.2273,37.64345a8.75742,8.75742,0,0,1,2.83756,8.87589L61.6734,209.00846c-2.29566,9.03056,7.30952,16.32036,15.04583,11.41895l46.86971-29.69475A8.21431,8.21431,0,0,1,132.41106,190.73266Z'>" +
      "</path>" +
      "</svg>"
  });

  $('.goods-star').rateYo({
    starWidth: "20px",
    spacing: "9px",
    readOnly: true,
    ratedFill: "#ffcc00",
    normalFill: "#d6d6d6",
    starSvg: "<svg width='50' height='50' viewBox='0 0 256 256'>" +
      "<rect fill='none'>" +
      "</rect>" +
      "<path d='M132.41106,190.73266l50.43543,31.95385c6.44693,4.08451,14.45124-1.99032,12.53819-9.51579l-14.57192-57.32241a8.75742,8.75742,0,0,1,2.83756-8.87589l45.2273-37.64345c5.94268-4.9462,2.87542-14.80876-4.75965-15.30428l-59.06388-3.83326a8.41836,8.41836,0,0,1-7.24792-5.3506l-22.02834-55.473a8.31887,8.31887,0,0,0-15.55566,0L98.19383,84.84083a8.41836,8.41836,0,0,1-7.24792,5.3506L31.882,94.02469c-7.63507.49552-10.70233,10.35808-4.75965,15.30428l45.2273,37.64345a8.75742,8.75742,0,0,1,2.83756,8.87589L61.6734,209.00846c-2.29566,9.03056,7.30952,16.32036,15.04583,11.41895l46.86971-29.69475A8.21431,8.21431,0,0,1,132.41106,190.73266Z'>" +
      "</path>" +
      "</svg>"
  });


  var mixerOne = mixitup('.products__items');

  // var myName = mixitup('.products__items', {
  //   selectors: {
  //     control: '.products__filter'
  //   }
  // }),

  var mixerTwo = mixitup('.new-design__items');

  // var mixerTwo = mixitup('.new-design__items', {
  //   selectors: {
  //     control: '.new-design__filter'
  //   }
  // });
});