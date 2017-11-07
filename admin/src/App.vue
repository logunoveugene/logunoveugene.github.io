<template>
  <div id="app">

<VueHotelDatepicker/>


<nav class="navbar navbar-inverse bg-primary">
      <div class="h5 text-white mb-0">Администратор</div>
    </nav>
    <div class="">
      <div class="p-3">
        <nav class="breadcrumb bg-white p-0 mb-1 small">
          <a class="breadcrumb-item" href="#">Главная</a>
          <a class="breadcrumb-item" href="#">Маркетинг</a>
          <a class="breadcrumb-item" href="#">Новости</a>
        </nav>
        <div class="d-flex flex-row"><div class="h3 mb-0">Список заказов</div>
        <button class="ml-auto btn btn-admin"><img class="mr-2" src="https://i.snag.gy/6fGx1q.jpg" alt="">Новый заказ</button>
        </div>
      </div>
    </div>
    <div class="p-3 bs-1 ">
      <div class="d-flex flex-row align-items-center">
        <div class="d-inline-block">
          <div class="btn-group mt-2 mr-3" data-toggle="buttons">
            <label class="btn btn-admin active">
              <input type="radio" name="options" id="option1" autocomplete="off" checked>Сегодня
            </label>
            <label class="btn btn-admin">
              <input type="radio" name="options" id="option2" autocomplete="off">Вчера
            </label>
            <label class="btn btn-admin">
              <input type="radio" name="options" id="option3" autocomplete="off">Неделя
            </label>
            <label class="btn btn-admin">
              <input type="radio" name="options" id="option4" autocomplete="off">Месяц
            </label>
          </div>
          <div class="btn btn-admin active mr-3" v-if="searchAttributes" v-for="(Attributes, index) in searchAttributes">
            Признак: {{Attributes}} <img class="ml-1" v-on:click="AttributesClear" src="https://i.snag.gy/VGpiUI.jpg" alt="">
          </div>
          <div class="btn btn-admin active mr-3" v-if="searchIdSubmit">
            Номер заказа: {{searchIdSubmit}} <img class="ml-1" v-on:click="searchIdClear" src="https://i.snag.gy/VGpiUI.jpg" alt="">
          </div>
          <div class="btn btn-admin active mr-3" v-if="searchBuyerSubmit">
            Покупатель: {{searchBuyerSubmit}} <img class="ml-1" v-on:click="searchBuyerClear" src="https://i.snag.gy/VGpiUI.jpg" alt="">
          </div>
        </div>
        <div class="ml-auto text-muted">Найдено 16 шт.</div>
      </div>
    </div>
    <div class="bs-1 p-3 py-4 ">

      <div class="order-table">
        <div class="sticky-top bg-white d-flex flex-row flex-nowrap justify-content-between">

          <div class="order-row order-row-small">
            <input class="filter-input  w-100" v-bind:class="{ edit: searchId }" v-model="searchId" v-on:keyup.enter="searchIdLabel" type="text" placeholder="Номер">
          </div>
          <div class="order-row order-row-small">
            <div class="dropdown  w-100">
              <div class="" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <div class="small filter-drop d-flex flex-row align-items-center">
                  <div class="">Признаки</div>
                </div>
              </div>
              <div class="dropdown-menu filter" aria-labelledby="dropdownMenu2">
                <label class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" value="Терминал" v-model="searchAttributes">
                  <span class="custom-control-indicator"></span>
                  <span class="custom-control-description">Терминал</span>
                </label>
                <label class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" value="Подарок" v-model="searchAttributes">
                  <span class="custom-control-indicator"></span>
                  <span class="custom-control-description">Подарок</span>
                </label>
                <label class="custom-control custom-checkbox mb-0">
                  <input type="checkbox" class="custom-control-input" value="В один клик" v-model="searchAttributes">
                  <span class="custom-control-indicator"></span>
                  <span class="custom-control-description">В один клик</span>
                </label>
              </div>
            </div>
          </div>
          <div class="order-row order-row-small">
            <div class="dropdown  w-100">
              <div class="" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <div class="small filter-drop d-flex flex-row align-items-center">
                  <div class="">Дата и время</div>
                </div>
              </div>
              <div class="dropdown-menu filter" aria-labelledby="dropdownMenu2">
                <label class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" value="Терминал" v-model="searchAttributes">
                  <span class="custom-control-indicator"></span>
                  <span class="custom-control-description">Терминал</span>
                </label>
                <label class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" value="Подарок" v-model="searchAttributes">
                  <span class="custom-control-indicator"></span>
                  <span class="custom-control-description">Подарок</span>
                </label>
                <label class="custom-control custom-checkbox mb-0">
                  <input type="checkbox" class="custom-control-input" value="В один клик" v-model="searchAttributes">
                  <span class="custom-control-indicator"></span>
                  <span class="custom-control-description">В один клик</span>
                </label>
              </div>
            </div>
          </div>
          <div class="order-row">
            <div class="dropdown w-100">
              <div class="" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <div class="small filter-drop d-flex flex-row align-items-center">
                  <div class="">Статус</div>
                </div>
              </div>
              <div class="dropdown-menu filter" aria-labelledby="dropdownMenu2">
                <label class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" value="Терминал" v-model="searchAttributes">
                  <span class="custom-control-indicator"></span>
                  <span class="custom-control-description">Принят</span>
                </label>
                <label class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" value="Подарок" v-model="searchAttributes">
                  <span class="custom-control-indicator"></span>
                  <span class="custom-control-description">Готов к выдаче</span>
                </label>
                <label class="custom-control custom-checkbox ">
                  <input type="checkbox" class="custom-control-input" value="В один клик" v-model="searchAttributes">
                  <span class="custom-control-indicator"></span>
                  <span class="custom-control-description">Доставляется</span>
                </label>
                <label class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" value="Подарок" v-model="searchAttributes">
                  <span class="custom-control-indicator"></span>
                  <span class="custom-control-description">Выполнен</span>
                </label>
                <label class="custom-control custom-checkbox ">
                  <input type="checkbox" class="custom-control-input" value="В один клик" v-model="searchAttributes">
                  <span class="custom-control-indicator"></span>
                  <span class="custom-control-description">Аннулирован</span>
                </label>
                <label class="custom-control custom-checkbox mb-0">
                  <input type="checkbox" class="custom-control-input" value="В один клик" v-model="searchAttributes">
                  <span class="custom-control-indicator"></span>
                  <span class="custom-control-description">Не подтвержден</span>
                </label>
              </div>
            </div>
          </div>
          <div class="order-row order-row-large">
            <input class="filter-input mr-5 w-100" v-bind:class="{ edit: searchBuyer }" v-model="searchBuyer" v-on:keyup.enter="searchBuyerLabel" type="text" placeholder="Покупатель">
          </div>
          <div class="order-row order-row-small">
            <div class="dropdown  w-100">
              <div class="" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <div class="small filter-drop d-flex flex-row align-items-center">
                  <div class="">Доступность</div>
                </div>
              </div>
              <div class="dropdown-menu filter" aria-labelledby="dropdownMenu2">
                <label class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" value="Терминал" v-model="searchAttributes">
                  <span class="custom-control-indicator"></span>
                  <span class="custom-control-description">Терминал</span>
                </label>
                <label class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" value="Подарок" v-model="searchAttributes">
                  <span class="custom-control-indicator"></span>
                  <span class="custom-control-description">Подарок</span>
                </label>
                <label class="custom-control custom-checkbox mb-0">
                  <input type="checkbox" class="custom-control-input" value="В один клик" v-model="searchAttributes">
                  <span class="custom-control-indicator"></span>
                  <span class="custom-control-description">В один клик</span>
                </label>
              </div>
            </div>
          </div>
          <div class="order-row order-row-large">
            <div class="dropdown w-100">
              <div class="" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <div class="small filter-drop d-flex flex-row align-items-center">
                  <div class="">Получение</div>
                </div>
              </div>
              <div class="dropdown-menu filter" aria-labelledby="dropdownMenu2">
                <label class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" value="Терминал" v-model="searchAttributes">
                  <span class="custom-control-indicator"></span>
                  <span class="custom-control-description">Терминал</span>
                </label>
                <label class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" value="Подарок" v-model="searchAttributes">
                  <span class="custom-control-indicator"></span>
                  <span class="custom-control-description">Подарок</span>
                </label>
                <label class="custom-control custom-checkbox mb-0">
                  <input type="checkbox" class="custom-control-input" value="В один клик" v-model="searchAttributes">
                  <span class="custom-control-indicator"></span>
                  <span class="custom-control-description">В один клик</span>
                </label>
              </div>
            </div>
          </div>
          <div class="order-row">
            <div class="dropdown w-100">
              <div class="" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <div class="small filter-drop d-flex flex-row align-items-center">
                  <div class="">К оплате</div>
                </div>
              </div>
              <div class="dropdown-menu filter dropdown-menu-right" aria-labelledby="dropdownMenu2">
                <label class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" value="Терминал" v-model="searchAttributes">
                  <span class="custom-control-indicator"></span>
                  <span class="custom-control-description">Терминал</span>
                </label>
                <label class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" value="Подарок" v-model="searchAttributes">
                  <span class="custom-control-indicator"></span>
                  <span class="custom-control-description">Подарок</span>
                </label>
                <label class="custom-control custom-checkbox mb-0">
                  <input type="checkbox" class="custom-control-input" value="В один клик" v-model="searchAttributes">
                  <span class="custom-control-indicator"></span>
                  <span class="custom-control-description">В один клик</span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div class="order-list py-3">
          <div class="order-item d-flex flex-row justify-content-between align-items-center py-3" v-for="(order, index) in orders">

            <div class="order-row order-row-small">
              <div class=""><a href="">{{order.id}}</a></div>
            </div>
            <div class="order-row order-row-small">
              <div class="">
                <div class="d-inline-block" v-for="(attribute, index) in order.attributes">
                  <div class="attribute" :class="attribute.attributesType" data-toggle="tooltip" data-placement="top" :title="attribute.attributesName"></div>
                </div>
              </div>
            </div>
            <div class="order-row order-row-small">
              <div class="">
                {{order.date | time}} <div class="small text-nowrap  text-muted ">{{order.date | date}}</div>
              </div>
            </div>
            <div class="order-row ">
              <div class="text-nowrap small d-inline" :class="order.status.statusType">{{order.status.statusName}}</div>
            </div>
            <div class="order-row order-row-large">
              <div class="text-nowrap ">
                <div class="">{{order.buyer.buyerName}}</div>
                <div class="small text-muted">{{order.buyer.buyerPhone}}</div>
              </div>
            </div>
            <div class="order-row order-row-small">
              <div class="mr-5">
                <div class="text-nowrap">{{order.availability | date}}</div>
              </div>
            </div>
            <div class="order-row order-row-large">
              <div class="mr-5 d-flex flex-row align-items-center">
                <div class="delivery-type" :class="order.delivery.deliveryType"></div>
                <div class="">
                  <div class="">{{order.delivery.deliveryCity}} </div>
                  <div class="small text-muted text-nowrap">{{order.delivery.deliveryName}}: {{order.delivery.deliveryPlace}}</div>
                </div>
              </div>
            </div>
            <div class="order-row">
              <div class="text-right"><div class="">{{order.orderSum}} р.</div> <div class="small text-muted">{{order.orderPaymentType}} </div> </div>
            </div>
          </div>
        </div>
      </div>
    </div>




  </div>











