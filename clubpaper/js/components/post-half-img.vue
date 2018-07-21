<template>
    <div class="post" >

        <div class="post__tags">
            <div class="link link--color-grey"></div>
        </div>
        <div class="h2"></div>
        <post-info 

        ></post-info>
    </div>
</div> 

</template>

<script>
var postInfo = require('./post-info.vue')
module.exports = {
    components: {
        postInfo
    },
   props:['post'],
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