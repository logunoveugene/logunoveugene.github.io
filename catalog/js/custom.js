

$(document).ready(function () { 


  var filterSet = new Swiper('.filterSet', {
    preventClicks :true,
    preventClicksPropagation: true,
    freeMode: true,
    slidesPerView: 'auto'

  });

  var breadcrumbsSwiper = new Swiper('.breadcrumbsSwiper', {
    preventClicks :true,
    preventClicksPropagation: true,
    freeMode: true,
    slidesPerView: 'auto'

  });


  var catBanner = new Swiper('.catBanner', {
    preventClicks :true,
    preventClicksPropagation: true,
    loop: true,
    slidesPerView: 'auto',
       nextButton: '.slider-arrow-r',
        prevButton: '.slider-arrow-l',

  });


function filterarr(a, b) {
  var rp = [1, 2, 5, 10, 20, 25, 50, 100, 250, 500, 1000, 2000, 5000, 10000, 15000, 20000, 50000];
  var n, z, step, width;
  var arr = [];
  var range = {};
  n = b - a;

  for (var i = 0; i < rp.length; i++) {
    z = n / rp[i];
    if (z <= 20) {
      step = rp[i];
      break;
    }
  };

  for (let i = 0; i < b; i = step + i) {
    if (i < (b - step) && i > (a + step)) {
      arr.push(i);
    };
  };

  arr.splice(0, 0, a);
  arr.push(b);


  var width = 100 / (arr.length-1);
  var pos = width;
  for (let i = 1; i < arr.length-1; i++) {

    range[pos] = arr[i];
    pos = pos + width;
  };

range.min=a;
range.max=b;
console.log(range);
  return range;

};


var handlesSlider = document.getElementById('slider-handles');
var input0 = document.getElementById('input-with-keypress-0');
var input1 = document.getElementById('input-with-keypress-1');
var inputs = [input0, input1];

noUiSlider.create(handlesSlider, {
  
  behaviour: 'snap',


  connect: true,
  format: wNumb({
    decimals: 0
  }),
tooltips: [ true, true ],

  range: filterarr(2290, 89999),
  start: [2290, 89999]
});


handlesSlider.noUiSlider.on('update', function( values, handle ) {
	inputs[handle].value = values[handle];
});

function setSliderHandle(i, value) {
	var r = [null,null];
	r[i] = value;
	handlesSlider.noUiSlider.set(r);
}

// Listen to keydown events on the input field.
inputs.forEach(function(input, handle) {

	input.addEventListener('change', function(){
		setSliderHandle(handle, this.value);
	});

});






  var tabNavSwiper = new Swiper('.img-tab-nav', {
    slidesPerView: 'auto',
    scrollbar: '.swiper-scrollbar',
    scrollbarHide: false
    
  });

  var tabContentSwiper  = new Swiper('.img-tab-content', {
    preloadImages: false,
    lazyLoading: true,
    keyboardControl: true,
    pagination: '.swiper-pagination',
    paginationClickable: true,

    onSlideChangeStart: function onSlideChangeStart(swiper) {
      $('#tabNav .active').removeClass('active');
      $('#tabNav .swiper-slide[data-slide-index=' + swiper.activeIndex + ']').addClass('active');
      if (swiper.previousIndex < swiper.activeIndex) {
        tabNavSwiper.slideTo(swiper.activeIndex - 2);
      } else {
        tabNavSwiper.slideTo(swiper.activeIndex - 1);
      }
    }
  });

  $('#tabNav .swiper-slide').on('click', function (event) {
    tabContentSwiper.slideTo($(this).data('slide-index'));
  });


$('#quick-product').on('shown.bs.modal', function (event) {
  setTimeout(function () {
  tabNavSwiper.update;
  tabContentSwiper.update;
    console.log("ddd");
  }, 500);


});


 var sidebar = new StickySidebar('#sidebar', {
        containerSelector: '#main-content',
        innerWrapperSelector: '.sidebar__inner',
    });





  });


