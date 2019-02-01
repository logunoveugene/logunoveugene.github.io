<template>
    <div class="users-list-page">
        <div class="container">
            <div class="row">
                <!--<div class="col-12">-->
                <!--<div class="small mb-2 d-flex">-->
                <!--<router-link class="link link&#45;&#45;color-black" to="/">Клуб</router-link>-->
                <!--</div>-->
                <!--</div>-->
                <div class="col-12">
                    <div class="page__title mb-4">Пользователи</div>

                    <div class="">
                        <nav class="nav nav-pills nav-justified mb-4 ">
                            <a v-bind:class="{'link--pill-active':isUsersList}"
                               class="link link--pill link--color-grey"
                               href="#"
                               v-on:click="isUsersList=true, isUsersAwards=false"
                            >Общий рейтинг</a>
                            <a v-bind:class="{'link--pill-active':isUsersAwards }"
                               class="link link--pill link--color-grey"
                               href="#"
                               v-on:click="isUsersList=false, isUsersAwards=true"
                            >По статьям</a>
                            <a class="link link--pill link--color-grey"
                               href="#"
                               v-on:click="isUsersList=false, isUsersAwards=true"
                            >По коммуникатору</a>
                            <a class="link link--pill link--color-grey"
                               href="#"
                               v-on:click="isUsersList=false, isUsersAwards=true"
                            >По отзывам к товарам</a>
                            <a class="link link--pill link--color-grey"
                               href="#"
                               v-on:click="isUsersList=false, isUsersAwards=true"
                            >По комментариям</a>
                        </nav>
                    </div>
                    <div class="d-flex flex-column flex-md-row justify-content-between mb-3">
                        <div class="" v-if="isUsersList">
                            <paginate
                                    class="row"
                                    name="usersList"
                                    :list="topusers"
                                    :per="12"
                            >
                                <div class=" col-12 col-sm-6 col-lg-3 "
                                     v-for="(user, index) in paginated('usersList')"
                                     :key="index">
                                    <div class="user-widget">
                                        <div class="user-widget__number">№ {{index+1}}</div>
                                        <img class="mb-2 img-60 rounded-circle " :src="user.img">
                                        <div class="media-body align-self-center">
                                            <div class="h4 mb-1">
                                                <a href="#" class="link link--color-blue">{{user.name}}</a>
                                            </div>
                                            <div class="d-flex mb-3">
                                                <div class="small d-inline-block mr-2">10 уровень</div>
                                                <div class="small d-inline-block">{{user.count}} баллов</div>
                                            </div>
                                            <div class="d-flex small">
                                                <div class="mr-3">
                                                    Статьи:
                                                    <span class="font-weight-bold">{{user.theme}}</span>
                                                </div>
                                                <div class="mr-3">
                                                    Темы:
                                                    <span class="font-weight-bold">{{user.theme}}</span>
                                                </div>
                                                <div class="">
                                                    Ответы:
                                                    <span class="font-weight-bold">{{user.answer}}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </paginate>

                            <div class="btn paginate__button btn-block mb-4 ">Показать еще</div>

                            <paginate-links :limit="2"
                                            for="usersList"
                                            :show-step-links="true"
                                            :step-links="{
                                            next: 'h',
                                            prev: 'g'
                                          }">
                            </paginate-links>
                        </div>
                        <div class="" v-if="isUsersAwards">
                            <paginate
                                    class="row"
                                    name="usersList"
                                    :list="topusers"
                                    :per="12"
                            >
                                <div class=" col-12 col-sm-6 col-lg-3 "
                                     v-for="(user, index) in paginated('usersList')"
                                     :key="index">
                                    <div class="user-widget">
                                        <div class="user-widget__number">№ {{index+1}}</div>
                                        <img class="mb-2 img-60 rounded-circle " :src="user.img">
                                        <div class="media-body align-self-center">
                                            <div class="h4 mb-1">
                                                <a href="#" class="link link--color-blue">{{user.name}}</a>
                                            </div>
                                            <div class="d-flex mb-3">
                                                <div class="small d-inline-block mr-2">10 уровень</div>
                                                <div class="small d-inline-block">{{user.count}} баллов</div>
                                                <!--<div class="text-success small d-inline-block ml-1"> + {{user.up}}</div>-->
                                            </div>
                                            <div class="d-flex small">
                                                <div class="mr-3">
                                                    Статьи:
                                                    <span class="font-weight-bold">{{user.theme}}</span>
                                                </div>
                                                <div class="mr-3">
                                                    Темы:
                                                    <span class="font-weight-bold">{{user.theme}}</span>
                                                </div>
                                                <div class="">Ответы:
                                                    <span class="font-weight-bold">{{user.answer}}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </paginate>

                            <div class="btn paginate__button btn-block mb-4 ">Показать еще</div>

                            <paginate-links :limit="2"
                                            for="usersList"
                                            :show-step-links="true"
                                            :step-links="{
                                            next: 'h',
                                            prev: 'g'
                                          }">
                            </paginate-links>
                        </div>
                    </div>


                </div>

            </div>
        </div>

    </div>
