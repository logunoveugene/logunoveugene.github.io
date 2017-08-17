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
    
    products: [ 
    {
      id: 20101507,
      name: 'Ноутбук Apple MacBook 12" MJY32 Серый космос',
      img: "https://logunoveugene.github.io/catalog/img/1.png",
      oldPrice: 0,
      price: 54800,
      rate:4.5,
      rateCount:15,
      amount:"Забрать в 6 магазинах сегодня",
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
      name: 'Фотоаппарат Canon EOS 70D Kit [18-135STM]',
      img: "https://logunoveugene.github.io/catalog/img/2.png",
      oldPrice: 0,
      price: 84800,
      rate:3.1,
      rateCount:15,
      amount:"Забрать в 6 магазинах сегодня",
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
      name: "Планшет Apple iPad 4G 128Gb Gold",
      img: "https://logunoveugene.github.io/catalog/img/3.png",
      oldPrice: 19860,
      price: 18800,
      rate:1.5,
      rateCount:15,
      amount:"Забрать в 6 магазинах сегодня",
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
      name: 'Холодильник Nissin Di466N ',
      img: "https://logunoveugene.github.io/catalog/img/4.png",
      oldPrice: 33860,
      price: 21800,
      rate:5,
      rateCount:15,
      amount:"Забрать в 6 магазинах сегодня",
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
      name: 'Смартфон Sony VCT-R100 ',
      img: "https://logunoveugene.github.io/catalog/img/5.png",
      oldPrice: 0,
      price: 32990,
      rate:4.5,
      rateCount:15,
      amount:"Забрать в 6 магазинах сегодня",
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
      name: 'Обогреватель инфракрасный Timberk TCH Q1 800',
      img: "https://logunoveugene.github.io/catalog/img/6.png",
      oldPrice: 0,
      price: 32990,
      rate:4.5,
      rateCount:15,
      amount:"Забрать в 6 магазинах сегодня",
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
      oldPrice: 0,
      price: 86990,
      rate:4.5,
      rateCount:15,
      amount:"Забрать в 6 магазинах сегодня",
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
      oldPrice: 0,
      price: 169990,
      rate:4.5,
      rateCount:15,
      amount:"Забрать в 6 магазинах сегодня",
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
