import Vue  from  'vue/dist/vue.js'
import VueFire from 'vuefire'
import firebase from 'firebase'


import homepage from './components/homepage.vue'


import VueRouter from 'vue-router'
Vue.use(VueRouter)

// import { swiper, swiperSlide } from 'vue-awesome-swiper'
// import 'swiper/dist/css/swiper.css'


import Scrollspy from 'vue2-scrollspy';


import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/ru' 

dayjs.locale('ru') 
dayjs.extend(relativeTime)



// import postHalfImg from './components/post-half-img.vue'
// import postImg from './components/post-img.vue'
// import postText from './components/post-text.vue'
// import postLock from './components/post-lock.vue'
// import postBlogImg from './components/post-blog-img.vue'
// import postBlogLock from './components/post-blog-lock.vue'
// import postBlogText from './components/post-blog-text.vue'
// import postInfo from './components/post-info.vue'

var config = {
	apiKey: "AIzaSyDKEuRv-KeOvSoGOJQESrAq4HIPUk_Ya_4",
	authDomain: "club-paper.firebaseapp.com",
	databaseURL: "https://club-paper.firebaseio.com",
}

firebase.initializeApp(config);

var digestRef = firebase.database().ref('digest');
var lifehackRef = firebase.database().ref('lifehack');
var discussionsRef = firebase.database().ref('discussions');
var liveRef = firebase.database().ref('live');
var usersRef = firebase.database().ref('top-users');
var levelRef = firebase.database().ref('users-level');
var reviewRef = firebase.database().ref('review');
var surveyRef = firebase.database().ref('survey');


Vue.config.productionTip = false



Vue.use(VueFire);

Vue.use(Scrollspy);



new Vue({
	el: '#app',
	
	firebase: {
		digest: digestRef,
		lifehack: lifehackRef,
		discussions: discussionsRef,
		lives: liveRef,
		topUsers: usersRef,
		usersLevel: levelRef,
		surveys: surveyRef,
		review: reviewRef

	},
	data: function() {
		return {

			live:"showlive",
			window: {
				width: 0,
				height: 0
			}
			
		}
	},
	created() {
		window.addEventListener('resize', this.handleResize)
		this.handleResize();
	},
	destroyed() {
		window.removeEventListener('resize', this.handleResize)
	},

	components: {
			homepage
		

	},
	filters: {
		fdate: function(value) {
			return dayjs().to(dayjs(value));
		}
	},
	methods: {

		liveoff:function () {
			this.live = "";
		},
		liveon:function () {
			this.live = "showlive";
		},
		handleResize() {
			this.window.width = window.innerWidth;
			this.window.height = window.innerHeight;
			if (this.window.width < 1440) {
				this.live = "";
			}
		}

	}
});


// (function() {
// 	'use strict';

// 	var section = document.querySelectorAll(".section");
// 	var sections = {};
// 	var i = 0;

// 	Array.prototype.forEach.call(section, function(e) {
// 		sections[e.id] = e.offsetTop;
// 	});

// 	window.onscroll = function() {
// 		var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

// 		for (i in sections) {
// 			if (sections[i] <= scrollPosition) {
// 				document.querySelector('.bottom-menu__item--active').setAttribute('class', 'bottom-menu__item');
// 				document.querySelector('a[href*=' + i + ']').setAttribute('class', 'bottom-menu__item bottom-menu__item--active');
// 			}
// 		}
// 	};
// })();



// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();

//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });




