<template>
	<div class="post-blog">
		<div class="post-blog-img" >


			<div class="post-blog-img__image-wrap d-flex flex-column"  v-bind:style="{  backgroundImage: 'url(' +  post.img + ')'}">
				<div class="post-blog-img__info-title  d-flex flex-column">	
					<post-tag  class="justify-content-center mt-auto post-blog-img__tag" :source="post.source"
					:format="post.format"
					:tags="post.tags" 
					></post-tag>

					<div class="post-blog-img__title mb-3 h2"><a href="#" class="link link--color-black">{{post.title}}</a></div>
				</div>
				<!-- 	<img class="post-blog-img__image" :src="post.img" alt=""> -->
			</div>
			
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
.post-blog-img{
	background: #fff;
	padding: 1.5rem 1.5rem 2rem 1.5rem;
	border-radius: .5rem;
	text-align: center;


}

.post-blog-img__image-wrap{
	overflow: hidden;
	border-radius: .5rem;
	position: relative;
	width: 100%;
	max-width: 100%;
	height: auto;
	background-position: center top;
	background-repeat: no-repeat;
	background-size: contain;
	min-height: 200px;
	
}

.post-blog-img__info-title{
	background: linear-gradient(to top, rgba(256,256,256,0.9) 35%, rgba(0,0,0,0) 80%);
	height: 200px;
}
.post-blog-img__image{
	width: auto;
	max-width: 100%;
	height: auto;

}
.post-blog-img__tag{
	text-shadow: 2px 0 4px #fff;

}

.post-blog-img__tag .post__tag-item{
		background: rgba(256,256,256,0.3);
}
</style>