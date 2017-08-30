<template>
<div id="app">

<div class="">
  <!-- шапка начало -->


  <div class="hidden-md-up mb-4">
  <div class="container-fulid ">
    <div class="container">
      <div class="row d-flex ">
        
        <div class="col d-flex flex-row align-items-center shrink pt-2 pb-2" v-on:click="switchsite">
          <img v-if="cm==true"  src="https://i.snag.gy/3jefoc.jpg" alt="" />
          <img v-if="cm==false" src="https://i.snag.gy/j6mnyA.jpg" alt="" />
        </div>

        <div class="col d-flex flex-row-reverse align-items-center align-self-end  p-3 ">
            <img src="https://i.snag.gy/51LOiG.jpg" class="" alt="" />
        </div>
      </div>
    </div>
  </div>
  <div class="container-fulid ">
    <div class="container bg-grey bb-red-3">
      <div class="row ">
                
        <div class="col  d-flex flex-row align-items-center border-right-1 shrink header-btn p-3">
          <img src="https://i.snag.gy/oJxb64.jpg" class="mr-2" alt="" />
          <a href="">
            <h6 class="mb-0  main-link">Каталог</h6>
          </a>
        </div>
        <div class="col d-flex flex-row align-items-center border-right-1 p-2">
          <input type="email" class="form-control" placeholder="Поиск по сайту">
        </div>
        
      </div>
    </div>
  </div>
</div>




  <div class="container-fulid hidden-sm-down">
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
      <div class="col d-flex flex-row-reverse align-items-center align-self-end   pt-2 pb-2 hidden-md-down">
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
<div class="container-fulid  hidden-sm-down   mb-4">
  <div class="container bb-red-3">
    <div class="row ">
      <div class="col border-right-1 p-3 shrink" v-on:click="switchsite">
        
         <div class=" hidden-xl-up" >
          <img v-if="cm==true"  src="https://i.snag.gy/3jefoc.jpg" alt="" />
          <img v-if="cm==false" src="https://i.snag.gy/j6mnyA.jpg" alt="" />
        </div>
         <div class="hidden-lg-down" >
          <img v-if="cm==true"  src="https://i.snag.gy/I0oqfz.jpg" alt="" />
          <img v-if="cm==false" src="https://i.snag.gy/Amv5nC.jpg" alt="" />
        </div>
      </div>
      <div class="col  d-flex flex-row align-items-center border-right-1 shrink header-btn">
        <img src="https://i.snag.gy/oJxb64.jpg" class="p-1" alt="" />
        <a href="#" class="hidden-lg-down">
          <h6 class="mb-0 ml-2  main-link">Каталог</h6>
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
        <img src="https://i.snag.gy/uSmB9r.jpg" class=" p-1" alt="" />
        <div class="d-flex flex-column  ml-2 hidden-md-down ">
          <a href="" class="main-link">
            <h6 class="mb-0">Сравнение</h6>
          </a>
        </div>
      </div>
      <div class="col d-flex flex-row align-items-center shrink header-btn">
        <img src="https://i.snag.gy/51LOiG.jpg" class="p-1" alt="" />
        <div class="d-flex flex-column  ml-2 hidden-md-down">
          <a href="" class="main-link">
            <h6 class="mb-0">Корзина</h6>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

 <!-- шапка конец -->




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
        cm:true
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
.badge-benefit {
  background-color: #ffe600;
  color: #000;
  text-transform: uppercase;
  border-radius: 0;
}

.img-tab-content {
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

.img-tab-nav {
  position: relative;
  height: 50px;
  width: 100%;
  padding: 0 10px;
  background-color: #fff;
  overflow: hidden;
}

.img-tab-nav {
  height: 20%!important;
  box-sizing: border-box;
  overflow: hidden;
  padding: 10px 0;
}

.img-tab-nav .swiper-slide {
  padding: 5px;
  border: 1px solid #fff;
  cursor: pointer;
}

.img-tab-nav .active {
  opacity: 0.7;
  border: 1px solid #eee;
}

.large-image {
  max-height: 320px;
  max-width: 100%;
}

.full-image-warp {
  height: 100vh;
}

.image-warp {
  height: 320px;
  cursor: zoom-in;
}

.zoom-cursor {
  cursor: zoom-in;
}

@media screen and (max-width: 425px) {
  .image-warp {
    height: 220px;
  }
  .large-image {
    max-height: 220px;
  }
}

.breadcrumbsSwiper-wrap {
  overflow: hidden;
}

.breadcrumbsSwiper {
  position: relative;
  width: 100%;
  padding: 0 0 0 10px;
  overflow: hidden;
}

.breadcrumbsSwiper .swiper-slide {
  width: auto;
}

.breadcrumb-left {
  width: 15px;
  position: absolute;
  height: 30px;
  z-index: 10;
  background: linear-gradient(to left, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1));
}

.delivery-info {
  background-color: #f2fbee;
}

.swiper-scrollbar-drag {
  background: rgba(0, 0, 0, .1);
}

.swiper-scrollbar {
  background: rgba(0, 0, 0, .05);
}

.modal-full {
  max-width: 100%;
  margin: 0;
  background-color: white;
  height: 100%;
}

.full-tab-nav .swiper-slide.active {
  border: 1px solid #eee;
}

.full-tab-nav .swiper-slide {
  background-color: white;
  box-sizing: border-box;
  overflow: hidden;
  padding: 10px 0;
  width: 70px;
  height: 70px;
  border: 1px solid #fff;
}

.full-tab-nav {
  position: absolute;
  margin: .5rem;
  bottom: 0;
}

.modal-zoom-header {
  position: absolute;
  top: 0;
  z-index: 10;
}


.mainTabdSwiper .swiper-container {
        width: 100%;
        height: 100%;
    }
   .mainTabdSwiper  .swiper-slide {
        font-size: 18px;
        width: auto;
        height: auto;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }




.product-related .swiper-container {
        width: 100%;
        height: 100%;

    }
   .product-related .swiper-slide {
        font-size: 18px;
        width: auto;
        height: auto;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }
    .product-related{
      overflow: hidden;
    }




    .btn-warning {
    -webkit-box-shadow: 0 2px 2px #e6dac8;
    -moz-box-shadow: 0 2px 2px #e6dac8;
    box-shadow: 0 2px 2px #e6dac8;
    background: #fab249;
    border: 1px solid #de9934;
    color: #fff;
    text-shadow: 0 1px 0 #d28a21;
}
</style>
