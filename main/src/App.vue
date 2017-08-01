Vue.use(VueAwesomeSwiper);
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
        <span class="badge badge-success">% В КРЕДИТ БЕЗ ПЕРЕПЛАТ</span> <span class="badge badge-primary">ПОДАРОК</span>
        </div>  
        
          <slider></slider>
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
              <div class="mb-4">
                <div class="mb-2">Отзывы покупателей</div>
                <div class="d-flex flex-row align-items-center">
                  <div class="mr-2">
                    <rate :length="5" :value="4"></rate>
                  </div>
                  <a href="" class="small">4,4 (17 отзывов)</a>
                </div>
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
    <div class="row hidden-sm-up">
      <div class="col-12">
        <div id="accordion" role="tablist" aria-multiselectable="true">
  <div class="card border-0">
    <div class="rounded accordion-plate bg-faded">
                                        <a rel="nofollow" class="btn-link text-muted icon-accordion collapsed">
                                          Обзор  
                                        </a>
                                    </div>
                                    <div class="border-top-0 collapse product-collapse rounded" aria-expanded="true" >sdfsd</div>


  </div>


</div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import  slider from './slider.vue'
import  rate from './rate.vue'

export default {
  name: 'app',
  components: {
    slider,rate
  }
}
</script>

<style >
.badge-benefit{
    background-color: #ffe600;
    color: #000;
  text-transform: uppercase ;
  border-radius: 0;
}

.icon-accordion::before{
    font-family: "untitled-font-1" !important;
    content: "\61";
    position:absolute;
    right:1rem;
    font-size: 15px;
top: 50%;
transform: translateY(-50%);
}


.icon-accordion[aria-expanded="true"]::before{
    content: "\61";
    transform: translateY(-50%) rotate(180deg);
}



.accordion-plate {
    padding: .6rem 1rem .6rem 1rem;
    position: relative;
}

.product-collapse {
    border: 1px solid rgb(238, 238, 238);
    margin-top: -3px;
    padding: 1rem;
    border-top: none;
}
</style>
