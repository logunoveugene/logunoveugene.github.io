<template>
	<div class="slider-block overflow-layout  flex-grow-1 ">
		<local-swiper class="tab-swiper mb-3 mb-lg-4" :options="tabswipe">
			<local-slide class="tab-swiper__slide">
				<ul class="nav nav--horizontal " >
					<li class="nav__link nav__link--horizontal"
					v-for="(tab, index) in tabs"
					v-bind:key="tab"
					v-on:click="currentTab = tab; curentIndex = index"
					>
					<a class="link link--pill link--color-grey " 
					v-bind:class="[{ 'link--pill-active': currentTab === tab }]"
					:title="tab"  >{{ tab }}</a>
				</li>
			</ul>

		</local-slide>
		<div class="tab-button-prev" slot="button-prev"></div>
			<div class="tab-button-next" slot="button-next"></div>
	</local-swiper>

	<keep-alive>
		<product-slider
		:slideinfo="slide[curentIndex] "
		:activetab ="currentTab   "
		></product-slider>
	</keep-alive>
</div>
</template>

<script>

	import productSlider from './product-slider.vue'

	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	import 'swiper/dist/css/swiper.css'


	export default {

		components: {
			productSlider,
			LocalSwiper: swiper,
			LocalSlide: swiperSlide,
		},
		props: {
			slide: {
				type: Array,
				default: function () {
					return ['label', 'value']
				}


			}
		},

		data: function() {
			return {
				currentTab: 'Популярные',
				curentIndex: 0,
				tabs: ['Популярные','Обсуждения','Хиты продаж'],
				tabswipe: {

					preventClicks :true,
					preventClicksPropagation: true,
					watchOverflow: true,
					slidesPerView: 'auto',
					slidesOffsetAfter: 1,
					navigation: {
						nextEl: '.tab-button-next',
						prevEl: '.tab-button-prev'
					},
					freeMode: true


				},

			}
		}









	}
</script>

<style>


.slider-block{
	border-radius: .5rem;
	position: relative;
	box-shadow: 0 1px 2px 0 rgba(0,0,0,0.16);
	transition: .5s;
	overflow: hidden;
	background-color: #fff;
	padding: 1.5rem;
}


@media (max-width: 992px){
	.slider-block{
		border-radius: 0;
		background-color: inherit;
		padding: 0;
		box-shadow: none;
	}
	.tab-swiper__slide{
		margin-left: 10px;
	}
}
</style>