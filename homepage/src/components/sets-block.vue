<template>
	<div class="slider-block overflow-layout ">
		<local-swiper class="tab-swiper mb-3 mb-lg-4" :options="tabswipe">
			<local-slide class="tab-swiper__slide">
				<ul class="nav nav--horizontal" >
					<li class="nav__link nav__link--horizontal"
					v-for="(tab, index) in tabs"
					v-bind:key="tab"
					v-on:click="currentTab = tab; curentIndex = index">
					<a class="link link--pill link--color-grey "
					:title="tab" 
					v-bind:class="[{ 'link--pill-active': currentTab === tab }]" >{{ tab }}</a>
				</li>
			</ul>

		</local-slide>
		<div class="tab-button-prev" slot="button-prev"></div>
			<div class="tab-button-next" slot="button-next"></div>
	</local-swiper>

	<keep-alive>
		<set-slider 
		:slideinfo="slide[curentIndex]"
		></set-slider>
	</keep-alive>
</div>
</template>

<script>

	import setSlider from './set-slider.vue'

	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	import 'swiper/dist/css/swiper.css'


	export default {

		components: {
			setSlider,
			LocalSwiper: swiper,
			LocalSlide: swiperSlide,
		},

		data: function() {
			return {
				currentTab: 'С собой в отпуск',
				curentIndex: 0,
				tabs: ['С собой в отпуск','Спасаемся от жары', 'Горячей воде быть!',  'Выходные на даче', 'Для топового ПК'],
				tabswipe: {

					preventClicks :true,
					preventClicksPropagation: true,
					slidesPerView: 'auto',
					slidesOffsetAfter: 1,
					navigation: {
						nextEl: '.tab-button-next',
						prevEl: '.tab-button-prev'
					},
					freeMode: true


				},

			}
		},


		props: {
			slide: {
				type: Array,
				default: function () {
					return ['label', 'value']
				}


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
		background-color: inherit;
		padding: 0;
		box-shadow: none;
		margin: 0 -10px;
	}
	.tab-swiper__slide{
		margin-left: 10px;
	}
}
</style>