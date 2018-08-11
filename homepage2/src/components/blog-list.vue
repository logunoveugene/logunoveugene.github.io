<template>
	<div class="blog__wrap">
		<div class="blog__item">
			<post-blog-img :post="review[0]"></post-blog-img>
		</div>
		<div class="blog__item">
			<post-blog-img :post="review[1]"></post-blog-img>

		</div>
		<div class="blog__item">
			<post-blog-img :post="review[2]"></post-blog-img>
		</div>

		<div class="blog__item">
			<post-blog-img :post="review[3]"></post-blog-img>
		</div>
		<div class="blog__item">
			<post-blog-img :post="review[4]"></post-blog-img>

		</div>
		<div class="blog__item">
			<post-blog-img :post="review[5]"></post-blog-img>
		</div>
		<div class="blog__item">
			<post-blog-img :post="review[0]"></post-blog-img>
		</div>
		<div class="blog__item">
			<post-blog-img :post="review[1]"></post-blog-img>
		</div>
	</div>

</template>

<script>



import postBlogImg from './post-blog-img.vue'


export default {
	components: {
		postBlogImg
	},
	props: {
		review: {
			type: null

		}
	},

	data: function() {
		return {

		}
	},
	computed: {

	} 



}
</script>

<style>
.post{
	padding-bottom: 2rem;
	height: 100%;
}


.post-blog{
	padding-bottom: 20px;
	height: 100%;
}

.blog__wrap{
	-webkit-column-count: 1;
	-moz-column-count: 1;
	column-count: 1;
	-webkit-column-gap: 40px;
	-moz-column-gap: 40px;
	column-gap: 40px;
	orphans: 1;
	widows: 1;
}
@media (min-width: 768px){
	.blog__wrap{
		-webkit-column-count: 2;
		-moz-column-count: 2;
		column-count: 2;
		-webkit-column-gap: 32px;
		-moz-column-gap: 32px;
		column-gap: 32px;
		orphans: 1;
		widows: 1;
	}
}



@media (min-width: 992px){
	.blog__wrap{
		-webkit-column-count: 3;
		-moz-column-count: 3;
		column-count: 3;
		-webkit-column-gap: 20px;
		-moz-column-gap: 20px;
		column-gap: 20px;
		orphans: 1;
		widows: 1;
	}
}

@media (min-width: 1200px){
	.blog__wrap{
		-webkit-column-count: 4;
		-moz-column-count: 4;
		column-count: 4;
		-webkit-column-gap: 20px;
		-moz-column-gap: 20px;
		column-gap: 20px;
		orphans: 1;
		widows: 1;
	}
}




.blog__item{
	display: inline-block;
	width: 100%
}
</style>