<template>
<div class="productList ">

<div class="media mb-3" v-for="(product, index) in product">
<img class="d-flex mr-3 product-photo" :src="product.productImage" :alt="product.productName">
<div class="media-body">
<h6 class="mt-0 mb-1">{{product.productName}}  {{product.productPrice*product.productAmount}} </h6> 
<div class="service" v-for="(service, index) in product.productService"> {{service.serviceName}}  </div>
<counter v-bind:amount="product.productAmount" @amountChanged="product.productAmount = $event"></counter>
</div>
<button @click="del(index)">x</button>
</div>
</div>
</template>


<script>
import  counter from './counter.vue'
export default {
	name: 'productList',
	components: {
    	counter

  	},
	data () {
		return {
			product:[
			{   productName: 'Смартфон Apple iPhone 7 Plus 128GB MN4P2RU Silver',
			productId: 485648,
			productImage: 'https://cdn.domotekhnika.ru/images/App/Models/Catalog/ProductImage/images/002/616/377/catalog_tile/30102377_1.jpg',
			productPrice: 26000,
			productAmount: 7,
			productService: [
			{
				serviceName: 'Базовая настройка смартфона',
				servicePrice: 800,
				serviceAmount: 1,
				serviceTotal: '',
				serviceDesc: 'Описание услуги Базовая настройка смартфона'
			},
			{
				serviceName: 'Комплексная настройка смартфона',
				servicePrice: 1500,
				serviceAmount: 1,
				serviceTotal: '',
				serviceDesc: 'Описание услуги Базовая настройка смартфона'
			},
			]
		},
		{   productName: 'Стиральная машина Candy GSF4 137TWC1',
		productId: 4085648,
		productImage: 'https://cdn.domotekhnika.ru/images/App/Models/Catalog/ProductImage/images/002/591/191/catalog_tile/20301980_1.jpg',
		productPrice: 26000,
		productAmount: 1,
		productService: ''
	},
	{   productName: 'Пылесос Dyson DC52 Animal Complete',
	productId: 4085648,
	productImage: 'https://cdn.domotekhnika.ru/images/App/Models/Catalog/ProductImage/images/002/408/595/catalog_tile/20501210_1.jpg',
	productPrice: 26000,
	productAmount: 1,
	productService: ''
},

]
}
},
methods:{
	del: function(index) {
		this.product.splice(index,1);
	}
},
computed: {
            productTotal:  function (index) {
                this.productTotal=this.product.productAmount*this.product.productPrice;

            }
        }
}
</script>

<style lang="scss">
.product-photo{
	width: 60px;
    height: 60px;
    object-fit: contain;
}
</style>
