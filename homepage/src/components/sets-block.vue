<template>
	<div class="slider-block overflow-layout ">
		<local-swiper class="tab-swiper mb-3 mb-lg-4" :options="tabswipe">
			<local-slide class="tab-swiper__slide">
				<ul class="nav nav--horizontal small" >
					<li class="nav__link nav__link--horizontal"
					v-for="(tab, index) in tabs"
					v-bind:key="tab"
					v-on:click="currentTab = tab; curentIndex = index">
					<a class="link link--pill link--color-grey " 
					v-bind:class="[{ 'link--pill-active': currentTab === tab }]" >{{ tab }}</a>
				</li>
			</ul>

		</local-slide>
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
				currentTab: 'Спасаемся от жары',
				curentIndex: 0,
				tabs: ['Спасаемся от жары', 'Горячей воде быть!', 'С собой в отпуск', 'Выходные на даче', 'Для топового ПК'],
				tabswipe: {

					preventClicks :true,
					preventClicksPropagation: true,
					slidesPerView: 'auto',
					slidesOffsetAfter: 1,
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
	box-shadow: 0 2px 4px 0 rgba(0,0,0,0.08);
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