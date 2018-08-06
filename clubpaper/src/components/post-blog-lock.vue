<template>
	<div class="post-blog">
		<div class="post-blog-lock" >
			<div class="post-blog-lock__image-wrap" v-bind:style="{  backgroundImage: 'url(' +  post.imgFull + ')'}" >
				<div class="post-blog-lock__gradient-wrap" v-bind:style="{ boxShadow: 'inset 0px 170px 100px -60px ' +  post.bgColor}" >
					<div class="post-blog-lock__info">

						<post-tag 
						:source="post.source"
						:format="post.format"
						:tags="post.tags" 
						></post-tag>

						<div class="post-blog-lock__title w-75 mb-3 h2"><a href="#" v-bind:style="{ color: post.textColor }" class="link link--color-black">{{post.title}}</a></div>
						<div class="small mb-3">
							Автор: <a class="link link--color-blue mr-2" href="#">{{post.autor}}</a> {{post.date | fdate}}
						</div>
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
						imgFull: "",
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

.post-blog-lock__image-wrap{
	overflow: hidden;
	border-radius: .5rem;
	position: relative;
	width: 100%;
	max-width: 100%;
	height: auto;
	min-height: 260px;
	background-position: center bottom;
	background-repeat: no-repeat;
	background-size: cover;
}

.post-blog-lock__gradient-wrap{
	padding: 2rem;
	width: 100%;
	height:100%;
}
.post-blog-lock{
	background: #fff;

	border-radius: .5rem;
	/*	border: 5px solid #FFA000;*/
}
.post-blog-lock__info{

	display: flex;
	flex-direction: column;
	height: 100%;
	min-height: 230px;
}



</style>