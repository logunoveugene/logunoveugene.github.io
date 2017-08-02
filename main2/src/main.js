import Vue from 'vue'
import App from './App.vue'
import $ from 'jquery';
import swiper from 'swiper';




new Vue({
  el: '#app',
  render: h => h(App)
})



var barW = 20; // 浮动条的宽度，px
var btnW = 70; // 导航按钮的宽度，px
var slideAmount = 9; // 分页数量

$(document).ready(function () {
  var tabNavSwiper = new Swiper('.tab-nav', {
    slidesPerView: 'auto',
    scrollbar: '.swiper-scrollbar',
    scrollbarHide: false
    
  });

  var tabContentSwiper = new Swiper('.tab-content', {
  	preloadImages: false,
    lazyLoading: true,

    onSlideChangeStart: function onSlideChangeStart(swiper) {
      $('#tabNav .active').removeClass('active');
      $('#tabNav .swiper-slide[data-slide-index=' + swiper.activeIndex + ']').addClass('active');
      if (swiper.previousIndex < swiper.activeIndex) {
        tabNavSwiper.slideTo(swiper.activeIndex - 2);
      } else {
        tabNavSwiper.slideTo(swiper.activeIndex - 1);
      }
    }
  });

  $('#tabNav .swiper-slide').on('click', function (event) {
    tabContentSwiper.slideTo($(this).data('slide-index'));
  });
});

