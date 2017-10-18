<template>
<div id="app">

<div class="">
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
  <div class="container-fulid bg-grey bb-red-3">
    <div class="container">
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




  <div class="container-fulid bg-grey hidden-sm-down">
  <div class="container">
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
      <div class="col d-flex flex-row-reverse align-items-center align-self-end   pt-2 pb-2">
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
<div class="container-fulid  hidden-sm-down  bb-red-3 mb-4">
  <div class="container">
    <div class="row ">
      <div class="col border-right-1 p-3 shrink" v-on:click="switchsite">
        <img v-if="cm==true"  src="https://i.snag.gy/I0oqfz.jpg" alt="" />
        <img v-if="cm==false" src="https://i.snag.gy/Amv5nC.jpg" alt="" />
      </div>
      <div class="col  d-flex flex-row align-items-center border-right-1 shrink header-btn">
        <img src="https://i.snag.gy/oJxb64.jpg" class="mr-2" alt="" />
        <a href="">
          <h6 class="mb-0  main-link">Каталог</h6>
        </a>
      </div>
      <div class="col d-flex flex-row align-items-center border-right-1">
        <input type="email" class="form-control" placeholder="Поиск по сайту">
      </div>
      <div class="col d-flex flex-row align-items-center border-right-1 shrink header-btn">
        <img src="https://i.snag.gy/u5W6MI.jpg" class="" alt="" />
        <div class="d-flex flex-column hidden-md-down ml-2">
          <a href="" class="main-link"><h6 class="mb-0">Личный кабинет</h6></a>
          <div class="d-flex flex-row">
            <a href="" class="mr-2 small text-muted">Вход</a>
            <a href="" class="small text-muted">Регистрация</a>
          </div>
        </div>
      </div>
      <div class="col d-flex flex-row align-items-center border-right-1 shrink header-btn">
        <img src="https://i.snag.gy/uSmB9r.jpg" class=" " alt="" />
        <div class="d-flex flex-column  ml-2 hidden-md-down ">
          <a href="" class="main-link">
            <h6 class="mb-0">Сравнение</h6>
          </a>
        </div>
      </div>
      <div class="col d-flex flex-row align-items-center border-right-1 shrink header-btn">
        <img src="https://i.snag.gy/51LOiG.jpg" class="" alt="" />
        <div class="d-flex flex-column  ml-2 hidden-md-down">
          <a href="" class="main-link">
            <h6 class="mb-0">Корзина</h6>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>



  <div class="container">
    <div class=" d-flex flex-nowrap">
      <div class=" d-flex flex-row align-items-center pr-3 mb-3 border-right-1">
        <img src="https://i.snag.gy/Lp8yad.jpg" class="mr-2" alt="" />
        <a href="">
          <div class="mb-0 text-muted small">Назад</div>
        </a>
      </div>
      <div class="d-flex ml-1 mb-3 breadcrumbsSwiper-wrap">
        <div class="breadcrumb-left">
        </div>
        <div class="breadcrumbsSwiper" dir="rtl">
          <div class="swiper-wrapper ">
            <div class="swiper-slide">
              <nav class="">
                <a class="text-muted small mr-3 " href="#">Главная</a> <img src="https://i.snag.gy/CcYVtq.jpg" alt="" class="mr-3">
                <a class="text-muted  small mr-3" href="#">Телевизоры и видеотехника</a><img src="https://i.snag.gy/CcYVtq.jpg" alt="" class="mr-3">
                <a class="text-muted  small mr-3" href="#">Телевизоры </a><img src="https://i.snag.gy/CcYVtq.jpg" alt="" class="mr-3">
                <a class="text-muted  small" href="#">Samsung </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row hidden-md-up">
      <div class="col-12">
        <h1 class="h5 mb-3">Телевизор SAMSUNG UE19H4000AK</h1>
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
      <div class="col d-flex flex-row-reverse align-items-center align-self-end  pt-2 pb-2 hidden-sm-down">
        <div class="small text-muted">арт. 12004252</div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-5 col-md-7 col-12">
        <div class="mb-3">
          <div class="mb-2">
            <div class="d-flex flex-row align-items-center hidden-sm-down">
              <div class="mr-2">
                <rate :length="5" :value="4"></rate>
              </div>
              <a href="" class="small">4,4 (17 отзывов)</a>
            </div>
          </div>
          <div class="main-image mb-3">
            <div class="img-tab-content">
              <div class="swiper-wrapper">
                <div v-for="slide in swiperSlides" class="swiper-slide image-warp">
                  <a id="fullscreen-modal-image" href="" data-toggle="modal" data-target="#fullscreen-image" class="zoom-cursor">
                    <img :data-src="slide" class="swiper-lazy large-image">
                    <div class="swiper-lazy-preloader swiper-lazy-preloader-black"></div>
                  </a>
                </div>
              </div>
              <div class="swiper-pagination hidden-sm-up"></div>
            </div>
            <div class="img-tab-nav hidden-sm-down" id="tabNav">
              <div class="swiper-wrapper">
                <div v-for="(slide, index)  in swiperSlidesThumbs" class="swiper-slide" :data-slide-index="index">
                  <img :src="slide">
                </div>
              </div>
              <div class="swiper-scrollbar"></div>
            </div>
          </div>
          <div class="d-flex flex-row small">
            <a href="" class="text-muted mr-4" data-toggle="modal" data-target="#video-full"> <img src="https://i.snag.gy/cUbKJR.jpg" alt="" class="mb-1 mr-2"><span>Видеообзор модели</span> </a>
            <a href="" class="text-muted" data-toggle="modal" data-target="#360review"> <img src="https://i.snag.gy/Z8wTQl.jpg" alt="" class="mb-1 mr-2"><span>3D обзор</span> </a>
          </div>
        </div>
      </div>
      <div class="col-lg-7  col-md-5 col-12">
        <div class="row">
          <div class="col-md-6 hidden-md-down">
            <div class="d-flex flex-column ml-3">
              <div class="mb-5">
                <div class="mb-2">Основные характеристики</div>
                <ul class="list-unstyled small main-props mb-3">
                  <li>Диагональ дисплея - 55 " (139,7 см)</li>
                  <li>Тип - QLED</li>
                  <li>HD-формат - 4K (3840x2160 пикселей)</li>
                  <li>Smart TV, android TV</li>
                  <li>WIFI, Ethernet</li>
                  <li>Вход HDMI x4, Интерфейс USB x3</li>
                  <li>DVB-T, DVB-T2, DVB-C, DVB-S2</li>
                </ul>
                <img src="https://i.snag.gy/wvhWE1.jpg" alt="" class="mb-4">
                <div class=""><a href="">Все характеристики</a></div>
              </div>
              <div class="mb-5">
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
          <div class="col-lg-6 col-md-12 col-12 mb-4">
            <div class="d-flex flex-column">
              <img src="https://i.snag.gy/8VrZxc.jpg" alt="" class="">
              <div class="card w-100 rounded-0 p-3 mb-4">
                <div class="d-flex flex-row align-items-center">
                  <img class="d-flex mr-3" src="https://i.snag.gy/3sorHN.jpg" alt="">
                  <div class="media-body">
                    <div class="small text-muted">Жесткий диск Seagate 2TB STSHX-M201TCBM</div> 
                    <div class="d-flex flex-row align-items-end">
                      <div class="">1 190 р.</div>
                      <div class="small text-muted ">
                        <del>бесплатно</del> 
                        <a href="#" data-toggle="tooltip" title="" class="ask ml-2" style="" data-html="true" data-original-title="
                <div class='media'><img src='http://via.placeholder.com/60x60' alt='Generic placeholder image' class='d-flex mr-3'> <div class='media-body'><div class='mt-0 '>Цена снижена</div> <div class='small'>Только два дня на широкий ассортимент товаров действуют скидки до 50%!</div> <a href='#' class='small'>Подробнее</a></div></div>" aria-describedby="tooltip395689">
                </a>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
              <div class=" ">
                <div class="mb-3">
                  <div class="d-flex flex-column">
                    <p class="text-muted small mb-0"><del>174 600 p.</del></p>
                    <div class="h3 mb-1">169 990 p.</div>
                    <div class="mb-0">
                      <span class="badge badge-benefit">ЭКОНОМИЯ 4 610 р. (скидка 12%)</span>
                    </div>
                    <p v-if="cm==false" class="text-danger small  mt-2 mb-0">До 1 746 р. бонусов</p>
                    <button type="button" class="btn btn-lg mt-3 mb-3" v-bind:class="{ 'btn-primary':cm, 'btn-warning':!cm }">Добавить в корзину</button>
                    <button type="button" class="btn btn-secondary mb-3">Купить в 1 клик</button>
                    <div class="d-flex flex-row justify-content-between small">
                      <a href="#">Как купить в кредит?</a>
                      <a href="#">Нашли дешевле? снизим цену!</a>
                    </div>
                  </div>
                </div>
                <div class="p-3 delivery-info mb-4">
                  <div class="d-flex flex-column">
                    <div class="small mb-1  ">
                      <a href="">Забрать в 6 магазинах</a> – сегодня</div>
                    <div class="small ">Доставка ‒  с 15 сентября, 320 р. </div>
                  </div>
                </div>
              </div>
              <div class="d-flex flex-row small">
                <a href="" class="text-muted mr-4"> <img src="https://i.snag.gy/HL2TFZ.jpg" alt="" class="mb-1 mr-2"><span>Сравнить</span> </a>
                <a href="" class="text-muted"> <img src="https://i.snag.gy/2pc1QP.jpg" alt="" class="mb-1 mr-2"><span>Добавить в желания</span> </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xl-8 col-12">
        <div class="main-tab-wrap mb-4">
        <div class="mainTabdSwiper swiper-container nav-tabs mb-4">
          <div class="swiper-wrapper ">
            <div class="swiper-slide">
              <ul class=" nav border-bottom-0 btn-block" role="tablist" v-bind:class="{ domotechnikaTabs: !cm }">
                <li class="nav-item nav-link active" data-toggle="tab" data-target="#main" role="tab">
                  <div class="d-flex flex-row">
                    <div class="h5 mb-0">
                      <a href="">Обзор</a>
                    </div>
                  </div>
                </li>
                <li class="nav-item nav-link" data-toggle="tab" data-target="#specifications" role="tab">
                  <div class="d-flex flex-row">
                    <div class="h5 mb-0">
                      <a href="">Характеристики</a>
                    </div>
                  </div>
                </li>
                <li class="nav-item nav-link" data-toggle="tab" data-target="#review" role="tab">
                  <div class="d-flex flex-row">
                    <div class="h5 mb-0">
                      <a href="">Отзывы <span class="small text-muted ml-1">17</span></a>
                    </div>
                  </div>
                </li>
                <li class="nav-item nav-link" data-toggle="tab" data-target="#qestions" role="tab">
                  <div class="d-flex flex-row">
                    <div class="h5 mb-0">
                      <a href="">Вопросы</a>
                    </div>
                  </div>
                </li>
                <li class="nav-item nav-link " data-toggle="tab" data-target="#service" role="tab">
                  <div class="d-flex flex-row">
                    <div class="h5 mb-0">
                      <a href="">Услуги <span class="small text-muted ml-1">3</span></a>
                    </div>
                  </div>
                </li>
                <li class="nav-item nav-link" data-toggle="tab" data-target="#accessory" role="tab">
                  <div class="d-flex flex-row">
                    <div class="h5 mb-0">
                      <a href="">Аксессуары</a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- Tab panes -->
        <div class="tab-content">
          <div class="tab-pane active" id="main" role="tabpanel">
            <div class="pt-2">
              <div class="h5 mb-3">Телевизор Samsung QE55Q7CAM</div>
              <div class="hidden-xs-down mb-4">Телевизор Samsung QE65Q7CAM имеет 65-дюймовый изогнутый безрамочный экран, работающий с наиболее современной на сегодняшний день технологией квантовых точек - она обеспечивает превосходное качество изображения. Расширенная палитра естественных
                цветов, потрясающая яркость, невероятный контраст - картинка на экране поразит вас. Расширенный динамический диапазон позволяет видеть мельчайшие детали изображения, а широкие углы обзора позволяют с комфортом смотреть телевизор из любой
                точки помещения. Телевизор обладает привлекательным дизайном, бесшовной задней панелью, всеми необходимыми коммуникациями и интерфейсами, а с помощью специального кронштейна легко можно закрепить устройство вплотную к стене.</div>
              <div class="hidden-sm-up">
                <div class="mb-3">Телевизор Samsung QE65Q7CAM имеет 65-дюймовый изогнутый безрамочный экран, работающий с наиболее современной на сегодняшний день технологией квантовых точек - она обеспечивает превосходное качество изображения...</div>
                
                <div class="collapse mb-3" id="collapseExample">Расширенная палитра естественных цветов, потрясающая яркость, невероятный контраст - картинка на экране поразит вас. Расширенный динамический диапазон позволяет видеть мельчайшие детали изображения, а широкие углы обзора позволяют с комфортомсмотреть
                  телевизор из любой точки помещения. Телевизор обладает привлекательным дизайном, бесшовной задней панелью, всеми необходимыми коммуникациями и интерфейсами, а с помощью специального кронштейна легко можно закрепить устройство вплотную
                  к стене.</div>
                  <a class="btn btn-secondary btn-sm mb-4" data-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample">Читать все</a>
              </div>
              <div class="h5 mb-3">Технологии и функции</div>
              <div class="row">
                <div class="col-md-6 col-12">
                  <div class="h6"> <b>Clear Resolution Enhancer: безупречная детализация</b></div>
                  <div class="mb-3">Оцените мельчайшие детали и естественность текстур любого изображения, даже если на первый взгляд оно вам кажется невыразительным и однотонным. Перейдите от «шумных» изображений к тончайшим нюансам.</div></div>
                <div class="col-md-6 col-12">
                  <img class="img-fluid" src="https://i.snag.gy/LuKxJT.jpg" alt="">
                </div>
              </div>
              
            </div>
          </div>
          <div class="tab-pane" id="specifications" role="tabpanel">
            <div class="pt-2">
              <div class="h5 mb-3">Телевизор Samsung QE55Q7CAM</div>
              <table class="table">
                <tbody>
                  <tr>
                    <td class="pl-0">Производитель</td>
                    <td class="pl-0">Samsung</td>
                  </tr>
                  <tr>
                    <td class="pl-0">Гарантийный срок</td>
                    <td class="pl-0">1 год</td>
                  </tr>
                  <tr>
                    <td class="pl-0">Страна происхождения</td>
                    <td class="pl-0">Россия</td>
                  </tr>
                  <tr>
                    <td class="pl-0">Цвет</td>
                    <td class="pl-0">Серебристый</td>
                  </tr>
                  <tr>
                    <td class="pl-0">Вес товара с упаковкой</td>
                    <td class="pl-0">36.8 кг</td>
                  </tr>
                  <tr>
                    <td class="pl-0">Размеры с упаковкой</td>
                    <td class="pl-0">1.60x0.21x0.96 м</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="tab-pane" id="review" role="tabpanel">3..</div>
          <div class="tab-pane" id="qestions" role="tabpanel">.4..</div>
          <div class="tab-pane" id="service" role="tabpanel">5..</div>
          <div class="tab-pane" id="accessory" role="tabpanel">6..</div>
        </div>
        </div>
        <div class="h5 mb-3">Похожие товары</div>
        <div class="product-related">
          <div class="swiper-wrapper ">
            <div class="swiper-slide">
                <img src="https://i.snag.gy/p3S1J7.jpg" alt="">
            </div>
            <div class="swiper-slide">
                <img src="https://i.snag.gy/ve9q6E.jpg" alt="">
            </div>
            <div class="swiper-slide">
                <img src="https://i.snag.gy/SkDUCt.jpg" alt="">
            </div>
            <div class="swiper-slide">
                <img src="https://i.snag.gy/9yTrgZ.jpg" alt="">
            </div>
              </div>
              </div>

      </div>
      <div class="pl-5 col-4 hidden-lg-down">
        <div class="ml-3">
          <div class="card rounded-0">
            <div class="card-block">
              <div class="h5 mb-4 mt-2">Лучшие аксессуары</div>
              <div class="media mb-3">
                <img class="d-flex mr-3" src="https://i.snag.gy/3sorHN.jpg" alt="Generic placeholder image">
                <div class="media-body">
                  <a href="#" class="mt-0 small text-muted">Жесткий диск Seagate 2TB STSHX-M201TCBM</a>
                  <div class="">1 190 р.</div>
                </div>
              </div>
              <div class="media mb-3">
                <img class="d-flex mr-3" src="https://i.snag.gy/Z3W62H.jpg" alt="Generic placeholder image">
                <div class="media-body">
                  <a href="#" class="mt-0 small text-muted">Телевизионная приставка Apple TV 64Gb</a>
                  <div class="">4 680 р.</div>
                </div>
              </div>
              <div class="media mb-3">
                <img class="d-flex mr-3" src="https://i.snag.gy/u5ahdn.jpg" alt="Generic placeholder image">
                <div class="media-body">
                  <a href="#" class="mt-0 small text-muted">Кабель Philips SWV2434 HDMI-HDMI 5 м</a>
                  <div class=""> 870 р.</div>
                </div>
              </div>
              <div class="media ">
                <img class="d-flex mr-3" src="https://i.snag.gy/bUsofz.jpg" alt="Generic placeholder image">
                <div class="media-body">
                  <a href="#" class="mt-0 small text-muted">Кронштейн для ТВ наклонно-поворотный Resonans PS809</a>
                  <div class="">2 420 р.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
  <!-- Модальные окна начало -->
  <div class="modal fade" id="fullscreen-image" tabindex="-1" role="dialog" aria-labelledby="fullscreen-image" aria-hidden="true">
    <div class="modal-dialog modal-full" role="document">
      <div class="main-image d-flex flex-column justify-content-center">
        <div class="card-block modal-zoom-header w-100">
          <div class="row mb-3">
            <div class="col-10">
              <h5 class="modal-title bg-white" id="exampleModalLabel">Телевизор SAMSUNG UE19H4000AK</h5>
            </div>
            <div class="col-2">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          </div>
        </div>
        <div class="full-tab-content">
          <div class="swiper-wrapper">
            <div v-for="slide in swiperSlides" class="swiper-slide  full-image-warp">
              <div class="swiper-zoom-container ">
                <img :data-src="slide" class="swiper-lazy large-image">
                <div class="swiper-lazy-preloader swiper-lazy-preloader-black"></div>
              </div>
            </div>
          </div>
          <div class="swiper-pagination hidden-sm-up"></div>
        </div>
        <div class="full-tab-nav hidden-sm-down " id="full-tabNav">
          <div class="swiper-wrapper">
            <div v-for="(slide, index) in swiperSlidesThumbs" class="swiper-slide" :data-slide-index="index">
              <img :src="slide">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="modal fade" id="video-full" tabindex="-1" role="dialog" aria-labelledby="fullscreen-image" aria-hidden="true">
    <div class="modal-dialog modal-full" role="document">
      <div class="card-block">
        <div class="row">
          <div class="col-10">
            <h5 class="modal-title" id="exampleModalLabel">Видеообзор модели</h5>
          </div>
          <div class="col-2">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        </div>
      </div>
      <div class="card-block pt-0">
        <div class="mx-auto">
          <iframe width="100%" height="400px" src="https://www.youtube.com/embed/0X2sS_8n_8I" frameborder="0" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  </div>
  <div class="modal fade" id="360review" tabindex="-1" role="dialog" aria-labelledby="fullscreen-image" aria-hidden="true">
    <div class="modal-dialog modal-full" role="document">
      <div class="card-block">
        <div class="row">
          <div class="col-10">
            <h5 class="modal-title" id="exampleModalLabel">3D обзор</h5>
          </div>
          <div class="col-2">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        </div>
      </div>
      <div class="card-block pt-0 ">
        <div class="mx-auto">
          <iframe width="100%" height="400px" allowfullscreen="true" src="//reviewthree.com/embed/9616"></iframe>
        </div>
      </div>
    </div>
  </div>
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
          ],
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
