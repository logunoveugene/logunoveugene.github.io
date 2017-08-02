<template>
<div id="app">
  <div class="container ">
    <div class="row hidden-sm-down">
      <div class="col-12 mt-3 mb-3">
        <nav class=" small pt-2">
          <a class="breadcrumb-item" href="#">Главная</a>
          <a class="breadcrumb-item" href="#">Телевизоры и видеотехника</a>
          <a class="breadcrumb-item" href="#">Телевизоры </a>
        </nav>
      </div>
    </div>
    <div class="row mb-2 hidden-sm-down">
      <div class="col shrink">
        <h1 class="h3 ">Телевизор SAMSUNG UE19H4000AK</h1>
      </div>
      <div class="col d-flex flex-row-reverse align-items-center align-self-end pr-0  pt-2 pb-2 hidden-sm-down">
        <div class="small text-muted">арт. 12004252</div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-5 col-md-7 col-12">
        <div class="mb-3">
          <div class="mb-2">
            <div class="d-flex flex-row align-items-center">
                  <div class="mr-2">
                    <rate :length="5" :value="4"></rate>
                  </div>
                  <a href="" class="small">4,4 (17 отзывов)</a>
                </div>
          </div>
          <div class="main-image">
            <div class="tab-content">
              <div class="swiper-wrapper">
                <div v-for="slide in swiperSlides" class="swiper-slide image-warp">
                  <img :data-src="slide" class="swiper-lazy large-image">
                  <div class="swiper-lazy-preloader swiper-lazy-preloader-black"></div>
                </div>

              </div>
            </div>
            <div class="tab-nav" id="tabNav">
              <div class="swiper-wrapper">
                <div v-for="(slide, index)  in swiperSlidesThumbs" class="swiper-slide" :data-slide-index="index">
                  <img :src="slide">
                </div>
              </div>
              <div class="swiper-scrollbar"></div>
            </div>
          </div>
        </div>
        <div class="row hidden-md-up">
          <div class="col-12">
            <h1 class="h5 mb-3 ">Телевизор SAMSUNG UE19H4000AK</h1>
          </div>
          <div class="col shrink mb-3">
            <div class="d-flex flex-row align-items-center">
              <div class="mr-2">
                <rate :length="5" :value="4"></rate>
              </div>
              <a href="" class="small">17 отзывов</a>
            </div>
          </div>
          <div class="col d-flex flex-row-reverse align-items-center align-self-end  pb-1 mb-3 ">
            <div class="small text-muted">арт. 12004252</div>
          </div>
        </div>
      </div>
      <div class="col-lg-7  col-md-5 col-12">
        <div class="row">
          <div class="col-md-6 hidden-md-down">
            <div class="d-flex flex-column">
              <div class="mb-4">
                <div class="mb-2">Основные характеристики</div>
                <ul class="list-unstyled small main-props mb-2">
                  <li>Диагональ дисплея - 55 " (139,7 см)</li>
                  <li>Тип - QLED</li>
                  <li>HD-формат - 4K (3840x2160 пикселей)</li>
                  <li>Smart TV, android TV</li>
                  <li>WIFI, Ethernet</li>
                  <li>Вход HDMI x4, Интерфейс USB x3</li>
                  <li>DVB-T, DVB-T2, DVB-C, DVB-S2</li>
                </ul>
                <a href="">Все характеристики</a>
              </div>
              
              <div class="mb-3">
                <div class="mb-2">
                  <span class="mr-2">Права покупателей защищены</span>
                  <i class="icon-shield h5 pt-2"></i>
                </div>
                <ul class="list-unstyled small main-props">
                  <li>Гарантия от Samsung 1 год</li>
                  <li>Обязательная предпродажная проверка </li>
                  <li>14 дней на возврат</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-12 col-12">
            <div class="d-flex flex-column">
              <img src="https://i.snag.gy/8VrZxc.jpg" alt="" class="hidden-sm-down mb-3">
              <div class="  ">
                <div class="mb-4">
                  <div class="d-flex flex-column">
                    <p class="text-muted mb-0"><del>174 600 p.</del></p>
                    <div class="h3 mb-1">169 990 p.</div>
                    <div class="mb-2">
                      <span class="badge badge-benefit">ЭКОНОМИЯ 4 610 р. (скидка 12%)</span>
                    </div>
                    <p class="text-danger small">До 1 746 р. бонусов</p>
                    <button type="button" class="btn btn-primary btn-lg mb-3">Добавить в корзину</button>
                    <div class="d-flex flex-row justify-content-between">
                      <a href="#">Быстрый заказ</a>
                      <a href="#">Как купить в кредит?</a>
                    </div>
                  </div>
                </div>
                <div class="card-block bg-faded mb-4">
                  <div class="d-flex flex-column">
                    <div class="text-success mb-2">
                      <span class="mr-2">В наличии во Владивостоке </span>
                      <i class="icon-access small"></i>
                    </div>
                    <div class="small mb-2">
                      <a href="">Самовывоз в 6 магазинах</a> – бесплатно, сегодня </div>
                    <div class="small">Доставка ‒  320 р, с 15 сентября</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

