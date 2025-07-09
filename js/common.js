$('[name="phone"]').mask('+7 (999) 999-99-99');

// slider
$('.recommended-slider').slick({
  slidesToShow: 3,
  appendArrows: '.recommended-slider__nav',
  prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
  nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
});

$('.page-product-gallery-preview').slick({
  slidesToShow: 3,
  vertical: true,
  focusOnSelect: true,
  asNavFor: '.page-product-gallery-max',
  prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
  nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>'
});

$('.page-product-gallery-max').slick({
  slidesToShow: 1,
  fade: true,
  arrows: false,
  asNavFor: '.page-product-gallery-preview',
  prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
  nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
  responsive: [
    
    {
      breakpoint: 576,
      settings: {
        arrows: true,
      }
    }
  ]
});