<template>
    <div class="post">
    <div class="post__image">
        <img class="img-fluid" :src="posts.img" alt="">
    </div>
     
     <div class="h2">{{posts.title}}</div>
     <post-info 
     :view="posts.view"
     :rating="posts.like"
     :comment="posts.comment"
     ></post-info>
     </div>
</div> 

</template>

<script>
var postInfo = require('vue!./post-info.vue')
module.exports = {
    components: {
        postInfo
    },
    props: ['posts'],
    data: function() {
        return {

        }
    }
}
</script>

<style>
.post{}

</style>