import Vue from 'vue'
import App from './App.vue'
import swiper from 'swiper';
import 'tether';
import './bootstrap/bootstrap';
import './bootstrap/bootstrap.scss';


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

  var breadcrumbsSwiper = new Swiper('.breadcrumbsSwiper', {
    slidesPerView: 'auto',
    freeMode: true
    
  });
 var tabssSwiper = new Swiper('.tabssSwiper', {
    slidesPerView: 'auto',
    freeMode: true
  });



  var tabContentSwiper = new Swiper('.tab-content', {
  	preloadImages: false,
    lazyLoading: true,
    pagination: '.swiper-pagination',
    paginationClickable: true,

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