</template>
<script>
import  rate from './rate.vue'

export default {
  name: 'app',
  components: {
    rate
  },
   data() {
      return {
        swiperSlides: [
          "https://cdn.domotekhnika.ru/images/App/Models/Catalog/ProductImage/images/002/711/530/safe_original/12004913_1.jpg",
          "https://cdn.domotekhnika.ru/images/App/Models/Catalog/ProductImage/images/002/713/024/safe_original/12004913_2.jpg",
          "https://cdn.domotekhnika.ru/images/App/Models/Catalog/ProductImage/images/002/713/025/safe_original/12004913_3.jpg",
          "https://cdn.domotekhnika.ru/images/App/Models/Catalog/ProductImage/images/002/713/026/safe_original/12004913_4.jpg",
          "https://cdn.domotekhnika.ru/images/App/Models/Catalog/ProductImage/images/002/713/027/safe_original/12004913_5.jpg", 
          "https://cdn.domotekhnika.ru/images/App/Models/Catalog/ProductImage/images/002/713/028/safe_original/12004913_6.jpg",
          "https://cdn.domotekhnika.ru/images/App/Models/Catalog/ProductImage/images/002/713/029/safe_original/12004913_7.jpg", 
          "https://cdn.domotekhnika.ru/images/App/Models/Catalog/ProductImage/images/002/713/030/safe_original/12004913_8.jpg",
          "https://cdn.domotekhnika.ru/images/App/Models/Catalog/ProductImage/images/002/713/031/safe_original/12004913_9.jpg"    
          ],
        swiperSlidesThumbs: [
          "https://cdn.domotekhnika.ru/images/App/Models/Catalog/ProductImage/images/002/711/530/thumb/12004913_1.jpg",
          "https://cdn.domotekhnika.ru/images/App/Models/Catalog/ProductImage/images/002/713/024/thumb/12004913_2.jpg",
          "https://cdn.domotekhnika.ru/images/App/Models/Catalog/ProductImage/images/002/713/025/thumb/12004913_3.jpg",
          "https://cdn.domotekhnika.ru/images/App/Models/Catalog/ProductImage/images/002/713/026/thumb/12004913_4.jpg",
          "https://cdn.domotekhnika.ru/images/App/Models/Catalog/ProductImage/images/002/713/027/thumb/12004913_5.jpg", 
          "https://cdn.domotekhnika.ru/images/App/Models/Catalog/ProductImage/images/002/713/028/thumb/12004913_6.jpg",
          "https://cdn.domotekhnika.ru/images/App/Models/Catalog/ProductImage/images/002/713/029/thumb/12004913_7.jpg",
          "https://cdn.domotekhnika.ru/images/App/Models/Catalog/ProductImage/images/002/713/030/thumb/12004913_8.jpg",
          "https://cdn.domotekhnika.ru/images/App/Models/Catalog/ProductImage/images/002/713/031/thumb/12004913_9.jpg"  
          ]
      }
    },
}
</script>

<style >
.badge-benefit{
    background-color: #ffe600;
    color: #000;
  text-transform: uppercase ;
  border-radius: 0;
}

.main-image {
  width: 100%;
  background-color: #fff;
  overflow-x: hidden;
}

.main-image .swiper-slide {
  display: block;
  width: 50px;
  color: #999;
  font-size: 14px;
  line-height: 50px;
  text-align: center;

}

.tab-nav {
  position: relative;
  height: 50px;
  width: 100%;
  padding: 0 10px;
  background-color: #fff;
  overflow: hidden;
}

  .tab-nav {
    height: 20%!important;
    box-sizing: border-box;
    overflow: hidden;
    padding: 10px 0;
  }
.tab-nav .swiper-slide {
padding: 5px;
    border:1px solid #fff;
      cursor: pointer;
  }

  .tab-nav .active {
    opacity: 0.7;
    border:1px solid #eee;
  }

  .large-image{
  max-height: 320px;
  max-width: 100%;


}
.image-warp{
  height: 320px;
cursor: zoom-in;

}
@media screen and (max-width: 425px) {
     .image-warp{
     height: 220px;
      } 
      .large-image{
    max-height: 220px;

  }
    }

</style>
