<template>
	<div class="post-blog">
		<div class="post-blog-img" >
			<div class="post-blog-img__image-wrap">
				<img class="post-blog-img__image" :src="post.img" alt="">
			</div>
			<post-tag 
			:source="post.source"
			:format="post.format"
			:tags="post.tags" 
			></post-tag>

			<div class="post-blog-img__title  mb-3 h2">{{post.title}}</div>
			<div class="small mb-3">
				Автор: <a class="link link--color-blue" href="">{{post.autor}}</a>
			</div>
			<post-info 
			:like="post.like"
			:comment="post.comment"
			:view="post.view" 
			></post-info>
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
		}


	}
</script>

<style>
.post-blog-img{
	background: #fff;
	padding: 1rem;
	border-radius: .5rem;


}

.post-blog-img__image-wrap{
	overflow: hidden;
	border-radius: .5rem  .5rem 0 0;

	margin: -1rem -1rem 1rem -1rem;
}
.post-blog-img__image{
	width: 100%;
	max-width: 100%;
	height: auto;

}


</style>