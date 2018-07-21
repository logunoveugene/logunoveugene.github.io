<template>{{posts}}
   <div class="">
   <div class="h2">{{posts.title}}</div>
    <post-info></post-info>
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
.post-info {
    border: 1px solid #eee;
    border-radius: .25rem;
    padding: 0 .75rem;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-direction: row;
    flex-direction: row;
    display: -ms-inline-flexbox;
    display: inline-flex;
    background: #fff;
}
.post-info__rating{
    margin-right: 1.5rem;
    -ms-flex-align: center;
    align-items: center;
    display: -ms-flexbox;
    display: flex;
    color: #28a745;
    font-weight: 700;
}
.post-info__views{
    margin-right: 1.5rem;
    -ms-flex-align: center;
    align-items: center;
    display: -ms-flexbox;
    display: flex;
    color: #6c757d;
}
.post-info__comments{
    -ms-flex-align: center;
    align-items: center;
    display: -ms-flexbox;
    display: flex;
    color: #6c757d;
}

.post-info__icon{
    padding-top: .25rem;
    margin-right: .5rem;
}
.post-info__count{
    font-size: .875rem;
}

</style>