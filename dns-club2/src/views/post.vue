<template>
    <div class="post-page">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="small mb-3">
                        <router-link class="link link--color-black" to="/">Клуб</router-link>
                        /
                        <router-link class="link link--color-black" to="/review"> Обзоры</router-link>
                        /
                        <span class="text-muted">{{post.title}}</span>
                    </div>
                </div>
                <div class="col-12 col-lg-8">

                    <div class="page__title mb-4">{{post.title}}</div>

                    <div class="d-flex flex-column flex-md-row justify-content-between mb-3">
                        <div class="d-flex align-items-center mb-3">
                            <div class="mr-3">
                                <img class="post-item__author-img rounded-circle " :src="post.autorImg" alt="">
                            </div>
                            <div class="d-flex flex-column">
                                <div class="post__author-name">
                                    <a class="link link--color-black mr-2" href="#">{{post.autor}}</a>
                                </div>

                                <div class="small text-muted ">опубликованно {{post.date | fdate}}</div>
                            </div>
                        </div>
                        <div class="mt-auto mb-2">
                            <post-info
                                    :like="post.like"
                                    :comment="post.comment"
                                    :view="post.view"
                            ></post-info>
                        </div>
                    </div>

                    <div class=" d-none d-lg-block card-block  layout--bg-grey  p-4 mb-4">
                        <div class="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center">
                            <div class="d-flex flex-column">
                                <div class="h2 mb-2">Содержание</div>
                                <ul class="list-unstyled mb-0">
                                    <li>
                                        <a href="" class="link link--color-black">Упаковка и комплект поставки</a>
                                    </li>
                                    <li>
                                        <a href="" class="link link--color-black">Внешний вид</a>
                                    </li>
                                    <li>
                                        <a href="" class="link link--color-black">Технические характеристики</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="d-block d-lg-none ">
                        <div v-ripple class="card-block  layout--bg-grey  card-block--full-mobile p-3 "
                             @click="collapseHeadList=!collapseHeadList">
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="">Содержание

                                </div>
                                <div v-if="!collapseHeadList" class="icon-down"></div>
                                <div v-if="collapseHeadList" class="icon-up"></div>
                            </div>
                        </div>
                    </div>
                    <div class="my-4" v-if="collapseHeadList">
                        <ul class="list-unstyled mb-0">
                            <li>
                                <a href="" class="link link--color-black">Упаковка и комплект поставки</a>
                            </li>
                            <li>
                                <a href="" class="link link--color-black">Внешний вид</a>
                            </li>
                            <li>
                                <a href="" class="link link--color-black">Технические характеристики</a>
                            </li>
                        </ul>
                    </div>


                    <div class="d-block d-lg-none ">
                        <div v-ripple class="card-block card-block--full-mobile p-3 " @click="collapseProduct=!collapseProduct">
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="">Упомянутые товары
                                    <span v-if="post.products" class="text-muted ml-2">{{post.products.length}}</span>
                                </div>
                                <div v-if="!collapseProduct" class="icon-down"></div>
                                <div v-if="collapseProduct" class="icon-up"></div>
                            </div>
                        </div>
                    </div>
                    <div class="my-4" v-if="collapseProduct">
                        <product-list :products="post.products"></product-list>
                    </div>


                    <div class="article pt-3">
                        <p>Здравствуйте, уважаемые читатели! В этом обзоре мы рассмотрим ноутбук от
                            компании Lenovo. Среди главных особенностей модели стильный дизайн, Full HD дисплей, а также
                            дополнительный
                            накопитель Intel Optane Memory, который ускоряет работу системы.</p>

                        <p>Lenovo Group Limited - китайская компания, выпускающая персональные компьютеры и другую
                            электронику. Является крупнейшим производителем персональных компьютеров в мире с долей на
                            рынке
                            более 20 %, а
                            также занимает пятое место по производству мобильных телефонов. Штаб-квартира компании
                            Lenovo
                            расположена в
                            Пекине (КНР), а зарегистрирована компания в Гонконге.</p>
                        <img :src="post.img" alt="">
                        <h1>Технические характеристики</h1>
                        <ul>
                            <li>Тип устройства: классический ноутбук</li>
                            <li>Операционная система: Windows 10 Home</li>
                            <li>Модель: Lenovo Ideapad 330-15IKB</li>
                            <li>Версия: 81DE00VMRU</li>
                        </ul>
                        <h1>Внешний вид</h1>
                        <p>Сегодня на обзоре у меня защищённый смартфон от компании GINZZU. Данные смартфоны являются
                            редким
                            гостем для обзоров, но всё равно они заслуживают пристального внимания. Поговорим мы о
                            модели
                            «GINZZU RS9602». Смартфон обладает максимальной степенью защиты – IP69 и в техническом плане
                            оснащён довольно интересно!</p>
                        <p>Среди смартфонов, реализуемых под российскими торговыми марками, немалую долю занимает
                            продукция
                            DEXP. Модельный ряд современных устройств связи под лейблом этой компании пополняется на
                            регулярной основе. В основном это среднебюджетные экземпляры с выгодным соотношением цены и
                            производительности.</p>
                        <p>Лицевая сторона изображает нам кулер во всей красе, рядом уместилась различная информация,
                            например, название модели и обтекаемая формулировка о совместимости с Intel и AMD. Одна из
                            боковых сторон дублирует часть информации с лицевой, но уже с изображениями. На другой
                            боковой
                            стороне среди прочего нанесены основные спецификации кулера на английском языке. Ниже указан
                            список совместимых сокетов процессоров обоих производителей. На тыльной стороне коробки
                            указаны
                            особенности СО на 14 языках, включая русский.</p>
                        <p>Дизайн ноутбука максимально простой, черный матовый пластик, скругленные края. Помимо
                            надписи Lenovo на лицевой стороне более ничего нет.</p>
                        <p>Как и множество других решений компании, Zalman 9X Optima использует технологию прямого
                            контакта
                            или
                            DTH (Direct Touch Heatpipes). Тепловые трубки, проходя через подошву кулера, напрямую
                            (почти,
                            через
                            термопасту, конечно же) контактируют с теплораспределительной крышкой процессора. Расстояние
                            между
                            трубками в подошве чуть более 1 мм. Качество обработки основания среднее.</p>

                        <img src="https://c.dns-shop.ru/thumb/st4/fit/750/843/21e7d8a686775d03577082a1e2371405/ed33b905cb5ff67476c59d144b0e0673201468271afc1c79ee2c92a7b0ca602e.jpg">

                        <p>Дисплей полуматовый, то есть убирает большинство бликов, но иногда может отражать размытые
                            очертания объектов.
                            Кристаллический эффект практически незаметен. Матрица – обычная TN, яркость начинает
                            меняться
                            при вашем
                            отклонении по вертикали. Толщина рамок по ширине составляет 15 мм, что достаточно неплохо.
                            Разрешение дисплея
                            1920х1080 – идеально для работы и просмотра фильмов, но может вызвать тормоза в современных
                            играх.
                        </p>
                        <p>"Память Intel® Optane™ — это интеллектуальная технология памяти, которая повышает
                            быстродействие
                            компьютера. Она запоминает часто используемые документы, фотографии и видео и ускоряет
                            доступ к
                            ним даже при включении компьютера после отключения питания — это значит, что вы сможете
                            работать, играть и заниматься творчеством, не теряя времени на ожидание."</p>
                        <blockquote>Разберемся, что у нашего девайса под капотом. Для того, чтобы снять крышку ноутбука
                            потребуется не
                            только открутить 15 винтов, но еще и поддеть множество защелок (пластиковой картой,
                            например),
                            что может
                            представлять некоторую трудность обычному пользователю.
                        </blockquote>
                        <p>Наушники имеют мониторный характер звучания, что понравится тем, кто хочет слышать музыку
                            так,
                            как она задумывалась. Верхние частоты воспроизводятся очень хорошо, не перемешиваясь со
                            средними. Средние частоты – нейтральные. Слышно каждый инструмент. Низкие частоты тоже ярко
                            выражены, что удивляет, учитывая размеры, но тут всё просто, чем ближе динамик расположен к
                            органам слуха, тем меньше нужен размер драйвера для хорошей передачи басов. Диапазон 20 – 20
                            000
                            герц они безусловно отыгрывают. Мониторная направленность позволяет обратить внимание на
                            дефекты
                            записи и по-новому прослушать любимые качественные треки. Записи отлично звучат на ровном
                            эквалайзере. Для любителей «объективной» оценки звука производитель приводит график
                            АЧХ. </p>


                        <p>Во время работы, файлы, которые вы используете чаще всего, будут записываться на этот
                            накопитель.
                            При повторном запуске данные будут считываться не с медленного жесткого диска, а именно с
                            Optane
                            Memory, что даст значительный прирост скорости загрузки. Так как память постоянная, то после
                            перезагрузки системы данные не потеряются и дополнительное время на кэширование не
                            потребуется.</p>
                        <div class="table__wrap">
                            <table class="table">

                                <tbody>
                                <tr>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>

                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>

                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <p> Слышно каждый инструмент. Низкие частоты тоже ярко
                            выражены, что удивляет, учитывая размеры, но тут всё просто, чем ближе динамик расположен к
                            органам слуха, тем меньше нужен размер драйвера для хорошей передачи басов. Мониторная
                            направленность позволяет обратить внимание на дефекты
                            записи и по-новому прослушать любимые качественные треки. Записи отлично звучат на ровном
                            эквалайзере. Для любителей «объективной» оценки звука производитель приводит график
                            АЧХ. </p>

                        <h1>Тестирование</h1>
                        <ol>
                            <li>Литий-ионный аккумулятор. Имеет маркировку L16M2PB1. Емкость его составляет 3895
                                миллиампер в час при напряжении в 7,5 вольт.
                            </li>
                            <li>Жесткий диск производства компании Seagate. Имеет маркировку ST1000LM035. Емкость
                                его составляет 1 терабайт при объеме буфера 128 МБ.
                            </li>
                            <li>Модель не славится высокой надежностью и, вдобавок, довольно громко щелкает
                                головками при работе.
                            </li>
                            <li>Ноутбук имеет 4 гигабайт встроенной оперативной памяти, которая распаяна на плате.
                                Многим этого окажется мало, поэтому производитель предусмотрел дополнительный слот. Вы в
                                любой момент
                                сможете докупить планку на 4 ГБ или 8 ГБ и установить ее в ноутбук.
                            </li>
                            <li>Модуль беспроводной связи. Имеет маркировку Intel 3165NGW. Объединяет в себе Wi-Fi
                                и Bluetooth.
                            </li>
                        </ol>
                        <h1>Заключение</h1>
                        <p>Дисплей полуматовый, то есть убирает большинство бликов, но иногда может отражать размытые
                            очертания объектов.
                            Кристаллический эффект практически незаметен. Матрица – обычная TN, яркость начинает
                            меняться
                            при вашем
                            отклонении по вертикали. Толщина рамок по ширине составляет 15 мм, что достаточно неплохо.
                            Разрешение дисплея
                            1920х1080 – идеально для работы и просмотра фильмов, но может вызвать тормоза в современных
                            играх.
                        </p>
                        <h2>Достоинства</h2>
                        <p>Дизайн ноутбука максимально простой, черный матовый пластик, скругленные края. Помимо
                            надписи Lenovo на лицевой стороне более ничего нет.</p>
                        <h2>Недостатки</h2>
                        <p>В мире с долей на рынке более 20 %, а
                            также занимает пятое место по производству мобильных телефонов. Штаб-квартира компании
                            Lenovo
                            расположена в
                            Пекине (КНР), а зарегистрирована компания в Гонконге.</p>


                    </div>

                    <post-tag-full class=" mb-4  "
                                   :source="post.source"
                                   :format="post.format"
                                   :tags="post.tags"
                    ></post-tag-full>
                </div>
                <div class="col-12 col-lg-4 d-none d-lg-block">
                    <div class=" sticky-sidebar">
                        <product-list :products="post.products"></product-list>

                    </div>
                </div>


            </div>
        </div>
        <div class="layout--hidden-content pt-5">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="h1 mb-4">Читайте также</div>
                        <swiper class="livehack-slider" :options="lifehackOption">

                            <swiper-slide v-for="(post, index) in posts" :key="index">
                                <post-img :post="post"></post-img>
                            </swiper-slide>
                            <div class="swiper-pagination" slot="pagination"></div>
                            <div class="sw-button-prev" slot="button-prev">
                                <div class="icon-arrow-left "></div>
                            </div>
                            <div class="sw-button-next" slot="button-next">
                                <div class="icon-arrow-right"></div>
                            </div>

                        </swiper>
                    </div>
                </div>
            </div>
        </div>
        <div class="container mt-4">
            <div class="row">
                <div class="col-12 col-lg-8">
                    <div class="h1 mb-4">Комментарии
                        <div class="d-inline text-muted">{{post.comment}}</div>
                    </div>
                    <div class="mb-5">
                        <div class="comment-block__adding-box">
                            <froala :tag="'textarea'" :config="config" v-model="commentText"></froala>
                        </div>

                        <button type="button" class="btn btn--color-white ">Добавить комментарий</button>


                    </div>
                    <comment-item v-for="comment in comments" :comment="comment" :key="comment.id"></comment-item>


                </div>
            </div>


        </div>
        <div class="layout--hidden-content pt-5">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="h1 mb-4">Самое популярное</div>
                        <swiper class="livehack-slider" :options="lifehackOption">

                            <swiper-slide v-for="(post, index) in posts" :key="index">
                                <post-img :post="post"></post-img>
                            </swiper-slide>
                            <div class="swiper-pagination" slot="pagination"></div>
                            <div class="sw-button-prev" slot="button-prev">
                                <div class="icon-arrow-left "></div>
                            </div>
                            <div class="sw-button-next" slot="button-next">
                                <div class="icon-arrow-right"></div>
                            </div>

                        </swiper>
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>

