<template>
    <div class="home">
        <div class=" d-block d-sm-none">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <router-link to="/review" class="layout__title-link">
                            <div class="layout__title layout__title--orange">
                                <div class="layout__title-text">Дайджест</div>
                                <button class="layout__title-button">
                                    <span class="icon-arrow-right"></span>
                                </button>
                            </div>
                        </router-link>
                    </div>
                    <div class="col-12 col-sm-6  col-lg-4">
                        <post-half-img :post="digest[0]"></post-half-img>
                    </div>
                    <div class="col-12 col-sm-6  col-lg-4">
                        <post-half-img-mob :post="digest[1]"></post-half-img-mob>
                    </div>
                    <div class="col-12 col-sm-6  col-lg-4">
                        <post-half-img-mob :post="digest[2]"></post-half-img-mob>
                    </div>
                    <div class="col-12 col-sm-6  col-lg-4">
                        <post-half-img-mob :post="digest[3]"></post-half-img-mob>
                    </div>
                    <div class="col-12 col-sm-6  col-lg-4">
                        <post-half-img-mob :post="digest[4]"></post-half-img-mob>
                    </div>
                    <div class="col-12 col-sm-6  col-lg-4">
                        <post-half-img-mob :post="digest[5]"></post-half-img-mob>
                    </div>
                    <div class="col-12 col-sm-6  col-lg-4">
                        <post-half-img-mob :post="digest[6]"></post-half-img-mob>
                    </div>
                </div>
            </div>
            <div class="layout--bg-grey">
                <div class="col-12 pt-4">
                    <router-link to="/review" class="layout__title-link">
                        <div class="layout__title layout__title--grey">
                            <div class="layout__title-text">Обзоры</div>
                            <button class="layout__title-button">
                                <span class="icon-arrow-right"></span>
                            </button>
                        </div>
                    </router-link>
                </div>
                <div class="col-12 col-sm-6  col-lg-4">
                    <post-half-img :post="digest[4]"></post-half-img>
                </div>
                <div class="col-12 col-sm-6  col-lg-4">
                    <post-half-img-mob :post="digest[1]"></post-half-img-mob>
                </div>
                <div class="col-12 col-sm-6  col-lg-4">
                    <post-half-img-mob :post="digest[2]"></post-half-img-mob>
                </div>
                <div class="col-12 col-sm-6  col-lg-4">
                    <post-half-img-mob :post="digest[3]"></post-half-img-mob>
                </div>
                <div class="col-12 col-sm-6  col-lg-4">
                    <post-half-img-mob :post="digest[4]"></post-half-img-mob>
                </div>
            </div>
            <div class="layout--hidden-content section">
                <div class="container pt-4">
                    <div class="row">
                        <div class="col-12">
                            <router-link to="/review" class="layout__title-link">
                                <div class="layout__title layout__title--orange">
                                    <div class="layout__title-text">Лайфхаки</div>
                                    <button class="layout__title-button">
                                        <span class="icon-arrow-right"></span>
                                    </button>
                                </div>
                            </router-link>
                        </div>
                        <div class="col-12">
                            <swiper class="livehack-slider" :options="lifehackOption">
                                <swiper-slide v-for="(post, index) in lifehacks" :key="index">
                                    <post-img :post="post"></post-img>
                                </swiper-slide>
                                <div class="swiper-pagination" slot="pagination"></div>
                                <div class="sw-button-prev" slot="button-prev">

                                </div>
                                <div class="sw-button-next" slot="button-next">

                                </div>

                            </swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="d-none d-sm-block">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <router-link to="/review" class="layout__title-link">
                            <div class="layout__title layout__title--orange">
                                <div class="layout__title-text">Дайджест</div>
                                <button class="layout__title-button">
                                    <span class="icon-arrow-right"></span>
                                </button>
                            </div>
                        </router-link>
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
            <div v-if="!isAuth && promoreg" class="layout--bg-grey mb-5">
                <div class="container py-4">
                    <div class="py-3">
                        <div class="d-flex mb-3 ">
                            <div class="h2 mr-4 ">Вступай в ДНС клуб, у нас хорошо</div>
                            <div class="small d-none d-sm-block">
                                <a href="#" class="link link--color-blue">Тур по сайту</a>
                            </div>
                            <button type="button " class="ml-auto close" v-on:click="promoreg = !promoreg"
                                    aria-label="Close">
                                <span class="icon-close"></span>
                            </button>
                        </div>
                        <div class="row ">
                            <div class="col-12 col-lg-3">
                                <div class="d-flex align-items-center mb-4 mb-lg-0">
                                    <div class="mr-3">
                                        <img src="https://i.snag.gy/Q5Hx9n.jpg" alt="">
                                    </div>
                                    <div class="benefit-item__info">
                                        <div class="small font-weight-bold">Читай – у нас есть что!</div>
                                        <div class="small">тысячи бомбическийх статей и обзоров</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-lg-3">
                                <div class="d-flex align-items-center mb-4 mb-lg-0">
                                    <div class="mr-3">
                                        <img src="https://i.snag.gy/FEPRhf.jpg" alt="">
                                    </div>
                                    <div class="benefit-item__info">
                                        <div class="small font-weight-bold">Пиши – стань звездой</div>
                                        <div class="small">публикуй обзоры, отвечай на вопросы</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-lg-3">
                                <div class="d-flex align-items-center mb-4 mb-lg-0">
                                    <div class="mr-3">
                                        <img src="https://i.snag.gy/XdjqO4.jpg" alt="">
                                    </div>
                                    <div class="benefit-item__info">
                                        <div class="small font-weight-bold">Получай награды</div>
                                        <div class="small">будь активным – прокачивай свой уровень</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-lg-3">
                                <div class="btn btn-block btn--color-blue">Вступить в Клуб</div>
                            </div>
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
                        <post-half-img :post="digest[3]"></post-half-img>
                    </div>
                    <div class="col-12 col-sm-6  col-lg-4">
                        <div class="mt-lg-4">
                            <post-text :post="digest[6]"></post-text>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6  col-lg-4">
                        <div class="mt-lg-4">

                            <post-text :post="digest[7]"></post-text>
                        </div>
                    </div>
                </div>
            </div>

            <div id="review" class="layout--bg-grey section">
                <div class="container">
                    <div class="row pt-5">
                        <div class="col-12">
                            <router-link to="/review" class="layout__title-link">
                                <div class="layout__title layout__title--grey">
                                    <div class="layout__title-text">Обзоры</div>
                                    <button class="layout__title-button">
                                        <span class="icon-arrow-right"></span>
                                    </button>
                                </div>

                            </router-link>
                        </div>
                        <div class="col-12  col-lg-8">
                            <div class="blog__item">
                                <post-wide :post="digest[1]"></post-wide>

                            </div>
                            <div class="row">
                                <div class="col-12 col-md-6 col-lg-6">
                                    <div class="blog__item">
                                        <post-blog-img :post="digest[4]"></post-blog-img>

                                    </div>
                                    <div class="blog__item">
                                        <post-blog-text :post="digest[0]"></post-blog-text>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-6">
                                    <div class="blog__item">
                                        <post-blog-text :post="digest[3]"></post-blog-text>
                                    </div>
                                    <div class="blog__item">
                                        <post-blog-img :post="digest[0]"></post-blog-img>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-12 col-lg-4">
                            <div class="blog__item">
                                <post-blog-text :post="digest[4]"></post-blog-text>
                            </div>
                            <div class="blog__item">
                                <post-blog-img :post="digest[3]"></post-blog-img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="lifehack" class="layout--hidden-content section">
                <div class="container pt-5">
                    <div class="row">
                        <div class="col-12">
                            <router-link to="/review" class="layout__title-link">
                                <div class="layout__title layout__title--orange">
                                    <div class="layout__title-text">Лайфхаки</div>
                                    <button class="layout__title-button">
                                        <span class="icon-arrow-right"></span>
                                    </button>
                                </div>
                            </router-link>
                        </div>
                        <div class="col-12">
                            <swiper class="livehack-slider" :options="lifehackOption">
                                <swiper-slide v-for="(post, index) in lifehacks" :key="index">
                                    <post-img :post="post"></post-img>
                                </swiper-slide>
                                <div class="swiper-pagination" slot="pagination"></div>
                                <div class="sw-button-prev" slot="button-prev">

                                </div>
                                <div class="sw-button-next" slot="button-next">

                                </div>

                            </swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container py-5">
            <div class="row">
                <div class="col-12 col-md-12 col-lg-8">
                    <router-link to="/discussions" class="layout__title-link">
                        <div class="layout__title layout__title--orange">
                            <div class="layout__title-text">Коммуникатор</div>
                            <button class="layout__title-button"><span class="icon-arrow-right"></span></button>
                        </div>
                    </router-link>
                    <div class="">
                        <disc-list-item :post="post" v-for="(post, index) in discussions" :key="index"
                                        v-if="index < 10"></disc-list-item>
                    </div>
                </div>
                <div class="col-12 col-lg-4">
                    <div class="row">
                        <div class="col-12 col-md-6 col-lg-12 order-2 order-lg-1">
                            <div class="card-block card-block--shadow mb-4">
                                <div class="p-4">
                                    <div class="h1 mb-3">Последние награды</div>
                                    <ul class="list-unstyled">
                                        <li class="media mb-3" v-for="(user, index) in userslevel" :key="index">
                                            <img class="mr-3 img-60 rounded-circle " :src="user.img">
                                            <div class="media-body align-self-center">
                                                <div class="">
                                                    <a href="#" class="link link--color-blue">{{user.name}}</a>
                                                </div>
                                                <div class="small">Достигнут {{user.rate}} уровень</div>
                                                <div class="small"> {{user.date | fdate}}</div>
                                            </div>
                                        </li>
                                    </ul>
                                    <router-link to="/awards"  >
                                    <button type="button" class="btn btn--color-white btn-block">Все награды
                                    </button>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 col-lg-12 order-3 order-lg-2">
                            <div class="card-block card-block--shadow mb-4">
                                <div class="p-4">
                                    <div class="h1 mb-3">Лидеры</div>
                                    <nav class="nav nav-pills nav-justified mb-4 small">
                                        <a class="link link--pill link--color-grey link--pill-active "
                                           href="#">Неделя</a>
                                        <a class="link link--pill link--color-grey" href="#">Месяц</a>
                                        <!-- <a class="pill-item link" href="#">Все время</a> -->
                                    </nav>
                                    <ul class="list-unstyled">
                                        <li class="media mb-3" v-for="(user, index) in topusers" :key="index" v-if="index<5">
                                            <img class="mr-3 img-60 rounded-circle " :src="user.img">
                                            <div class="media-body align-self-center">
                                                <div class="">
                                                    <a href="#" class="link link--color-blue">{{user.name}}</a>
                                                </div>
                                                <div class="small d-inline-block">{{user.count}} баллов</div>
                                                <div class="text-success small d-inline-block">+ {{user.up}}</div>
                                            </div>
                                        </li>
                                    </ul>
                                    <router-link to="/users"  >
                                    <button type="button" class="btn btn--color-white btn-block">Весь список
                                    </button>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-12 col-lg-12 order-1 order-lg-2">
                            <div class="card-block card-block--shadow mb-4">
                                <div class="p-4">
                                    <div class="h1 mb-2">Результаты опроса</div>
                                    <div class="small mb-1">от 12 июня 2018г.</div>
                                    <div class="small mb-3">Какой гаджет вы считаете лучшим новогодним подарком?
                                    </div>
                                    <div class="mb-4">
                                        <div class="mb-2 " v-for="(survey, index) in surveys" :key="index">
                                            <div class=" d-flex justify-content-between">
                                                <div class="small pb-1">{{survey.title}}</div>
                                                <div class="small">{{survey.rate}}%</div>
                                            </div>
                                            <div class="poll-line" v-bind:style="{ width: survey.rate + '%'}"></div>
                                        </div>
                                    </div>
                                    <button type="button" class="btn btn--color-white btn-block">Все опросы</button>
                                </div>
                            </div>
                        </div>
                    </div>
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
    import DiscListItem from '@/components/post-block/disc-list-item.vue'
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
            postBlogText
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
                discussions: [],
                lifehacks: [],
                topusers: [],
                userslevel: [],
                surveys: [],
                error: [],
                lifehackOption: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    },
                    breakpoints: {
                        992: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                            pagination: {
                                el: '.swiper-pagination',
                            },
                        },
                        768: {
                            slidesPerView: "auto",
                            spaceBetween: 40
                        }
                    },
                    navigation: {
                        nextEl: '.sw-button-next',
                        prevEl: '.sw-button-prev'
                    }

                },
            }
        },
        created() {
            this.axios.get('https://club-route.firebaseio.com/discussions.json')
                .then(response => {
                    this.discussions = response.data
                })
                .catch(e => {
                    this.error.push(e)
                })
            this.axios.get('https://club-route.firebaseio.com/top-users.json')
                .then(response => {
                    this.topusers = response.data
                })
                .catch(e => {
                    this.error.push(e)
                })
            this.axios.get('https://club-route.firebaseio.com/users-level.json')
                .then(response => {
                    this.userslevel = response.data
                })
                .catch(e => {
                    this.error.push(e)
                })
            this.axios.get('https://club-route.firebaseio.com/survey.json')
                .then(response => {
                    this.surveys = response.data
                })
                .catch(e => {
                    this.error.push(e)
                })
            this.axios.get('https://club-route.firebaseio.com/digest.json')
                .then(response => {
                    this.digest = response.data
                })
                .catch(e => {
                    this.error.push(e)
                })
            this.axios.get('https://club-route.firebaseio.com/lifehack.json')
                .then(response => {
                    this.lifehacks = response.data
                })
                .catch(e => {
                    this.error.push(e)
                })
            this.axios.get('https://club-route.firebaseio.com/review.json')
                .then(response => {
                    this.review = response.data
                })
                .catch(e => {
                    this.error.push(e)
                })
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
