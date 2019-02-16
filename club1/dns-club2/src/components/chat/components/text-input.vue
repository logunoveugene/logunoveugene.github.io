<script>
    import {mapMutations, mapGetters} from 'vuex';

    export default {
        data() {
            return {
                content: ''
            };
        },


        computed: {

            ...mapGetters([

                'currentId'
            ]),

        },
        methods: {
            onKeyup(e) {
                if (e.ctrlKey && e.keyCode === 13 && this.content.length) {
                    this.SEND_MESSAGE(this.content);
                    this.content = '';
                }
            },
            // (...) 对象展开运算符
            ...mapMutations([
                'SEND_MESSAGE'
            ]),

        }
    };
</script>

<template>

    <div v-if="currentId!==null" class="text">
        <input placeholder="Для отправки нажми Ctrl + Enter" v-model="content" @keyup="onKeyup" class="field"/>
        <div class="send-form-icon">
            <div class="icon-send" @click="content.length ? (SEND_MESSAGE(content),content = ''): null"></div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
    .text {

        display: flex;
        align-items: center;

        padding: 16px;
        background: #f2f2f2;
        border-radius: 0 0 8px 8px;

        textarea {
            padding: 10px;
            height: 100%;
            width: 100%;
            border: 1px solid #eee;
            border-radius: 8px;
            outline: none;
            font-family: "PT Sans";
            resize: none;
        }
    }
    .send-form-icon{
        margin-left: 1rem;
        font-size: 28px;
        height: 30px;
        overflow: hidden;
        color: #999999;
        cursor: pointer;
        &:hover{
            color: #666;
        }
    }
</style>