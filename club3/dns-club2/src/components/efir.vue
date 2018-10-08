<template>
    <div class="live" v-if="live == 'showlive'">
        <div class="bg-light p-2">
            <div class="d-flex small" v-on:click="$emit('liveoff')">
                <a href="#" class="link link--color-grey">Скрыть</a>
            </div>
        </div>
        <div class="d-flex flex-row align-items-center p-3">
            <div class="h1 mb-0">В эфире</div>
            <div class="ml-3  pulse"></div>
        </div>
        <div class="scrol-plate">
            <ul class="list-unstyled small">
                <li class="media mb-4 " v-for="(live, index) in lives">
                    <div class="media-body">
                        <div class="  mb-1">{{live.type}}</div>
                        <a href="" class="link link--color-blue">{{live.title}}</a>
                        <div class="">{{live.desc}}
                        </div>
                        <div class="d-flex flex-row align-items-center justify-content-between mt-2">
                            <a class="link link--color-blue small " href="">Ответить</a>
                            <div class="text-secondary small"><a href="#"
                                                                 class="link link--color-blue">{{live.author}}</a>
                                {{live.date | fdate}}
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
            <div class="text-center mb-3">Загрузка</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "efir",
        data: function() {
            return {
                lives:[],
                error:[]
            }
        },
        props:{
            live: {
                type: null,
                default: ""
            }
        },
        created(){
            this.axios.get('https://club-paper.firebaseio.com/live.json')
                .then(response =>{
                    this.lives = response.data
                })
                .catch(e=>{
                    this.error.push(e)
                })
        }




    }


</script>

<style scoped>

</style>