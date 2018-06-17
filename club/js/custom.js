
$(document).ready(function () { 

dayjs.locale('ru');


  var day = dayjs.extend(dayjs_plugin_relativeTime);


  var config = {
    apiKey: "AIzaSyAM5dSSOW6uZq-3e5oDyNWK-CkHAd66EX8",
    authDomain: "club-74325.firebaseapp.com",
    databaseURL: "https://club-74325.firebaseio.com",
  }

  firebase.initializeApp(config);

  var postsRef = firebase.database().ref('posts');
  var askRef = firebase.database().ref('asks');
  var forumRef = firebase.database().ref('forum-items');


  Vue.config.devtools = true;
  var main = new Vue({
    el: '#app',

    data: {
      newAsk: {
        product:"",
        img: "",
        desc:"",
          author:"",
        answer:0
    }
    },

    firebase: {
      posts: postsRef,
      asks: askRef,
      forums: forumRef
    },

    methods: {
      addAsk: function () {
              this.newAsk.date = dayjs().format();
              askRef.push(this.newAsk)
              this.newAsk.product = ''
              this.newAsk.img = ''
              this.newAsk.desc = ''
              this.newAsk.date = 
              this.newAsk.author = ''
              this.newAsk.answer = 0
          },
    },

    filters: {
      fdate: function(value) {
        return dayjs().from(dayjs(value));
      }
    },
    computed: {
      orderedAsks: function () {
        return _.orderBy(this.asks, 'date', 'desc' )
      },
      orderedPosts: function () {
        return _.orderBy(this.posts, 'date', 'desc' )
      },
      orderedPosts: function () {
        return _.orderBy(this.posts, 'date', 'desc' )
      }
    }
  });

});

