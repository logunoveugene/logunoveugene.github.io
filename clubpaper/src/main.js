import Vue  from  'vue/dist/vue.js'
import VueFire from 'vuefire'
import firebase from 'firebase'
import mainheader from './components/header.vue'
import postHalfImg from './components/post-half-img.vue'


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
	components: {
		mainheader,
		postHalfImg,
	}
})


