<template>
	<div class="post">
		<div class="post-half" >
			<div class="post-half__image-wrap" v-bind:style="{ backgroundColor: post.bgColor,  backgroundImage: 'url(' +  post.img + ')'}" >
				
			</div>
			<post-tag 
			:source="post.source"
			:format="post.format"
			:tags="post.tags" 
			></post-tag>

			<div class="post-half__title  mb-3 h2"><a href="" class="link link--color-black">{{post.title}}</a></div>
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
.post-half__image-wrap{
	overflow: hidden;
	border-radius: .5rem;
	margin-bottom: 1rem;
	width: 100%;
	max-width: 100%;
	height: auto;
	min-height: 170px;
	background-position: center  bottom;
	background-repeat: no-repeat;
	background-size: cover;
}

@media (max-width: 768px){
.post-half__image-wrap{
    background-position: center  ;
}
}


</style>