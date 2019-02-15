<template>
    <div class="users-list-page">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="page__title mb-4">Последние награды за 24 часа</div>

                    <div class="d-flex flex-column flex-md-row justify-content-between mb-3">

                        <div class="" v-if="isUsersAwards">
                            <paginate
                                    class="row"
                                    name="usersList"
                                    :list="lastAward"
                                    :per="12"
                            >
                                <div class=" col-12 col-sm-6 col-lg-3 "
                                     v-for="(user, index) in paginated('usersList')"
                                     :key="index">
                                    <div class="award-widget">

                                        <img class="mb-2 img-60 rounded-circle " :src="user.img">
                                        <div class="media-body align-self-center">
                                            <div class="h4 mb-1">{{user.name}}</div>
                                            <div class="d-flex mb-3">
                                                <div class="small d-flex mr-1">
                                                    <span class="mr-2">Получил</span>
                                                    <author :author="user.userName"
                                                            linkTag="link--color-blue"/>
                                                </div>
                                            </div>
                                            <div class="d-flex small">
                                                <div class="mr-3">12 минут назад</div>
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


    import author from "@/components/post-block/parts/author.vue"


    export default {
        components: {

            author
        },
        data() {
            return {
                lastAward: 'register-modules-example',
                paginate: ['usersList'],
                isUsersAwards: true,


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
            this.axios.get('https://club-route.firebaseio.com/last_awards.json')
                .then(response => {
                    this.lastAward = response.data
                })
                .catch(e => {
                    this.error.push(e)
                })


        }
    }
</script>

<style lang="scss">
    .award-widget {
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