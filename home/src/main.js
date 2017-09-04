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
        nextButton: '.slider-arrow-r',
        prevButton: '.slider-arrow-l',
        // Disable preloading of all images
        preloadImages: false,
        // Enable lazy loading
        lazyLoading: true,
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
         loop: true
    });

var mainSlider = new Swiper('.main-slider-m', {
        preloadImages: false,
        lazyLoading: true,
        nextButton: '.slider-arrow-r',
        prevButton: '.slider-arrow-l',
pagination: '.swiper-pagination',
        paginationType: 'fraction',
           loop: true
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
        paginationClickable: true,
    scrollbar: '.swiper-scrollbar',
        scrollbarHide: false


  });




});