<script>

    import postInfo from '@/components/post-block/parts/post-info.vue'
    import postTagFull from '@/components/post-block/parts/post-tag-full.vue'
    import postImg from '@/components/post-block/post-img.vue'
    import commentItem from '@/components/comment-item.vue'
    import LightBox from 'vue-image-lightbox'
    import productList from '@/components/product-list.vue'


    import {swiper, swiperSlide} from 'vue-awesome-swiper'
    import 'swiper/dist/css/swiper.css'
    import ProductList from "../components/product-list";


    export default {
        components: {
            ProductList,
            postInfo,
            LightBox,
            postTagFull,
            swiper,
            swiperSlide,
            commentItem,
            postImg,
            productList
        },
        data() {
            return {
                name: 'register-modules-example',
                post: {},
                posts: {},
                comments: {},
                commentText: "",
                collapseHeadList: false,
                collapseProduct: false,
                config: {
                    toolbarInline: true,
                    placeholderText: 'Вам слово...',
                    heightMin: 80,
                    charCounterMax: 140,
                    quickInsertButtons: ['image', 'video', 'table'],
                    toolbarButtons: ['bold', 'italic', 'quote', 'paragraphFormat', 'insertLink', 'underline', 'formatOL', 'formatUL'],

                },
                images: [
                    {
                        thumb: 'https://via.placeholder.com/160x90',
                        src: 'https://via.placeholder.com/1600x900',
                        caption: 'Описание'

                    },
                    {
                        thumb: 'https://via.placeholder.com/160x90',
                        src: 'https://via.placeholder.com/1600x900',
                        caption: 'Описание2'

                    }
                ],
                lifehackOption: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    },
                    breakpoints: {
                        992: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                            pagination: {
                                el: '.swiper-pagination',
                            },
                        },
                        768: {
                            slidesPerView: "auto",
                            spaceBetween: 40
                        }
                    },
                    navigation: {
                        nextEl: '.sw-button-next',
                        prevEl: '.sw-button-prev'
                    }

                },

            }
        },
        created() {
            this.axios.get('https://club-route.firebaseio.com/digest.json?orderBy=%22id%22&equalTo=' + this.$route.params.id)
                .then(response => {
                    this.post = Object.values(response.data)[0]
                })
                .catch(e => {
                    this.error.push(e)
                })

            this.axios.get('https://club-route.firebaseio.com/comments.json?orderBy=%22postId%22&equalTo=' + this.$route.params.id)
                .then(response => {
                    this.comments = Object.values(response.data)
                })
                .catch(e => {
                    this.error.push(e)
                })

            this.axios.get('https://club-route.firebaseio.com/digest.json')
                .then(response => {
                    this.posts = response.data
                })
                .catch(e => {
                    this.error.push(e)
                })


        }
    }
