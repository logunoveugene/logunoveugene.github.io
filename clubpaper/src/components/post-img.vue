
<template>
	<div class="post">
		<div class="post-image" >
			<div class="post-image__image-wrap">
				<img class="post-image__image" :src="post.img" alt="">


				<div class="post-image__info">
					<post-tag 
					:source="post.source"
					:format="post.format"
					:tags="post.tags" 
					></post-tag>

					<div class="post__title  mb-3 h2">{{post.title}}</div>
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
.post-image__image-wrap{
	overflow: hidden;
	border-radius: .5rem;
	position: relative;

}
.post-image__image{
	width: 100%;
	max-width: 100%;
	height: auto;

}
.post-image__info{
	position: absolute;
	top: 2rem;
	left: 2rem;
	display: flex;
	flex-direction: column;
	width: calc(100% - 4rem);
	height: calc(100% - 4rem);
}
.post-image__tags{
	font-size: 11px;
	text-transform: uppercase; 
	display: flex;
	margin-bottom: 0.5rem;
	flex-wrap: wrap;

}



</style>