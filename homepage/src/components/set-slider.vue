<template>
	<div class="">
		<local-swiper  class="sets-slider" :options="setsOption" >
			<local-slide  class="sets-slider__slide"  v-for="(slide, index) in slideinfo.set" :key="index" >
				<div class="mr-3">
					<img  :src="slide.img" alt="" class="sets-slider__img">
				</div>
				<div class="d-flex flex-column">
					<div class="mb-2 sets-slider__title">
						<div class="link link--color-grey">{{slide.title}}</div>
					</div>
					<div class="font-weight-bold  mb-0">от {{slide.price | formatedNumber}}  ₽</div>
				</div>
			</local-slide>
		</local-swiper>
	</div>

</template>

<script>
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	import 'swiper/dist/css/swiper.css'

	export default {
		components: {
			LocalSwiper: swiper,
			LocalSlide: swiperSlide,

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
				setsOption: {
					slidesPerView: 3,
					observer: true,
					observeParents: true,
					spaceBetween: 30,      
					navigation: {
						nextEl: '.sw-button-next',
						prevEl: '.sw-button-prev'
					},
					breakpoints: {
						1200: {
							slidesPerView: 2,
							spaceBetween: 20
						},
						992: {
							slidesPerView: 'auto',
							spaceBetween: 0
						}

					}
				}

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


.sets-slider__slide{

	box-shadow: none;
	align-items: center;
	display: flex;
	margin-bottom: .25rem;

}
.sets-slider__img{
		width: 100px;
		height: auto;
	}

@media (max-width: 992px){
	.sets-slider__slide{
		border-radius: .5rem;
		border: none;
		position: relative;
		box-shadow: 0 2px 4px 0 rgba(0,0,0,0.08);
		transition: .5s;
		overflow: hidden;
		background-color: #fff;
		padding: 1rem;
		margin-left: 10px;
		width: 260px;
		height: 120px;



	}
	.sets-slider__title {
		font-size: 14px;
	}

	

}




.sets-slider__title{
	line-height: 1.2
}






</style>