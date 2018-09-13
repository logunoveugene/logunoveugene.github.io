<template>
	<div class="slider-block overflow-layout ">
		<div class="tab-swiper__slide mb-3 mt-2">
			<ul class="nav nav--horizontal " >
				<li class="nav__link nav__link--horizontal"
				v-for="(tab, index) in tabs"
				v-bind:key="tab"
				v-on:click="currentTab = tab; curentIndex = index">

				<a class="link link--pill link--color-grey " 
				v-bind:class="[{ 'link--pill-active': currentTab === tab }]" >{{ tab }}</a>
			</li>
		</ul>
	</div>

	<div class="bg-white">
		<div v-ripple class="new__item d-flex align-items-center justify-content-between" v-for="(post, index) in curentData" :key="index">
			<div class="py-2 px-3"> 
				<div class="py-1 small">{{post.title}}</div>
				<div class="extrasmall text-secondary">{{post.date}}</div>
			</div>
			<div class="icon-arrow-right pt-1 pr-2"></div>
		</div>
	</div>




</div>
</template>

<script>




	export default {

		data: function() {
			return {
				currentTab: 'Новости',
				curentIndex: 0,
				tabs: ['Новости', 'Обзоры'],
			}
		},


		props: {
			rewiewslist: {
				type: null
			},
			mynewslist: {
				type: null
			}

		},
		computed: {
			currentTabComponent: function () {
				return 'tab' + this.curentIndex
			},

			curentData: function () {
				if (this.curentIndex == 0) {
					return this.mynewslist
				}
				if (this.curentIndex == 1) {
					return this.rewiewslist
				}

			},
		}

	}
</script>

<style>


.new__item {
	border-bottom: 1px solid #eee;
}

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