Vue.component('rate', {
  template: `
    <div class="Rate" v-if="length > 0">
    <svg style="position: absolute; width: 0; height: 0;" width="0" height="0" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <symbol id="icon-star-empty" viewBox="0 0 32 32">
          <title>star-empty</title>
          <path d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798zM16 23.547l-6.983 3.671 1.334-7.776-5.65-5.507 7.808-1.134 3.492-7.075 3.492 7.075 7.807 1.134-5.65 5.507 1.334 7.776-6.983-3.671z"></path>
        </symbol>

        <symbol id="icon-star-full" viewBox="0 0 32 32">
          <title>star-full</title>
          <path d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z"></path>
        </symbol>
      </defs>
    </svg>
    <input type="hidden" :name="name" :value="rate" :required="required">
    <template v-for="n in length">
      <a href="javascript:;" :class="{'Rate__star': true, 'hover': n <= over, 'filled': n <= rate}" @mouseover="onOver(n)" @mouseout="onOut(n)" @click="setRate(n)" @keyup="onOver(n)"  @keyup.enter="setRate(n)">
        <svg class="icon" v-show="isFilled(n)">
          <use xlink:href="#icon-star-full"></use>
        </svg>
        <svg class="icon" v-show="isEmpty(n)">
          <use xlink:href="#icon-star-empty"></use>
        </svg>
      </a>
    </template>
    <div class="Rate__view">
      <span class="Rate__view__count" v-if="showcount">{{over}}</span>
      <span class="Rate__view__desc" v-if="ratedesc.length > 0">{{ratedesc[over - 1]}}</span>
    </div>
  </div>
  `,
  props: {
    value: {type: Number},
    name: {type: String, default: 'rate'},
    length: {type: Number},
    showcount: {type: Boolean},
    required: {type: Boolean},
    ratedesc: { type: Array, default () { return [] } }
  },
  data () {
    return {
      over: 0,
      rate: 0
    }
  },
  methods: {
    onOver (index) { this.over = index },
    onOut () { this.over = this.rate },
    setRate (index) {
      this.$emit('beforeRate', this.rate)
      this.rate = index
      this.$emit('afterRate', this.rate)
    },
    isFilled (index) { return index <= this.over },
    isEmpty (index) {
      return index > this.over || !this.value && !this.over
    }
  },
  created () {
    if (this.value >= this.length) {
      this.value = this.length
    } else if (this.value < 0) {
      this.value = 0
    }
    this.rate = this.value
    this.over = this.value
  }
})



Vue.config.devtools = true;


