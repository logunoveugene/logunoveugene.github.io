<script>
    import {mapMutations, mapGetters} from 'vuex';


    import Card from './components/card';
    import List from './components/list';
    import TextInput from './components/text-input';
    import Message from './components/message';

    export default {
        components: {Card, List, TextInput, Message},
        methods: mapMutations([
            'INIT_DATA',
        ]),
        created() {
            this.INIT_DATA();
        },
        computed: mapGetters([
            'currentId'
        ]),
    };
</script>

<template>
    <div id="chat">
        <div class="sidebar">
            <card></card>
            <list></list>
        </div>
        <div class="main">
            <message></message>

            <text-input></text-input>
        </div>
    </div>
</template>

<style lang="scss">

    #chat {

        width: 100%;
        height: 600px;
        overflow: hidden;
        border-radius: 3px;
        position: relative;
        display: flex;

        .sidebar, .main {
            height: 100%;
        }

        .main {
            display: flex;
            flex-direction: column;
            z-index: 10;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
        }
        .sidebar {
            width: 100%;
            color: #333333;
            background-color: #ffffff;
            margin-right: 20px;
        }

        .message {
            height: calc(100% - 160px);
            background-color: #f2f2f2;
            border-radius: 8px 8px 0 0;
        }
    }

    @media(min-width: 768px) {
        #chat {

            width: 100%;
            height: 600px;

            overflow: hidden;
            border-radius: 3px;

            .sidebar, .main {
                height: 100%;
            }

            .main {
                display: flex;
                flex-direction: column;
                position: relative;
                top: 0;
                left: 0;
                width: 60%;

            }
            .sidebar {
                float: left;
                width: 40%;
                color: #333333;
                background-color: #ffffff;
                margin-right: 20px;
            }

            .message {
                height: calc(100% - 160px);
                background-color: #f2f2f2;
                border-radius: 8px 8px 0 0;
            }
        }
    }

</style>
