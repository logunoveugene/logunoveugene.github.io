<template>
    <div class="post" >
    	<div class="post__image-wrap">
    		<img class="post__image" :src="post.img" alt="">
    	</div>
        <div class="post__tags">
            <div class="post__tag-item">
                <a href="#" class="link link--color-grey">{{post.source}}</a>
            </div>
            <div class="post__tag-item">
                <a href="#" class="link link--color-grey">{{post.format}}</a>
            </div>
            <div class="post__tag-item">
                <a href="#" class="link link--color-grey">{{post.tags}}</a>
            </div>
            
        </div>
        <div class="post__title  mb-3 h2">{{post.title}}</div>
        <post-info 
            :like="post.like"
            :comment="post.comment"
            :view="post.view" 
        ></post-info>
    </div>


</template>

<script>
import postInfo from './post-info.vue'
export default {
    components: {
        postInfo
    },
    props: {
        post: {
          type: Object,
          default: function () {
            return { 
                autor: "",
                comment: "",
                date: "",
                format: "",
                img: "",
                isLocked: "",
                like: "",
                position: "",
                source: "",
                tags: "",
                teaser: "",
                textColor: "",
                title: "",
                view: ""
            }
        }
    }
},

data: function() {
    return {

    }
}


}
</script>

<style>
.post__image-wrap{
	overflow: hidden;
	border-radius: .5rem;
	    margin-bottom: 1rem;
}
.post__image{
    width: 100%;
    max-width: 100%;
    height: auto;

}
.post__tags{
    font-size: 11px;
    text-transform: uppercase; 
    display: flex;
    margin-bottom: 0.5rem;
}
.post__tag-item{
    margin-right: 1rem;
}

</style>