</template>

<script>
import HelloWorld from './components/HelloWorld'
import HotelDatePicker from './components/HotelDatePicker'
var moment = require('moment');

export default {
  name: 'app',
  components: {
    HelloWorld,
    HotelDatePicker
  },

data() {
    return {


  orders: [
  {
    id: 20101507,
    attributes: [{
      attributesType: "terminal",
      attributesName: "Терминал"
    }, {
      attributesType: "gift",
      attributesName: "Подарок"
    }
    ],
    date: "2016-01-13T05:23:38+00:00",
    status:{
        statusType:"info",
        statusName:"Принят"},
    buyer: {
        buyerName:"Полянский Виталий Петрович",
        buyerPhone:"+7 (914) 888-32-18"},
    availability : "2016-01-13T05:23:38+00:00",
    delivery:{
      deliveryType:"pickup",
      deliveryName: "Самовывоз",
      deliveryCity:"Владивосток",
      deliveryPlace: "Алеутская"
    },
    orderPaymentType:"При получении",
    orderSum: 4880
  },
  {
    id: 20101506,
    attributes: [ {
      attributesType: "gift",
      attributesName: "Подарок"
    }
    ],
    date: "2016-01-13T05:23:38+00:00",
    status:{
        statusType:"info",
        statusName:"Принят"},
    buyer: {
        buyerName:"Юрий Васильевич Баранов",
        buyerPhone:"+7 (914) 948-00-94"},
    availability : "2016-01-13T05:23:38+00:00",
    delivery:{
      deliveryType:"pickup",
      deliveryName: "Самовывоз",
      deliveryCity:"Владивосток",
      deliveryPlace: "ТЦ Черемушки"
    },
    orderPaymentType:"Онлайн оплата",
    orderSum: 1960
  },
  {
    id: 20101505,
    attributes: [    ],
    date: "2016-01-13T05:23:38+00:00",
    status:{
        statusType:"info",
        statusName:"Готов к выдаче"},
    buyer: {
        buyerName:"Иванов Василий Петрович",
        buyerPhone:"+7 (914) 599-12-77"},
    availability : "2016-01-13T05:23:38+00:00",
    delivery:{
      deliveryType:"sdek",
      deliveryName: "СДЭК",
      deliveryCity:"Москва",
      deliveryPlace: "пр-т Красного Знамени, д.59, кв 257"
    },
    orderPaymentType:"При получении",
    orderSum: 18400
  },
  {
    id: 20101504,
    attributes: [     ],
    date: "2016-01-13T05:23:38+00:00",
    status:{
        statusType:"warning",
        statusName:"Доставляется"},
    buyer: {
        buyerName:"Смирнов Петр Васильевич",
        buyerPhone:"+7 (969) 148-77-75"},
    availability : "2016-01-13T05:23:38+00:00",
    delivery:{
      deliveryType:"pickup",
      deliveryName: "Самовывоз",
      deliveryCity:"Владивосток",
      deliveryPlace: "ТЦ Черемушки"
    },
    orderPaymentType:"При получении",
    orderSum: 34590
  },
  {
    id: 20101503,
    attributes: [{
      attributesType: "terminal",
      attributesName: "Терминал"
    }, {
      attributesType: "gift",
      attributesName: "Подарок"
    }
    ],
    date: "2016-01-13T05:23:38+00:00",
    status:{
        statusType:"danger",
        statusName:"Не подтвержден"},
    buyer: {
        buyerName:"Полянский Виталий Петрович",
        buyerPhone:"+7 (914) 888-32-18"},
    availability : "2016-01-13T05:23:38+00:00",
    delivery:{
      deliveryType:"delivery",
      deliveryName: "Доставка",
      deliveryCity:"Владивосток",
      deliveryPlace: "Фрунзе 54, кв. 528"
    },
    orderPaymentType:"При получении",
    orderSum: 4880
  },
  {
    id: 20101502,
    attributes: [ {
      attributesType: "gift",
      attributesName: "Подарок"
    }
    ],
    date: "2016-01-13T05:23:38+00:00",
    status:{
        statusType:"sucsess",
        statusName:"Выполнен"},
    buyer: {
        buyerName:"Юрий Васильевич Баранов",
        buyerPhone:"+7 (914) 948-00-94"},
    availability : "2016-01-13T05:23:38+00:00",
    delivery:{
      deliveryType:"pickup",
      deliveryName: "Самовывоз",
      deliveryCity:"Владивосток",
      deliveryPlace: "ТЦ Черемушки"
    },
    orderPaymentType:"Онлайн оплата",
    orderSum: 1960
  },
  {
    id: 20101501,
    attributes: [    ],
    date: "2016-01-13T05:23:38+00:00",
    status:{
        statusType:"holdstatus",
        statusName:"Аннулирован"},
    buyer: {
        buyerName:"Иванов Василий Петрович",
        buyerPhone:"+7 (914) 599-12-77"},
    availability : "2016-01-13T05:23:38+00:00",
    delivery:{
      deliveryType:"sdek",
      deliveryName: "СДЭК",
      deliveryCity:"Москва",
      deliveryPlace: "пр-т Красного Знамени, д.59, кв 257"
    },
    orderPaymentType:"При получении",
    orderSum: 18400
  },
  {
    id: 20101500,
    attributes: [     ],
    date: "2016-01-13T05:23:38+00:00",
    status:{
        statusType:"warning",
        statusName:"Доставляется"},
    buyer: {
        buyerName:"Смирнов Петр Васильевич",
        buyerPhone:"+7 (969) 148-77-75"},
    availability : "2016-01-13T05:23:38+00:00",
    delivery:{
      deliveryType:"pickup",
      deliveryName: "Самовывоз",
      deliveryCity:"Владивосток",
      deliveryPlace: "ТЦ Черемушки"
    },
    orderPaymentType:"При получении",
    orderSum: 34590
  },
   {
    id: 20101499,
    attributes: [{
      attributesType: "terminal",
      attributesName: "Терминал"
    }, {
      attributesType: "gift",
      attributesName: "Подарок"
    }
    ],
    date: "2016-01-13T05:23:38+00:00",
    status:{
        statusType:"info",
        statusName:"Принят"},
    buyer: {
        buyerName:"Полянский Виталий Петрович",
        buyerPhone:"+7 (914) 888-32-18"},
    availability : "2016-01-13T05:23:38+00:00",
    delivery:{
      deliveryType:"pickup",
      deliveryName: "Самовывоз",
      deliveryCity:"Владивосток",
      deliveryPlace: "Алеутская"
    },
    orderPaymentType:"При получении",
    orderSum: 4880
  },
  {
    id: 20101498,
    attributes: [ {
      attributesType: "gift",
      attributesName: "Подарок"
    }
    ],
    date: "2016-01-13T05:23:38+00:00",
    status:{
        statusType:"info",
        statusName:"Принят"},
    buyer: {
        buyerName:"Юрий Васильевич Баранов",
        buyerPhone:"+7 (914) 948-00-94"},
    availability : "2016-01-13T05:23:38+00:00",
    delivery:{
      deliveryType:"pickup",
      deliveryName: "Самовывоз",
      deliveryCity:"Владивосток",
      deliveryPlace: "ТЦ Черемушки"
    },
    orderPaymentType:"Онлайн оплата",
    orderSum: 1960
  },
  {
    id: 20101497,
    attributes: [    ],
    date: "2016-01-13T05:23:38+00:00",
    status:{
        statusType:"info",
        statusName:"Готов к выдаче"},
    buyer: {
        buyerName:"Иванов Василий Петрович",
        buyerPhone:"+7 (914) 599-12-77"},
    availability : "2016-01-13T05:23:38+00:00",
    delivery:{
      deliveryType:"sdek",
      deliveryName: "СДЭК",
      deliveryCity:"Москва",
      deliveryPlace: "пр-т Красного Знамени, д.59, кв 257"
    },
    orderPaymentType:"При получении",
    orderSum: 18400
  },
  {
    id: 20101496,
    attributes: [     ],
    date: "2016-01-13T05:23:38+00:00",
    status:{
        statusType:"warning",
        statusName:"Доставляется"},
    buyer: {
        buyerName:"Смирнов Петр Васильевич",
        buyerPhone:"+7 (969) 148-77-75"},
    availability : "2016-01-13T05:23:38+00:00",
    delivery:{
      deliveryType:"pickup",
      deliveryName: "Самовывоз",
      deliveryCity:"Владивосток",
      deliveryPlace: "ТЦ Черемушки"
    },
    orderPaymentType:"При получении",
    orderSum: 34590
  },
  {
    id: 20101495,
    attributes: [{
      attributesType: "terminal",
      attributesName: "Терминал"
    }, {
      attributesType: "gift",
      attributesName: "Подарок"
    }
    ],
    date: "2016-01-13T05:23:38+00:00",
    status:{
        statusType:"danger",
        statusName:"Не подтвержден"},
    buyer: {
        buyerName:"Полянский Виталий Петрович",
        buyerPhone:"+7 (914) 888-32-18"},
    availability : "2016-01-13T05:23:38+00:00",
    delivery:{
      deliveryType:"delivery",
      deliveryName: "Доставка",
      deliveryCity:"Владивосток",
      deliveryPlace: "Фрунзе 54, кв. 528"
    },
    orderPaymentType:"При получении",
    orderSum: 4880
  },
  {
    id: 20101494,
    attributes: [ {
      attributesType: "gift",
      attributesName: "Подарок"
    }
    ],
    date: "2016-01-13T05:23:38+00:00",
    status:{
        statusType:"sucsess",
        statusName:"Выполнен"},
    buyer: {
        buyerName:"Юрий Васильевич Баранов",
        buyerPhone:"+7 (914) 948-00-94"},
    availability : "2016-01-13T05:23:38+00:00",
    delivery:{
      deliveryType:"pickup",
      deliveryName: "Самовывоз",
      deliveryCity:"Владивосток",
      deliveryPlace: "ТЦ Черемушки"
    },
    orderPaymentType:"Онлайн оплата",
    orderSum: 1960
  },
  {
    id: 20101493,
    attributes: [    ],
    date: "2016-01-13T05:23:38+00:00",
    status:{
        statusType:"holdstatus",
        statusName:"Аннулирован"},
    buyer: {
        buyerName:"Иванов Василий Петрович",
        buyerPhone:"+7 (914) 599-12-77"},
    availability : "2016-01-13T05:23:38+00:00",
    delivery:{
      deliveryType:"sdek",
      deliveryName: "СДЭК",
      deliveryCity:"Москва",
      deliveryPlace: "пр-т Красного Знамени, д.59, кв 257"
    },
    orderPaymentType:"При получении",
    orderSum: 18400
  },
  {
    id: 20101492,
    attributes: [     ],
    date: "2016-01-13T05:23:38+00:00",
    status:{
        statusType:"warning",
        statusName:"Доставляется"},
    buyer: {
        buyerName:"Смирнов Петр Васильевич",
        buyerPhone:"+7 (969) 148-77-75"},
    availability : "2016-01-13T05:23:38+00:00",
    delivery:{
      deliveryType:"pickup",
      deliveryName: "Самовывоз",
      deliveryCity:"Владивосток",
      deliveryPlace: "ТЦ Черемушки"
    },
    orderPaymentType:"При получении",
    orderSum: 34590
  },





  ],
     searchAttributes: [],
     searchId:"",
     searchIdSubmit:"",
     searchDate:"",
     searchStatus:"",
     searchBuyer:"",
     searchBuyerSubmit:"",
     searchAvailability:"",
     searchDelivery:""

},



autoClose: false, // common setting
      separator: ' ~ ', // common setting
      selectForward: false, // common setting
      hoveringTooltip() {
        // common setting
        // Overwrite default boolean
        // Not working when value is false (boolean)
        return false
      },
      dpkr1: {
        value: '',
        datePickerId: 'datePickerId01',
        placeholder: 'DatePicker example 01',
        selectForward: false,
        separator: ' ~ ',
        showTopbar: false,
        hoveringTooltip() {
          // Overwrite default boolean
          // Not working when value is false (boolean)
          return false
        }
      },
      dpkr2: {
        value: '',
        datePickerId: 'datePickerId02',
        placeholder: 'DatePicker example 02'
      },
      dpkr3: {
        value: '',
        datePickerId: 'datePickerId03',
        placeholder: 'DatePicker example 03'
      },
      dpkr4: {
        value: '',
        datePickerId: 'datePickerId04',
        placeholder: 'DatePicker example 04',
        format: 'DD-MM-YYYY'
      },
      dpkr5: {
        value: '',
        datePickerId: 'datePickerId05',
        placeholder: 'DatePicker example 05',
        startOfWeek: 'monday'
      },
      dpkr6: {
        value: '',
        datePickerId: 'datePickerId06',
        placeholder: 'DatePicker example 06',
        minNights: 7
      },
      dpkr7: {
        value: '',
        datePickerId: 'datePickerId07',
        placeholder: 'DatePicker example 07',
        maxNights: 5
      },
      dpkr8: {
        value: '',
        datePickerId: 'datePickerId08',
        placeholder: 'DatePicker example 08',
        minNights: 4,
        maxNights: 8
      },
      dpkr9: {
        value: '',
        datePickerId: 'datePickerId09',
        placeholder: 'DatePicker example 09',
        startDate: fecha.format(new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000), 'YYYY-MM-DD')
      },
      dpkr10: {
        value: '',
        datePickerId: 'datePickerId10',
        placeholder: 'DatePicker example 10',
        endDate: fecha.format(new Date(new Date().getTime() + 25 * 24 * 60 * 60 * 1000), 'YYYY-MM-DD')
      },
      dpkr11: {
        value: '',
        datePickerId: 'datePickerId11',
        placeholder: 'DatePicker example 11',
        selectForward: true
      },
      dpkr12: {
        value: '',
        datePickerId: 'datePickerId12',
        placeholder: 'DatePicker example 12',
        disabledDates: [
          fecha.format(new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000), 'YYYY-MM-DD'),
          fecha.format(new Date(new Date().getTime() + 9 * 24 * 60 * 60 * 1000), 'YYYY-MM-DD'),
          fecha.format(new Date(new Date().getTime() + 12 * 24 * 60 * 60 * 1000), 'YYYY-MM-DD'),
          fecha.format(new Date(new Date().getTime() + 15 * 24 * 60 * 60 * 1000), 'YYYY-MM-DD'),
          fecha.format(new Date(new Date().getTime() + 16 * 24 * 60 * 60 * 1000), 'YYYY-MM-DD')
        ]
      },
      dpkr13: {
        value: '',
        datePickerId: 'datePickerId13',
        placeholder: 'DatePicker example 13',
        disabledDates: [
          fecha.format(new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000), 'YYYY-MM-DD'),
          fecha.format(new Date(new Date().getTime() + 9 * 24 * 60 * 60 * 1000), 'YYYY-MM-DD'),
          fecha.format(new Date(new Date().getTime() + 12 * 24 * 60 * 60 * 1000), 'YYYY-MM-DD'),
          fecha.format(new Date(new Date().getTime() + 15 * 24 * 60 * 60 * 1000), 'YYYY-MM-DD'),
          fecha.format(new Date(new Date().getTime() + 16 * 24 * 60 * 60 * 1000), 'YYYY-MM-DD')
        ],
        enableCheckout: true
      },
      dpkr14: {
        value: '',
        datePickerId: 'datePickerId14',
        placeholder: 'DatePicker example 14',
        autoClose: false
      },
      dpkr15: {
        value: '',
        datePickerId: 'datePickerId15',
        placeholder: 'DatePicker example 15',
        autoClose: false,
        i18n: i18nTWData
      },
      dpkr16: {
        value: '',
        datePickerId: 'datePickerId16',
        placeholder: 'DatePicker example 16',
        autoClose: true
      }



},


