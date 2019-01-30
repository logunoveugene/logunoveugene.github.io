<template>
    <div class="post-page mb-5">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="small mb-3 d-flex  flex-wrap">
                        <router-link class="link link--color-black" to="/">Клуб</router-link>
                        <div class="mx-2">/</div>
                        <router-link class="link link--color-black" to="/discussions">Коммуникатор</router-link>
                        <!--<div class="mx-2">/</div>-->
                        <!--<router-link v-if="post.source" class="link link&#45;&#45;color-black" to="/discussions">-->
                            <!--{{post.source.parent.title}}-->
                        <!--</router-link>-->
                        <!--<div class="mx-2">/</div>-->
                        <!--<router-link v-if="post.source" class="link link&#45;&#45;color-black" to="/discussions">-->
                            <!--{{post.source.title}}-->
                        <!--</router-link>-->
                    </div>
                </div>
                <div class="col-12 col-lg-8 ">
                    <div class="page__title mb-3">
                        <div v-html="post.title"></div>
                    </div>

                    <div class="d-flex flex-column flex-md-row justify-content-between ">
                        <div class="d-flex align-items-center mb-3">
                            <div class="mr-3 d-none d-md-block">
                                <img class="post-item__author-img rounded-circle " :src="post.autorImg" alt="">
                            </div>
                            <div class="d-flex flex-column">
                                <div class="d-flex">
                                    <img :src="post.autorImg" alt=""
                                         class="comment__comment-author-img-mob rounded-circle">
                                    <div class="mr-2">
                                        <author :author="post.autor"
                                                linkTag="link--color-grey  "/>
                                    </div>
                                    <!--<div class="">{{post.autor}}</div>-->
                                </div>
                                <div class="small  text-muted">{{post.date | fdate}}</div>
                            </div>
                        </div>
                    </div>

                    <div class="disc_teaser">
                        <div class="mb-4">
                            <div v-html="post.teaser"></div>
                        </div>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="d-flex">
                                <div class="comment__rate d-flex mr-4">
                                    <div class="comment__rate-up icon-thumb-up"></div>
                                    <div class="comment__rate-count small">{{post.like}}</div>
                                    <div class="comment__rate-down icon-thumb-down"></div>
                                </div>

                                <div class="small mr-3 d-flex align-items-center">
                                    <div class="link link--color-blue" @click="focusqanswer">
                                        Ответить
                                    </div>
                                </div>
                            </div>
                            <social-sharing class="h2 mb-0" url="https://club.dns-shop.ru/"
                                            title="ДНС Клуб"
                                            description="Клуб DNS – центр онлайн компетенции."

                                            inline-template>
                                <div>
                                    <network class="share__icon " network="vk">
                                        <i class="fa fa-vk"></i>
                                    </network>

                                    <network class="share__icon share__icon--facebook" network="facebook">
                                        <i class="fa fa-facebook"></i>
                                    </network>


                                    <network class="share__icon share__icon--ok" network="odnoklassniki">
                                        <i class="fa fa-odnoklassniki"></i>
                                    </network>


                                    <!--<network class="srare__icon " network="telegram">-->
                                    <!--<i class="fa fa-telegram"></i>-->
                                    <!--</network>-->

                                    <!--<network class="srare__icon d-inline-block d-md-none" network="whatsapp">-->
                                    <!--<i class="fa fa-whatsapp"></i>-->
                                    <!--</network>-->
                                </div>
                            </social-sharing>
                        </div>
                    </div>
                    <div class="d-block d-lg-none" v-if="post.products">
                        <div v-ripple class="collapse-block card-block card-block--full-mobile "
                             @click="collapseProduct=!collapseProduct">
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="">Товары в теме<span
                                        class="text-muted small">{{post.products.length}}</span></div>
                                <div class="collapse-block__icon ">
                                    <div v-if="!collapseProduct" class="icon-down"></div>
                                    <div v-if="collapseProduct" class="icon-up"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="collapse-plate  py-4" v-if="collapseProduct">
                        <product-list :products="post.products"></product-list>
                    </div>



                    <div class="my-4" v-if="comments && comments.length>1">

                        <div class="d-flex justify-content-between align-items-center">
                            <div class="h1 mb-0">
                                Ответы пользователей <span class="text-muted">{{comments.length}}</span>
                            </div>
                            <div class="d-none d-md-flex small">
                                <div class="link link--color-grey link--doted mr-2">Последний</div>
                                <div class="">от 15:44 12 сен. 2018г.</div>
                            </div>
                        </div>
                        <div class="mb-3"></div>

                        <paginate
                                name="commentsP"
                                :list="comments"
                                :per="17"
                        >
                            <comment-item v-for="(comment, index) in paginated('commentsP')"
                                          :comment="comment"
                                          :key="index">
                            </comment-item>
                        </paginate>


                        <div class="" v-if="comments && comments.length>17">
                            <div class="btn paginate__button btn-block mb-4 ">Показать еще</div>
                            <paginate-links :limit="3"
                                            for="commentsP"
                                            :show-step-links="true"
                                            :step-links="{
                                            next: 'h',
                                            prev: 'g'
                                          }">
                            </paginate-links>
                        </div>
                    </div>
                    <div class="d-none d-md-block">
                        <div class="h1">Ваш ответ</div>
                        <div class="comment__reply-box">
                            <froala :tag="'textarea'" :config="config" v-model="replyText"></froala>
                        </div>
                        <button type="button" class="btn btn--color-white ">Опубликовать</button>
                    </div>
                </div>

                <div v-if="post.products" class="col-12 col-lg-4 d-none d-lg-block">
                    <div class="">
                        <div class="">
                            <div class="mb-3">Товары в теме</div>
                            <product-list :products="post.products"></product-list>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        <!--<div v-if="!answerPlate" class="fixed-bottom d-block d-md-none w-100">-->
        <!--<div class="d-flex fixed__plate">-->
        <!--<div v-ripple class="fixed__plate-answer d-flex align-items-cente  text-center p-3 ">-->
        <!--<div class="fixed__plate-answer-icon">-->
        <!--<div class="mr-2 icon-speech-bubble-outline"></div>-->
        <!--</div>-->
        <!--<div @click="focusqanswer" class="fixed__plate-answer-desc ">Ответить</div>-->

        <!--</div>-->
        <!--<div v-ripple class="fixed__plate-end p-3">К последнему сообщению</div>-->
        <!--</div>-->
        <!--</div>-->

        <div v-if="answerPlate" class="fixed-bottom d-block d-md-none">
            <div class="answer-plate p-3">
                <div class="answer-plate-send">
                    <div class="answer-plate-send-img">
                        <div class="icon-send"></div>
                    </div>
                </div>
                <div class="d-flex justify-content-between">
                    <div class="h2">Ваш ответ</div>
                    <div class="answer-plate__close">
                        <div class="answer-plate__close-img">
                            <div @click="answerPlate=false" class="icon-close"></div>
                        </div>
                    </div>
                </div>
                <editor class="editor" :extensions="extensions">
                    <div class="editor__floating-menu" slot="floatingMenu" slot-scope="{ nodes }">
                        <template v-if="nodes">
                            <button class="menubar__button"
                                    :class="{ 'is-active': nodes.heading.active({ level: 1 }) }"
                                    @click="nodes.heading.command({ level: 1 })"
                            >
                                H1
                            </button>

                            <button
                                    class="menubar__button"
                                    :class="{ 'is-active': nodes.heading.active({ level: 2 }) }"
                                    @click="nodes.heading.command({ level: 2 })"
                            >
                                H2
                            </button>

                            <button
                                    class="menubar__button"
                                    :class="{ 'is-active': nodes.heading.active({ level: 3 }) }"
                                    @click="nodes.heading.command({ level: 3 })"
                            >
                                H3
                            </button>

                            <button
                                    class="menubar__button"
                                    :class="{ 'is-active': nodes.bullet_list.active() }"
                                    @click="nodes.bullet_list.command"
                            >
                                ul
                            </button>

                            <button
                                    class="menubar__button"
                                    :class="{ 'is-active': nodes.ordered_list.active() }"
                                    @click="nodes.ordered_list.command"
                            >
                                ol
                            </button>

                            <button
                                    class="menubar__button"
                                    :class="{ 'is-active': nodes.blockquote.active() }"
                                    @click="nodes.blockquote.command"
                            >
                                quet
                            </button>


                            <button
                                    class="menubar__button"
                                    @click="showImagePrompt(nodes.image.command)"
                            >
                                img
                            </button>


                        </template>
                    </div>


                    <div class="menububble" slot="menububble" slot-scope="{ marks, focus }">


                        <template v-if="marks">

                            <form class="menububble__form" v-if="linkMenuIsActive"
                                  @submit.prevent="setLinkUrl(linkUrl, marks.link, focus)">
                                <input class="menububble__input" type="text" v-model="linkUrl"
                                       placeholder="https://" ref="linkInput" @keydown.esc="hideLinkMenu"/>
                                <button class="menububble__button" @click="setLinkUrl(null, marks.link, focus)"
                                        type="button">
                                    <icon name="remove"/>
                                </button>
                            </form>


                            <template v-else>


                                <button
                                        class="menububble__button"
                                        :class="{ 'is-active': marks.bold.active() }"
                                        @click="marks.bold.command"
                                >
                                    B
                                </button>

                                <button
                                        class="menububble__button"
                                        :class="{ 'is-active': marks.italic.active() }"
                                        @click="marks.italic.command"
                                >
                                    I
                                </button>
                                <button
                                        class="menububble__button"
                                        @click="showLinkMenu(marks.link)"
                                        :class="{ 'is-active': marks.link.active() }"
                                >
                                    <span>Add Link</span>

                                </button>


                            </template>
                        </template>
                    </div>


                    <div slot="content" ref="qanswer" :focus="true" slot-scope="props"></div>
                </editor>
            </div>
        </div>
    </div>


