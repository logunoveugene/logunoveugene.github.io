<template>
<div id="app">
  <div class="">
    <!-- шапка начало -->
    <div class="hidden-md-up ">
      <div class="container-fluid">
        <div class="container">
          <div class="row d-flex ">
            <div class="col d-flex flex-row align-items-center shrink pt-2 pb-2" v-on:click="switchsite">
              <img v-if="cm==true" src="https://i.snag.gy/3jefoc.jpg" alt="" />
              <img v-if="cm==false" src="https://i.snag.gy/j6mnyA.jpg" alt="" />
            </div>
            <div class="col d-flex flex-row-reverse align-items-center align-self-end p-3">
              <img src="https://i.snag.gy/51LOiG.jpg" class="" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid ">
        <div class="container bg-grey bb-red-3">
          <div class="row ">
            <div class="col d-flex flex-row align-items-center border-right-1 shrink header-btn p-3">
              <img src="https://i.snag.gy/oJxb64.jpg" class="mr-2" alt="" />
              <a href="">
                <h6 class="mb-0 main-link">Каталог</h6>
              </a>
            </div>
            <div class="col d-flex flex-row align-items-center border-right-1 p-2">
              <input type="email" class="form-control" placeholder="Поиск по сайту">
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- для десктопа -->
    <div class="container-fluid hidden-sm-down">
      <div class="container bg-grey ">
        <div class="row d-flex ">
          <div class="col d-flex flex-row align-items-center shrink pt-2 pb-2">
            <a href="" class="text-muted">
              <small>Петропавловск-Камчатский</small>
            </a>
          </div>
          <div class="col d-flex flex-row align-items-center shrink pt-2 pb-2">
            <a href="" class="text-muted">
              <small>ул. Светланская, д. 147 </small>
            </a>
          </div>
          <div class="col d-flex flex-row align-items-center shrink pt-2 pb-2">
            <div class="">
              <b class="text-muted">+7 (4232) 79-01-16</b>
              <small>(с 9:00 до 20:00)</small>
            </div>
          </div>
          <div class="col d-flex flex-row align-items-center shrink pt-2 pb-2">
            <a href="" class="text-muted">
              <small>Обратная связь</small>
            </a>
          </div>
          <div class="col d-flex flex-row-reverse align-items-center align-self-end pt-2 pb-2 hidden-md-down">
            <ul class="nav small ">
              <li class="nav-item">
                <a class="nav-link text-muted" href="#">Как купить</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-muted" href="#">Оплата</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-muted pr-0" href="#">Доставка</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="container-fluid hidden-sm-down">
      <div class="container bb-red-3">
        <div class="row ">
          <div class="col border-right-1 p-3 shrink" v-on:click="switchsite">
            <div class=" hidden-xl-up">
              <img v-if="cm==true" src="https://i.snag.gy/3jefoc.jpg" alt=""/>
              <img v-if="cm==false" src="https://i.snag.gy/j6mnyA.jpg" alt=""/>
            </div>
            <div class="hidden-lg-down">
              <img v-if="cm==true" src="https://i.snag.gy/I0oqfz.jpg" alt=""/>
              <img v-if="cm==false" src="https://i.snag.gy/Amv5nC.jpg" alt=""/>
            </div>
          </div>
          <div class="col d-flex flex-row align-items-center border-right-1 shrink header-btn">
            <img src="https://i.snag.gy/oJxb64.jpg" class="p-1" alt=""/>
            <a href="#" class="hidden-lg-down">
              <h6 class="mb-0 ml-2 main-link">Каталог</h6>
            </a>
          </div>
          <div class="col d-flex flex-row align-items-center border-right-1">
            <input type="email" class="form-control" placeholder="Поиск по сайту">
          </div>
          <div class="col d-flex flex-row align-items-center border-right-1 shrink header-btn">
            <img src="https://i.snag.gy/u5W6MI.jpg" class="p-1" alt="" />
            <div class="d-flex flex-column hidden-md-down ml-2">
              <a href="" class="main-link"><h6 class="mb-0">Личный кабинет</h6></a>
              <div class="d-flex flex-row">
                <a href="" class="mr-2 small text-muted">Вход</a>
                <a href="" class="small text-muted">Регистрация</a>
              </div>
            </div>
          </div>
          <div class="col d-flex flex-row align-items-center border-right-1 shrink header-btn">
            <img src="https://i.snag.gy/uSmB9r.jpg" class=" p-1" alt=""/>
            <div class="d-flex flex-column ml-2 hidden-md-down">
              <a href="" class="main-link">
                <h6 class="mb-0">Сравнение</h6>
              </a>
            </div>
          </div>
          <div class="col d-flex flex-row align-items-center shrink header-btn">
            <img src="https://i.snag.gy/51LOiG.jpg" class="p-1" alt=""/>
            <div class="d-flex flex-column ml-2 hidden-md-down">
              <a href="" class="main-link">
                <h6 class="mb-0">Корзина</h6>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- шапка конец -->


