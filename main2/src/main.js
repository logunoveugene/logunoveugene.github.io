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
var mainTabdSwiper = new Swiper('.mainTabdSwiper', {
    preventClicks :true,
    preventClicksPropagation: true,
    slidesPerView: 'auto',
    freeMode: true,
    slidesOffsetAfter: 1
  });


var productRelated = new Swiper('.product-related', {
    preventClicks :true,
    preventClicksPropagation: true,
    slidesPerView: 'auto',
    slidesOffsetAfter: 1
  });

var breadcrumbsSwiper = new Swiper('.breadcrumbsSwiper', {
    preventClicks :true,
    preventClicksPropagation: true,
    slidesPerView: 'auto',
    slidesOffsetAfter: 1

  });



  var tabNavSwiper = new Swiper('.img-tab-nav', {
    slidesPerView: 'auto',
    scrollbar: '.swiper-scrollbar',
    scrollbarHide: false
    
  });

  var tabContentSwiper = new Swiper('.img-tab-content', {
  	preloadImages: false,
    lazyLoading: true,
    keyboardControl: true,
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




var fulltabNavSwiper = new Swiper('.full-tab-nav', {
    slidesPerView: 'auto',
    scrollbarHide: false,
      observer: true,
  observeParents: true,
    
  });


  var fulltabContentSwiper = new Swiper('.full-tab-content', {
    preloadImages: false,
    lazyLoading: true,
    zoom: true,
    pagination: '.swiper-pagination',
    paginationClickable: true,
      observer: true,
  observeParents: true,

    onSlideChangeStart: function onSlideChangeStart(swiper) {
      $('#full-tabNav .active').removeClass('active');
      $('#full-tabNav .swiper-slide[data-slide-index=' + swiper.activeIndex + ']').addClass('active');
      if (swiper.previousIndex < swiper.activeIndex) {
        fulltabNavSwiper.slideTo(swiper.activeIndex - 2);
      } else {
        fulltabNavSwiper.slideTo(swiper.activeIndex - 1);
      }
    }
  });




  $('#full-tabNav .swiper-slide').on('click', function (event) {
    fulltabContentSwiper.slideTo($(this).data('slide-index'));
  });




$('#fullscreen-image').on('shown.bs.modal', function (event) {
  setTimeout(function () {
  fulltabContentSwiper.update;
  fulltabNavSwiper.update;
  }, 500);
});




});



