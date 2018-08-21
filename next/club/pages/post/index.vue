<template>
	<ul>
		<li  v-for="post in posts" :key="post.id">{{post.title}}
				<nuxt-link :to="{path:'/post/'+ post.id }">ьщку</nuxt-link>	
		</li>
	</ul>
</template>

<script>

import axios from 'axios'
export default {
  async asyncData() {
    const { data } = await axios.get(`https://club-paper.firebaseio.com/digest.json`)
    return { posts: data }
  }
   }
</script>

