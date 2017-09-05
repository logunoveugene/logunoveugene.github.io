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
        <div class="container bg-grey border-bottom-1">
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
      <div class="container border-bottom-1">
        <div class="row ">
          <div class="col border-right-1 p-3 shrink" v-on:click="switchsite">
            <div class=" hidden-xl-up">
              <img v-if="cm==true" src="https://i.snag.gy/3jefoc.jpg" alt="" />
              <img v-if="cm==false" src="https://i.snag.gy/j6mnyA.jpg" alt="" />
            </div>
            <div class="hidden-lg-down">
              <img v-if="cm==true" src="https://i.snag.gy/I0oqfz.jpg" alt="" />
              <img v-if="cm==false" src="https://i.snag.gy/Amv5nC.jpg" alt="" />
            </div>
          </div>
          <div class="col d-flex flex-row align-items-center border-right-1 shrink header-btn">
            <img src="https://i.snag.gy/oJxb64.jpg" class="p-1" alt="" />
            <a href="#" class="hidden-lg-down">
              <h6 class="mb-0 ml-2 main-link">Каталог</h6>
            </a>
          </div>
          <div class="col d-flex flex-row align-items-center border-right-1">
          <div class="search-input col p-0">
            <input type="text" class="form-control " placeholder="Поиск по сайту">
            </div>
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
            <div class="d-flex flex-column ml-2 hidden-md-down">
              <a href="" class="main-link">
                <h6 class="mb-0">Сравнение</h6>
              </a>
            </div>
          </div>
          <div class="col d-flex flex-row align-items-center shrink header-btn">
            <img src="https://i.snag.gy/51LOiG.jpg" class="p-1" alt="" />
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
              <div class="derection hidden-md-down mb-5">
                <div class="derection-item d-flex flex-row " v-for="(derection, index) in catalogList">
                  <img class="derection-image hidden-lg-down" :src="derection.derectionImage" alt="">
                  <a href="" class="text-nowrap text-truncate">{{derection.derectionName}}</a>
                </div>
              </div>
              <div class="ml-3 hidden-md-down">
                <div class="h5 mb-4">Информационная лента</div>
                <div class="new-item mb-3">
                  <div class="new-item-date small text-muted mb-0">21 июля</div>
                  <a href="" class="new-item-title mb-1 d-block">Cash Back на телевизоры Philips</a>
                  <div class="new-item-desc small">Верните до 4 000 рублей с покупки новой техники</div>
                </div>
                <div class="new-item mb-3">
                  <div class="new-item-date small text-muted mb-0">14 июля</div>
                  <a href="" class="new-item-title mb-1 d-block">Студент, лови момент в «Кибермолле»!</a>
                  <div class="new-item-desc small">Подготовься к учебному году с нашими скидками на нужную технику</div>
                </div>
                <div class="new-item mb-3">
                  <div class="new-item-date small text-muted mb-0">21 июля</div>
                  <a href="" class="new-item-title mb-1 d-block">Cash Back на телевизоры Philips</a>
                  <div class="new-item-desc small">Верните до 4 000 рублей с покупки новой техники</div>
                </div>
                <div class="new-item mb-3">
                  <div class="new-item-date small text-muted mb-0">14 июля</div>
                  <a href="" class="new-item-title mb-1 d-block">Заморозить витамины — легко!</a>
                  <div class="new-item-desc small">Морозильная техника для сохранения свежести даров сада и огорода</div>
                </div>
                <a href="" class="new-item-title mb-1 d-block small">Смотреть все</a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="right-main">
              <div class="row">
                <div class="col-12">

        <div class="topOffert">
                    <div class="swiper-wrapper">
                    <div   class="swiper-slide">
                  <div class=" px-0 py-3  d-flex flex-row  ">
                    <div class=" d-flex flex-row pr-3 action-svg">
                      <img class="mr-2 svg " src="https://logunoveugene.github.io/home/img/derection/sale.svg" alt="">
                      <a href="" class="text-danger text-nowrap">Акционные товары</a>
                    </div>
                    <div class=" d-flex flex-row pr-3 broken-svg border-right-1 ">
                      <img class="mr-2 svg " src="https://logunoveugene.github.io/home/img/derection/broken.svg" alt="">
                      <a href="" class="text-nowrap text-muted">Уцененные товары</a>
                    </div>
                    <div class=" d-flex flex-row px-3 broken-svg  ">
                      <a href="">Телевизоры</a>
                    </div>
                    <div class=" d-flex flex-row pr-3 broken-svg  ">
                      <a href="">Смартфоны</a>
                    </div>
                    <div class=" d-flex flex-row pr-3 broken-svg  ">
                      <a href="">Холодильники</a>
                    </div>
                  </div>
                   </div>
                  </div>
                </div>
                </div>
                <div class="col-12 ">
                  <div class="main-slider  mb-2 hidden-sm-down">
                    <div class="swiper-wrapper">
                      <div v-for="slide in mainSlides" class="swiper-slide">
                        <a href="#" class="d-block">
                          <img :data-src="slide.sliderImg" class="swiper-lazy d-block">
                          <div class="swiper-lazy-preloader swiper-lazy-preloader-black"></div>
                        </a>
                      </div>
                    </div>
                    <div class="swiper-pagination"></div>
                    <div class="slider-arrow slider-arrow-l">
                      <div class="icon-left-arrow"></div>
                    </div>
                    <div class="slider-arrow slider-arrow-r">
                      <div class="icon-rightt-arrow"></div>
                    </div>
                  </div>
                  <div class="main-slider-m  mb-2 hidden-md-up">
                    <div class="swiper-wrapper">
                      <div v-for="slide in mainSlidesM" class="swiper-slide">
                        <a href="#" class="d-block">
                          <img :data-src="slide.sliderImg" class="swiper-lazy d-block">
                          <div class="swiper-lazy-preloader swiper-lazy-preloader-black"></div>
                        </a>
                      </div>
                    </div>
                    <div class="swiper-pagination"></div>
                    <div class="slider-arrow slider-arrow-l">
                      <div class="icon-left-arrow"></div>
                    </div>
                    <div class="slider-arrow slider-arrow-r">
                      <div class="icon-rightt-arrow"></div>
                    </div>
                  </div>
                </div>
                <div class="col-12 mb-5">
                  <div class="action-slider mt-4">
                    <div class="swiper-wrapper">
                      <div v-for="action in actions" class="swiper-slide">
                        <a href="#">
                          <img :src="action.actionImg" class="">
                          <span class="action-desc-hov">
                            <span class="m-3  d-block">{{action.actionName}}</span>
                          <span class="m-3 mt-0 d-block small text-muted">{{action.actionDesc}}</span>
                          </span>
                        </a>
                      </div>
                    </div>
                    <div class="swiper-scrollbar"></div>
                  </div>
                </div>
                <!-- <div class="col-12 mb-4">
                  <div class="d-flex flex-row flex-wrap flex-md-nowrap ">
                    <div class="product-plate col-xl-4 col-lg-4 col-md-4 col-12 p-4">
                      <img src="https://i.snag.gy/uHTN4e.jpg" alt="" class="top-ptoduct-img">
                      <div class="d-flex flex-column">
                        <div class="small text-muted mb-2">
                          <div class="small">ХИТЫ ПРОДАЖ</div>
                        </div>
                        <div class="h5 mb-3">Электроника</div>
                        <a href="" class="small mb-1">Телевизоры 4k</a>
                        <a href="" class="small mb-1">Смартфоны Apple</a>
                        <a href="" class="small ">Ноутбуки</a>
                      </div>
                    </div>
                    <div class="product-plate col-xl-4 col-lg-4 col-md-4 col-12 p-4">
                      <img src="https://i.snag.gy/z86m0g.jpg" alt="" class="top-ptoduct-img">
                      <div class="d-flex flex-column">
                        <div class="small text-muted mb-2">
                          <div class="small">АКТУАЛЬНО</div>
                        </div>
                        <div class="h5 mb-3">Климатическия
                          <br> техника</div>
                        <a href="" class="small mb-1">Кондиционеры</a>
                        <a href="" class="small mb-1">Осушители воздуха</a>
                      </div>
                    </div>
                    <div class="product-plate col-xl-4 col-lg-4 col-md-4 col-12 p-4">
                      <img src="https://i.snag.gy/XfIH9r.jpg" alt="" class="top-ptoduct-img">
                      <div class="d-flex flex-column">
                        <div class="small text-muted mb-2">
                          <div class="small">В ЦЕНТРЕ ВНИМАНИЯ</div>
                        </div>
                        <div class="h5 mb-3">Техника для кухни</div>
                        <a href="" class="small mb-1">Холодильники</a>
                        <a href="" class="small mb-1">Электрические плиты</a>
                        <a href="" class="small mb-1">Чайники</a>
                      </div>
                    </div>
                  </div>
                </div> -->
                <div class="col-12 mt-2 mb-5">
                  <div class="h4 mb-3 d-inline-block mr-2">Скидки</div>
                  <a href="" class="d-inline small">2 456 товаров</a>
                          <div class="topOffert    ">
                    <div class="swiper-wrapper">
                    <div   class="swiper-slide">
                  <ul class="nav nav-pills small mb-3">
                    <li class="nav-item mr-3">
                      <a class="nav-link active p-1 px-2" href="#">Телевизоры и видеотехника </a>
                    </li>
                    <li class="nav-item mr-3 ">
                      <a class="nav-link" href="#">Техника для дома</a>
                    </li>
                    <li class="nav-item mr-3">
                      <a class="nav-link" href="#">Техника для кухни</a>
                    </li>

                    <li class="nav-item mr-3">
                      <a class="nav-link" href="#">Смартфоны</a>
                    </li>
                    <li class="nav-item mr-3">
                      <a class="nav-link" href="#">Климатическая техника</a>
                    </li>
                  </ul>
                  </div></div></div>
                  <div class="propuct-swiper">
                    <div class="swiper-wrapper d-flex align-items-stretch">
                      <div class="swiper-slide border-right-1 " v-for="(product, index) in products">
                        <div class="col-12  p-0 ">
                          <div class="flex-column border p-3 ">
                            <div class="d-flex justify-content-center mb-4 img-wrap pt-3">
                              <div class="stikerWrap" v-if="products[index].actions !== 0">
                                <div class="d-inline" v-for="(action, index) in product.actions">
                                  <a data-toggle="tooltip" data-html="true" data-placement="bottom" :title="action.actionDesc">
                                    <span class="mr-1 stiker" :class="action.actionType">{{action.actionName}}</span>
                                  </a>
                                </div>
                              </div>
                              <div class="d-flex">
                                <img class="align-self-center poduct-img" :src="product.img" alt="">
                              </div>
                            </div>
                            <div class="mb-2 productName hidden-sm-down small">
                              <a href="https://logunoveugene.github.io/main2/index.html" :title="product.name">{{product.name}}</a>
                            </div>
                            <div class="mb-2 productName hidden-md-up small">
                              <a href="https://logunoveugene.github.io/main2/index.html">{{product.name}}</a>
                            </div>
                            <div class="mb-2">
                              <rate :length="5" :value="product.rate"></rate> <span class="small text-muted">{{product.rateCount}}</span>
                            </div>
                            <div class="hidden-sm-down">
                              <div class="mb-4 price-wrap">
                                <div class="d-flex flex-row align-items-end mb-1">
                                  <div class="h5 mb-0 mr-2 "><b>{{product.price}} р.</b></div>
                                  <span class="small text-muted" v-if="products[index].oldPrice !== 0"><del>{{product.oldPrice}} р.</del></span>
                                </div>
                                <div class="discount" v-if="products[index].discount !== 0">
                                  <mark>Доступна скидка {{product.discount}} р.</mark>
                                </div>
                              </div>
                              <div class="mb-3">
                                <button type="button" class="btn btn-secondary mr-2">В корзину</button>
                                <img src="https://i.snag.gy/zo2fWm.jpg" alt="">
                              </div>
                            </div>
                            <div class="hidden-md-up d-flex justify-content-between align-items-center">
                              <div class="d-flex flex-column ">
                                <span class="small text-muted" v-if="products[index].oldPrice !== 0"><del>{{product.oldPrice}} р.</del></span>
                                <span class=" mb-0"><b>{{product.price}} р.</b></span>
                                <div class="discount" v-if="products[index].discount !== 0">
                                  <mark>Доступна скидка {{product.discount}} р.</mark>
                                </div>
                              </div>
                              <button type="button" class="btn btn-secondary">
                                <div class="icon-cart text-muted"></div>
                              </button>
                            </div>
                            <div class="small hidden-md-down ">
                              <a href="" class="text-muted"><a href="">Забрать в 6 магазинах</a> с 18 сен.</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="swiper-scrollbar"></div>
                  </div>
                </div>

                <div class="col-12 mt-2 mb-5">
                  <div class="h4 mb-3 d-inline-block mr-2">Новинки</div>
                  <a href="" class="d-inline small">581 товар</a>
                  <div class="topOffert    ">
                    <div class="swiper-wrapper">
                    <div   class="swiper-slide">
                  <ul class="nav nav-pills small mb-3">
                    <li class="nav-item mr-3">
                      <a class="nav-link active p-1 px-2" href="#">Телевизоры и видеотехника </a>
                    </li>
                    <li class="nav-item mr-3 ">
                      <a class="nav-link" href="#">Техника для дома</a>
                    </li>
                    <li class="nav-item mr-3">
                      <a class="nav-link" href="#">Техника для кухни</a>
                    </li>

                    <li class="nav-item mr-3">
                      <a class="nav-link" href="#">Смартфоны</a>
                    </li>
                    <li class="nav-item mr-3">
                      <a class="nav-link" href="#">Климатическая техника</a>
                    </li>
                  </ul>
                  </div></div></div>
                  <div class="propuct-swiper">
                    <div class="swiper-wrapper d-flex align-items-stretch">
                      <div class="swiper-slide border-right-1 " v-for="(product, index) in products">
                        <div class="col-12  p-0 ">
                          <div class="flex-column border p-3 ">
                            <div class="d-flex justify-content-center mb-4 img-wrap pt-3">
                              <div class="stikerWrap" v-if="products[index].actions !== 0">
                                <div class="d-inline" v-for="(action, index) in product.actions">
                                  <a data-toggle="tooltip" data-html="true" data-placement="bottom" :title="action.actionDesc">
                                    <span class="mr-1 stiker" :class="action.actionType">{{action.actionName}}</span>
                                  </a>
                                </div>
                              </div>
                              <div class="d-flex">
                                <img class="align-self-center poduct-img" :src="product.img" alt="">
                              </div>
                            </div>
                            <div class="mb-2 productName hidden-sm-down small">
                              <a href="https://logunoveugene.github.io/main2/index.html" :title="product.name">{{product.name}}</a>
                            </div>
                            <div class="mb-2 productName hidden-md-up small">
                              <a href="https://logunoveugene.github.io/main2/index.html">{{product.name}}</a>
                            </div>
                            <div class="mb-2">
                              <rate :length="5" :value="product.rate"></rate> <span class="small text-muted">{{product.rateCount}}</span>
                            </div>
                            <div class="hidden-sm-down">
                              <div class="mb-4 price-wrap">
                                <div class="d-flex flex-row align-items-end mb-1">
                                  <div class="h5 mb-0 mr-2 "><b>{{product.price}} р.</b></div>
                                  <span class="small text-muted" v-if="products[index].oldPrice !== 0"><del>{{product.oldPrice}} р.</del></span>
                                </div>
                                <div class="discount" v-if="products[index].discount !== 0">
                                  <mark>Доступна скидка {{product.discount}} р.</mark>
                                </div>
                              </div>
                              <div class="mb-3">
                                <button type="button" class="btn btn-secondary mr-2">В корзину</button>
                                <img src="https://i.snag.gy/zo2fWm.jpg" alt="">
                              </div>
                            </div>
                            <div class="hidden-md-up d-flex justify-content-between align-items-center">
                              <div class="d-flex flex-column ">
                                <span class="small text-muted" v-if="products[index].oldPrice !== 0"><del>{{product.oldPrice}} р.</del></span>
                                <span class=" mb-0"><b>{{product.price}} р.</b></span>
                                <div class="discount" v-if="products[index].discount !== 0">
                                  <mark>Доступна скидка {{product.discount}} р.</mark>
                                </div>
                              </div>
                              <button type="button" class="btn btn-secondary">
                                <div class="icon-cart text-muted"></div>
                              </button>
                            </div>
                            <div class="small hidden-md-down ">
                              <a href="" class="text-muted"><a href="">Забрать в 6 магазинах</a> с 18 сен.</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="swiper-scrollbar"></div>
                  </div>
                </div>
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
import rate from './rate.vue'

