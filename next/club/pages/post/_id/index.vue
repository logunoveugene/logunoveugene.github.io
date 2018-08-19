<template>
	<div class="">
		<cm :info="post"></cm>
		<h1>{{ post.title }}</h1>
		<pre>{{ post.body }}</pre>
	</div>
</template>
<script>

import axios from 'axios'
import cm from '~/components/AppLogo.vue'


export default {
	components: {
		cm

	},
	async asyncData({ params }) {
		const { data } = await axios.get(`https://club-paper.firebaseio.com/digest/${params.id}.json`)
		return { post: data }
	},
	head() {
		return {
			title: this.post.title
		}
	}
}
</script>

