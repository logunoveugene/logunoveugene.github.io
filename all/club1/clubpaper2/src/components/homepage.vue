<template>
	<div class="homepage">

		<div class="bottom-menu d-lg-none" v-scroll-spy-active v-scroll-spy-link>
			<a class="bottom-menu__item"  href="#digest">Дайджест</a>
			<a class="bottom-menu__item" href="#review">Обзоры</a>
			<a class="bottom-menu__item" href="#lifehack">Лайфхаки</a>
			<a class="bottom-menu__item" href="#discussion">Обсуждения</a>
		</div>
		<div v-scroll-spy>
			<div class="section" id="digest">
				<mainheader v-on:liveonp="$emit('liveon')" :live="live"></mainheader>


				<div class="container">
					<div class="row">
						<div class="col-12">
							<a href="#" class="layout__title-link">
								<div class="layout__title layout__title--orange">
									<div class="layout__title-text">Дайджест</div>
									<button class="layout__title-button">
										<span class="icon-arrow-right"></span>
									</button>
								</div>
								
							</a>
						</div>
					</div>
					<div class="row">
						<div class="col-12 col-md-6 col-lg-4">
							<post-half-img :post="digest[0]"></post-half-img>
						</div>
						<div class="col-12 col-md-6 col-lg-4">
							<post-img :post="digest[1]"></post-img> 
						</div>
						<div class="col-12 col-sm-12 col-lg-4">
							<div class="mt-lg-4">
								<post-text :post="digest[2]"></post-text >
							</div>
						</div>
					</div>
				</div>
				<div class="registr-promo layout--bg-grey" v-if="promoreg" >
					<div class="container py-4">
						<div class="py-3">
							<div class="d-flex mb-3 ">
								<div class="h2 mr-4 ">Вступай в ДНС клуб, у нас хорошо</div> 
								<div class="small d-none d-sm-block">
									<a href="#" class="link link--color-blue">Тур по сайту</a>
								</div>
								<button type="button " class="ml-auto close" v-on:click="promoreg = !promoreg" aria-label="Close">
									<span class="icon-close"></span>
								</button>
							</div>
							<div class="row ">
								<div class="col-12 col-lg-3">
									<div class="d-flex align-items-center mb-4 mb-lg-0">
										<div class="mr-3">
											<img src="https://i.snag.gy/Q5Hx9n.jpg" alt="">
										</div>
										<div class="benefit-item__info">
											<div class="small font-weight-bold">Читай – у нас есть что!</div>
											<div class="small">тысячи бомбическийх статей и обзоров </div>
										</div>
									</div>
								</div>
								<div class="col-12 col-lg-3">
									<div class="d-flex align-items-center mb-4 mb-lg-0">
										<div class="mr-3">
											<img src="https://i.snag.gy/FEPRhf.jpg" alt="">
										</div>
										<div class="benefit-item__info">
											<div class="small font-weight-bold">Пиши – стань звездой</div>
											<div class="small">публикуй обзоры, отвечай на вопросы</div>
										</div>
									</div>
								</div>
								<div class="col-12 col-lg-3">
									<div class="d-flex align-items-center mb-4 mb-lg-0">
										<div class="mr-3">
											<img src="https://i.snag.gy/XdjqO4.jpg" alt="">
										</div>
										<div class="benefit-item__info">
											<div class="small font-weight-bold">Получай награды</div>
											<div class="small">будь активным – прокачивай свой уровень</div>
										</div>
									</div>
								</div>
								<div class="col-12 col-lg-3">
									<div class="btn btn-block btn--color-blue">Вступить в Клуб</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="container">
					<div class="row">
						<div class="col-12 col-sm-12  col-lg-8">
							<post-lock :post="digest[3]">
							</post-lock> 
						</div>
						<div class="col-12 col-sm-6  col-lg-4">
							<post-half-img :post="digest[4]"></post-half-img>
						</div>

						<div class="col-12 col-sm-6  col-lg-4">
							<post-half-img :post="digest[5]" ></post-half-img>
						</div>
						<div class="col-12 col-sm-6  col-lg-4">
							<div class="mt-lg-4">
								<post-text :post="digest[6]"></post-text >
							</div>
						</div>
						<div class="col-12 col-sm-6  col-lg-4">
							<div class="mt-lg-4">
								<post-text :post="digest[7]"></post-text >
							</div>
						</div>
					</div>
				</div>
			</div>

			<div id="review"  class="layout--bg-blue  section">
				<div class="container">
					<div class="row pt-5">
						<div class="col-12">
							<a href="#" class="layout__title-link">
								<div class="layout__title layout__title--blue">
									<div class="layout__title-text">Обзоры</div>
									<button class="layout__title-button">
										<span class="icon-arrow-right"></span>
									</button>
								</div>
								
							</a>
						</div>
						<div class="col-12  col-lg-8">
							<div class="blog__item">
								<post-blog-lock :post="review[0]"></post-blog-lock>

							</div>
							<div class="row">
								<div class="col-12 col-md-6 col-lg-6">
									<div class="blog__item">
										<post-blog-img :post="review[2]"></post-blog-img>

									</div>
									<div class="blog__item">
										<post-blog-text :post="review[0]"></post-blog-text>
									</div>
								</div>
								<div class="col-12 col-md-6 col-lg-6">
									<div class="blog__item">
										<post-blog-text :post="review[3]"></post-blog-text>
									</div>
									<div class="blog__item">
										<post-blog-img :post="review[1]"></post-blog-img>

									</div>
								</div>

							</div>

						</div>

						<div class="col-12 col-md-12 col-lg-4">
							<div class="blog__item">
								<post-blog-text :post="review[4]"></post-blog-text>
							</div>
							<div class="blog__item">
								<post-blog-img :post="review[5]"></post-blog-img>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div id="lifehack" class="layout--hidden-content section">
				<div   class="container ">
					<div class="row pt-5">
						<div class="col-12">
							<a href="#" class="layout__title-link">
								<div class="layout__title layout__title--orange">
									<div class="layout__title-text">Лайфхаки</div>
									<button class="layout__title-button">
										<span class="icon-arrow-right"></span>
									</button>
								</div>
								
							</a>
						</div>
					</div>
					<div class="row mb-5">
						<div class="col-12">
							<swiper class="livehack-slider" :options="lifehackOption">

								<swiper-slide>
									<post-img :post="lifehack[0]"></post-img >
								</swiper-slide>

								<swiper-slide>
									<post-img  :post="lifehack[1]"></post-img >
								</swiper-slide>

								<swiper-slide>
									<post-img  :post="lifehack[2]"></post-img> 
								</swiper-slide>

								<swiper-slide>
									<post-img :post="lifehack[3]"></post-img >
								</swiper-slide>

								<swiper-slide>
									<post-img  :post="lifehack[4]" ></post-img>
								</swiper-slide>

								<swiper-slide>
									<post-img  :post="lifehack[5]"></post-img >
								</swiper-slide>

								<div class="swiper-pagination"  slot="pagination"></div>
								<div class="sw-button-prev" slot="button-prev"><div class="icon-arrow-left "></div></div>
								<div class="sw-button-next" slot="button-next"><div class="icon-arrow-right"></div></div>

							</swiper> 

						</div>
					</div>
				</div>
			</div>	
			<div id="discussion"  class="container section">
				<div class="row pt-5">
					<div class="col-12 col-md-12 col-lg-8">
						<a href="#" class="layout__title-link">
							<div class="layout__title layout__title--orange">
								<div class="layout__title-text">Обсуждения</div>
								<button class="layout__title-button"><span class="icon-arrow-right"></span></button>
							</div>
							
						</a>
						<div class="discussions">
							<div class="discussions__item" v-for="(discussion, index) in discussions">
								<div class="d-flex"> 
									<div class="discussions__img-wrap">
										<img :src="discussion.img" alt="" class="discussions__img">
									</div>
									<div class="discussions__info">
										<div class="discussions__ small mb-2">Автор: <a class="link link--color-blue mr-2" href="#">{{discussion.autor}}</a> {{discussion.date | fdate}}</div>
										<div class="discussions__title h2">
											<a href="#" class="link link--color-black">{{discussion.title}}</a>
										</div>
										<div class="discussions__source small mb-2">
											<a href="#" class="link link--color-grey">{{discussion.source}}</a>
										</div>
										<div class="discussions__teaser small mb-3">{{discussion.teaser}}</div>
										<div class="d-flex flex-wrap align-items-center">
											<post-info  class="mr-3 mb-3"
											:like="discussion.like"
											:comment="discussion.comment"
											:view="discussion.view" 
											:lastactivity="discussion.lastactivity" 
											></post-info>
											<a href="#" class="link link--color-blue small mb-3"> Ответить</a>
										</div>
									</div>
								</div>
								<div class="mt-4 mb-4" v-if="index=='0'" >
									<div class="bg-brightest-orange p-4">
										<div class="h1 ">Нужна помощь?</div>
										<div class="small mb-3">Найди ответ на любой вопрос о компьютерах,  электорнике или бытовой технике</div>
										<div class="d-flex align-items-center">
											<div class="btn btn--color-white mr-3 ">Задать вопрос</div>
											<div class="small">
												<a href="" class="link link--color-blue">О сервисе</a>
											</div>
										</div>

									</div>
								</div>


							</div>
						</div>

					</div>

					<div class="col-12 col-lg-4">
						<div class="row">

							<div class="col-12 col-md-6 col-lg-12 order-2 order-lg-1">
								<div class="card-block mb-4">
									<div class="card-block__body">
										<div class="h1 mb-3">Последние награды</div>
										<ul class="list-unstyled">
											<li class="media mb-3" v-for="(user, index) in userslevel">
												<img class="mr-3 img-60 rounded-circle " :src="user.img">
												<div class="media-body align-self-center">
													<div class="">
														<a href="#" class="link link--color-blue">{{user.name}}</a>
													</div>
													<div class="small">Достигнут {{user.rate}} уровень</div>
													<div class="small"> {{user.date | fdate}}</div>
												</div>
											</li>
										</ul>

										<button type="button" class="btn btn--color-white btn-block">Все награды</button>
									</div>
								</div>
							</div>
							<div class="col-12 col-md-6 col-lg-12 order-3 order-lg-2">
								<div class="card-block mb-4">
									<div class="card-block__body">
										<div class="h1 mb-3">Лидеры</div>
										<nav class="nav nav-pills nav-justified mb-4 small">
											<a class="pill-item link pill-item--active " href="#">Неделя</a>
											<a class="pill-item link" href="#">Месяц</a>
											<!-- <a class="pill-item link" href="#">Все время</a> -->
										</nav>
										<ul class="list-unstyled">

											<li class="media mb-3" v-for="(user, index) in topusers">
												<img class="mr-3 img-60 rounded-circle " :src="user.img">
												<div class="media-body align-self-center">
													<div class="">
														<a href="#" class="link link--color-blue">{{user.name}}</a>
													</div>
													<div class="small d-inline-block">{{user.count}} баллов</div>
													<div class="text-success small d-inline-block">+ {{user.up}}</div>
												</div>
											</li>
										</ul>
										<button type="button" class="btn btn--color-white btn-block">Весь список</button>
									</div>
								</div>
							</div>
							<div class="col-12 col-md-12 col-lg-12 order-1 order-lg-2">
								<div class="card-block mb-3">
									<div class="card-block__body">
										<div class="h1 mb-2">Результаты опроса</div>
										<div class="small mb-1">от 12 июня 2018г.</div>
										<div class="small mb-3">Какой гаджет вы считаете лучшим новогодним подарком?</div>
										<div class="mb-4">
											<div class="mb-2 " v-for="survey in surveys" >
												<div class=" d-flex justify-content-between">
													<div class="small pb-1">{{survey.title}}</div>
													<div class="small">{{survey.rate}}%</div>
												</div>
												<div class="poll-line" v-bind:style="{ width: survey.rate + '%'}"></div>
											</div>
										</div>
										<button type="button" class="btn btn--color-white btn-block">Все опросы</button>
									</div>
								</div>
							</div>
						</div>
					</div>


				</div>
			</div>
			<div class=" registr-promo layout--bg-grey " v-if="promoreg" >
				<div class="container py-4">
					<div class="py-3">
						<div class="d-flex mb-3">
							<div class="h2 mr-4">Вступай в ДНС клуб, у нас хорошо</div> 
							<div class="small d-none d-sm-block">
								<a href="#" class="link link--color-blue">Тур по сайту</a>
							</div>
							<button type="button" class="ml-auto close" v-on:click="promoreg = !promoreg" aria-label="Close">
								<span class="icon-close"></span>
							</button>
						</div>

						<div class="row ">
							<div class="col-12 col-lg-3">
								<div class="d-flex align-items-center mb-4 mb-lg-0">
									<div class="mr-3">
										<img src="https://i.snag.gy/Q5Hx9n.jpg" alt="">
									</div>
									<div class="benefit-item__info">
										<div class="small font-weight-bold">Читай – у нас есть что!</div>
										<div class="small">тысячи бомбическийх статей и обзоров </div>
									</div>
								</div>

							</div>
							<div class="col-12 col-lg-3">
								<div class="d-flex align-items-center mb-4 mb-lg-0">
									<div class="mr-3">
										<img src="https://i.snag.gy/FEPRhf.jpg" alt="">
									</div>
									<div class="benefit-item__info">
										<div class="small font-weight-bold">Пиши – стань звездой</div>
										<div class="small">публикуй обзоры, отвечай на вопросы</div>
									</div>
								</div>

							</div>
							<div class="col-12 col-lg-3">
								<div class="d-flex align-items-center mb-4 mb-lg-0">
									<div class="mr-3">
										<img src="https://i.snag.gy/XdjqO4.jpg" alt="">
									</div>
									<div class="benefit-item__info">
										<div class="small font-weight-bold">Получай награды</div>
										<div class="small">будь активным – прокачивай свой уровень</div>
									</div>
								</div>

							</div>
							<div class="col-12 col-lg-3">
								<div class="btn btn-block btn--color-blue">Вступить в Клуб</div>

							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		
	</div>

