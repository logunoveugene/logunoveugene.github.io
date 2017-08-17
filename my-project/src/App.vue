<template>
  <div id="app">
    <div class="container">
          <div class="row">
            <div class="col shrink hidden-md-down">
              <div class="border w-208 p-3">Фильтрs</div>
          </div>
          <div class="col">
              <div class="row">
              <div class="product-plate col-xl-3 col-lg-4 col-md-4 col-6 p-0 d-flex flex-column border p-3" v-for="(product, index) in products">
                    <div class="d-flex justify-content-center mb-4 img-wrap">
                      <div class="d-flex">
                        <img class="align-self-center poduct-img" :src="product.img" alt="">
                    </div>
                </div>
                <div class="mb-2">
                  <a href="">{{product.name}}</a>
              </div>
              <div class="mb-3">
                  <img src="https://i.snag.gy/dcObIh.jpg" alt=""></div>
                  <div class="h5 mb-4">47 300 р.</div>
                  <div class="mb-3">
                      <button type="button" class="btn btn-primary">В корзину</button>
                      <button type="button" class="btn btn-link">#</button>
                      <button type="button" class="btn btn-link">#</button>
                  </div>
                  <div class="small"><a href="">Забрать в 6 магазинах с 18 сен.</a></div>
              </div>
          </div>
      </div>
  </div>
</div>
  </div>
</template>

<script>

import  rate from './rate.vue'

export default {
  name: 'app',
  components: {
    rate
  },
  data() {
      return {
        products: [
    {
      id: 20101507,
      name: 'Ноутбук Apple MacBook 12" MJY32 Серый космос',
      img: "https://cdn.domotekhnika.ru/images/App/Models/Catalog/ProductImage/images/002/526/872/catalog_tile/12500525_1.jpg",
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
      img: "https://cdn.domotekhnika.ru/images/App/Models/Catalog/ProductImage/images/002/513/785/catalog_tile/31002347_1.jpg",
      price: 84800,
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
      id: 20101509,
      name: "Планшет Apple iPad 4G 128Gb Gold",
      img: "https://cdn.domotekhnika.ru/images/App/Models/Catalog/ProductImage/images/002/515/812/catalog_tile/31002388_1.jpg",
      price: 18800,
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
      id: 20101511,
      name: 'Холодильник Nissin Di466N ',
      img: "https://cdn.domotekhnika.ru/images/App/Models/Catalog/ProductImage/images/002/486/385/catalog_tile/31002090_1.jpg",
      price: 21800,
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
      name: 'Смартфон Sony VCT-R100 ',
      img: "https://cdn.domotekhnika.ru/images/App/Models/Catalog/ProductImage/images/002/513/681/catalog_tile/31000996_1.jpg",
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
    }


    ]
      }
    },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