filters: {
  time:  function(value) {
  if (value) {
    return moment(String(value)).format('hh:mm')
  }
},
date:  function(value) {
  if (value) {
    return moment(String(value)).format('ll');
  }
},

},

methods: {
  searchIdLabel: function() {
    if (this.searchId.length>0) {
      this.searchIdSubmit = this.searchId;
       this.searchId = "";
    }

    },
    searchIdClear: function() {
       this.searchIdSubmit = "";
    },

    searchBuyerLabel: function() {
    if (this.searchBuyer.length>0) {
      this.searchBuyerSubmit = this.searchBuyer;
       this.searchBuyer = "";
    }

    },
    searchBuyerClear: function() {
       this.searchBuyerSubmit = "";
    },
    AttributesClear: function (index) {
      this.searchAttributes.splice(index, 1);
    },



    toggle(datePickerId) {
      // console.log('toggle', datePickerId)
      this.$refs[datePickerId].toggle()
    },
    getValue(datePickerId) {
      return this.$refs[datePickerId].getValue()
    },
    setValue(datePickerId, val) {
      this.$refs[this.datePickerId].setValue(val)
    },
    open(datePickerId, sinceDate, untilDate) {
      this.$refs[datePickerId].open()
      if (sinceDate && untilDate) {
        this.$refs[datePickerId].setRange(sinceDate, untilDate)
      }
    },
    close(datePickerId) {
      this.$refs[datePickerId].close()
    },
    getDatePicker(datePickerId) {
      const hdpkr = this.$refs[datePickerId].getDatePicker()
      return hdpkr // console.log(hdpkr)
    },
    setRange(datePickerId, d1, d2) {
      this.$refs[datePickerId].setRange(d1, d2)
    },
    hideDateInput(dpkr) {
      const hdpkrInput = document.querySelector(`#${dpkr.datePickerId}`)
      if (hdpkrInput && hdpkrInput.style) {
        hdpkrInput.style.display = 'none'
      }
    },
    updateDateRange: function(newDateRange, datePickerId) {
      Object.keys(this.$data).map(key => {
        if (typeof (this.$data[key]) === 'object') {
          if (this.$data[key].datePickerId === datePickerId) {
            this.$data[key].value = newDateRange
          }
        }
      })
    }


},

