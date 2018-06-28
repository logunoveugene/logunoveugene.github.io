  var observer = lozad('.lozad', {
    threshold: 0.1,
    load: function(el) {
      el.src = el.getAttribute("data-src");

    }
  })

    // Picture observer
    // with default `load` method
    var pictureObserver = lozad('.lozad-picture', {
      threshold: 0.1
    })

    observer.observe()
    pictureObserver.observe()



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
    var liveRef = firebase.database().ref('live');
    var usersRef = firebase.database().ref('top-users');
    var newsRef = firebase.database().ref('news');
    var guidsRef = firebase.database().ref('guid');

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
          newAsk: {
            product:"",
            img: "",
            desc:"",
            author:"",
            answer:0
          },
          live:"showlive",
          window: {
            width: 0,
            height: 0
          },

          promoreg:true,

          swiperOptionB: {

            spaceBetween:30,
            slidesPerView: 'auto',
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }

          },
          swiperOptionC: {
            spaceBetween:30,
            slidesPerView: 'auto',
            mousewheel: true,
            direction:"vertical",
            scrollbar: {
              el: '.swiper-scrollbar',
              hide: true
            }
          }
        }
      },

      firebase: {
        posts: postsRef,
        news: newsRef,
        asks: askRef,
        forums: forumRef,
        lives: liveRef,
        topUsers: usersRef,
        guids: guidsRef

      },

      created() {
        window.addEventListener('resize', this.handleResize)
        this.handleResize();
      },
      destroyed() {
        window.removeEventListener('resize', this.handleResize)
      },

      filters: {
        fdate: function(value) {
          return dayjs().from(dayjs(value));
        },
        text180:function(value) {
          var sliced = value.slice(0,170);
          if (sliced.length < value.length) {
            return sliced += '...';
          }
          return value;
        }
      },
      

      computed: {
        orderedAsks: function () {
          return _.orderBy(this.asks, 'date', 'desc' )
        },
        orderedPosts: function () {
          return _.orderBy(this.posts, 'date', 'desc' )
        },
        swiperB() {
          return this.$refs.awesomeSwiperB.swiper
        },


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
        liveoff:function () {
          this.live = "";
        },
        liveon:function () {
          this.live = "showlive";
        },
        handleResize() {
          this.window.width = window.innerWidth;
          this.window.height = window.innerHeight;
          if (this.window.width < 1300) {
            this.live = "";
          }
        }

      }
    });





