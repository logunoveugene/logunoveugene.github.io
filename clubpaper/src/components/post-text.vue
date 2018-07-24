<template>
	<div class="post" >
		<div class="post-text">
			<post-tag 
			:source="post.source"
			:format="post.format"
			:tags="post.tags" 
			></post-tag>

			<div class="post-text__title mb-3 h2"><a href="#" class="link link--color-black">{{post.title}}</a></div>
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



</style>