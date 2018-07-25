
<template>
	<div class="post">
		<div class="post-image" >

			<div class="post-image__image-wrap" v-bind:style="{  backgroundImage: 'url(' +  post.img + ')'}" >
				<!-- <img class="post-image__image" :src="post.img" alt=""> -->
				<div class="post-image__gradient-wrap" v-bind:style="{ boxShadow: 'inset 0px 170px 100px -60px ' +  post.bgColor}" >
					<div class="post-image__info">



						<post-tag 
						:source="post.source"
						:format="post.format"
						:tags="post.tags" 
						:color="post.textColor"
						></post-tag>

						<div class="post__title  mb-3 h2" v-bind:style="{ textShadow: '0 2px 5px'+ post.bgColor, color: post.textColor }"><a href="#" v-bind:style="{ color: post.textColor }" class="link link--color-black">{{post.title}}</a></div>
						<div class="mt-auto">
							<post-info 
							:like="post.like"
							:comment="post.comment"
							:view="post.view" 
							></post-info>
						</div>

					</div>
				</div>
			</div>


		</div>

	</div>
</template>

<script>
	import postInfo from './post-info.vue'
	import postTag from './post-tag.vue'


	export default {
		components: {
			postInfo,
			postTag
		},
		props: {
			post: {
				type: Object,
				default: function () {
					return { 
						autor: "",
						comment: "",
						date: "",
						format: "",
						img: "",
						isLocked: "",
						like: "",
						position: "",
						source: "",
						tags: "",
						teaser: "",
						textColor: "",
						bgColor: "",
						title: "",
						view: ""
					}
				}
			}
		},

		data: function() {
			return {

			}
		},
		computed: {

			colorimg: function () {

				return true
			}
		} 



	}
</script>

<style>
.post-image{
	display: flex;
	height: 100%;
}
.post-image__image-wrap{
	overflow: hidden;
	border-radius: .5rem;
	position: relative;
	width: 100%;
	max-width: 100%;
	height: auto;
	background-position: center bottom;
	background-repeat: no-repeat;
	background-size: cover;

}

/*@media (max-width: 768px){
	.post-image__image-wrap{
		background-position: center  ;
	}
}*/

.post-image__gradient-wrap{
	padding: 2rem;
	width: 100%;
	height:100%;
}

.post-image__info{

	display: flex;
	flex-direction: column;
	height: 100%;
	min-height: 230px;
}
.post-image__tags{
	font-size: 11px;
	text-transform: uppercase; 
	display: flex;
	margin-bottom: 0.5rem;
	flex-wrap: wrap;

}



</style>