export default {
  name: 'app',
  components: {
    rate
  },
  data() {
    return {
      cm: true,
      catalogList: [{
        derectionName: "Телевизоры и видеотехника",
        derectionImage: "https://logunoveugene.github.io/home/img/derection/tv.svg"
      }, {
        derectionName: "Телефоны и мобильные устройства",
        derectionImage: "https://logunoveugene.github.io/home/img/derection/phone.svg"
      }, {
        derectionName: "Компьютерная техника",
        derectionImage: "https://logunoveugene.github.io/home/img/derection/laptop.svg"
      }, {
        derectionName: "Компьютерные комплектующие",
        derectionImage: "https://logunoveugene.github.io/home/img/derection/pc.svg"
      }, {
        derectionName: "Фото и видеокамеры",
        derectionImage: "https://logunoveugene.github.io/home/img/derection/photo.svg"
      }, {
        derectionName: "Встраиваемая техника",
        derectionImage: "https://logunoveugene.github.io/home/img/derection/oven.svg"
      }, {
        derectionName: "Товары для дома",
        derectionImage: "https://logunoveugene.github.io/home/img/derection/washing-m.svg"
      }, {
        derectionName: "Техника для кухни",
        derectionImage: "https://logunoveugene.github.io/home/img/derection/cooking.svg"
      }, {
        derectionName: "Игры и развлечения",
        derectionImage: "https://logunoveugene.github.io/home/img/derection/game.svg"
      }, {
        derectionName: "Климатическая техника",
        derectionImage: "https://logunoveugene.github.io/home/img/derection/tv.svg"
      }, {
        derectionName: "Красота и здоровье",
        derectionImage: "https://logunoveugene.github.io/home/img/derection/hairdry.svg"
      }, {
        derectionName: "Аудиотехника",
        derectionImage: "https://logunoveugene.github.io/home/img/derection/headphones.svg"
      }, {
        derectionName: "Автомобильная электроника и техника",
        derectionImage: "https://logunoveugene.github.io/home/img/derection/car.svg"
      }, {
        derectionName: "Подарочные карты",
        derectionImage: "https://logunoveugene.github.io/home/img/derection/gift.svg"
      
      }],


      mainSlides: [{
        sliderImg: "https://logunoveugene.github.io/home/img/mainslides/1.png"
      }, {
        sliderImg: "https://logunoveugene.github.io/home/img/mainslides/2.png"
      }, {
        sliderImg: "https://logunoveugene.github.io/home/img/mainslides/3.png"
      }, {
        sliderImg: "https://logunoveugene.github.io/home/img/mainslides/4.png"
      }],


      mainSlidesM: [{
        sliderImg: "https://logunoveugene.github.io/home/img/mainslides-m/1.png"
      }, {
        sliderImg: "https://logunoveugene.github.io/home/img/mainslides-m/2.png"
      }, {
        sliderImg: "https://logunoveugene.github.io/home/img/mainslides-m/3.png"
      }, {
        sliderImg: "https://logunoveugene.github.io/home/img/mainslides-m/4.png"
      }],




      actions: [{
        actionImg: "https://logunoveugene.github.io/home/img/action/1.png",
        actionName:"Скидка 30% на аксессуары HP",
        actionDesc:"Купи ноутбук HP и получи скидку на покупку аксессуаров"
      }, {
        actionImg: "https://logunoveugene.github.io/home/img/action/2.png",
        actionName:"Новинка от LG",
        actionDesc:"Безрамочный смартфон для тебя"
      }, {
        actionImg: "https://logunoveugene.github.io/home/img/action/3.png",
        actionName:"Новые часы Samsung Gear",
        actionDesc:"Купи ноутбук HP и получи скидку на покупку аксессуаров"
      }, {
        actionImg: "https://logunoveugene.github.io/home/img/action/4.png",
        actionName:"Скидка 30% на аксессуары HP",
        actionDesc:"Купи ноутбук HP и получи скидку на покупку аксессуаров"
      }, {
        actionImg: "https://logunoveugene.github.io/home/img/action/5.png",
        actionName:"Скидка 30% на аксессуары HP",
        actionDesc:"Купи ноутбук HP и получи скидку на покупку аксессуаров"
      }, {
        actionImg: "https://logunoveugene.github.io/home/img/action/1.png",
        actionName:"Скидка 30% на аксессуары HP",
        actionDesc:"Купи ноутбук HP и получи скидку на покупку аксессуаров"
      }, {
        actionImg: "https://logunoveugene.github.io/home/img/action/1.png",
        actionName:"Скидка 30% на аксессуары HP",
        actionDesc:"Купи ноутбук HP и получи скидку на покупку аксессуаров"
      }],
      products: [{
          id: 20101507,
          name: 'Телевизор BBK 32LEM-1018/T2C',
          img: "https://logunoveugene.github.io/catalog/img/1.png",
          desc: '<ul><li>планшет 9.7", 2048x1536, TFT IPS</li><li>встроенная память 32 Гб, без слота для карт памяти</li><li>iOS, ОЗУ 2 Гб, процессор Apple A9</li><li>Wi-Fi, Bluetooth, NFC</li><li>камера 15 Мп.</li></ul>',
          oldPrice: 0,
          price: 54800,
          discount: 0,
          rate: 4.5,
          rateCount: 65,
          amount: "Забрать в 6 магазинах сегодня",
          actions: 0,
          stores: [{
            storeName: "в ТЦ Черемушки",
            date: "2017-10-24"
          }, {
            storeName: "на Алеутской",
            date: "2017-10-28"
          }, {
            storeName: "в ТЦ Максим",
            date: "2017-10-24"
          }, {
            storeName: "на Гоголя",
            date: "2017-10-28"
          }, {
            storeName: "на Вилкова",
            date: "2017-10-28"
          }]
        },


        {
          id: 20101508,
          name: 'Телевизор Sony KD-43XE8096',
          img: "https://logunoveugene.github.io/catalog/img/2.png",
          desc: '<ul><li>планшет 9.7", 2048x1536, TFT IPS</li><li>встроенная память 32 Гб, без слота для карт памяти</li><li>iOS, ОЗУ 2 Гб, процессор Apple A9</li><li>Wi-Fi, Bluetooth, NFC</li><li>камера 15 Мп.</li></ul>',
          oldPrice: 0,
          price: 84800,
          discount: 1800,
          rate: 3.1,
          rateCount: 15,
          amount: "Забрать в 6 магазинах сегодня",
          actions: [{
              actionName: "Летние скидки",
              actionType: "sale",
              actionDesc: "Скидка по промокоду ЖАРА"
            }


          ],
          stores: [{
            storeName: "в ТЦ Черемушки",
            date: "2017-10-24"
          }, {
            storeName: "на Алеутской",
            date: "2017-10-28"
          }, {
            storeName: "в ТЦ Максим",
            date: "2017-10-24"
          }, {
            storeName: "на Гоголя",
            date: "2017-10-28"
          }, {
            storeName: "на Вилкова",
            date: "2017-10-28"
          }]
        },

        {
          id: 20101509,
          name: "Телевизор LG 55UJ670V",
          img: "https://logunoveugene.github.io/catalog/img/3.png",
          desc: '<ul><li>планшет 9.7", 2048x1536, TFT IPS</li><li>встроенная память 32 Гб, без слота для карт памяти</li><li>iOS, ОЗУ 2 Гб, процессор Apple A9</li><li>Wi-Fi, Bluetooth, NFC</li><li>камера 15 Мп.</li></ul>',
          oldPrice: 19860,
          price: 18800,
          discount: 0,
          rate: 0,
          rateCount: 0,
          amount: "Забрать в 6 магазинах сегодня",
          actions: 0,
          stores: [{
            storeName: "в ТЦ Черемушки",
            date: "2017-10-24"
          }, {
            storeName: "на Алеутской",
            date: "2017-10-28"
          }, {
            storeName: "в ТЦ Максим",
            date: "2017-10-24"
          }, {
            storeName: "на Гоголя",
            date: "2017-10-28"
          }, {
            storeName: "на Вилкова",
            date: "2017-10-28"
          }]
        },

        {
          id: 20101511,
          name: 'Телевизор Samsung UE55MU6100',
          img: "https://logunoveugene.github.io/catalog/img/9.png",
          desc: '<ul><li>планшет 9.7", 2048x1536, TFT IPS</li><li>встроенная память 32 Гб, без слота для карт памяти</li><li>iOS, ОЗУ 2 Гб, процессор Apple A9</li><li>Wi-Fi, Bluetooth, NFC</li><li>камера 15 Мп.</li></ul>',
          oldPrice: 33860,
          price: 21800,
          discount: 0,
          rate: 5,
          rateCount: 3,
          amount: "Забрать в 6 магазинах сегодня",
          actions: [{
            actionName: "Подарок за покупку",
            actionType: "gift",
            actionDesc: "ОПисание3"
          }],
          stores: [{
            storeName: "в ТЦ Черемушки",
            date: "2017-10-24"
          }, {
            storeName: "на Алеутской",
            date: "2017-10-28"
          }, {
            storeName: "в ТЦ Максим",
            date: "2017-10-24"
          }, {
            storeName: "на Гоголя",
            date: "2017-10-28"
          }, {
            storeName: "на Вилкова",
            date: "2017-10-28"
          }]
        },

        {
          id: 20101512,
          name: 'Телевизор LG 32LH590U',
          img: "https://logunoveugene.github.io/catalog/img/5.png",
          desc: '<ul><li>планшет 9.7", 2048x1536, TFT IPS</li><li>встроенная память 32 Гб, без слота для карт памяти</li><li>iOS, ОЗУ 2 Гб, процессор Apple A9</li><li>Wi-Fi, Bluetooth, NFC</li><li>камера 15 Мп.</li></ul>',
          oldPrice: 0,
          price: 32990,
          discount: 0,
          rate: 4.5,
          rateCount: 60,
          amount: "Забрать в 6 магазинах сегодня",
          actions: 0,
          stores: [{
            storeName: "в ТЦ Черемушки",
            date: "2017-10-24"
          }, {
            storeName: "на Алеутской",
            date: "2017-10-28"
          }, {
            storeName: "в ТЦ Максим",
            date: "2017-10-24"
          }, {
            storeName: "на Гоголя",
            date: "2017-10-28"
          }, {
            storeName: "на Вилкова",
            date: "2017-10-28"
          }]
        }, {
          id: 20101512,
          name: 'Телевизор LG 43LJ519V',
          img: "https://logunoveugene.github.io/catalog/img/6.png",
          desc: '<ul><li>планшет 9.7", 2048x1536, TFT IPS</li><li>встроенная память 32 Гб, без слота для карт памяти</li><li>iOS, ОЗУ 2 Гб, процессор Apple A9</li><li>Wi-Fi, Bluetooth, NFC</li><li>камера 15 Мп.</li></ul>',
          oldPrice: 0,
          price: 32990,
          discount: 0,
          rate: 4.5,
          rateCount: 15,
          amount: "Забрать в 6 магазинах сегодня",
          actions: 0,
          stores: [{
            storeName: "в ТЦ Черемушки",
            date: "2017-10-24"
          }, {
            storeName: "на Алеутской",
            date: "2017-10-28"
          }, {
            storeName: "в ТЦ Максим",
            date: "2017-10-24"
          }, {
            storeName: "на Гоголя",
            date: "2017-10-28"
          }, {
            storeName: "на Вилкова",
            date: "2017-10-28"
          }]
        }, {
          id: 20101512,
          name: 'Телевизор LG OLED55E6V ',
          img: "https://logunoveugene.github.io/catalog/img/7.png",
          desc: '<ul><li>планшет 9.7", 2048x1536, TFT IPS</li><li>встроенная память 32 Гб, без слота для карт памяти</li><li>iOS, ОЗУ 2 Гб, процессор Apple A9</li><li>Wi-Fi, Bluetooth, NFC</li><li>камера 15 Мп.</li></ul>',
          oldPrice: 0,
          price: 86990,
          discount: 0,
          rate: 4.5,
          rateCount: 71,
          amount: "Забрать в 6 магазинах сегодня",
          actions: 0,
          stores: [{
            storeName: "в ТЦ Черемушки",
            date: "2017-10-24"
          }, {
            storeName: "на Алеутской",
            date: "2017-10-28"
          }, {
            storeName: "в ТЦ Максим",
            date: "2017-10-24"
          }, {
            storeName: "на Гоголя",
            date: "2017-10-28"
          }, {
            storeName: "на Вилкова",
            date: "2017-10-28"
          }]
        }, {
          id: 20101512,
          name: 'Телевизор Samsung QE55Q7CAM',
          img: "https://logunoveugene.github.io/catalog/img/8.png",
          desc: '<ul><li>планшет 9.7", 2048x1536, TFT IPS</li><li>встроенная память 32 Гб, без слота для карт памяти</li><li>iOS, ОЗУ 2 Гб, процессор Apple A9</li><li>Wi-Fi, Bluetooth, NFC</li><li>камера 15 Мп.</li></ul>',
          oldPrice: 0,
          price: 169990,
          discount: 1800,
          rate: 4.5,
          rateCount: 8,
          amount: "Забрать в 6 магазинах сегодня",
          actions: 0,
          stores: [{
            storeName: "в ТЦ Черемушки",
            date: "2017-10-24"
          }, {
            storeName: "на Алеутской",
            date: "2017-10-28"
          }, {
            storeName: "в ТЦ Максим",
            date: "2017-10-24"
          }, {
            storeName: "на Гоголя",
            date: "2017-10-28"
          }, {
            storeName: "на Вилкова",
            date: "2017-10-28"
          }]
        }


      ]


    }
  },
  methods: {
    switchsite: function() {
      this.cm = !this.cm;
    }
  }
}

