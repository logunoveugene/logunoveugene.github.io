<template>
    <div id="app">
        <mainheader :live="live" v-on:liveon="liveon"></mainheader>
        <efir-bar :live="live" v-on:liveoff="liveoff"></efir-bar>
        <transition name="fade">
            <router-view/>
        </transition>
    </div>
</template>

<script>
    import mainheader from "./components/header.vue"
    import efir from "./components/efir.vue"

    export default {
        components: {
            mainheader,
            'efir-bar': efir

        },
        data: function () {
            return {

                live: "showlive",
                window: {
                    width: 0,
                    height: 0
                }

            }
        },
        methods: {

            liveoff: function () {
                this.live = "";
            },
            liveon: function () {
                this.live = "showlive";
            },
            handleResize() {
                this.window.width = window.innerWidth;
                this.window.height = window.innerHeight;
                if (this.window.width < 1440) {
                    this.live = "";
                }
            }

        },

        created() {
            window.addEventListener('resize', this.handleResize)
            this.handleResize();
        },

        destroyed() {
            window.removeEventListener('resize', this.handleResize)
        }
    }


</script>

<style lang="scss">
    .fade-enter-active, .fade-leave-active {
        transition-property: opacity;
        transition-duration: .25s;
    }

    .fade-enter-active {
        transition-delay: .25s;
    }

    .fade-enter, .fade-leave-active {
        opacity: 0
    }
</style>
