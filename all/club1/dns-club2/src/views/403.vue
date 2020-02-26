<template>
    <div class="error-404">
        <div class="container">
            <div class="row">

                <div class="col-12">
                    <div class="d-flex flex-column flex-md-row ">
                        <div class="">
                            <div class="page__title ">Доступ запрещен</div>
                            <div class="h3 mb-4">
                                Для выполнения действия необходима регистрация и соотвествующие права.
                            </div>


                            <nav class="nav mb-4 ">
                                <div class="nav__link">
                                    <a href="#" class="link link--color-blue">Войти</a>
                                </div>
                                <div class="nav__link">
                                    <a href="" class="link link--color-blue">Зарегистрироваться</a>
                                </div>

                            </nav>


                        </div>
                        <div class="ml-auto mb-5">
                            <img class="img-error img-fluid"
                                 src="https://i.snag.gy/mQHuYR.jpg" alt="">
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </div>
</template>

<script>

    export default {
        components: {},
        data() {
            return {}

        },
        methods: {},
        created() {


        }
    }
</script>

<style lang="scss">
    .img-error {
        height: auto;
        width: 450px;
    }

</style>