<div class="container-fluid">
  <div class="container ">
    <div class="row">
      <div class="col shrink p-0">
        <div class="left-main">    
        <div class="derection hidden-md-down">
          <div class="derection-item d-flex flex-row " v-for="(derection, index) in catalogList">
            <img class="derection-image hidden-lg-down" :src="derection.derectionImage" alt="">
            <a href="" class="text-nowrap text-truncate">{{derection.derectionName}}</a>
           </div>
        </div>
        </div> 
      </div>
      <div class="col">
      <div class="right-main">
        <div class="row">
          <div class="col-12 ">
            <div class="main-slider mt-3 mb-2">
              <div class="swiper-wrapper">
                <div v-for="slide in mainSlides" class="swiper-slide">
                  <a href="#">
                    <img :data-src="slide.sliderImg" class="swiper-lazy">
                    <div class="swiper-lazy-preloader swiper-lazy-preloader-black"></div>
                  </a>
                </div>
              </div>
              <div class="swiper-button-prev"></div>
              <div class="swiper-button-next"></div>
              </div>
          </div>
          <div class="col-12 mb-5">
            <div class="action-slider mt-4">
              <div class="swiper-wrapper">
                <div v-for="action in actions" class="swiper-slide">
                  <a href="#">
                    <img :src="action.actionImg" class="y">
                  </a>
                </div>
              </div>
              <div class="swiper-scrollbar"></div>
              </div>

          </div>
          <div class="col-12">
          <div class="d-flex flex-row">
            <div class="product-plate col-xl-4 col-lg-4 col-md-4 col-6 p-4">
            <img src="" alt="" class="top-ptoduct-img">
             <div class="d-flex flex-column">
               <div class="small text-muted mb-2"><div class="small">ХИТЫ ПРОДАЖ</div></div>
               <div class="h5 mb-3">Электроника</div>
               <a href="" class="small mb-1">Телевизоры 4k</a>
               <a href="" class="small mb-1">Смартфоны Apple</a>
               <a href="" class="small ">Ноутбуки</a>
             </div>
            </div>
            <div class="product-plate col-xl-4 col-lg-4 col-md-4 col-6 p-4">
            <img src="" alt="" class="top-ptoduct-img">
              <div class="d-flex flex-column">
               <div class="small text-muted mb-2"><div class="small">АКТУАЛЬНО</div></div>
               <div class="h5 mb-3">Климатическия <br> техника</div>
               <a href="" class="small mb-1">Кондиционеры</a>
               <a href="" class="small mb-1">Осушители воздуха</a>
             </div>
            </div>
            <div class="product-plate col-xl-4 col-lg-4 col-md-4 col-6 p-4">
            <img src="" alt="" class="top-ptoduct-img">
                <div class="d-flex flex-column">
               <div class="small text-muted mb-2"><div class="small">В ЦЕНТРЕ ВНИМАНИЯ</div></div>
               <div class="h5 mb-3">Техника для кухни</div>
               <a href="" class="small mb-1">Холодильники</a>
               <a href="" class="small mb-1">Электрические плиты</a>
               <a href="" class="small mb-1">Чайники</a>
             </div>
            </div>
            </div>
          </div>
          <div class="col-12"></div>
        </div>
        </div>

      </div>
    </div>
  </div>
