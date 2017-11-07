$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

moment.lang('ru');



const i18nEnData = {
  selected: 'Your stay:',
  night: 'Night',
  nights: 'Nights',
  button: 'Close',
  'check-in': 'Check-in',
  'check-out': 'Check-Out',
  'day-names': ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'],
  'month-names': ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  'error-more': 'Date range should not be more than 1 night',
  'error-more-plural': 'Date range should not be more than %d nights',
  'error-less': 'Date range should not be less than 1 night',
  'error-less-plural': 'Date range should not be less than %d nights',
  'info-more': 'Please select a date range longer than 1 night',
  'info-more-plural': 'Please select a date range longer than %d nights',
  'info-range': 'Please select a date range between %d and %d nights',
  'info-default': 'Please select a date range'
}







var orders = new Vue({
el: '#app',


data: {
 

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


}


});






