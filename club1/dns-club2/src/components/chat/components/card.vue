<script>
    import _ from 'lodash';
    import {mapMutations, mapState} from 'vuex';
    import author from "../../post-block/parts/author"

    export default {
        components:{
            author
        },
        computed: mapState([
            'user',
            'filterKey',
        ]),
        methods: {
            debounceOnKeyup: _.debounce(function (e) {
                this.SET_FILTER_KEY(e.target.value);
            }, 150),
            ...mapMutations([
                'SET_FILTER_KEY',
            ])
        }
    };
</script>

<template>
    <div class="message-search-plate">

        <div class="d-flex align-items-center">
            <input class="field" type="text" placeholder="Найти пользователя..." @keyup="debounceOnKeyup">
            <v-popover offset="0">
                <div class="massage-icon-menu  px-3">
                    <div class="icon-menu"></div>
                </div>
                <template slot="popover">

                    <div class="py-2 py-3 text-center px-3">
                        <a href="#" class="link link--color-grey">Черный список</a>
                    </div>
                </template>
            </v-popover>
        </div>
    </div>
</template>

<style  lang="scss">
    .message-search-plate {
        padding: 0  0 1rem 0 ;
        /*border-bottom: solid 1px #eeeeee;*/

    }
</style>