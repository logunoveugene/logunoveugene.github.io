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
        <div class="mb-4">
          <div class="mb-2">
            <div class="d-flex flex-row align-items-center hidden-sm-down">
                  <div class="mr-2">
                    <rate :length="5" :value="4"></rate>
                  </div>
                  <a href="" class="small">4,4 (17 отзывов)</a>
                </div>
          </div>
          <div class="main-image mb-3">
            <div class="tab-content">
              <div class="swiper-wrapper">
                <div v-for="slide in swiperSlides" class="swiper-slide image-warp">
                  <img :data-src="slide" class="swiper-lazy large-image">
                  <div class="swiper-lazy-preloader swiper-lazy-preloader-black"></div>
                </div>
              </div>
              <div class="swiper-pagination hidden-sm-up"></div>
            </div>
            <div class="tab-nav hidden-sm-down" id="tabNav">
              <div class="swiper-wrapper">
                <div v-for="(slide, index)  in swiperSlidesThumbs" class="swiper-slide" :data-slide-index="index">
                  <img :src="slide">
                </div>
              </div>
              <div class="swiper-scrollbar"></div>
            </div>
          </div>
          <div class="d-flex flex-row small">
            <a href="" class="text-muted mr-5"> <img src="https://i.snag.gy/cUbKJR.jpg" alt="" class="mb-1 mr-2"><span>Видеообзор модели</span> </a>
            <a href="" class="text-muted"> <img src="https://i.snag.gy/Z8wTQl.jpg" alt="" class="mb-1 mr-2"><span>3D обзор</span> </a>
          </div>
        </div>
        
      </div>
      <div class="col-lg-7  col-md-5 col-12">
        <div class="row">
          <div class="col-md-6 hidden-md-down">
            <div class="d-flex flex-column ml-3">
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
                <img src="https://i.snag.gy/wvhWE1.jpg" alt="" class="mb-3">
                <div class=""><a href="">Все характеристики</a></div>
              </div>
              
              <div class="mb-3">
                <div class="mb-2">
                  <span class="mr-2">Права покупателей защищены</span>
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
                    <button type="button" class="btn btn-secondary mb-3">Купить в 1 клик</button>
                    <div class="d-flex flex-row justify-content-between small">
                      <a href="#">Как купить в кредит?</a>
                      <a href="#">Пожаловаться на цену!</a>
                    </div>
                  </div>
                </div>
                <div class="p-3 alert-success mb-4">
                  <div class="d-flex flex-column">
                    <div class="small mb-1 text-muted ">
                      <a href="">Самовывоз в 6 магазинах</a> – сегодня, бесплатно </div>
                    <div class="small text-muted">Доставка ‒  с 15 сентября, 320 р. </div>
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

.tab-content{
  position: relative;
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
