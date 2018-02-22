var swiper = new Swiper('.swiper-main', {
  speed: 600,
  spaceBetween: 30,
  parallax: true,
  slidesPerView: 'auto',
  centeredSlides: true,
  loop: true,
  lazy: {
    loadPrevNext: true,
    loadPrevNextAmount:3,
  },
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
  }

});






$('div[data-act=modal]').click(function(e) {
  $('#work').modal();
  var soure = $(this).attr('data-src');
  console.log(soure);
$("#result").load("hi.html");

});
