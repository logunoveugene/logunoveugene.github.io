<template>
    <div class="footer">
        <div class="footer__container container ">

            <div class="footer__project d-flex  flex-wrap justify-content-around justify-content-lg-between">
                <div class="footer__project-img-wrap">
                    <img src="../assets/dns.svg" alt=""
                         class="footer__project-img">
                </div>
                <div class="footer__project-img-wrap">
                    <img src="../assets/tp.svg" alt=""
                         class="footer__project-img">
                </div>
                <div class="footer__project-img-wrap">
                    <img src="../assets/service.svg" alt="" class="footer__project-img">
                </div>
                <div class="footer__project-img-wrap">
                    <img src="../assets/club.svg" alt=""
                         class="footer__project-img">
                </div>
            </div>
            <div class="footer__row row pt-3">
                <div class="footer__col col-12 col-lg">
                    <div class="footer__col-head  ">Статьи</div>
                    <ul class="footer__menu-list list-unstyled small d-none d-lg-block">
                        <li class="footer__menu-item">
                            <a href="#" class="link link--color-white">Дайджест</a>
                        </li>
                        <li class="footer__menu-item">
                            <a href="#" class="link link--color-white">Обзоры</a>
                        </li>
                        <li class="footer__menu-item">
                            <a href="#" class="link link--color-white">Лайфхаки</a>
                        </li>

                    </ul>
                </div>
                <div class="footer__col col-12 col-lg">
                    <div class="footer__col-head  ">Обсуждения</div>
                    <ul class="footer__menu-list list-unstyled small d-none d-lg-block">

                        <li class="footer__menu-item">
                            <a href="#" class="link link--color-white">Новые темы</a>
                        </li>
                        <li class="footer__menu-item">
                            <a href="#" class="link link--color-white">Лучшие</a>
                        </li>
                        <li class="footer__menu-item">
                            <a href="#" class="link link--color-white">Популярные</a>
                        </li>
                    </ul>
                </div>
                <div class="footer__col col-12 col-lg">
                    <div class="footer__col-head  ">О нашем клубе</div>
                    <ul class="footer__menu-list list-unstyled small d-none d-lg-block">
                        <li class="footer__menu-item">

                            <router-link class="link link--color-white" to="/info-page">О проекте</router-link>

                        </li>
                        <li class="footer__menu-item">
                            <router-link class="link link--color-white" to="/info-page">Тур по сайту</router-link>

                        </li>
                        <li class="footer__menu-item">
                            <router-link class="link link--color-white" to="/info-page">Для авторов</router-link>

                        </li>

                    </ul>
                </div>
                <div class="footer__col col-12 col-lg">
                    <div class="footer__col-head ">Легкий старт</div>
                    <ul class="footer__menu-list list-unstyled small d-none d-lg-block">
                        <li class="footer__menu-item">
                            <a href="#" class="link link--color-white">Зарегистрироваться
                              </a>
                        </li>
                        <li class="footer__menu-item">
                            <a href="#" class="link link--color-white">Написать статью</a>
                        </li>
                        <li class="footer__menu-item">
                            <a href="#" class="link link--color-white">Создать тему</a>
                        </li>
                    </ul>

                </div>

                <div class="footer__col col-lg-3 col-12">
                    <div class="footer__col-head  d-none d-lg-block">Мы в соцсетях</div>
                    <!--<div class="d-block d-lg-none">-->
                        <!--<div class="h5 mt-4">Нашли ошибку</div>-->
                    <!--</div>-->
                    <!--<div class="footer__phone d-flex mb-4 align-items-center flex-wrap">-->

                        <!--<div class="footer__phone-desc">Выделите ее и нажмите Ctrl + Enter</div>-->
                    <!--</div>-->



                    <div class="footer__social d-flex">
                        <div class="footer__social-item-link">
                            <a href="" class="link link--color-white">
                                <span class="icon-vk"></span>
                            </a>
                        </div>
                        <div class="footer__social-item-link">
                            <a href="" class="link link--color-white">
                                <span class="icon-facebook"></span>
                            </a>
                        </div>
                        <div class="footer__social-item-link">
                            <a href="" class="link link--color-white">
                                <span class="icon-twitter"></span>
                            </a>
                        </div>
                        <div class="footer__social-item-link">
                            <a href="" class="link link--color-white">
                                <span class="icon-youtube-play"></span>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-12 mt-4">
                    <div class="footer__copyright  small">
                        Администрация Сайта не несет ответственности за размещаемые Пользователями материалы (в т.ч.
                        информации и изображений), их содержание, качество.
                    </div>
                    <div class="footer__copyright  small">© 2002—2018 Компания DNS</div>
                </div>
            </div>


        </div>
    </div>
