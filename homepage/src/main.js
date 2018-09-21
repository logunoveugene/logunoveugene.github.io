import Vue  from  'vue/dist/vue.js'




import VueFire from 'vuefire'
import firebase from 'firebase'


import mainheader from './components/header.vue'
import catalogmenu from './components/catalog-menu.vue'

import blogList from './components/blog-list.vue'

import myfooter from './components/footer.vue'

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

		blogList,
		setsBlock,
		bestProduct,
		newsBlock,
		myfooter
		
		
	},

	data: function() {
		return {
			isTp: false,
			isAlert:true,
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

				preventClicks :true,
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

				navigation: {
					nextEl: '.sw-button-next',
					prevEl: '.sw-button-prev'
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
		show () {
			this.$modal.show('hello-world');
		},
		hide () {
			this.$modal.hide('hello-world');
		},
		handleScroll: function (evt, el) {
			if (window.scrollY > 700) {
				this.showCatalog = true;
			} else{
				this.showCatalog = false;
			}
			
		},
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
		productsview: productsviewmRef,
		logos: logosRef
	},


});







