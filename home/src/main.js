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




$(document).ready(function () {
  

   var mainSlider = new Swiper('.main-slider', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',

        // Disable preloading of all images
        preloadImages: false,
        // Enable lazy loading
        lazyLoading: true
    });

   var actionSlider = new Swiper('.action-slider', {
 		scrollbar: '.swiper-scrollbar',
        scrollbarHide: false,
        slidesPerView: 'auto',
        spaceBetween: 17
  


    });


var breadcrumbsSwiper = new Swiper('.propuct-swiper', {
    preventClicks :true,
    preventClicksPropagation: true,
    slidesPerView: 'auto',
spaceBetween: 0,
        slidesPerView: 'auto',
        paginationClickable: true

  });




});



