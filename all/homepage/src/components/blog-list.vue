<template>
    <div class="blog__wrap row">

        <div class="col-12">
            <div class="row">
                <div class="blog__item col-12 col-md-6  align-self-stretch flex-fill mb-3">
                    <post-blog-lock :post="review[0]"></post-blog-lock>
                </div>
                <div class="blog__item col-12 col-md-3  align-self-stretch flex-fill mb-3">
                    <post-blog-img :post="review[1]"></post-blog-img>
                </div>
                <div class="blog__item col-12 col-md-3  align-self-stretch flex-fill mb-3">
                    <post-blog-img :post="review[2]"></post-blog-img>
                </div>
            </div>
        </div>


        <div class="col-12 col-md-3 ">
            <post-blog-img :post="review[4]"></post-blog-img>
        </div>
        <div class="col-12 col-md-3 ">
            <post-blog-img :post="review[3]"></post-blog-img>
         </div>
        <div class="col-12 col-md-3 ">
            <post-blog-img :post="review[4]"></post-blog-img>
        </div>
        <div class="col-12 col-md-3 ">
            <post-blog-img :post="review[3]"></post-blog-img>
        </div>


    </div>

</template>

<script>


    import postBlogText from './post-blog-text.vue'

    import postBlogImg from './post-blog-img.vue'
    import postBlogLock from './post-blog-lock.vue'

    export default {
        components: {
            postBlogImg,
            postBlogLock,
            postBlogText
        },
        props: {
            review: {
                type: null

            }
        },

        data: function () {
            return {}
        },
        computed: {}


    }
</script>

<style>
    .post-blog {
        margin-bottom: 1.5rem;
        -webkit-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);
        border-radius: .5rem;
        overflow: hidden;
        height: 100%;
    }

    .blog__wrap {
        margin-bottom: 2rem;
    }

    /*.post{
        padding-bottom: 2rem;
        height: 100%;
    }


    .post-blog{
        padding-bottom: 20px;
        height: 100%;
    }


    @media (min-width: 768px){
        .blog__wrap{
            -webkit-column-count: 2;
            -moz-column-count: 2;
            column-count: 2;
            -webkit-column-gap: 32px;
            -moz-column-gap: 32px;
            column-gap: 32px;
            orphans: 1;
            widows: 1;
        }
    }



    @media (min-width: 992px){
        .blog__wrap{
            -webkit-column-count: 3;
            -moz-column-count: 3;
            column-count: 3;
            -webkit-column-gap: 20px;
            -moz-column-gap: 20px;
            column-gap: 20px;
            orphans: 1;
            widows: 1;
        }
    }

    @media (min-width: 1200px){
        .blog__wrap{
            -webkit-column-count: 4;
            -moz-column-count: 4;
            column-count: 4;
            -webkit-column-gap: 20px;
            -moz-column-gap: 20px;
            column-gap: 20px;
            orphans: 1;
            widows: 1;
        }
    }




    */

    .blog__item {
        display: inline-block;
        width: 100%;

    }


</style>