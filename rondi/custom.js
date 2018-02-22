var swiper = new Swiper('.swiper-main', {
  speed: 600,
   spaceBetween: 30,
  parallax: true,
  slidesPerView: 'auto',
  centeredSlides: true,
 
        lazy: {
    loadPrevNext: true,
    loadPrevNextAmount:3,
  },
   pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
      }
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
});

