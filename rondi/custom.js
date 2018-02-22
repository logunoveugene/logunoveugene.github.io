var swiper = new Swiper('.swiper-main', {
  speed: 600,
   spaceBetween: 30,
  parallax: true,
  slidesPerView: 'auto',
  centeredSlides: true,
  autoHeight: true, 
   pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
      }
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
});

