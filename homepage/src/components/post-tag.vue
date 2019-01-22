<template>
	<div class="post__tags">
		<div class="post__tag-item" v-if="format != 'Текст'">
			<a href="#" class="link link--color-grey" v-bind:style="{ color: color }">{{format}}</a>
		</div>
		<div class="post__tag-item">
			<a href="#" class="link link--color-grey" v-bind:style="{ color: color }">{{source}}</a>
		</div>
		
		<div class="post__tag-item">
			<a href="#" class="link link--color-grey" v-bind:style="{ color: color }">{{tags}}</a>
		</div>
	</div>
</template>

<script>
	export default  {
		props: { 
			source: {
				type: null,
				default: ""
			},
			format: {
				type: null,
				default: ""
			},
			tags: {
				type: null,
				default: ""
			},
			color: {
				type: null,
				default: ""
			}
		},
		data: function() {
			return {

			}
		}
	}
</script>

<style>
.post__tags{
	font-size: 11px;
	text-transform: uppercase; 
	display: flex;
	margin-bottom: 0.5rem;
	flex-wrap: wrap;
}

.post__tag-item{
	white-space: nowrap;
	margin: 0 .5rem 0 0;


}

.post__tag-item:last-child{
	margin-right: 0;
}





</style>