import Vue  from  'vue/dist/vue.js'
import VueFire from 'vuefire'
import firebase from 'firebase'


import mainheader from './components/header.vue'
import catalogmenu from './components/catalog-menu.vue'

import blogList from './components/blog-list.vue'


import setsBlock from './components/sets-block.vue'
import bestProduct from './components/best-product.vue'
import newsBlock from './components/news-block.vue'

import VueLazyload from 'vue-lazyload'



import VModal from 'vue-js-modal'

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


import Rate from 'vue-tiny-rate';



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
var productsviewmRef = firebase.database().ref('productsview');
var setsRef = firebase.database().ref('sets');

var reviewRef = firebase.database().ref('review');
var newsRef = firebase.database().ref('news');



Vue.config.productionTip = false

Vue.use(VueFire);





new Vue({
	el: '#app',
	
	components: {
		mainheader,
		LocalSwiper: swiper,
		LocalSlide: swiperSlide,
		catalogmenu,
		Rate,
		blogList,
		setsBlock,
		bestProduct,
		newsBlock
		
		
	},

	data: function() {
		return {

			mainBannerOption: {
				centeredSlides: true,
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
			productOption: {
				slidesPerView: 4,
				spaceBetween: 30,
				observer: true,
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
				observer: true,
				freeMode:true,
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
		show () {
			this.$modal.show('hello-world');
		},
		hide () {
			this.$modal.hide('hello-world');
		}
	},

	filters: {

		formatedNumber: function(value) {
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
		productsview: productsviewmRef
	},


});







