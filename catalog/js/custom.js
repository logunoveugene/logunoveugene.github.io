  

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

  });

  $(document).on('click', function(event) {
    // choose to close all popovers if clicking on anything but a popover element.
    if (  ( $(event.target).data('toggle') === "tooltip" /* the trigger buttons */ 
          || $(event.target).hasClass('tooltip') /* the popup menu */
          || $(event.target).parents('.tooltip[role="tooltip"]').length /* this one is a bit fiddly but also catches child elements of the popup menu. */ )) {
      
      
    }
  });



 $(function () {
      $('[data-toggle="tooltip"]').tooltip({
        template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrowe"></div><div class="tooltip-inner"></div></div>',
        trigger: 'click',
        container: 'body',
        constraints: [
        {
          to: 'scrollParent',
          pin: true
        },
        ]}
        )
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
    <input type="hidden" :name="name" :value="rate" v-model="rate" :required="required">
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
    products: [ 
    {
      id: 20101507,
      name: 'Телевизор BBK 32LEM-1018/T2C',
      img: "https://logunoveugene.github.io/catalog/img/1.png",
      desc:'<ul><li>планшет 9.7", 2048x1536, TFT IPS</li><li>встроенная память 32 Гб, без слота для карт памяти</li><li>iOS, ОЗУ 2 Гб, процессор Apple A9</li><li>Wi-Fi, Bluetooth, NFC</li><li>камера 15 Мп.</li></ul>',
      oldPrice: 0,
      price: 54800,
      discount:0,
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
      rate:3.1,
      rateCount:15,
      amount:"Забрать в 6 магазинах сегодня",
      actions:[{
        actionName: "Летние скидки",
        actionType: "sale",
        actionDesc:"Описание"
      },
      {
        actionName: "Подарок за покупку",
        actionType: "gift",
        actionDesc:"Описание2"
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
      rate:0,
      rateCount:0,
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
      id: 20101511,
      name: 'Телевизор Samsung UE55MU6100',
      img: "https://logunoveugene.github.io/catalog/img/9.png",
      desc:'<ul><li>планшет 9.7", 2048x1536, TFT IPS</li><li>встроенная память 32 Гб, без слота для карт памяти</li><li>iOS, ОЗУ 2 Гб, процессор Apple A9</li><li>Wi-Fi, Bluetooth, NFC</li><li>камера 15 Мп.</li></ul>',
      oldPrice: 33860,
      price: 21800,
      discount:0,
      rate:5,
      rateCount:3,
      amount:"Забрать в 6 магазинах сегодня",
      actions:[{
        actionName: "Подарок за покупку",
        actionType: "gift",
        actionDesc:"ОПисание3"
      }],
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
      rate:4.5,
      rateCount:60,
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
      name: 'Телевизор LG 43LJ519V',
      img: "https://logunoveugene.github.io/catalog/img/6.png",
      desc:'<ul><li>планшет 9.7", 2048x1536, TFT IPS</li><li>встроенная память 32 Гб, без слота для карт памяти</li><li>iOS, ОЗУ 2 Гб, процессор Apple A9</li><li>Wi-Fi, Bluetooth, NFC</li><li>камера 15 Мп.</li></ul>',
      oldPrice: 0,
      price: 32990,
      discount:0,
      rate:4.5,
      rateCount:15,
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
      name: 'Телевизор LG OLED55E6V ',
      img: "https://logunoveugene.github.io/catalog/img/7.png",
      desc:'<ul><li>планшет 9.7", 2048x1536, TFT IPS</li><li>встроенная память 32 Гб, без слота для карт памяти</li><li>iOS, ОЗУ 2 Гб, процессор Apple A9</li><li>Wi-Fi, Bluetooth, NFC</li><li>камера 15 Мп.</li></ul>',
      oldPrice: 0,
      price: 86990,
      discount:0,
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
      discount:1800,
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


    ]

  }


});
