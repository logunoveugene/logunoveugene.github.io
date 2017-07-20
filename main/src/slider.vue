<!-- The ref attr used to find the swiper instance -->
Vue.use(VueTabs);

<template>
<div>
  <swiper :options="swiperOptionTop" class="gallery-top" ref="swiperTop">
    <!-- slides -->
        <swiper-slide v-for="slide in swiperSlides" class="swiper-zoom-container">
          <div class="image-warp d-flex align-items-center justify-content-center swiper-zoom-container">
            <img :data-src="slide" class="swiper-lazy large-image">
            <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
          </div>
        </swiper-slide>
        <div class="swiper-pagination hidden-md-up" slot="pagination"></div>
  </swiper>

<swiper :options="swiperOptionThumbs" class="gallery-thumbs hidden-sm-down" ref="swiperThumbs">
        <swiper-slide v-for="slide in swiperSlidesThumbs" class="d-flex align-items-center justify-content-center">
        <div class="">
          <img :src="slide" >
         </div>
        </swiper-slide>

        </swiper>  
</div>

</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'


  // swiper options example:
  export default {
    name: 'slider',
    components: {
    swiper,
    swiperSlide
  },
    data() {
      return {
        swiperOptionTop: {
          // Disable preloading of all images
          preloadImages: true,
          // Enable lazy loading
          lazyLoading: true,
          notNextTick: true,
          zoom: true,
          pagination: '.swiper-pagination',
          breakpoints: {

              768: {
                slidesPerView: 1,
                spaceBetween: 10
              }
            }
        },
        swiperOptionThumbs: {
          notNextTick: true,
          spaceBetween: 10,
          centeredSlides: true,
          slidesPerView: 'auto',
          touchRatio: 0.2,
          slideToClickedSlide: true

        },
      swiperSlides: [
          "https://cdn.domotekhnika.ru/images/App/Models/Catalog/ProductImage/images/002/711/530/safe_original/12004913_1.jpg",
          "https://cdn.domotekhnika.ru/images/App/Models/Catalog/ProductImage/images/002/713/024/safe_original/12004913_2.jpg",
          "https://cdn.domotekhnika.ru/images/App/Models/Catalog/ProductImage/images/002/713/025/safe_original/12004913_3.jpg",
          "https://cdn.domotekhnika.ru/images/App/Models/Catalog/ProductImage/images/002/713/026/safe_original/12004913_4.jpg",
          "https://cdn.domotekhnika.ru/images/App/Models/Catalog/ProductImage/images/002/713/027/safe_original/12004913_5.jpg", 
          "https://cdn.domotekhnika.ru/images/App/Models/Catalog/ProductImage/images/002/713/028/safe_original/12004913_6.jpg" 
          ],
        swiperSlidesThumbs: [
          "https://cdn.domotekhnika.ru/images/App/Models/Catalog/ProductImage/images/002/711/530/thumb/12004913_1.jpg",
          "https://cdn.domotekhnika.ru/images/App/Models/Catalog/ProductImage/images/002/713/024/thumb/12004913_2.jpg",
          "https://cdn.domotekhnika.ru/images/App/Models/Catalog/ProductImage/images/002/713/025/thumb/12004913_3.jpg",
          "https://cdn.domotekhnika.ru/images/App/Models/Catalog/ProductImage/images/002/713/026/thumb/12004913_4.jpg",
          "https://cdn.domotekhnika.ru/images/App/Models/Catalog/ProductImage/images/002/713/027/thumb/12004913_5.jpg", 
          "https://cdn.domotekhnika.ru/images/App/Models/Catalog/ProductImage/images/002/713/028/thumb/12004913_6.jpg" 
          ]

      }
    },
    // you can find current swiper instance object like this, while the notNextTick property value must be true
    mounted() {
      const swiperTop = this.$refs.swiperTop.swiper
      const swiperThumbs = this.$refs.swiperThumbs.swiper
      swiperTop.params.control = swiperThumbs
      swiperThumbs.params.control = swiperTop
    }
 
  }
</script>

<style >

  .swiper-slide {
    background-size: cover;
    background-position: center;
  }
  .gallery-top {
    height: 80%!important;
    width: 100%;
  }
  .gallery-thumbs {
    height: 20%!important;
    box-sizing: border-box;
    padding: 10px 0;
  }
  .gallery-thumbs .swiper-slide {
    width: 50px;
  height: 50px;
    opacity: 0.4;
    padding:.5rem;

  }
  .gallery-thumbs .swiper-slide-active {
    opacity: 1;
    border:1px solid #eee;
  }
.large-image{
  max-height: 320px;
  max-width: 100%;
}
.image-warp{
  height: 320px;
}

</style>