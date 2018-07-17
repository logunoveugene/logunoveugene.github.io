

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


Vue.config.devtools = true;

Vue.use(VueAwesomeSwiper)

var main = new Vue({
  el: '#app',
  components: {
    LocalSwiper: VueAwesomeSwiper.swiper,
    LocalSlide: VueAwesomeSwiper.swiperSlide,
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

  filters: {
    text180:function(value) {
      var sliced = value.slice(0,170);
      if (sliced.length < value.length) {
        return sliced += '...';
      }
      return value;
    }
  },


  methods: {
  }
});





