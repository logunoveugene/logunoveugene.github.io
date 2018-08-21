<template>
  <section class="container">
    <ul>
      <li v-for="post in posts" :key="post.id">
           {{post.title}}
      </li>
    </ul>

    
    <div>
     <nuxt-link to="/post">Посты</nuxt-link>
   </div>

 </section>
</template>

<script>

import axios from 'axios'

export default {
  async asyncData({ query, error }) {
    let [digest, live] = await Promise.all([
      axios.get(`https://club-paper.firebaseio.com/digest.json`),
      axios.get(`https://club-paper.firebaseio.com/live.json`),
      ])
    return {
     posts: digest.data,
     total: live.data
   }
 }
}
</script>

<style>

</style>

