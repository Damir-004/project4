$('.slaider_block').slick({
    autoplaySpeed: 2000,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: true,
    dots: false,
    arrows: false,
    responsive: [
                {
                  breakpoint: 720,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false
                  }
                }
            ]
})

$('.slaider__block').slick({
  autoplaySpeed: 2000,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  pauseOnHover: true,
  dots: false,
  arrows: false
})