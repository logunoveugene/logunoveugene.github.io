var Vue = require('vue');
var VueFire = require('vuefire');
var firebase = require('firebase');

var mainheader = require('vue!./components/header.vue');
var postHalfImg = require('vue!./components/post-half-img.vue');


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

Vue.config.devtools = true;


Vue.use(VueFire);

new Vue({
	el: '#app',
	components: {
		mainheader,
		postHalfImg,
	},
	firebase: {
		digest: digestRef,
		discussions: discussionsRef,
		lives: liveRef,
		topUsers: usersRef,
		review: reviewRef

	},
})


