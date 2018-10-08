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

        <div id="review" class="layout--bg-blue  section">
            <div class="container">
                <div class="row pt-5">
                    <div class="col-12">
                        <a href="#" class="layout__title-link">
                            <div class="layout__title layout__title--blue">
                                <div class="layout__title-text">Обзоры</div>
                                <button class="layout__title-button">
                                    <span class="icon-arrow-right"></span>
                                </button>
                            </div>

                        </a>
                    </div>
                    <div class="col-12  col-lg-8">
                        <div class="blog__item">
                            <post-wide :post="digest[1]"></post-wide>

                        </div>
                        <div class="row">
                            <div class="col-12 col-md-6 col-lg-6">
                                <div class="blog__item">
                                    <post-blog-img :post="digest[2]"></post-blog-img>

                                </div>
                                <div class="blog__item">
                                    <post-blog-text :post="review[0]"></post-blog-text>
                                </div>
                            </div>
                            <div class="col-12 col-md-6 col-lg-6">
                                <div class="blog__item">
                                    <post-blog-text :post="review[3]"></post-blog-text>
                                </div>
                                <div class="blog__item">
                                    <post-blog-img :post="digest[1]"></post-blog-img>

                                </div>
                            </div>

                        </div>

                    </div>

                    <div class="col-12 col-md-12 col-lg-4">
                        <div class="blog__item">
                            <post-blog-text :post="review[4]"></post-blog-text>
                        </div>
                        <div class="blog__item">
                            <post-blog-img :post="digest[3]"></post-blog-img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container py-5">
            <div class="row">
                <div class="col-12 col-md-12 col-lg-8">
                    <a href="#" class="layout__title-link">
                        <div class="layout__title layout__title--orange">
                            <div class="layout__title-text">Обсуждения</div>
                            <button class="layout__title-button"><span class="icon-arrow-right"></span></button>
                        </div>

                    </a>

                    <div class="discussions">
                        <div class="discussions__item" v-for="(discussion, index) in discussions" :key="index">
                            <div class="d-flex">
                                <div class="discussions__img-wrap">
                                    <img :src="discussion.img" alt="" class="discussions__img">
                                </div>
                                <div class="discussions__info">
                                    <div class="discussions__ small mb-2">Автор:
                                        <a class="link link--color-blue mr-2"
                                           href="#">{{discussion.autor}}</a>
                                        {{discussion.date | fdate}}
                                    </div>
                                    <div class="discussions__title h2">
                                        <a href="#" class="link link--color-black">{{discussion.title}}</a>
                                    </div>

                                    <div class="discussions__source small mb-2 d-flex align-items-center">
                                        <!--<div class="discussions__source-icon-wrap">-->
                                        <!--<div class="icon-dots-hor"></div>-->
                                        <!--</div>-->


                                        <a href="#" class="link link--color-grey">{{discussion.source}}</a>
                                    </div>
                                    <div class="discussions__teaser small mb-3">{{discussion.teaser}}</div>
                                    <div class="d-flex flex-wrap align-items-center">
                                        <post-info class="mr-3 mb-3"
                                                   :like="discussion.like"
                                                   :comment="discussion.comment"
                                                   :view="discussion.view"
                                                   :lastactivity="discussion.lastactivity"
                                        ></post-info>
                                        <a href="#" class="link link--color-blue small mb-3"> Ответить</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="col-12 col-lg-4">
                    <div class="row">
                        <div class="col-12 col-md-6 col-lg-12 order-2 order-lg-1">
                            <div class="card-block mb-4">
                                <div class="card-block__body">
                                    <div class="h3 mb-3">Последние награды</div>
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

                                    <button type="button" class="btn btn--color-white btn-block">Все награды</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 col-lg-12 order-3 order-lg-2">
                            <div class="card-block mb-4">
                                <div class="card-block__body">
                                    <div class="h1 mb-3">Лидеры</div>
                                    <nav class="nav nav-pills nav-justified mb-4 small">
                                        <a class="pill-item link pill-item--active " href="#">Неделя</a>
                                        <a class="pill-item link" href="#">Месяц</a>
                                        <!-- <a class="pill-item link" href="#">Все время</a> -->
                                    </nav>
                                    <ul class="list-unstyled">

                                        <li class="media mb-3" v-for="(user, index) in topusers" :key="index">
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
                                    <button type="button" class="btn btn--color-white btn-block">Весь список</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-12 col-lg-12 order-1 order-lg-2">
                            <div class="card-block mb-3">
                                <div class="card-block__body">
                                    <div class="h1 mb-2">Результаты опроса</div>
                                    <div class="small mb-1">от 12 июня 2018г.</div>
                                    <div class="small mb-3">Какой гаджет вы считаете лучшим новогодним подарком?</div>
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
    import postImg from '@/components/post-block/post-img.vue'
    import postText from '@/components/post-block/post-text.vue'
    import postWide from '@/components/post-block/post-wide.vue'
    import postBlogImg from '@/components/post-block/post-blog-img.vue'
    import postBlogText from '@/components/post-block/post-blog-text.vue'

    export default {
        name: 'home',
        components: {
            postHalfImg,
            postImg,
            postText,
            postWide,
            postBlogImg,
            postBlogText
        },
        data: function () {
            return {
                digest: [],
                review: [],
                discussions: [],
                topusers: [],
                userslevel: [],
                surveys: [],
                error: []
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
