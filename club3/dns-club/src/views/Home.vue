<template>
    <div class="home">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <a href="#" class="layout__title-link">
                        <div class="layout__title layout__title--orange">
                            <div class="layout__title-text">Дайджест</div>
                            <button class="layout__title-button">
                                <span class="icon-arrow-right"></span>
                            </button>
                        </div>
                    </a>
                </div>
            </div>
            <div class="row">
                <div class="col-12 col-md-6 col-lg-4">
                    <post-half-img :post="digest[0]"></post-half-img>
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                    <post-img :post="digest[2]"></post-img>
                </div>
                <div class="col-12 col-sm-12 col-lg-4">
                    <div class="mt-lg-4">
                        <post-text :post="digest[1]"></post-text>
                    </div>
                </div>
            </div>




        </div>
        <div class="container">
            <div class="row">
                <div class="col-12 col-sm-12  col-lg-8">
                    <post-wide :post="digest[4]"></post-wide>
                </div>
                <div class="col-12 col-sm-6  col-lg-4">
                    <post-half-img :post="digest[1]"></post-half-img>
                </div>

                <div class="col-12 col-sm-6  col-lg-4">
                    <post-half-img :post="digest[3]" ></post-half-img>
                </div>
                <div class="col-12 col-sm-6  col-lg-4">
                    <div class="mt-lg-4">
                        <post-text :post="digest[6]"></post-text >
                    </div>
                </div>
                <div class="col-12 col-sm-6  col-lg-4">
                    <div class="mt-lg-4">

                        <post-text :post="digest[7]"></post-text >
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    // @ is an alias to /src
    import postHalfImg from '@/components/post-block/post-half-img.vue'
    import postImg from '@/components/post-block/post-img.vue'
    import postText from '@/components/post-block/post-text.vue'
    import postWide from '@/components/post-block/post-wide.vue'

    export default {
        name: 'home',
        components:{
            postHalfImg,
            postImg,
            postText,
            postWide
        },
        data: function() {
            return {
                digest:[],
                error:[]
            }
        },
        created(){
            this.axios.get('https://club-route.firebaseio.com/digest.json')
                .then(response =>{
                    this.digest = response.data
                })
                .catch(e=>{
                    this.error.push(e)
                })
        }

    }
</script>