</script>

<style>
    .comment-block__adding-box {
        border: 1px solid #e8e3e3;
        border-radius: 8px;
        padding: 1rem;
        margin-bottom: 1rem;
        max-width: 100%;
    }

    .post-item__author-img {
        width: 40px;
        height: 40px;
        background: #eee;
    }

    .post__author-name {
        line-height: 1.1;
    }

    .article blockquote {
        padding-left: 20px;
        border-left: 3px solid #ff8700;
        padding-bottom: 0;
        margin-top: 2rem;
        margin-bottom: 2rem;
        font-style: italic;
        font-size: 18px;
    }

    @media (min-width: 768px) {
        .article p, .article h1, .article h2, .article ul, .article ol, .article .table__wrap {
            margin-left: 0px;
            margin-right: 80px;

        }

        .article p {

            font-size: 18px;
        }

        .article blockquote {
            padding-left: 40px;
            border-left: 3px solid #ff8700;
            padding-bottom: 0;
            margin-top: 2rem;
            margin-bottom: 2rem;
            font-style: italic;
            font-size: 24px;
        }

    }

    .article img {
        width: 100%;
        height: auto;
        border-radius: 8px;
        overflow: hidden;
        margin-bottom: 2rem;
    }

    .article ul {
        padding-left: 20px;
        margin-bottom: 2rem;

    }

    .article ol {
        padding-left: 20px;
        margin-bottom: 2rem;

    }

    .article li {
        margin-bottom: .5rem;

    }

    .article p {
        margin-bottom: 2rem;

    }

    .article p:first-child {
        font-size: 18px;
        font-weight: 700;
        line-height: 28px;
        margin-left: 0;
        margin-right: 0;
    }

    /*---------------------рейтинг*/

    .product-plate__rating-wrap .Rate__star[data-v-59a74259] {
        padding: 0;
    }

    .product-plate__rating-wrap .icon[data-v-59a74259] {
        width: 11px;
        height: 11px;
        margin: 0 5px 0 0;
    }

    .product-plate__rating-wrap .Rate__star.filled[data-v-59a74259] {
        color: #f48615;
    }

    .sticky-sidebar {
        position: sticky !important;
        top: 80px;
    }

    /*-----------------слайдер*/

    .layout--hidden-content {
        overflow: hidden;
    }

    .swiper-container.livehack-slider {
        overflow: visible;
    }

    .swiper-container {
        width: 100%;
    }

    .livehack-slider.swiper-container .swiper-slide {
        width: 280px;

    }


</style>