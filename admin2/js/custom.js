$(function() {
    $('[data-toggle="tooltip"]').tooltip()
})

$(document).ready(function() {
    $('.dropdown-menu').click(function(e) {
        e.stopPropagation();
    });

});



// $('.split-page').scroll(function (event) {
//     var scroll = $('.split-page').scrollTop();
//     if (scroll>0) {
//             $('.split-page').addClass( "scrolled" );
//      $('.page-header').addClass( "d-none" );
//     }
//     else {
//          $('.split-page').removeClass( "scrolled" );
//      $('.page-header').removeClass( "d-none" );
//     }


// });

function time() {
var d = new Date();
document.getElementById("localtime").innerHTML = '('+d.toLocaleTimeString()+')';
}
setInterval(time, 1000);



moment.locale('ru');
Vue.component('flat-pickr', VueFlatpickr.default);

var orders = new Vue({
    el: '#app',

    data: {

        config: {
            wrap: true,
            mode: "range",
            maxDate:"today",
            dateFormat: "Y-m-d",
            defaultDate: "today",
            "locale": "ru",

        },
        orders: [{
            id: 20101507,
            attributes: [{
                attributesType: "terminal",
                attributesName: "Терминал"
            }, {
                attributesType: "gift",
                attributesName: "Подарок"
            }],
            date: "2016-01-13T05:23:38+00:00",
            status: {
                statusType: "info",
                statusName: "Принят"
            },
            buyer: {
                buyerName: "Полянский Виталий Петрович",
                buyerPhone: "+7 (914) 888-32-18"
            },
            availability: "2016-01-13T05:23:38+00:00",
            delivery: {
                deliveryType: "pickup",
                deliveryName: "Самовывоз",
                deliveryCity: "Владивосток",
                deliveryPlace: "Алеутская"
            },
            orderPaymentType: "При получении",
            orderSum: 4880
        }, {
            id: 20101506,
            attributes: [{
                attributesType: "gift",
                attributesName: "Подарок"
            }],
            date: "2016-01-13T05:23:38+00:00",
            status: {
                statusType: "info",
                statusName: "Принят"
            },
            buyer: {
                buyerName: "Юрий Васильевич Баранов",
                buyerPhone: "+7 (914) 948-00-94"
            },
            availability: "2016-01-13T05:23:38+00:00",
            delivery: {
                deliveryType: "pickup",
                deliveryName: "Самовывоз",
                deliveryCity: "Владивосток",
                deliveryPlace: "ТЦ Черемушки"
            },
            orderPaymentType: "Онлайн оплата",
            orderSum: 1960
        }, {
            id: 20101505,
            attributes: [],
            date: "2016-01-13T05:23:38+00:00",
            status: {
                statusType: "info",
                statusName: "Готов к выдаче"
            },
            buyer: {
                buyerName: "Иванов Василий Петрович",
                buyerPhone: "+7 (914) 599-12-77"
            },
            availability: "2016-01-13T05:23:38+00:00",
            delivery: {
                deliveryType: "sdek",
                deliveryName: "СДЭК",
                deliveryCity: "Москва",
                deliveryPlace: "пр-т Красного Знамени, д.59, кв 257"
            },
            orderPaymentType: "При получении",
            orderSum: 18400
        }, {
            id: 20101504,
            attributes: [],
            date: "2016-01-13T05:23:38+00:00",
            status: {
                statusType: "warning",
                statusName: "Доставляется"
            },
            buyer: {
                buyerName: "Смирнов Петр Васильевич",
                buyerPhone: "+7 (969) 148-77-75"
            },
            availability: "2016-01-13T05:23:38+00:00",
            delivery: {
                deliveryType: "pickup",
                deliveryName: "Самовывоз",
                deliveryCity: "Владивосток",
                deliveryPlace: "ТЦ Черемушки"
            },
            orderPaymentType: "При получении",
            orderSum: 34590
        }, {
            id: 20101503,
            attributes: [{
                attributesType: "terminal",
                attributesName: "Терминал"
            }, {
                attributesType: "gift",
                attributesName: "Подарок"
            }],
            date: "2016-01-13T05:23:38+00:00",
            status: {
                statusType: "danger",
                statusName: "Не подтвержден"
            },
            buyer: {
                buyerName: "Полянский Виталий Петрович",
                buyerPhone: "+7 (914) 888-32-18"
            },
            availability: "2016-01-13T05:23:38+00:00",
            delivery: {
                deliveryType: "delivery",
                deliveryName: "Доставка",
                deliveryCity: "Владивосток",
                deliveryPlace: "Фрунзе 54, кв. 528"
            },
            orderPaymentType: "При получении",
            orderSum: 4880
        }, {
            id: 20101502,
            attributes: [{
                attributesType: "gift",
                attributesName: "Подарок"
            }],
            date: "2016-01-13T05:23:38+00:00",
            status: {
                statusType: "sucsess",
                statusName: "Выполнен"
            },
            buyer: {
                buyerName: "Юрий Васильевич Баранов",
                buyerPhone: "+7 (914) 948-00-94"
            },
            availability: "2016-01-13T05:23:38+00:00",
            delivery: {
                deliveryType: "pickup",
                deliveryName: "Самовывоз",
                deliveryCity: "Владивосток",
                deliveryPlace: "ТЦ Черемушки"
            },
            orderPaymentType: "Онлайн оплата",
            orderSum: 1960
        }, {
            id: 20101501,
            attributes: [],
            date: "2016-01-13T05:23:38+00:00",
            status: {
                statusType: "holdstatus",
                statusName: "Аннулирован"
            },
            buyer: {
                buyerName: "Иванов Василий Петрович",
                buyerPhone: "+7 (914) 599-12-77"
            },
            availability: "2016-01-13T05:23:38+00:00",
            delivery: {
                deliveryType: "sdek",
                deliveryName: "СДЭК",
                deliveryCity: "Москва",
                deliveryPlace: "пр-т Красного Знамени, д.59, кв 257"
            },
            orderPaymentType: "При получении",
            orderSum: 18400
        }, {
            id: 20101500,
            attributes: [],
            date: "2016-01-13T05:23:38+00:00",
            status: {
                statusType: "warning",
                statusName: "Доставляется"
            },
            buyer: {
                buyerName: "Смирнов Петр Васильевич",
                buyerPhone: "+7 (969) 148-77-75"
            },
            availability: "2016-01-13T05:23:38+00:00",
            delivery: {
                deliveryType: "pickup",
                deliveryName: "Самовывоз",
                deliveryCity: "Владивосток",
                deliveryPlace: "ТЦ Черемушки"
            },
            orderPaymentType: "При получении",
            orderSum: 34590
        }, {
            id: 20101499,
            attributes: [{
                attributesType: "terminal",
                attributesName: "Терминал"
            }, {
                attributesType: "gift",
                attributesName: "Подарок"
            }],
            date: "2016-01-13T05:23:38+00:00",
            status: {
                statusType: "info",
                statusName: "Принят"
            },
            buyer: {
                buyerName: "Полянский Виталий Петрович",
                buyerPhone: "+7 (914) 888-32-18"
            },
            availability: "2016-01-13T05:23:38+00:00",
            delivery: {
                deliveryType: "pickup",
                deliveryName: "Самовывоз",
                deliveryCity: "Владивосток",
                deliveryPlace: "Алеутская"
            },
            orderPaymentType: "При получении",
            orderSum: 4880
        }, {
            id: 20101498,
            attributes: [{
                attributesType: "gift",
                attributesName: "Подарок"
            }],
            date: "2016-01-13T05:23:38+00:00",
            status: {
                statusType: "info",
                statusName: "Принят"
            },
            buyer: {
                buyerName: "Юрий Васильевич Баранов",
                buyerPhone: "+7 (914) 948-00-94"
            },
            availability: "2016-01-13T05:23:38+00:00",
            delivery: {
                deliveryType: "pickup",
                deliveryName: "Самовывоз",
                deliveryCity: "Владивосток",
                deliveryPlace: "ТЦ Черемушки"
            },
            orderPaymentType: "Онлайн оплата",
            orderSum: 1960
        }, {
            id: 20101497,
            attributes: [],
            date: "2016-01-13T05:23:38+00:00",
            status: {
                statusType: "info",
                statusName: "Готов к выдаче"
            },
            buyer: {
                buyerName: "Иванов Василий Петрович",
                buyerPhone: "+7 (914) 599-12-77"
            },
            availability: "2016-01-13T05:23:38+00:00",
            delivery: {
                deliveryType: "sdek",
                deliveryName: "СДЭК",
                deliveryCity: "Москва",
                deliveryPlace: "пр-т Красного Знамени, д.59, кв 257"
            },
            orderPaymentType: "При получении",
            orderSum: 18400
        }, {
            id: 20101496,
            attributes: [],
            date: "2016-01-13T05:23:38+00:00",
            status: {
                statusType: "warning",
                statusName: "Доставляется"
            },
            buyer: {
                buyerName: "Смирнов Петр Васильевич",
                buyerPhone: "+7 (969) 148-77-75"
            },
            availability: "2016-01-13T05:23:38+00:00",
            delivery: {
                deliveryType: "pickup",
                deliveryName: "Самовывоз",
                deliveryCity: "Владивосток",
                deliveryPlace: "ТЦ Черемушки"
            },
            orderPaymentType: "При получении",
            orderSum: 34590
        }, {
            id: 20101495,
            attributes: [{
                attributesType: "terminal",
                attributesName: "Терминал"
            }, {
                attributesType: "gift",
                attributesName: "Подарок"
            }],
            date: "2016-01-13T05:23:38+00:00",
            status: {
                statusType: "danger",
                statusName: "Не подтвержден"
            },
            buyer: {
                buyerName: "Полянский Виталий Петрович",
                buyerPhone: "+7 (914) 888-32-18"
            },
            availability: "2016-01-13T05:23:38+00:00",
            delivery: {
                deliveryType: "delivery",
                deliveryName: "Доставка",
                deliveryCity: "Владивосток",
                deliveryPlace: "Фрунзе 54, кв. 528"
            },
            orderPaymentType: "При получении",
            orderSum: 4880
        }, {
            id: 20101494,
            attributes: [{
                attributesType: "gift",
                attributesName: "Подарок"
            }],
            date: "2016-01-13T05:23:38+00:00",
            status: {
                statusType: "sucsess",
                statusName: "Выполнен"
            },
            buyer: {
                buyerName: "Юрий Васильевич Баранов",
                buyerPhone: "+7 (914) 948-00-94"
            },
            availability: "2016-01-13T05:23:38+00:00",
            delivery: {
                deliveryType: "pickup",
                deliveryName: "Самовывоз",
                deliveryCity: "Владивосток",
                deliveryPlace: "ТЦ Черемушки"
            },
            orderPaymentType: "Онлайн оплата",
            orderSum: 1960
        }, {
            id: 20101493,
            attributes: [],
            date: "2016-01-13T05:23:38+00:00",
            status: {
                statusType: "holdstatus",
                statusName: "Аннулирован"
            },
            buyer: {
                buyerName: "Иванов Василий Петрович",
                buyerPhone: "+7 (914) 599-12-77"
            },
            availability: "2016-01-13T05:23:38+00:00",
            delivery: {
                deliveryType: "sdek",
                deliveryName: "СДЭК",
                deliveryCity: "Москва",
                deliveryPlace: "пр-т Красного Знамени, д.59, кв 257"
            },
            orderPaymentType: "При получении",
            orderSum: 18400
        }, {
            id: 20101492,
            attributes: [],
            date: "2016-01-13T05:23:38+00:00",
            status: {
                statusType: "warning",
                statusName: "Доставляется"
            },
            buyer: {
                buyerName: "Смирнов Петр Васильевич",
                buyerPhone: "+7 (969) 148-77-75"
            },
            availability: "2016-01-13T05:23:38+00:00",
            delivery: {
                deliveryType: "pickup",
                deliveryName: "Самовывоз",
                deliveryCity: "Владивосток",
                deliveryPlace: "ТЦ Черемушки"
            },
            orderPaymentType: "При получении",
            orderSum: 34590
        },
        ],
        searchAttributes: [],
        searchId: "",
        searchIdSubmit: "",
        searchDate: "",
        searchStatus: [],
        searchBuyer: "",
        searchBuyerSubmit: "",
        searchAvailability: "",
        searchDelivery: ""
    },

    filters: {
        time: function(value) {
            if (value) {
                return moment(String(value)).format('hh:mm')
            }
        },
        date: function(value) {
            if (value) {
                return moment(String(value)).format('ll');
            }
        },

        number: function(value) {
            return value.toLocaleString();
        }
    },

    computed: {
        searchDateSumbit: function() {
            return this.searchDate.split(' — ');
        },
        todaydate: function() {
            return moment(String(new Date())).format("YYYY-MM-DD") ;
        },
        yesterdaydate: function() {
            return moment(String(new Date(Date.now() - 86400000))).format("YYYY-MM-DD") ;
            ;
        },
        weekdate: function() {
           return moment(String(new Date(Date.now() - 604800000))).format("YYYY-MM-DD") ;
        },
        monthdate: function() {
           return moment(String(new Date(Date.now() - 2592000000))).format("YYYY-MM-DD") ;
        },

        showTwoDatePlate:function() {
            
           if (this.searchDateSumbit[1]==this.searchDateSumbit[0] || this.searchDateSumbit.length==1 ) {
                   
                                         return false ;  
                   
                     
            }
            else{
                return true ; 
            }

        },





    },

    methods: {
        setToday:function(){
        this.searchDate = this.todaydate + ' — ' + this.todaydate;
        },

        setYesterday:function(){
        this.searchDate = this.yesterdaydate + ' — ' + this.yesterdaydate;
        },
        setWeek:function(){
        this.searchDate = this.weekdate + ' — ' + this.todaydate;
        },
        setmonth:function(){
        this.searchDate = this.monthdate + ' — ' + this.todaydate;
        },



        searchIdLabel: function() {
            if (this.searchId.length > 0) {
                this.searchIdSubmit = this.searchId;
                this.searchId = "";
            }

        },
        searchIdClear: function() {
            this.searchIdSubmit = "";
        },

        searchBuyerLabel: function() {
            if (this.searchBuyer.length > 0) {
                this.searchBuyerSubmit = this.searchBuyer;
                this.searchBuyer = "";
            }

        },
        searchBuyerClear: function() {
            this.searchBuyerSubmit = "";
        },
        AttributesClear: function(index) {
            this.searchAttributes.splice(index, 1);
        },


        StatusClear: function(index) {
            this.searchStatus.splice(index, 1);
        },
        searchDateClear: function() {
            this.searchDate = "";
        },

    }

});
