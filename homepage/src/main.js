import Vue  from  'vue/dist/vue.js'
import VueFire from 'vuefire'
import firebase from 'firebase'
import mainheader from './components/header.vue'


import catalogmenu from './components/catalog-menu.vue'

import Ripple from 'vue-ripple-directive';

Ripple.color = 'rgba(0, 0, 0, 0.02)';
Ripple.zIndex = 55;
Vue.directive('ripple', Ripple);




import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

var config = {
	apiKey: "AIzaSyCMbnQPl_26yGxXdElx-Vx1ZGkoC8vTsZI",
	authDomain: "homepage-fed4c.firebaseapp.com",
	databaseURL: "https://homepage-fed4c.firebaseio.com"
}


firebase.initializeApp(config);
var mainNavsRef = firebase.database().ref('mainNavs');
var mainbannersRef = firebase.database().ref('mainbanners');
var productsmRef = firebase.database().ref('products');
var setsRef = firebase.database().ref('sets');




Vue.config.productionTip = false

Vue.use(VueFire);




new Vue({
	el: '#app',
	
	components: {
		mainheader,
		LocalSwiper: swiper,
		LocalSlide: swiperSlide,
		catalogmenu
	},

	data: function() {
		return {
			mainBannerOption: {
				centeredSlides: true,
				pagination: {
					el: '.swiper-pagination',
					type: 'fraction'
				},
				navigation: {
					nextEl: '.sw-button-next',
					prevEl: '.sw-button-prev'
				}
			},
			mainBannerMobOption: {
				slidesPerView: 'auto',
				autoplay: {
            delay: 3000,
            disableOnInteraction: false
          },
			},
			tabswipe: {

				preventClicks :true,
				preventClicksPropagation: true,
				slidesPerView: 'auto',
				slidesOffsetAfter: 1,
				freeMode: true


			},


			setsOption: {
				slidesPerView: 3,
				observer: true,
				observeParents: true,
				spaceBetween: 30,      
				navigation: {
					nextEl: '.sw-button-next',
					prevEl: '.sw-button-prev'
				},
				breakpoints: {

					992: {
						slidesPerView: 2,
						spaceBetween: 30
					},
					768: {
						slidesPerView: 1,
						spaceBetween: 20
					}

				}
			},
			productOption: {
				slidesPerView: 4,
				spaceBetween: 30,      
				navigation: {
					nextEl: '.sw-button-next',
					prevEl: '.sw-button-prev'
				}
			},
		}
	},

	firebase: {
		mainNavs: mainNavsRef,
		mainbanners: mainbannersRef,
		products: productsmRef,
		sets: setsRef
	},

	methods: {



	}
});







