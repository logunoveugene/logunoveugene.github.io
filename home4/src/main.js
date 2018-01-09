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




 $(function () {
      $('[data-toggle="tooltip"]').tooltip({
        template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrowe"></div><div class="tooltip-inner"></div></div>',
        trigger: 'click',
        container: 'body',
        constraints: [
        {
          to: 'scrollParent',
          pin: true
        },
        ]}
        )
    });




    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        parallax: true,
        observer:true,
        speed: 600
    });

   };

   var mainSlider = new Swiper('.main-slider', {
        nextButton: '.slider-arrow-r',
        prevButton: '.slider-arrow-l',
        // Disable preloading of all images
        preloadImages: true,
        slidesPerView: 'auto',
        observer:true,
         centeredSlides: true,

 lazyLoadingOnTransitionStart : true,
  lazyLoadingInPrevNext : true,


        // Enable lazy loading
        lazyLoading: true,
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
         loop: true
      
      
    });

var mainSlider = new Swiper('.main-slider-m', {
        preloadImages: false,
        lazyLoading: true,
        observer:true,
        nextButton: '.slider-arrow-r',
        prevButton: '.slider-arrow-l',
pagination: '.swiper-pagination',
        paginationType: 'fraction',
           loop: true
    });


   var actionSlider = new Swiper('.action-slider', {

        nextButton: '.slider-arrow-r',
        prevButton: '.slider-arrow-l',
        scrollbarHide: false,
        slidesPerView: 'auto',
        observer:true,
        spaceBetween: 17
  
    });


var logoSlider = new Swiper('.logo-swiper', {

        nextButton: '.slider-arrow-r',
        prevButton: '.slider-arrow-l',
        scrollbarHide: false,
        slidesPerView: 'auto',
        observer:true,
        spaceBetween: 17
  
    });


var productSwiper = new Swiper('.propuct-swiper', {
    preventClicks :true,
            nextButton: '.slider-arrow-r',
        prevButton: '.slider-arrow-l',
    preventClicksPropagation: true,
    observer:true,
    slidesPerView: 'auto',
spaceBetween: 0,
        slidesPerView: 'auto',
        paginationClickable: true



  });

var topOffert = new Swiper('.topOffert', {
    preventClicks :true,
    preventClicksPropagation: true,
    slidesPerView: 'auto',
    observer:true,
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














