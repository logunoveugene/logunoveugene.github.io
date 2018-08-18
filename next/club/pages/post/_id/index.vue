<template>
<h1>{{post.title}} </h1>
</template>
<script>

import fetch from 'isomorphic-fetch'

export default {
async asyncData({ params }) {
	const responce =  await fetch('https://club-paper.firebaseio.com/digest/'+params.id+'.json');
	const post = await responce.json();
	return { post };
}
}
</script>