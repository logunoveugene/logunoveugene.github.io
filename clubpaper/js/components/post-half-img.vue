<template>
    <div class="post">
        <img class="post__image" :src="posts.img" alt="">
        <div class="post__tags">
            <div class="link link--color-grey">{{posts.source}}</div>
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
.post__image{
    width: 100%;
    max-width: 100%;
    height: auto;
    margin-bottom: 1rem;
}
.post__tags{
    font-size: 11px;
    text-transform: uppercase; 
}

</style>