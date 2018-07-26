<template>
	<div class="post">
		<div class="post-lock" >
			<div class="post-lock__info">
				<post-tag 
				:source="post.source"
				:format="post.format"
				:tags="post.tags" 
				></post-tag>

				<div class="post-lock__title"><a href="#" class="link link--color-black">{{post.title}}</a></div>


				<post-info 
				:like="post.like"
				:comment="post.comment"
				:view="post.view" 
				></post-info>
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
		}


	}
</script>

<style>
.post-lock{
	background: #FFFFFF;
	border: 5px solid #eee;
	border-radius: 8px;
	height: 100%;
	display: flex;
	align-items: center;
	padding: 2rem;

}

.post-lock__info{
	display: flex;
	flex-direction: column;
	text-align: center;
	align-items: center;
	height: auto;
}

.post-lock__title{
	font-size: 36px;
	font-weight: 700;
	line-height: 42px;
	margin-bottom: 1.5rem;
	/*	width: calc(100% - 4rem)*/
}

@media (max-width: 768px){
	.post-lock__title{
		font-size: 28px;
		line-height: 34px;
	}
}


</style>