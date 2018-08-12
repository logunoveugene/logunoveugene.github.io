<template>
	<div class="">
		<div class="tab-content pb-2" id="pills-tabContent">
			<div class="tab-pane fade show active" id="hot" role="tabpanel" aria-labelledby="pills-home-tab">
				<local-swiper  class="sets-slider" :options="setsOption" >
					<local-slide  class="sets-slider__slide" >
						<div  v-ripple class="card h-100">
							<div class="card-body align-items-center  d-flex">
								<div class="d-flex align-items-center" >
									<img  src="" alt="" class="sets-slider__img mr-3">
									<div class="d-flex flex-column">
										<div class="mb-2 sets-slider__title">
											<div class="link link--color-grey">Name</div>
										</div>
										<div class="font-weight-bold  mb-0">от  ₽</div>
									</div>
								</div>
							</div>
						</div>
					</local-slide>
					<local-slide  class="sets-slider__slide" >
						<div  v-ripple class="card h-100">
							<div class="card-body align-items-center  d-flex">
								<div class="d-flex align-items-center" >
									<img  src="" alt="" class="sets-slider__img mr-3">
									<div class="d-flex flex-column">
										<div class="mb-2 sets-slider__title">
											<div class="link link--color-grey">Name2</div>
										</div>
										<div class="font-weight-bold  mb-0">от  ₽</div>
									</div>
								</div>
							</div>
						</div>
					</local-slide>

				</local-swiper>
			</div>
		</div>
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

	},
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

			992: {
				slidesPerView: 'auto',
				spaceBetween: 0
			},
			768: {
				slidesPerView: 'auto',
				spaceBetween: 0
			}

		}
	}



}
</script>

<style>


</style>