

Vue.config.devtools = true;

var kolich = new Vue({
  el: '#app',

  data: {
    
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


});