var kolich = new Vue({
  el: '#app',

  data: {
    layout:'list',
    search:'',
     swiperSlides: [
          "https://cdn.domotekhnika.ru/images/App/Models/Catalog/ProductImage/images/002/711/530/safe_original/12004913_1.jpg",
          "https://cdn.domotekhnika.ru/images/App/Models/Catalog/ProductImage/images/002/713/024/safe_original/12004913_2.jpg",
          "https://cdn.domotekhnika.ru/images/App/Models/Catalog/ProductImage/images/002/713/025/safe_original/12004913_3.jpg",
          "https://cdn.domotekhnika.ru/images/App/Models/Catalog/ProductImage/images/002/713/026/safe_original/12004913_4.jpg",
          "https://cdn.domotekhnika.ru/images/App/Models/Catalog/ProductImage/images/002/713/027/safe_original/12004913_5.jpg", 
          "https://cdn.domotekhnika.ru/images/App/Models/Catalog/ProductImage/images/002/713/028/safe_original/12004913_6.jpg",
          "https://cdn.domotekhnika.ru/images/App/Models/Catalog/ProductImage/images/002/713/029/safe_original/12004913_7.jpg", 
          "https://cdn.domotekhnika.ru/images/App/Models/Catalog/ProductImage/images/002/713/030/safe_original/12004913_8.jpg",
          "https://cdn.domotekhnika.ru/images/App/Models/Catalog/ProductImage/images/002/713/031/safe_original/12004913_9.jpg"    
          ],
        swiperSlidesThumbs: [
          "https://cdn.domotekhnika.ru/images/App/Models/Catalog/ProductImage/images/002/711/530/thumb/12004913_1.jpg",
          "https://cdn.domotekhnika.ru/images/App/Models/Catalog/ProductImage/images/002/713/024/thumb/12004913_2.jpg",
          "https://cdn.domotekhnika.ru/images/App/Models/Catalog/ProductImage/images/002/713/025/thumb/12004913_3.jpg",
          "https://cdn.domotekhnika.ru/images/App/Models/Catalog/ProductImage/images/002/713/026/thumb/12004913_4.jpg",
          "https://cdn.domotekhnika.ru/images/App/Models/Catalog/ProductImage/images/002/713/027/thumb/12004913_5.jpg", 
          "https://cdn.domotekhnika.ru/images/App/Models/Catalog/ProductImage/images/002/713/028/thumb/12004913_6.jpg",
          "https://cdn.domotekhnika.ru/images/App/Models/Catalog/ProductImage/images/002/713/029/thumb/12004913_7.jpg",
          "https://cdn.domotekhnika.ru/images/App/Models/Catalog/ProductImage/images/002/713/030/thumb/12004913_8.jpg",
          "https://cdn.domotekhnika.ru/images/App/Models/Catalog/ProductImage/images/002/713/031/thumb/12004913_9.jpg"  
          ],
    products: [ 
    {
      id: 20101507,
      name: 'Телевизор BBK 32LEM-1018/T2C',
      img: "https://logunoveugene.github.io/catalog/img/1.png",
      desc:'<ul><li>Диагональ дисплея: 32</li><li>HD-стандарт</li><li>Wi-Fi</li><li>Smart TV</li><li>Количество интерфейсов USB: 1</li><li>Количество входов HDMI: 2</li></ul>',
      oldPrice: 0,
      price: 54800,
      discount:0,
      creditprice:0,
      rate:4.5,
      rateCount:65,
      amount:"Забрать в 6 магазинах сегодня",
      actions: 0,
      stores: [{
        storeName: "в ТЦ Черемушки",
        date: "2017-10-24" 
      }, {
        storeName: "на Алеутской",
        date: "2017-10-28" 
      },{
        storeName: "в ТЦ Максим",
        date: "2017-10-24" 
      }, {
        storeName: "на Гоголя",
        date: "2017-10-28" 
      },{
        storeName: "на Вилкова",
        date: "2017-10-28" 
      }
      ]
    },


    {
      id: 20101508,
      name: 'Телевизор Sony KD-43XE8096',
      img: "https://logunoveugene.github.io/catalog/img/2.png",
      desc:'<ul><li>планшет 9.7", 2048x1536, TFT IPS</li><li>встроенная память 32 Гб, без слота для карт памяти</li><li>iOS, ОЗУ 2 Гб, процессор Apple A9</li><li>Wi-Fi, Bluetooth, NFC</li><li>камера 15 Мп.</li></ul>',
      oldPrice: 0,
      price: 84800,
      discount:1800,
      creditprice:0,
      rate:3.1,
      rateCount:15,
      amount:"Забрать в 6 магазинах сегодня",
      actions:[{
        actionName: "Скидка по промокоду",
        actionType: "promocod",
        actionDesc:"PROMOCOD - акция с отображением старой цены и скидки, которая будет применена после активации промокода",
        actionImg: "https://via.placeholder.com/60x60"

      },{
        actionName: "Рассрочка 0%",
        actionType: "credit",
        actionDesc:"Только два дня на широкий ассортимент товаров действуют скидки до 50%!",
        actionImg: "https://via.placeholder.com/60x60"

      }
        

      ],
      stores: [{
        storeName: "в ТЦ Черемушки",
        date: "2017-10-24" 
      }, {
        storeName: "на Алеутской",
        date: "2017-10-28" 
      },{
        storeName: "в ТЦ Максим",
        date: "2017-10-24" 
      }, {
        storeName: "на Гоголя",
        date: "2017-10-28" 
      },{
        storeName: "на Вилкова",
        date: "2017-10-28" 
      }
      ]
    }, 

    {
      id: 20101509,
      name: "Телевизор LG 55UJ670V",
      img: "https://logunoveugene.github.io/catalog/img/3.png",
      desc:'<ul><li>планшет 9.7", 2048x1536, TFT IPS</li><li>встроенная память 32 Гб, без слота для карт памяти</li><li>iOS, ОЗУ 2 Гб, процессор Apple A9</li><li>Wi-Fi, Bluetooth, NFC</li><li>камера 15 Мп.</li></ul>',
      oldPrice: 19860,
      price: 18800,
      discount:0,
      creditprice:0,
      rate:0,
      rateCount:0,
      amount:"Забрать в 6 магазинах сегодня",
      actions:[{
        actionName: "Цена снижена",
        actionType: "sale",
        actionDesc:"SALE - Акция с отображением цены со скидкой и без, а также размером выгоды",
        actionImg: "https://via.placeholder.com/60x60"

      },
        

      ],
      stores: [{
        storeName: "в ТЦ Черемушки",
        date: "2017-10-24" 
      }, {
        storeName: "на Алеутской",
        date: "2017-10-28" 
      },{
        storeName: "в ТЦ Максим",
        date: "2017-10-24" 
      }, {
        storeName: "на Гоголя",
        date: "2017-10-28" 
      },{
        storeName: "на Вилкова",
        date: "2017-10-28" 
      }
      ]
    },

    {
      id: 20101511,
      name: 'Телевизор Samsung UE55MU6100',
      img: "https://logunoveugene.github.io/catalog/img/9.png",
      desc:'<ul><li>планшет 9.7", 2048x1536, TFT IPS</li><li>встроенная память 32 Гб, без слота для карт памяти</li><li>iOS, ОЗУ 2 Гб, процессор Apple A9</li><li>Wi-Fi, Bluetooth, NFC</li><li>камера 15 Мп.</li></ul>',
      oldPrice: 0,
      price: 21800,
      discount:0,
      creditprice:0,
      rate:5,
      rateCount:3,
      amount:"Забрать в 6 магазинах сегодня",
     actions:0,
      stores: [{
        storeName: "в ТЦ Черемушки",
        date: "2017-10-24" 
      }, {
        storeName: "на Алеутской",
        date: "2017-10-28" 
      },{
        storeName: "в ТЦ Максим",
        date: "2017-10-24" 
      }, {
        storeName: "на Гоголя",
        date: "2017-10-28" 
      },{
        storeName: "на Вилкова",
        date: "2017-10-28" 
      }
      ]
    }, 

    {
      id: 20101512,
      name: 'Телевизор LG 32LH590U',
      img: "https://logunoveugene.github.io/catalog/img/5.png",
      desc:'<ul><li>планшет 9.7", 2048x1536, TFT IPS</li><li>встроенная память 32 Гб, без слота для карт памяти</li><li>iOS, ОЗУ 2 Гб, процессор Apple A9</li><li>Wi-Fi, Bluetooth, NFC</li><li>камера 15 Мп.</li></ul>',
      oldPrice: 0,
      price: 32990,
      discount:0,
      creditprice:3299,
      rate:4.5,
      rateCount:60,
      amount:"Забрать в 6 магазинах сегодня",
      actions:[{
        actionName: "Рассрочка 0%",
        actionType: "credit",
        actionDesc:"Только два дня на широкий ассортимент товаров действуют скидки до 50%!",
        actionImg: "https://via.placeholder.com/60x60"

      },
        

      ],
      stores: [{
        storeName: "в ТЦ Черемушки",
        date: "2017-10-24" 
      }, {
        storeName: "на Алеутской",
        date: "2017-10-28" 
      },{
        storeName: "в ТЦ Максим",
        date: "2017-10-24" 
      }, {
        storeName: "на Гоголя",
        date: "2017-10-28" 
      },{
        storeName: "на Вилкова",
        date: "2017-10-28" 
      }
      ]
    },
    {
      id: 20101512,
      name: 'Телевизор LG 43LJ519V',
      img: "https://logunoveugene.github.io/catalog/img/6.png",
      desc:'<ul><li>планшет 9.7", 2048x1536, TFT IPS</li><li>встроенная память 32 Гб, без слота для карт памяти</li><li>iOS, ОЗУ 2 Гб, процессор Apple A9</li><li>Wi-Fi, Bluetooth, NFC</li><li>камера 15 Мп.</li></ul>',
      oldPrice: 0,
      price: 32990,
      discount:0,
      creditprice:0,
      rate:4.5,
      rateCount:15,
      amount:"Забрать в 6 магазинах сегодня",
      actions:[{
        actionName: "Подарок за покупку",
        actionType: "gift",
        actionDesc:"GIFT - Подарочная акция",
        actionImg: "https://via.placeholder.com/60x60"

      },
        

      ],
      stores: [{
        storeName: "в ТЦ Черемушки",
        date: "2017-10-24" 
      }, {
        storeName: "на Алеутской",
        date: "2017-10-28" 
      },{
        storeName: "в ТЦ Максим",
        date: "2017-10-24" 
      }, {
        storeName: "на Гоголя",
        date: "2017-10-28" 
      },{
        storeName: "на Вилкова",
        date: "2017-10-28" 
      }
      ]
    },
    {
      id: 20101512,
      name: 'Телевизор LG OLED55E6V ',
      img: "https://logunoveugene.github.io/catalog/img/7.png",
      desc:'<ul><li>планшет 9.7", 2048x1536, TFT IPS</li><li>встроенная память 32 Гб, без слота для карт памяти</li><li>iOS, ОЗУ 2 Гб, процессор Apple A9</li><li>Wi-Fi, Bluetooth, NFC</li><li>камера 15 Мп.</li></ul>',
      oldPrice: 0,
      price: 86990,
      discount:0,
      creditprice:0,
      rate:4.5,
      rateCount:71,
      amount:"Забрать в 6 магазинах сегодня",
      actions:0,
      stores: [{
        storeName: "в ТЦ Черемушки",
        date: "2017-10-24" 
      }, {
        storeName: "на Алеутской",
        date: "2017-10-28" 
      },{
        storeName: "в ТЦ Максим",
        date: "2017-10-24" 
      }, {
        storeName: "на Гоголя",
        date: "2017-10-28" 
      },{
        storeName: "на Вилкова",
        date: "2017-10-28" 
      }
      ]
    },
    {
      id: 20101512,
      name: 'Телевизор Samsung QE55Q7CAM',
      img: "https://logunoveugene.github.io/catalog/img/8.png",
      desc:'<ul><li>планшет 9.7", 2048x1536, TFT IPS</li><li>встроенная память 32 Гб, без слота для карт памяти</li><li>iOS, ОЗУ 2 Гб, процессор Apple A9</li><li>Wi-Fi, Bluetooth, NFC</li><li>камера 15 Мп.</li></ul>',
      oldPrice: 0,
      price: 169990,
      discount:0,
      creditprice:0,
      rate:4.5,
      rateCount:8,
      amount:"Забрать в 6 магазинах сегодня",
        actions:0,
      stores: [{
        storeName: "в ТЦ Черемушки",
        date: "2017-10-24" 
      }, {
        storeName: "на Алеутской",
        date: "2017-10-28" 
      },{
        storeName: "в ТЦ Максим",
        date: "2017-10-24" 
      }, {
        storeName: "на Гоголя",
        date: "2017-10-28" 
      },{
        storeName: "на Вилкова",
        date: "2017-10-28" 
      }
      ]
    }


    ],
       cm: true,

  },
  methods: {
    switchsite: function() {
      this.cm = !this.cm;
    },

    quicklymodal: function() {
      $('#quick-product').modal('show')
    }
  },
    filters: {

        number: function(value) {
            return value.toLocaleString();
        }
    },



});