</script>
<style>

.header-btn img{
  -webkit-filter: grayscale(100%);
    filter: grayscale(100%); /* Чёрно-белое изображение */
    transition: .3s; /* Плавный переход */
}

.header-btn:hover img{
  -webkit-filter: none;
    filter: none; /* Убираем фильтр */
}



.search-input::before {
    content: 'm';
    font-family: 'icons';
    position: absolute;
    right: 12px;
    top: 8px;
    color: #adadad;
    cursor: pointer;
}


.topOffert{
  overflow: hidden;
  width: 100%;
}


.topOffert .swiper-slide{

  width: auto;
}


svg {width: 21px; height: 21px;}
.action-svg svg * {fill: #d9534f!important;}

.broken-svg svg * {fill: #666!important;}
.action-desc-hov{

  opacity: 0;
    position: absolute;
    z-index: 10000;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(256,256,256,0.9);
 
}




.action-slider .swiper-slide:hover  .action-desc-hov{
display: block;
opacity: 1;
  transition: opacity 0.2s ease;
}





.propuct-swiper {

  overflow: hidden;
border: 1px solid #e9ecef!important;
}

.propuct-swiper .swiper-slide:last-child {
border: none;
}


.propuct-swiper .swiper-slide {
  width: 33.333%;
}

@media screen and (max-width: 768px) {
  .propuct-swiper .swiper-slide {
    width: 50%;
  }

}

.top-ptoduct-img {
  position: absolute;
  bottom: 0;
  right: 0;
}

.main-slider {
  width: 100%;
  height: 250px;
  overflow: hidden;
      position: relative;
}


.swiper-container-horizontal>.swiper-pagination-bullets, .swiper-pagination-custom, .swiper-pagination-fraction {
    bottom: 20px;

 width: auto ;
    right: 20px;
    background-color: rgba(0,0,0,.5);
    padding: 0 .25rem;
    color: white;
    opacity: 0.8;
       left: auto;
       font-size: 80%;
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


.main-slider-m {
  width: 100%;
  height: 200px;
  overflow: hidden;
      position: relative;
}

.main-slider-m .swiper-slide img {
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




.swiper-slide-active {
  z-index: 50;
}

.swiper-button-next,
.swiper-container-rtl .swiper-button-prev {
  right: 20px;
}

.swiper-button-prev,
.swiper-container-rtl .swiper-button-next {
  left: 20px;
}

.action-slider {
  width: 100%;
  height: 160px;
  overflow: hidden;
}

.action-slider .swiper-slide {
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
  background: rgba(0, 0, 0, .2);
}

.swiper-scrollbar {
  background: rgba(0, 0, 0, .1);
}

.swiper-container-horizontal>.swiper-scrollbar {
  left: 15px;
  bottom: -12px;
  width: 96%;
}


</style>