mounted() {
    // this.hideDateInput()

    // Demo example 1
    const demo1D1 = new Date() // tomorrow
    const demo1D2 = new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000) // 5 day after today
    this.setRange(this.dpkr1.datePickerId, demo1D1, demo1D2)

    // Demo example 2
    const demo2D1 = new Date(new Date().getTime() + 24 * 60 * 60 * 1000) // tomorrow
    const demo2D2 = new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000) // 5 day after tomorrow
    this.setRange(this.dpkr2.datePickerId, demo2D1, demo2D2)

    // Demo example 16
    const dpkr16Element = document.querySelector(`#${this.dpkr16.datePickerId}`)
    if (dpkr16Element) {
      dpkr16Element.style.display = 'none'
    }
  }


}
</script>

<style>


body{
  font-family:arial;
  font-size:15px;
  }
  a, .link {
    color: #355b99;
}

  .bs-1{
    box-shadow: inset 0 3px 3px rgba(0,0,0,0.05)
  }

  .btn-admin {
    padding: .25rem .75rem;
    font-size: .875rem;
    line-height: 1.5;
    border-radius: .2rem;
    color: #333;
    background-color: transparent;
    background-image: none;
    border-color: #ddd;
    cursor: pointer;
}


.btn-admin.active {
    color: #333;
    background-color: #fff6d4;
  outline: none;
}

