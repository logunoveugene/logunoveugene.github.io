<script>
    import {mapMutations, mapGetters} from 'vuex';
    import author from "../../post-block/parts/author"

    export default {
        components: {
            author
        },
        computed: mapGetters([
            'sessions',
            'currentId'
        ]),
        methods: mapMutations([
            'SELECT_SESSION'
        ])
    };
</script>

<template>
    <div class="list">
        <ul>
            <li v-for="item in sessions" :class="{ active: item.id === currentId }" @click="SELECT_SESSION(item.id)">

                <div class="d-flex align-items-center justify-content-between flex-fill">

                    <div class="d-flex align-items-center flex-fill ">
                        <img class="avatar" width="30" height="30" :alt="item.user.name" :src="item.user.img">
                        <div class="d-flex flex-column flex-fill ">
                            <div class="d-flex flex-fill  align-items-center justify-content-between">
                                <div class="font-weight-bold">
                                    {{item.user.name}}
                                </div>
                                <div class="small text-secondary">
                                    {{item.messages[item.messages.length-1].date | fulldate}}
                                </div>
                            </div>

                            <div class="small text-secondary message-text-truncate">
                                <span v-if="item.messages[item.messages.length-1].self">
                                    <i class="icon-reply"></i>
                                </span>
                                {{item.messages[item.messages.length-1].content}}
                            </div>
                        </div>
                    </div>
                    <v-popover offset="0">
                        <div class="massage-icon-menu pl-3">
                            <div class="icon-menu"></div>
                        </div>
                        <template slot="popover">
                            <div class="py-2 py-3 text-center px-3 bb-1">
                                <a href="#" class="link link--color-grey">Удалить переписку</a>
                            </div>
                            <div class="py-2 py-3 text-center px-3">
                                <a href="#" class="link link--color-grey">В черный список</a>
                            </div>
                        </template>
                    </v-popover>
                </div>
            </li>
        </ul>
    </div>
</template>

<style lang="scss">

    .massage-icon-menu {
        font-size: 14px;
        color: #dddddd;
    }

    .list {

        li {
            padding: 12px 15px;
            /*border-bottom: 1px solid #eeeeee;*/
            cursor: pointer;
            transition: background-color .1s;

            &:hover {
                background-color: #FFF0D9 !important;
                border-radius: 8px;
            }
            &.active {
                background-color: #f2f2f2;
                border-radius: 8px;
            }
        }
        .avatar, .name {
            vertical-align: middle;
        }
        .avatar {
            border-radius: 50px;
            width: 30px;
            height: 30px;
            overflow: hidden;
            margin-right: .5rem;
        }
        .name {
            display: inline-block;
            margin: 0 0 0 15px;
        }
    }

    .message-text-truncate{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        max-width: 220px;
    }
</style>