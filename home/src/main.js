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


var productSwiper = new Swiper('.propuct-swiper', {
    preventClicks :true,
    preventClicksPropagation: true,
    slidesPerView: 'auto',
spaceBetween: 0,
        slidesPerView: 'auto',
        paginationClickable: true,
    scrollbar: '.swiper-scrollbar',
        scrollbarHide: false


  });

var topOffert = new Swiper('.topOffert', {
    preventClicks :true,
    preventClicksPropagation: true,
    slidesPerView: 'auto',
    slidesOffsetAfter: 1,
    freeMode: true


  });











$(function(){
    jQuery('img.svg').each(function(){
        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');
    
        jQuery.get(imgURL, function(data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');
    
            // Add replaced image's ID to the new SVG
            if(typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if(typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass+' replaced-svg');
            }
    
            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');
            
            // Check if the viewport is set, else we gonna set it if we can.
            if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
            }
    
            // Replace image with new SVG
            $img.replaceWith($svg);
    
        }, 'xml');
    
    });
});





});










