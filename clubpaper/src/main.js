import Vue  from  'vue/dist/vue.js'
import VueFire from 'vuefire'
import firebase from 'firebase'
import mainheader from './components/header.vue'

// import colorThief from 'colorThief'



import postHalfImg from './components/post-half-img.vue'
import postImg from './components/post-img.vue'
import postText from './components/post-text.vue'
import postLock from './components/post-lock.vue'
import postBlogImg from './components/post-blog-img.vue'
import postBlogLock from './components/post-blog-lock.vue'
import postBlogText from './components/post-blog-text.vue'
import postInfo from './components/post-info.vue'

var config = {
	apiKey: "AIzaSyDKEuRv-KeOvSoGOJQESrAq4HIPUk_Ya_4",
	authDomain: "club-paper.firebaseapp.com",
	databaseURL: "https://club-paper.firebaseio.com",
}

firebase.initializeApp(config);

var digestRef = firebase.database().ref('digest');
var discussionsRef = firebase.database().ref('discussions');
var liveRef = firebase.database().ref('live');
var usersRef = firebase.database().ref('top-users');
var reviewRef = firebase.database().ref('review');

Vue.config.productionTip = false



Vue.use(VueFire);

new Vue({
	el: '#app',
	
	firebase: {
		digest: digestRef,
		discussions: discussionsRef,
		lives: liveRef,
		topUsers: usersRef,
		review: reviewRef

	},
	data: function() {
		return {

			live:"showlive",
			window: {
				width: 0,
				height: 0
			},
			promoreg:true
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
		mainheader,
		postHalfImg,
		postImg,
		postText,
		postLock,
		postBlogImg,
		postBlogLock,
		postBlogText,
		postInfo
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
})


