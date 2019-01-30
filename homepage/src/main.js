import Vue from 'vue/dist/vue.js'


import VueFire from 'vuefire'
import firebase from 'firebase'


import VTooltip from 'v-tooltip'

Vue.use(VTooltip)


import mainheader from './components/header.vue'
import catalogmenu from './components/catalog-menu.vue'

import blogList from './components/blog-list.vue'

import myfooter from './components/footer.vue'
import submenu from './components/submenu.vue'

import setsBlock from './components/sets-block.vue'
import bestProduct from './components/best-product.vue'
import newsBlock from './components/news-block.vue'

import VueLazyload from 'vue-lazyload'


import VModal from 'vue-js-modal'

import rate from 'vue-rate';

Vue.use(rate)


Vue.use(VModal)


Vue.use(VueLazyload, {
    lazyComponent: true,
    observer: true,
    observerOptions: {
        rootMargin: '0px',
        threshold: 0.1
    }
});


import Ripple from './libs/fi-ripple.js';


Vue.directive('Ripple', Ripple);


import {swiper, swiperSlide} from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

var config = {
    apiKey: "AIzaSyCMbnQPl_26yGxXdElx-Vx1ZGkoC8vTsZI",
    authDomain: "homepage-fed4c.firebaseapp.com",
    databaseURL: "https://homepage-fed4c.firebaseio.com"
}


var dropSubMenu = [{
    "title": "Ноутбуки и планшеты",
    "amount": 1080,
    "child": [{
        "title": "Ноутбуки",
        "amount": 1080,
        "child": [{}]
    },
        {
            "title": "Планшеты",
            "amount": 126,
            "child": [{
                "title": "Электронные книги",
                "amount": 15,
                "child": [{}]
            },
                {
                    "title": "Электронные переводчики",
                    "amount": 84,
                    "child": [{}]
                },
                {
                    "title": "Аксессуары для ноутбуков",
                    "amount": 155,
                    "child": [{}]
                },
                {
                    "title": "Аксессуары для электронных книг",
                    "amount": 515,
                    "child": [{}]
                },
                {
                    "title": "Запчасти",
                    "amount": 54,
                    "child": [{}]
                }]
        },
        {
            "title": "Электронные книги",
            "amount": 15,
            "child": [{}]
        },
        {
            "title": "Электронные переводчики",
            "amount": 84,
            "child": [{}]
        },
        {
            "title": "Аксессуары для ноутбуков",
            "amount": 155,
            "child": [{}]
        },
        {
            "title": "Аксессуары для электронных книг",
            "amount": 515,
            "child": [{}]
        },
        {
            "title": "Запчасти",
            "amount": 54,
            "child": [{}]
        },
        {
            "title": "Программное обеспечение",
            "amount": 1,
            "child": [{}]
        }

    ]

},
    {
        "title": "Компьютеры и периферия",
        "amount": 1080,
        "child": [{
            "title": "Компьютеры",
            "amount": 1080,
            "child": [{}]
        },
            {
                "title": "Мониторы и аксессуары",
                "amount": 126,
                "child": [{}]
            },
            {
                "title": "Манипуляторы и аксессуары",
                "amount": 15,
                "child": [{}]
            },
            {
                "title": "Программное обеспечение",
                "amount": 84,
                "child": [{}]
            },
            {
                "title": "Внешние накопители данных",
                "amount": 155,
                "child": [{}]
            },
            {
                "title": "Очки дополненной реальности",
                "amount": 515,
                "child": [{}]
            },
            {
                "title": "Веб-камеры",
                "amount": 54,
                "child": [{}]
            },
            {
                "title": "Полезные аксессуары",
                "amount": 1,
                "child": [{}]
            },
            {
                "title": "USB разветвители",
                "amount": 54,
                "child": [{}]
            },
            {
                "title": "Инструмент для монтажа и ремонта",
                "amount": 1,
                "child": [{}]
            },
            {
                "title": "Кабели и переходники",
                "amount": 54,
                "child": [{}]
            },
            {
                "title": "Книги по IT тематике",
                "amount": 1,
                "child": [{}]
            },
            {
                "title": "Чистящие средства",
                "amount": 54,
                "child": [{}]
            },
            {
                "title": "Серверное оборудование",
                "amount": 1,
                "child": [{}]
            }

        ]

    },
    {
        "title": "Комплектующие для ПК",
        "amount": 1080,
        "child": [{
            "title": "Процессоры",
            "amount": 1080,
            "child": [{}]
        },
            {
                "title": "Материнские платы",
                "amount": 126,
                "child": [{}]
            },
            {
                "title": "Видеокарты",
                "amount": 15,
                "child": [{}]
            },
            {
                "title": "Оперативная память",
                "amount": 84,
                "child": [{}]
            },
            {
                "title": "Блоки питания",
                "amount": 155,
                "child": [{}]
            },
            {
                "title": "Охлаждение компьютера",
                "amount": 515,
                "child": [{}]
            },
            {
                "title": "Жесткие диски",
                "amount": 54,
                "child": [{}]
            },
            {
                "title": "SSD",
                "amount": 1,
                "child": [{}]
            },
            {
                "title": "Корпуса",
                "amount": 54,
                "child": [{}]
            },
            {
                "title": "Звуковые карты",
                "amount": 1,
                "child": [{}]
            },
            {
                "title": "Аксессуары для накопителей",
                "amount": 54,
                "child": [{}]
            },
            {
                "title": "Приводы и считыватели",
                "amount": 1,
                "child": [{}]
            },
            {
                "title": "Тюнеры для компьютера",
                "amount": 54,
                "child": [{}]
            },
            {
                "title": "Платы видеозахвата",
                "amount": 1,
                "child": [{}]
            },
            {
                "title": "Контроллеры",
                "amount": 54,
                "child": [{}]
            },
            {
                "title": "Комплекты кабелей для блоков питания",
                "amount": 1,
                "child": [{}]
            },
            {
                "title": "Моддинг",
                "amount": 54,
                "child": [{}]
            },
            {
                "title": "Комплектующие для сервера",
                "amount": 1,
                "child": [{}]
            }
        ]

    }, {
        "title": "Игры и приставки",
        "amount": 1080,
        "child": [{
            "title": "Видеоигры",
            "amount": 1080,
            "child": [{}]
        },
            {
                "title": "PlayStation",
                "amount": 126,
                "child": [{}]
            },
            {
                "title": "Microsoft Xbox",
                "amount": 15,
                "child": [{}]
            },
            {
                "title": "Nintendo",
                "amount": 84,
                "child": [{}]
            },
            {
                "title": "ПК и другие платформы",
                "amount": 155,
                "child": [{}]
            },
            {
                "title": "8bit и 16bit",
                "amount": 515,
                "child": [{}]
            },
            {
                "title": "Портативные игровые системы",
                "amount": 54,
                "child": [{}]
            },
            {
                "title": "Игровые манипуляторы и аксессуары",
                "amount": 1,
                "child": [{}]
            },
            {
                "title": "Настольные игры",
                "amount": 54,
                "child": [{}]
            },
            {
                "title": "Радиоуправляемые игрушки",
                "amount": 1,
                "child": [{}]
            },
            {
                "title": "Квадрокоптеры и дроны",
                "amount": 54,
                "child": [{}]
            },
            {
                "title": "Конструкторы",
                "amount": 1,
                "child": [{}]
            },
            {
                "title": "Шлемы виртуальной реальности",
                "amount": 54,
                "child": [{}]
            },
            {
                "title": "Аксессуары для электротранспорта",
                "amount": 1,
                "child": [{}]
            },
            {
                "title": "Портативные транспортные средства",
                "amount": 54,
                "child": [{}]
            },
            {
                "title": "Карты оплаты",
                "amount": 1,
                "child": [{}]
            }
        ]

    }


];


firebase.initializeApp(config);
var mainNavsRef = firebase.database().ref('mainNavs');
var mainbannersRef = firebase.database().ref('mainbanners');
var productsmRef = firebase.database().ref('products');
var productsviewmRef = firebase.database().ref('productsview');
var setsRef = firebase.database().ref('sets');

var reviewRef = firebase.database().ref('review');
var newsRef = firebase.database().ref('news');
var logosRef = firebase.database().ref('logos');

Vue.config.productionTip = false

Vue.use(VueFire);

Vue.directive('scroll', {
    inserted: function (el, binding) {
        let f = function (evt) {
            if (binding.value(evt, el)) {
                window.removeEventListener('scroll', f)
            }
        }
        window.addEventListener('scroll', f)
    }
})


