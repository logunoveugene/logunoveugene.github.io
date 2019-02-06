<template>
    <div class="home">

        <div class="container">

            <h1>Блоки на главной</h1>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-12 mb-4">
                    <input class="w-100 mb-3" type="text" v-model="currentPost.img"
                           placeholder="Ссылка на изобаржение">
                    <input class="w-100 mb-3" type="text" v-model="currentPost.like"
                           placeholder="Рейтинг">
                    <input class="w-100 mb-3" type="text" v-model="currentPost.autor"
                           placeholder="Автор, для режима редактирования нужно ввести 1">

                    <input class="w-100 mb-3" type="date" v-model="currentPost.date"
                           placeholder="дата публикации">


                    <div>
                        <input type="color" id="textColor" name="head"
                               v-model="currentPost.textColor">
                        <label for="textColor">Цвет текста</label>
                    </div>
                    <div>
                        <input type="color" id="head" name="head" v-model="currentPost.bgColor">
                        <label for="head">Цвет фона</label>
                    </div>

                    <div class="custom-control custom-checkbox mb-2">
                        <input type="checkbox" id="customCheck115" class="custom-control-input"
                               v-model="currentPost.isDraft">
                        <label for="customCheck115" class="custom-control-label">Черновик? </label>
                    </div>

                </div>
            </div>

        </div>
        <div class="d-none d-sm-block">
            <div class="container">

                <div class="row">
                    <div class="col-12 col-md-6 col-lg-4">
                        <post-half-img :post="currentPost"></post-half-img>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4">
                        <post-img :post="currentPost"></post-img>
                    </div>
                    <div class="col-12 col-sm-12 col-lg-4">
                        <div class="mt-lg-4">
                            <post-text :post="currentPost"></post-text>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container mb-5">
                <div class="row">
                    <div class="col-12 col-sm-12  col-lg-8">
                        <post-wide :post="currentPost"></post-wide>
                    </div>
                    <div class="col-12 col-sm-6  col-lg-4">
                        <post-half-img :post="currentPost"></post-half-img>
                    </div>

                </div>
            </div>


        </div>
        <div class=" d-block d-sm-none">
            <div class="container">
                <div class="row">

                    <div class="col-12 col-sm-6  col-lg-4">
                        <post-half-img :post="currentPost"></post-half-img>
                    </div>
                    <div class="col-12 col-sm-6  col-lg-4">
                        <post-half-img-mob :post="currentPost"></post-half-img-mob>
                    </div>
                    <div class="col-12 col-sm-6  col-lg-4">
                        <post-half-img-mob :post="currentPost"></post-half-img-mob>
                    </div>
                    <div class="col-12 col-sm-6  col-lg-4">
                        <post-half-img-mob :post="currentPost"></post-half-img-mob>
                    </div>

                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-12 col-sm-12  col-lg-8">
                    <post-large :post="currentPost"></post-large>
                </div>

            </div>
        </div>


        <div class="container my-5">

            <h1>Комменты/ответы</h1>

            <div class="row">
                <div class="col-12 col-md-6 col-lg-8">
                    <comment-item :comment="currentComment"></comment-item>
                </div>
            </div>
        </div>


    </div>

</template>

<script>

    // @ is an alias to /src
    import postHalfImg from '@/components/post-block/post-half-img.vue'
    import postHalfImgMob from '@/components/post-block/post-half-img-mob.vue'
    import postImg from '@/components/post-block/post-img.vue'
    import postText from '@/components/post-block/post-text.vue'
    import postWide from '@/components/post-block/post-wide.vue'
    import postBlogImg from '@/components/post-block/post-blog-img.vue'
    import postBlogText from '@/components/post-block/post-blog-text.vue'
    import postLarge from '@/components/post-block/post-large.vue'
    import DiscListItem from '@/components/post-block/disc-list-item.vue'

    import commentItem from '@/components/comment-item.vue'


    import {swiper, swiperSlide} from 'vue-awesome-swiper'
    import 'swiper/dist/css/swiper.css'

    export default {
        name: 'home',
        components: {
            postHalfImg,
            postImg,
            postText,
            postWide,
            DiscListItem,
            postBlogImg,
            swiper,
            swiperSlide,
            postHalfImgMob,
            postBlogText,
            postLarge,
            commentItem
        },
        props: {

            isAuth: {
                type: null,
                default: false
            }
        },
        data: function () {
            return {

                digest: [],
                review: [],
                promoreg: true,


                currentPost: {
                    autor: "Виктор",
                    autorImg: "https://i.snag.gy/d7sDXn.jpg",
                    bgColor: "#555756",
                    comment: 4,
                    date: "2018-06-16T21:17:43",
                    format: "Видео",
                    id: 1,
                    img: "https://i.snag.gy/OcNxAg.jpg",
                    isLocked: false,
                    isDraft: false,
                    like: 8,
                    position: 2,
                    source: "Эксклюзив",
                    tags: ["Смартфоны", "Optane", "Intel", "Lenovo"],
                    teaser: "Одни считают Xiaomi показателем достатка, другие называют его смартфоном для понтов. Перечисляем главные претензии к айфонам с гифками для самых рьяных противников «яблока» (ахахаха).",
                    textColor: "#ffffff",
                    title: "За что мы любим Xiaomi: отличная экосистема и привлекательная цена",
                    view: 765
                },


                currentComment: {
                    autor: "Василий",
                    autorImg: "https://i.snag.gy/p8753Y.jpg",
                    child: [{
                        autor: "Василий",
                        autorImg: "https://i.snag.gy/p8753Y.jpg",
                        child: [],
                        childCount: 0,
                        comment: " достатка, другие называют его смартфоном для понтов. Перечисляем главные ",
                        date: "2018-06-16T21:17:43",
                        id: 1,
                        postId: 1,
                        rate: 1,
                    }],
                    childCount: 0,
                    comment: " достатка, другие называют его смартфоном для понтов. Перечисляем главные ",
                    date: "2018-06-16T21:17:43",
                    id: 1,
                    postId: 1,
                    rate: 1,
                }


            }
        }


    }
</script>
<style>


    .layout__title-link-test {

        margin-bottom: 1rem;
        position: relative;
        display: block;
    }

    .layout__title-link-test:hover {
        text-decoration: none;
    }

    .layout__title-test {
        font-size: 32px;
        font-weight: 700;
        color: #000;
        line-height: 52px;
        display: flex;
        align-items: center;
    }

    .layout__title-text-test-shadow {
        font-size: 20vw;
        font-weight: 700;
        font-family: 'Montserrat';
        color: #eee;
        z-index: -1;

        position: absolute;

    }

    @media (min-width: 768px) {
        .layout__title-text-test-shadow {
            font-size: 130px;
            font-weight: 700;
            font-family: 'Montserrat';
            color: #eee;
            z-index: -1;

            position: absolute;

        }

    }

</style>