</template>

<script>

    import postInfo from '@/components/post-block/parts/post-info.vue'
    import postTagFull from '@/components/post-block/parts/post-tag-full.vue'
    import postImg from '@/components/post-block/post-img.vue'
    import commentItem from '@/components/comment-item.vue'
    import LightBox from 'vue-image-lightbox'
    import productList from '@/components/product-list.vue'


    import {swiper, swiperSlide} from 'vue-awesome-swiper'
    import 'swiper/dist/css/swiper.css'
    import ProductList from "../components/product-list";
    import author from "@/components/post-block/parts/author.vue"


    export default {
        components: {
            ProductList,
            postInfo,
            LightBox,
            postTagFull,
            swiper,
            swiperSlide,
            commentItem,
            postImg,
            productList,
            author
        },
        data() {
            return {
                topusers: 'register-modules-example',
                paginate: ['usersList'],
                isUsersList: true,
                isUsersAwards: false

            }

        },
        methods: {

            showModalUserAuth() {
                this.$modal.show('userAuth');
            },
            hideModalUserAuth() {
                this.$modal.hide('userAuth');
            },
        },
        created() {
            this.axios.get('https://club-route.firebaseio.com/top-users.json')
                .then(response => {
                    this.topusers = response.data
                })
                .catch(e => {
                    this.error.push(e)
                })


        }
    }
</script>

<style lang="scss">
    .user-widget {
        padding: 1rem;
        border: 1px solid #eee;
        margin-bottom: 40px;
        border-radius: 8px;
        box-shadow: 0 9px 30px rgba(0, 0, 0, 0.02), 0 3px 6px rgba(0, 0, 0, 0.05), 0 9px 50px rgba(0, 0, 0, 0.03);
        position: relative;
    }

    .user-widget__number {
        position: absolute;
        right: 22px;
        top: 18px;
        color: #dddddd;
        font-size: 18px;
        font-weight: 700;
    }

    ul.paginate-links {
        margin-left: 0;
        padding-left: 0;
        overflow: hidden;
        border: 1px solid #ddd;
        -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
        padding: 0;
        border-radius: 8px;
        display: -webkit-inline-box;
        display: -ms-inline-flexbox;
        display: inline-flex;
        max-width: 100%;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        width: 100%;
        position: relative;
        font-size: 14px;
    }

    .paginate__button {
        border: 1px solid #ddd;
        box-shadow: 0 1px 2px rgba(0, 0, 0, .1);
        padding: 10px 17px 9px;
        border-radius: 8px;
        &:hover {
            background: #fff6e5;
        }
    }

    ul.paginate-links.discuss {
        margin-left: 0;
        padding-left: 0;
        overflow: hidden;
        border: 1px solid #ddd;
        box-shadow: 0 1px 2px rgba(0, 0, 0, .1);
        padding: 0;
        border-radius: 8px;
        display: inline-flex;
        max-width: 100%;
        justify-content: center;
        width: 100%;
        position: relative;
        font-size: 14px;
    }

    li.number a, .right-arrow a, .left-arrow a {
        flex-grow: 1;
        display: flex;
        align-items: center;
        text-align: center;
        cursor: pointer;
        transition: .1s;
        border-bottom: 3px solid #fff;
        padding: 11px 13px 8px;

        &:hover {
            background: #fff6e5;
            border-bottom: 3px solid #fff6e5;
        }
    }

    li.number.active a {
        border-bottom: 3px solid #e68c00;
    }

    li.number, .right-arrow, .left-arrow {

        cursor: pointer;
        display: flex;

    }

    .right-arrow {
        position: absolute;
        right: 0;
        display: flex;
        cursor: pointer;
        font-family: "mydns" !important;
    }

    .left-arrow {
        position: absolute;
        left: 0;
        display: flex;
        cursor: pointer;
        font-family: "mydns" !important;
    }

    .ellipses {
        padding: 11px 4px 8px;
        display: inline-block;
        cursor: pointer;
    }

    li.right-arrow.disabled a {
        opacity: .4;
        cursor: not-allowed;
        &:hover {
            background: #fff;
            border-bottom: 3px solid #fff;
        }
    }

    li.left-arrow.disabled a {
        opacity: .4;
        cursor: not-allowed;
        &:hover {
            background: #fff;
            border-bottom: 3px solid #fff;
        }
    }


</style>