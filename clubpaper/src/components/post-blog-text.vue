<template>
	<div class="post-blog">
		<div class="post-blog-text">
			<post-tag  class="justify-content-center" :source="post.source"
			:format="post.format"
			:tags="post.tags" 
			></post-tag>

			<div class="post-blog-text__title  mb-3 h2"><a href="#" class="link link--color-black">{{post.title}}</a></div>
			<div class="small mb-3">
				Автор: <a class="link link--color-blue mr-2" href="#">{{post.autor}}</a> {{post.date | fdate}}
			</div>
			<post-teaser
			:teaser="post.teaser">
			</post-teaser>

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
	import postTeaser from './post-teaser.vue'


	import dayjs from 'dayjs'
	import relativeTime from 'dayjs/plugin/relativeTime'
	import 'dayjs/locale/ru' 

	dayjs.locale('ru') 
	dayjs.extend(relativeTime)

	export default {
		components: {
			postInfo,
			postTag,
			postTeaser
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
filters: {
			fdate: function(value) {
				return dayjs().to(dayjs(value));
			}
		},
		data: function() {
			return {

			}
		}


	}
</script>

<style>
.post-blog-text{
	background: #fff;
	padding: 2.5rem 1.5rem 2rem 1.5rem;
	border-radius: .5rem;
	text-align: center;

}




</style>