</div>



    <!-- Модальные окна начало -->
    <!-- Модальные окна конец -->
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
        cm:true,
        catalogList:[ 
            { derectionName:"Телевизоры и видеотехника", 
              derectionImage:"https://logunoveugene.github.io/home/img/derection/tv.svg"},
            { derectionName:"Телефоны и мобильные устройства", 
              derectionImage:"https://logunoveugene.github.io/home/img/derection/phone.svg"},
            { derectionName:"Компьютерная техника", 
              derectionImage:"https://logunoveugene.github.io/home/img/derection/laptop.svg"},
            { derectionName:"Компьютерные комплектующие", 
              derectionImage:"https://logunoveugene.github.io/home/img/derection/pc.svg"},
            { derectionName:"Фото и видеокамеры", 
              derectionImage:"https://logunoveugene.github.io/home/img/derection/photo.svg"},
            { derectionName:"Встраиваемая техника", 
              derectionImage:"https://logunoveugene.github.io/home/img/derection/oven.svg"},
            { derectionName:"Товары для дома", 
              derectionImage:"https://logunoveugene.github.io/home/img/derection/washing-m.svg"},
            { derectionName:"Техника для кухни", 
              derectionImage:"https://logunoveugene.github.io/home/img/derection/cooking.svg"},
            { derectionName:"Игры и развлечения", 
              derectionImage:"https://logunoveugene.github.io/home/img/derection/game.svg"},
            { derectionName:"Климатическая техника", 
              derectionImage:"https://logunoveugene.github.io/home/img/derection/tv.svg"},
            { derectionName:"Красота и здоровье", 
              derectionImage:"https://logunoveugene.github.io/home/img/derection/hairdry.svg"},
            { derectionName:"Аудиотехника", 
              derectionImage:"https://logunoveugene.github.io/home/img/derection/headphones.svg"},
            { derectionName:"Автомобильная электроника и техника", 
              derectionImage:"https://logunoveugene.github.io/home/img/derection/car.svg"},
            { derectionName:"Подарочные карты", 
              derectionImage:"https://logunoveugene.github.io/home/img/derection/gift.svg"},
            { derectionName:"Акционные товары", 
              derectionImage:"https://logunoveugene.github.io/home/img/derection/sale.svg"},
            { derectionName:"Уцененные товары",
              derectionImage:"https://logunoveugene.github.io/home/img/derection/broken.svg"}
        ],
      mainSlides:[
            {sliderImg:"https://logunoveugene.github.io/home/img/mainslides/1.png"},
            {sliderImg:"https://logunoveugene.github.io/home/img/mainslides/1.png"},
            {sliderImg:"https://logunoveugene.github.io/home/img/mainslides/1.png"},
            {sliderImg:"https://logunoveugene.github.io/home/img/mainslides/1.png"}
      ],
      actions:[
            {actionImg:"https://logunoveugene.github.io/home/img/action/1.png"},
            {actionImg:"https://logunoveugene.github.io/home/img/action/2.png"},
            {actionImg:"https://logunoveugene.github.io/home/img/action/3.png"},
            {actionImg:"https://logunoveugene.github.io/home/img/action/4.png"},
            {actionImg:"https://logunoveugene.github.io/home/img/action/5.png"},
            {actionImg:"https://logunoveugene.github.io/home/img/action/1.png"},
            {actionImg:"https://logunoveugene.github.io/home/img/action/1.png"}
      ],


      }
    },
    methods: {
      switchsite: function () {
        this.cm = !this.cm;
      }
    }
}
</script>
<style>
.top-ptoduct-img{
  position: absolute;
  bottom: 0;
  right:0;

}

.main-slider {
width: 100%;
height: 250px;
 overflow: hidden;
}

    .main-slider .swiper-slide img {
      width: auto;
      height: auto;
      -ms-transform: translate(-50%, -50%);
      -webkit-transform: translate(-50%, -50%);
      -moz-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      position: absolute;
      left: 50%;
      top: 50%;
      overflow: hidden;
    }


    .swiper-slide-active{
      z-index: 50;
    }

.swiper-button-next, .swiper-container-rtl .swiper-button-prev {
    right: 30px;
}

.swiper-button-prev, .swiper-container-rtl .swiper-button-next {
 left: 30px;

}



.action-slider{
  width: 100%;
height: 160px;
 overflow: hidden;

}

.action-slider .swiper-slide{
  width: 160px;
        /* Center slide text vertically */
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
}

.swiper-scrollbar-drag {
  background: rgba(0, 0, 0, .1);
}

.swiper-scrollbar {
  background: rgba(0, 0, 0, .05);
}


.swiper-container-horizontal>.swiper-scrollbar {
    left: 15px;
    bottom: -12px;
    width: 96%;
}

</style>
