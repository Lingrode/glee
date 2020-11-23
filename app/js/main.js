$(function () {
  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 4000
  })

  
  // var mixerOne = mixitup('.products__items');

  var mixerOne = mixitup('.products__items', {
    selectors: {
      control: '.products__filter'
    }
  }),

  // var mixerTwo = mixitup('.new-design__items');

  var mixerTwo = mixitup('.new-design__items', {
    selectors: {
      control: '.new-design__filter'
    }
  });
});

// $(document).ready(function () {
//   $('.products__items').mixitup({
//     selectors: {
//       filter: '.products__filter-btn'
//     }
//   });

//   $('.new-design__items').mixitup({
//     selectors: {
//       filter: '.new-design__filter-btn'
//     }
//   });
// })