new Vue({
    el: '#app',

    components: {
        mainheader,
        LocalSwiper: swiper,
        LocalSlide: swiperSlide,
        LogoSwiper: swiper,
        LogoSlide: swiperSlide,
        catalogmenu,
        submenu,

        blogList,
        setsBlock,
        bestProduct,
        newsBlock,
        myfooter


    },

    data: function () {
        return {

            submenuDesktopIsOpen: false,
            dropSubMenu: dropSubMenu,
            isTp: false,
            isAuth: false,
            isAlert: true,
            showCatalog: false,
            mainBannerOption: {
                centeredSlides: true,
                watchOverflow: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                navigation: {
                    nextEl: '.sw-button-next',
                    prevEl: '.sw-button-prev'
                }
            },
            mainBannerMobOption: {
                slidesPerView: 'auto',
                watchOverflow: true,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false
                },
            },
            tabswipe: {

                preventClicks: true,
                watchOverflow: true,
                preventClicksPropagation: true,
                slidesPerView: 'auto',
                slidesOffsetAfter: 1,
                freeMode: true


            },

            shopLogoOption: {
                slidesPerView: 6,
                spaceBetween: 30,
                observer: true,
                watchOverflow: true,
                observeParents: true,
                freeMode: true,
                breakpoints: {

                    1200: {
                        slidesPerView: 4,
                        spaceBetween: 30
                    },
                    992: {
                        slidesPerView: 4,
                        spaceBetween: 30
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20
                    }
                },

                scrollbar: {
                    el: '.swiper-scrollbar',
                    hide: false
                }


            },


            productOption: {
                slidesPerView: 4,
                spaceBetween: 30,
                observer: true,
                watchOverflow: true,
                observeParents: true,
                breakpoints: {

                    992: {
                        slidesPerView: 3,
                        spaceBetween: 30
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    }
                },
                navigation: {
                    nextEl: '.sw-button-next',
                    prevEl: '.sw-button-prev'
                },
                scrollbar: {
                    el: '.swiper-scrollbar',
                    hide: false
                }


            },


            productmobOption: {
                slidesPerView: 4,
                spaceBetween: 30,
                watchOverflow: true,
                observer: true,
                freeMode: true,
                observeParents: true,
                breakpoints: {

                    992: {
                        slidesPerView: 3,
                        spaceBetween: 0
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 0
                    }
                },
                navigation: {
                    nextEl: '.sw-button-next',
                    prevEl: '.sw-button-prev'
                },
                scrollbar: {
                    el: '.swiper-scrollbar',
                    hide: false
                }


            },
            productviewOption: {
                slidesPerView: 5,
                spaceBetween: 30,
                observer: true,
                watchOverflow: true,
                observeParents: true,
                freeMode: true,
                breakpoints: {

                    1200: {
                        slidesPerView: 4,
                        spaceBetween: 30
                    },
                    992: {
                        slidesPerView: 3,
                        spaceBetween: 30
                    },
                    768: {
                        slidesPerView: "auto",
                        spaceBetween: 20
                    }
                },
                navigation: {
                    nextEl: '.sw-button-next',
                    prevEl: '.sw-button-prev'
                },
                scrollbar: {
                    el: '.swiper-scrollbar',
                    hide: true
                }


            },


            setsOption: {
                slidesPerView: 3,
                observer: true,
                watchOverflow: true,
                observeParents: true,
                spaceBetween: 30,
                navigation: {
                    nextEl: '.sw-button-next',
                    prevEl: '.sw-button-prev'
                },
                breakpoints: {

                    992: {
                        slidesPerView: 'auto',
                        spaceBetween: 0
                    },
                    768: {
                        slidesPerView: 'auto',
                        spaceBetween: 0
                    }

                }
            },


        }
    },
    methods: {
        show() {
            this.$modal.show('hello-world');
        },
        hide() {
            this.$modal.hide('hello-world');
        },
        handleScroll: function (evt, el) {
            if (window.scrollY > 700) {
                this.showCatalog = true;
            } else {
                this.showCatalog = false;
            }

        },
    },

    filters: {

        formatedNumber: function (value) {
            return value.toLocaleString();
        }
    },

    firebase: {
        mainNavs: mainNavsRef,
        mainbanners: mainbannersRef,
        products: productsmRef,
        sets: setsRef,
        review: reviewRef,
        newslist: newsRef,
        productsview: productsviewmRef,
        logos: logosRef
    },


});







