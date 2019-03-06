<template>
    <div class="error-404">
        <div class="container">
            <div class="row">

                <div class="col-12">
                    <div class="d-flex flex-column flex-md-row ">

                        <div class="">
                            <div class="page__title ">Страница не найдена</div>
                            <div class="h3 mb-4">
                                К сожалению, запрашиваемая Вами страница не найдена на нашем сайте.
                            </div>

                            <div class="mb-1">Мы можете найти прапавшую страницу в нашем поиске</div>
                            <input type="text" placeholder="Поиск по сайту" class="field mb-4">

                            <div class="mb-2">Или перейдите в один из разделов:</div>

                            <nav class="nav mb-4 ">
                                <div class="nav__link">
                                    <a href="#" class="link link--color-blue">Коммуникатор</a>
                                </div>
                                <div class="nav__link">
                                    <a href="" class="link link--color-blue">Дайджесты</a>
                                </div>
                                <div class="nav__link">
                                    <a href="" class="link link--color-blue">Обзоры</a>
                                </div>
                                <div class="nav__link">
                                    <a href="" class="link link--color-blue">Блоги</a>
                                </div>
                                <div class="nav__link">
                                    <a href="" class="link link--color-blue">О клубе</a>
                                </div>
                            </nav>


                        </div>
                        <div class="ml-auto">
                            <img class=" img-fluid img-error" src="https://i.snag.gy/zicl5t.jpg" alt="">
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