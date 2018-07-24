<template>
	<div class="post-blog">
		<div class="post-blog-lock" >
			<div class="post-blog-lock__image-wrap">
				<img class="post-blog-lock__image" :src="post.img" alt="">
			</div>
			<post-tag  class="justify-content-center" :source="post.source"
			:format="post.format"
			:tags="post.tags" 
			></post-tag>

			<div class="post-blog-lock__title  mb-3 h2"><a href="#" class="link link--color-black">{{post.title}}</a></div>
			<div class="small mb-3">
				Автор: <a class="link link--color-blue" href="#">{{post.autor}}</a>
			</div>
			<div class="small mb-3">{{post.teaser}}</div>


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
.post-blog-lock{
	background: #fff;
	padding: 1.5rem;
	border-radius: .5rem;
	text-align: center;
	border: 5px solid #FFA000;
	box-shadow: 0 5px 30px 0 rgba(0,0,0,0.08);


}

.post-blog-lock__image-wrap{
	overflow: hidden;
	border-radius: .5rem  .5rem 0 0;
	margin-bottom: 1.5rem;
	
}
.post-blog-lock__image{
	width: auto;
	max-width: 100%;
	height: auto;

}


</style>