</template>


<style>


    .footer__subscribe {
        border-bottom: 1px solid #444;
        padding-bottom: 1.5rem;
        margin-bottom: .25rem;

    }

    .footer__subscribe-icon {
        font-size: 43px;
        line-height: 30px;
        margin-right: 1rem;
    }

    .footer {
        background: #333;
        padding-top: 0;
        /*margin-top: 1rem;*/
        color: #fff;

    }

    .footer__col-head {
        margin-bottom: 0;
        font-size: 14px;
        width: 100%;
        padding: .75rem 0;
        border-top: 1px solid #444;
        font-weight: 500;
        position: relative;
    }

    .footer__col-head:after {
        content: "\73";
        font-family: "homepage-dns" !important;
        position: absolute;
        right: 0;
    }

    .footer__menu-item {
        margin-bottom: .5rem;
        font-size: 14px;
    }

    .footer__phone {
        margin-bottom: .5rem;
    }

    .footer__phone-num {
        font-size: 18px;
        margin-right: .5rem;
    }

    .footer__phone-desc {
        font-size: 14px;

    }

    .footer__adress-link {
        margin-bottom: 1rem;
    }

    .footer__social {
        margin-bottom: 2rem;
    }

    .footer__social-item-link {
        font-size: 18px;
        padding: 8px 9px 0 9px;
        border: 1px solid #717171;
        margin-right: .5rem;

        border-radius: 4px;
    }

    .footer__copyright {
        padding: 1rem 0;
        border-top: 1px solid #444;
    }

    .footer__form-field {
        border-radius: 8px;
        border: 1px solid #999;
        background-color: #444;
        height: 40px;
        padding: 8px 0 8px 15px;
        color: #fff;
        width: inherit;
    }

    .footer__subscribe-form {
        width: 100%;
    }

    .footer__subscribe-title {
        width: 100%;
        margin-bottom: 1rem;
        line-height: 1.3;

    }

    .footer__project {
        padding: 1.5rem 0 0 0;
        border-bottom: none;
        margin-bottom: 0;
    }

    .footer__project-img {
        opacity: 1;
        height: 14px;
        width: auto;
        margin-bottom: 1.5rem;
        transition: .5s;
        cursor: pointer;

    }

    .footer__project-img:hover {
        opacity: .7;
    }

    .footer__project-img-wrap {
        width: 50%;
    }

    @media (min-width: 768px) {
        .footer__project-img-wrap {
            width: auto;
        }

    }

    @media (min-width: 992px) {
        .footer__project {
            /*	padding-bottom: 2rem;*/
            border-bottom: 1px solid #444;
            margin-bottom: 2rem;
            padding: 1rem 0 0 0;
        }

        .footer__project-img {
            height: 20px;
        }

        .footer__project-img {

            margin-bottom: 2rem;

        }

        .footer {

            padding-top: 1.5rem;
        }

        .footer__subscribe-title {

            padding: .25rem 0 0 0;

        }

        .footer__col-head:after {
            content: "";
        }

        .footer__col-head {
            margin-bottom: 1rem;
            font-size: 18px;
            font-weight: 500;
            padding: 0;
            border-top: none;
            color: #fff;

        }

        .footer__subscribe {
            border-bottom: 1px solid #444;
            padding-bottom: 1.5rem;
            margin-bottom: 1rem;

        }

    }

    .footer__icon-level-down {
        font-size: 17px;
        line-height: 19px;
        height: 24px;
        color: #999;
        display: block;
        padding-top: 4px;
    }


</style>