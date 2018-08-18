<template>
	<ul>
		<li  v-for="(post, index) in posts" :key="index">{{post.title}}
				<nuxt-link :to="{path:'/post/'+ post.id }">ьщку</nuxt-link>	
		</li>
	</ul>
</template>

<script>
import fetch from 'isomorphic-fetch'

export default {
async asyncData() {
	const responce =  await fetch('https://club-paper.firebaseio.com/digest.json?orderBy="$key"&limitToLast=3');
	const posts = await responce.json();
	return { posts };
}
}
</script>