</template>

<script>

    import postInfo from '@/components/post-block/parts/post-info.vue'
    import postTagFull from '@/components/post-block/parts/post-tag-full.vue'
    import postImg from '@/components/post-block/post-img.vue'
    import commentItem from '@/components/comment-item.vue'
    import productList from '@/components/product-list.vue'
    import author from "@/components/post-block/parts/author.vue"

    import {swiper, swiperSlide} from 'vue-awesome-swiper'
    import 'swiper/dist/css/swiper.css'


    import {Editor} from 'tiptap'
    import {
        // Nodes
        BlockquoteNode,
        BulletListNode,
        CodeBlockNode,
        CodeBlockHighlightNode,
        HardBreakNode,
        HeadingNode,
        ImageNode,
        ListItemNode,
        OrderedListNode,
        TodoItemNode,
        TodoListNode,

        // Marks
        BoldMark,
        CodeMark,
        ItalicMark,
        LinkMark,
        StrikeMark,
        UnderlineMark,

        // General Extensions
        HistoryExtension,
        PlaceholderExtension,

    } from 'tiptap-extensions'


    export default {
        components: {
            postInfo,
            postTagFull,
            swiper,
            swiperSlide,
            commentItem,
            postImg,
            Editor,
            productList,
            author
        },
        data() {
            return {
                extensions: [
                    new BlockquoteNode(),
                    new BulletListNode(),
                    new CodeBlockNode(),
                    new HardBreakNode(),
                    new HeadingNode({maxLevel: 3}),
                    new ImageNode(),
                    new ListItemNode(),
                    new OrderedListNode(),
                    new TodoItemNode(),
                    new TodoListNode(),
                    new BoldMark(),
                    new ItalicMark(),
                    new LinkMark(),
                    new StrikeMark(),
                    new UnderlineMark(),
                    new HistoryExtension(),
                    new PlaceholderExtension({
                        emptyNodeClass: 'is-empty',
                    }),
                ],
                readyToPublic: false,
                selected: [],
                selectedRub: [],

                linkUrl: null,
                linkMenuIsActive: false,

                model: '',


                name: 'register-modules-example',
                paginate: ['commentsP'],
                post: {},
                posts: {},
                answerPlate: false,
                error: "",
                comments: {},
                collapseProduct: false,
                config: {
                    toolbarInline: true,
                    placeholderText: 'Вам слово...',
                    heightMin: 80,
                    charCounterMax: 140,
                    quickInsertButtons: ['image', 'video', 'table'],
                    toolbarButtons: ['bold', 'italic', 'quote', 'paragraphFormat', 'insertLink', 'underline', 'formatOL', 'formatUL'],

                },
                replyText: '',
                qReplyText: '',
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
        methods: {
            focusqanswer() {
                this.answerPlate = true;
                this.$nextTick(() => {


                })
            },
            showImagePrompt(command) {
                const src = prompt('Enter the url of your image here')
                if (src !== null) {
                    command({src})
                }
            },
            showLinkMenu(type) {
                this.linkUrl = type.attrs.href
                this.linkMenuIsActive = true
                this.$nextTick(() => {
                    this.$refs.linkInput.focus()
                })
            },
            hideLinkMenu() {
                this.linkUrl = null
                this.linkMenuIsActive = false
            },
            setLinkUrl(url, type, focus) {
                type.command({href: url})
                this.hideLinkMenu()
                focus()
            },
            showAddProoduct() {
                this.$modal.show('addProduct');
            },
            hideAddProoduct() {
                this.$modal.hide('addProduct');
            },
            showPublishModal() {
                this.$modal.show('publish');
                this.readyToPublic = true

            },
            hidePublishModal() {
                this.$modal.hide('publish');
                this.readyToPublic = false
            },


        },
        created() {
            this.axios.get('https://club-route.firebaseio.com/discussions.json?orderBy=%22id%22&equalTo=' + this.$route.params.id)
                .then(response => {
                    this.post = Object.values(response.data)[0]
                })
                .catch(e => {
                    this.error.push(e)
                })
            this.axios.get('https://club-route.firebaseio.com/comments.json?orderBy=%22postId%22&equalTo=' + this.$route.params.id)
                .then(response => {
                    this.comments = Object.values(response.data)
                })
                .catch(e => {
                    this.error.push(e)
                })
            this.axios.get('https://club-route.firebaseio.com/digest.json')
                .then(response => {
                    this.posts = response.data
                })
                .catch(e => {
                    this.error.push(e)
                })
        }
    }
</script>

<style lang="scss">
    .share__icon {
        border-radius: 4px;
        height: 23px;
        width: 30px;
        background: #4a76a8;
        display: inline-block;
        color: white;
        font-size: 14px;
        padding: 2px 7px;
        text-align: center;
        margin-right: 8px;
    }

    .share__icon--facebook {
        background: #4267b2;
    }

    .share__icon--ok {
        background: #e68102;
    }

    .answer-plate {
        box-shadow: 0 0 30px rgba(0, 0, 0, .2);
        background: white;
        height: auto;
        position: relative;

    }

    .answer-plate__close {
        position: relative;
    }

    .answer-plate__close-img {
        position: absolute;
        font-size: 20px;
        right: 3px;
        color: #999;

    }

    .answer-plate-send {
        position: absolute;
        right: 0px;
        bottom: 0px;
    }

    .answer-plate-send-img {
        font-size: 27px;
        color: #fff;
        height: 40px;
        width: 55px;
        background: #ff8700;
        padding: 7px 16px;
        border-radius: 10px 0 0;
    }

    .fixed__plate {
        box-shadow: 0 0 20px rgba(0, 0, 0, .1);
        background: white;
    }

    .fixed__plate-answer {
        background: #ff8700;
        color: white;
        min-width: 120px;
        text-align: center;
        position: relative;
    }

    .fixed__plate-answer-desc {
        padding-left: 22px;
    }

    .fixed__plate-answer-icon {
        position: absolute;
        left: 1rem;
        top: 1.2rem;
    }

    .fixed__plate-end {
        background: white;
        color: black;
        text-align: center;
        width: 100%;

    }

    /*.post-page .highlight {*/
    /*background: #f8ffdd;*/

    /*border-radius: 8px;*/
    /*}*/

    .post-item__author-img {
        width: 40px;
        height: 40px;
    }

    .disc_teaser {
        margin-left: 0px;
        margin-bottom: 1.5rem;
    }

    @media (min-width: 768px) {
        .disc_teaser {
            margin-left: 56px;
            margin-bottom: 2rem;
        }
    }

    .article p:first-child {
        font-size: 18px;
        font-weight: 700;
        line-height: 28px;
        margin-left: 0;
        margin-right: 0;
    }

    /*---------------------рейтинг*/

    .product-plate__rating-wrap .Rate__star[data-v-59a74259] {
        padding: 0;
    }

    .product-plate__rating-wrap .icon[data-v-59a74259] {
        width: 11px;
        height: 11px;
        margin: 0 5px 0 0;
    }

    .product-plate__rating-wrap .Rate__star.filled[data-v-59a74259] {
        color: #f48615;
    }

    .sticky-sidebar {
        position: sticky !important;
        top: 80px;
    }

    /*-----------------слайдер*/

    .paginate__button {
        border: 1px solid #ddd;
        box-shadow: 0 1px 2px rgba(0, 0, 0, .1);
        padding: 10px 17px 9px;
        border-radius: 8px;
        &:hover {
            background: #fff6e5;
        }
    }

    ul.paginate-links.commentsP {
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
    }

    li.number a, .right-arrow a, .left-arrow a {
        flex-grow: 1;
        display: flex;
        align-items: center;
        text-align: center;
        cursor: pointer;
        transition: .1s;
        border-bottom: 3px solid #fff;
        padding: 11px 16px 8px;

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
        padding: 11px 5px 8px;
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

    .ProseMirror {
        outline: none;
    }

    .editor {
        position: relative;
        &__floating-menu {
            position: absolute;
            margin-top: -0.25rem;
            visibility: hidden;
            opacity: 0;
            transition: opacity 0.2s, visibility 0.2s;
        }
    }

    .menubar__button {
        background: rgba(0, 0, 0, 0);
        border: 0;
        border-radius: 3px;
        color: #000;
        cursor: pointer;
        display: -webkit-inline-box;
        display: -ms-inline-flexbox;
        display: inline-flex;
        font-weight: 700;
        margin-right: .2rem;
        padding: .2rem .5rem;
    }

    .menububble {

        background: #000;
        border-radius: 5px;
        display: flex;
        margin-bottom: .5rem;
        opacity: 0;
        padding: .3rem;
        position: absolute;
        transform: translateX(-50%);
        transition: opacity .2s, visibility .2s;
        visibility: hidden;
        z-index: 20;
    }

    .menububble__button {
        background: rgba(0, 0, 0, 0);
        border: 0;
        border-radius: 3px;
        color: #fff;
        cursor: pointer;
        display: -webkit-inline-box;
        display: -ms-inline-flexbox;
        display: inline-flex;
        margin-right: .2rem;
        padding: .2rem .5rem;
    }

    blockquote:last-child, h1:last-child, h2:last-child, h3:last-child, ol:last-child, p:last-child, pre:last-child, ul:last-child {
        margin-bottom: 0;
    }

    blockquote:first-child, h1:first-child, h2:first-child, h3:first-child, ol:first-child, p:first-child, pre:first-child, ul:first-child {
        margin-top: 0;
    }


</style>