

$(document).ready(function () { 

  var day = dayjs.extend(dayjs_plugin_relativeTime);


  var config = {
    apiKey: "AIzaSyAM5dSSOW6uZq-3e5oDyNWK-CkHAd66EX8",
    authDomain: "club-74325.firebaseapp.com",
    databaseURL: "https://club-74325.firebaseio.com",
  }
  firebase.initializeApp(config)

  var usersRef = firebase.database().ref('posts')


  Vue.config.devtools = true;
  var main = new Vue({
    el: '#app',

    data: {
      posts: [ 
      {
        type: 'alert-post',
        title: 'Изменения в правилах оформления блогов и другие важные аспекты для авторов',
        tags: [
        'обзоры',
        'смартфоны', 
        'Vertex'
        ],
        img: '',
        desc:'Эта запись создана для авторов, кто почему-то не следит за важными темами на форуме и по какой-то причине не получил письмо на почтовый ящик после обновления правил 07 марта 2018 года.',
        date: '2018-06-16T21:17:42',
        view: 455,
        comment: 15,
        autor:'Блог ДНС клуба',
      },
      {
        type: 'base-post',
        title: 'Vertex Impress Tor: бюджетный защищенный смартфон с компактным «гражданским» дизайном и железом от Qualcomm!',
        tags: [
        'обзоры',
        'смартфоны', 
        'Vertex'
        ],
        img: 'https://i.snag.gy/NKnswr.jpg',
        desc:'Всем привет! Не так давно я написал обзор Vertex Impress Nero довольно интересного недорого смартфона с экраном 18:9 и металлическим корпусом. А сегодня речь пойдет о другом продукте того же бренда, а именно о защищенном смартфоне Vertex Impress Tor. Но для начала – немного лирики.',
        date: '2018-06-09T18:31:42',
        view: 269,
        comment: 9,
        autor:'Блог ДНС клуба',
      },
      {
        type: 'base-post',
        title: 'Обзор принтера canon pixma ts5040',
        tags: [
        'обзоры',
        'принтеры',
        'Canon'
        ],
        img: 'https://i.snag.gy/5utl3T.jpg',
        desc:'Прошли те времена, когда лазерный принтер могли позволить себе только организации. Лазерные принтеры до сих пор дороже струйных, но стоимость отпечатка (распечатанной страницы) у лазерных принтеров несравнимо ниже – настолько, что разница в цене может окупиться уже через тысячу-другую страниц. Качество текста на таких страницах будет лучше, чем у струйного, да и печатает лазерный принтер намного быстрее.',
        date: '2018-06-09T18:31:42',
        view: 9895,
        comment: 95,
        autor:'Блог ДНС клуба',
      }
      ]   
    },

    methods: {

    },

    filters: {
      fdate: function(value) {
        return dayjs().from(dayjs(value));
      }
    }
  });

});

