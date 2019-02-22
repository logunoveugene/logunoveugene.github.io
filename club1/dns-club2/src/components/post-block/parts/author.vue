<template>
    <v-popover offset="0" popoverClass="user-dropdown">
        <div class="link link--dropdown" v-bind:style="{ color: fontColor }" :class="linkTag">{{author}}</div>
        <template slot="popover" class="">
            <div class="p-3 text-left user-dropdown">
                <div class="d-flex mb-3">
                    <div class="mr-3">
                        <img class="user-image rounded-circle" :src="authorImg" alt="">
                    </div>
                    <div class="">
                        <div class="h4 mb-0">
                            <a href="#" class="link link--color-grey">
                                {{author}}
                            </a>
                        </div>
                        <div class="small mb-0">Был на сайте 12 ноя 2018 г.</div>
                        <div class="small ">7 уровень</div>
                    </div>
                </div>


                <div class="d-flex mb-3">
                    <img v-tooltip.bottom-start="'Заслуженный критик'" src="https://i.snag.gy/jMiIGC.jpg" alt=""
                         class="ach">
                    <img v-tooltip.bottom-start="'Непревзойденный комментатор'" src="https://i.snag.gy/kAd46b.jpg"
                         alt="" class="ach">
                    <img v-tooltip.bottom-start="'Выдающийся писатель'" src="https://i.snag.gy/QhzyAe.jpg" alt=""
                         class="ach">
                </div>

                <div class="d-flex flex-column mb-2">
                    <a href="#" class="link link--color-grey">Комментарии: 15</a>
                    <a href="#" class="link link--color-grey">Темы: 6</a>
                    <a href="#" class="link link--color-grey">Статьи: 5</a>
                </div>
                <div class="mb-1">
                    <a href="#" class="link link--color-blue ">Посмотреть профиль</a>
                </div>
                <div class="mb-1">
                    <a href="#" class="link link--color-blue ">Отправить сообщение</a>
                </div>
            </div>
        </template>
    </v-popover>
</template>

<script>
    export default {
        name: "author",
        props: {
            author: {
                type: null,
                default: "Васян"
            },
            authorImg: {
                type: null,
                default: "https://i.snag.gy/z07FBT.jpg"
            },
            fontColor: {
                type: null,
                default: ""
            },
            linkTag: {
                type: null,
                default: ""
            }
        },
    }
</script>

<style>
    .user-dropdown .tooltip-inner {
        max-width: 300px;
        width: 300px;
        font-family: "PT Sans";
    }

    .tooltip .tooltip-inner {
        background: #333;
        color: white;
        border-radius: 8px;
        padding: 5px 12px;
    }

    .user-image {
        max-width: 50px;
        height: auto;
    }

    .ach {
        width: 40px;
        height: 40px;
        margin-right: 10px;
    }
</style>