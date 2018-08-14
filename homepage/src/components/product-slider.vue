<template>
	<div class="product-swiper__wrap">

		<local-swiper class="product-swiper"  :options="productOption">
			<local-slide  v-for="(product, index) in slideinfo.product" :key="index">
				<div class="product-plate d-flex flex-column">
					<div class="product-plate__image-wrap">
						<img  :src="product.img" alt="" class="product-plate__image">
					</div>
					<div class="product-plate__link mb-2">
						<a href="" class="link link--color-grey">{{product.title}}</a>
					</div>
					<div class="product-plate__social d-flex align-items-center mb-2">
						<div class="product-plate__rating-wrap">
							<Rate :value="product.rating"  size='14px'   length="5" theme="#FEB909"></Rate> 
						</div>
						<div class="extrasmall ml-2">
							<a href="" class="link link--color-blue">{{product.reviewcount}}</a>
						</div>
						<!-- 	<div class="small"><div class="icon-chat-bubble"></div></div> -->
					</div>
					<div class="h3 mb-0">{{product.price | formatedNumber}} ₽</div>
				</div>
			</local-slide>
			<div class="sw-button-prev" slot="button-prev"><div class="icon-arrow-left pt-2"></div></div>
			<div class="sw-button-next" slot="button-next"><div class="icon-arrow-right pt-2"></div></div>

			<div class="swiper-scrollbar" slot="scrollbar"></div>
		</local-swiper>






	</div>

</template>

<script>
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	import 'swiper/dist/css/swiper.css'
	import Rate from 'vue-tiny-rate';
	export default {
		components: {
			LocalSwiper: swiper,
			LocalSlide: swiperSlide,
			Rate

		},
		props: {
			slideinfo: {
				type: Object,
				default: function () {
					return {}
				}
			}
		},

		data: function() {
			return {
				productOption: {
					slidesPerView: 4,
					spaceBetween: 30,
					observer: true,
					observeParents: true,
					breakpoints: {

						1200: {
							slidesPerView: 3,
							freeMode: true,
							spaceBetween: 30
						},
						768: {
							slidesPerView: 2,
							freeMode: true,
							spaceBetween: 20
						}
					},  
					navigation: {
						nextEl: '.sw-button-next',
						prevEl: '.sw-button-prev'
					},
					scrollbar: {
						el: '.swiper-scrollbar',
						hide: false
					}


				},

			}
		},
		filters: {

			formatedNumber: function(value) {
				return value.toLocaleString();
			}
		},

	}
</script>

<style>


.product-swipe{

	box-shadow: none;
	align-items: center;
	display: flex;
	margin-bottom: .25rem;

}

@media (max-width: 992px){
	.product-swiper{
		border-radius: .5rem;
		border: none;
		position: relative;
		box-shadow: 0 2px 4px 0 rgba(0,0,0,0.08);
		transition: .5s;
		overflow: hidden;
		background-color: #fff;
		padding: 1rem;

	}

	.product-swiper__wrap{
		padding: 0 10px 4px;

	}


}








</style>