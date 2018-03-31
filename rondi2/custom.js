var swiper = new Swiper('.swiper-main', {
  speed: 600,
  spaceBetween: 30,
  parallax: true,
  slidesPerView: 'auto',
  centeredSlides: true,
  loop: true,
  navigation: {
        nextEl: '.slider-arrow-r',
        prevEl: '.slider-arrow-l',
      },
  lazy: {
    loadPrevNext: true,
    loadPrevNextAmount:3,
  },
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
  }

});


var swipersite = new Swiper('.swiper-site', {
  spaceBetween: 30,
  slidesPerView: 'auto',
  freeMode: true


});








$('div[data-act=modal]').click(function(e) {
  $('#work').modal();
  var soure = $(this).attr('data-src');
  $("#result").load(soure);
});





var ecommerceAnim = anime({
  autoplay:false,
  targets: '.web-st',
  backgroundColor: '#4506b2',
  easing: 'linear',
  duration: 300
});









var change = function () {

	

				var animation = anime({
  targets: '.web-st',
  duration: 1500,
  easing: 'linear',
  backgroundImage: '100% -> 0%',
})
				animation.play();




				


				
}


document.querySelector('#landingAnimation').onclick = change();