.filter-drop {
    border-bottom: 1px solid #ddd;
    padding: .6rem 0 ;
    cursor: pointer;
    white-space: nowrap;
      background: url(https://i.snag.gy/y6GcRF.jpg) no-repeat 100% 50%;

}
.dropdown-menu.filter{
  width: 300px;
    box-shadow: 0 0 20px rgba(0,0,0,0.1);
    border: 1px solid #ddd;
    padding: 1.25rem;
}

.filter-input{
  outline: 0;
  border: 0;
     padding: .6rem 0 ;
  border-bottom: 1px solid #ddd;
  font-size: 0.8rem;
  background: url(https://i.snag.gy/F7Ba6Z.jpg) no-repeat 100% 50%;
  white-space: nowrap;

}
.filter-input:focus{
  border-bottom:1px solid #ffd270;;
}

.filter-input.edit{
  background: url(https://i.snag.gy/i8Ieao.jpg) no-repeat 100% 50%;

}
.filter-input::placeholder{
  color: #212529;
}

.order-table{
  min-width: 1310px;
}
.order-row{
  width: 90px;
    min-width: 80px;
  flex-grow: 1;
  margin-right: 2rem;
}
.order-row:last-child{
  margin-right: 0rem;
}
.order-row-large{
  flex-grow: 7;
}
.order-row-small{
  flex-grow: 0.5;
}

.info{
  border: 2px solid #00aeef;
  border-radius: 3px;
  padding:4px 8px;
}
.warning{
  border: 2px solid #ff9f00;
  border-radius: 3px;
  padding:4px 8px;
}
.sucsess{
  border: 2px solid #5cb85c;
  border-radius: 3px;
  padding:4px 8px;
}

.holdstatus{
  border: 2px solid #999999;
  border-radius: 3px;
  padding:4px 8px;
}
.danger{
  border: 2px solid #ff1844;
  border-radius: 3px;
  padding:4px 8px;
}


.attribute{
    width: 22px;
  height: 22px;
  margin-right: .5rem;
  display: inline-block;
}

.terminal{

  background: url(https://i.snag.gy/r5wAlL.jpg);


}

.gift{
  background: url(https://i.snag.gy/hRC4mp.jpg);
}


.order-item{
  margin: 0 -1rem;
  padding: 0 1rem;
}

.order-item:nth-child(2n-1){
  background: #fbfbfb;
}


.delivery-type{
  width: 19px;
  height: 19px;
margin-right: 1rem;
  display: inline-block;
  flex-shrink: 0;

}

.delivery-type.pickup{
  background: url(https://i.snag.gy/B0E3eJ.jpg);
}
.delivery-type.sdek{
  background: url(https://i.snag.gy/M4qPmj.jpg);
}
.delivery-type.delivery{
  background: url(https://i.snag.gy/yTaXcj.jpg);
}

.filter .custom-control{
  display: block;

}


</style>