</template>

<script>


	import dayjs from 'dayjs'
	import relativeTime from 'dayjs/plugin/relativeTime'
	import 'dayjs/locale/ru' 

	dayjs.locale('ru') 
	dayjs.extend(relativeTime)


	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	import 'swiper/dist/css/swiper.css'


	import mainheader from './header.vue'
	import postHalfImg from './post-half-img.vue'
	import postImg from './post-img.vue'
	import postText from './post-text.vue'
	import postLock from './post-lock.vue'
	import postBlogImg from './post-blog-img.vue'
	import postBlogLock from './post-blog-lock.vue'
	import postBlogText from './post-blog-text.vue'
	import postInfo from './post-info.vue'

	export default {
		components: {
			mainheader,
			postHalfImg,
			postImg,
			postText,
			postLock,
			postBlogImg,
			postBlogLock,
			postBlogText,
			postInfo,
			swiper,
			swiperSlide


		},
		filters: {
			fdate: function(value) {
				return dayjs().to(dayjs(value));
			}
		},

		props: { 
			live: {
				type: null,
				default: "showlive"
			},
			digest :{
				type: null,
				default: ""
			},
			lifehack :{
				type: null,
				default: ""
			},
			discussions :{
				type: null,
				default: ""
			},
			lives :{
				type: null,
				default: ""
			},
			topusers :{
				type: null,
				default: ""
			},
			userslevel :{
				type: null,
				default: ""
			},
			surveys :{
				type: null,
				default: ""
			},
			review :{
				type: null,
				default: ""
			}
		},
		data: function() {
			return {
				lifehackOption: {
					slidesPerView: 3,
					spaceBetween: 40,
					pagination: {
						el: '.swiper-pagination',
						clickable: true
					},
					breakpoints: {
						992: {
							slidesPerView: 2,
							spaceBetween: 40,
							pagination: {
								el: '.swiper-pagination',
							},
						},
						768: {
							slidesPerView: 1,
							spaceBetween: 40
						}
					},
					navigation: {
						nextEl: '.sw-button-next',
						prevEl: '.sw-button-prev'
					}

				},
				promoreg:true
			}
		}
	}
</script>

<style>

</style>