import Vue  from  'vue/dist/vue.js'
import VueFire from 'vuefire'
import firebase from 'firebase'
import mainheader from './components/header.vue'





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
      setsOption: {
        slidesPerView: 3,
        observer: true,
observeParents: true,
        spaceBetween: 30,      
        navigation: {
          nextEl: '.sw-button-next',
          prevEl: '.sw-button-prev'
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







