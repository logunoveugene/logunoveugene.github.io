<template>
	<div class="slider-wrap">

		я слайдер
	</div>

</template>

<script>
	//import postInfo from './post-info.vue'
	//import postTag from './post-tag.vue'

	export default {
		// components: {
		// 	postInfo,

		// },
		props: {
			post: {
				type: null
			}
		},



	}
	</script>

	<style>
	.slider-wrap{
		border-radius: .5rem;
		border: none;
		position: relative;
		box-shadow: 0 2px 4px 0 rgba(0,0,0,0.08);
		transition: .5s;
		overflow: hidden;
		padding: 1.5rem;
		background-color:  #fff;
	}

	@media (max-width: 992px){
		.slider-wrap{
			border-radius: 0;
			border: none;
			position: relative;
			box-shadow: none;
			overflow: hidden;
			padding: 0rem;
			margin: 0 -10px;
			background-color: inherit;
		}
	}

	</style>