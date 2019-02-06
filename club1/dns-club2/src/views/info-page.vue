<template>
    <div class="about">

        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="small mb-2 d-flex">
                        <router-link class="link link--color-black" to="/">Клуб</router-link>
                        <div class="mx-2">/</div>
                        <span class="text-muted">Информация</span>
                    </div>
                    <div class="d-flex align-items-center justify-content-between mb-3">
                        <h1 class="page__title mb-0">Заголовок информационной страницы</h1>
                        <router-link to="/newpost" class=" link link--color-black new-post-btn d-lg-none d-block ">
                            <div class="new-post-btn-icon">
                                <div class=" text-success d-inline-block mr-2 icon-add"></div>
                            </div>
                            <div class="d-inline-block">Добавить обзор</div>
                        </router-link>
                    </div>
                </div>
                <div class="col-12 col-md-12 col-lg-8">
                    <div class="d-block d-lg-none">
                        <div v-ripple class="collapse-block card-block card-block--full-mobile "
                             @click="searchPlate=!searchPlate">
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="">Настройка показа</div>
                                <div class="collapse-block__icon ">
                                    <div v-if="!searchPlate" class="icon-down"></div>
                                    <div v-if="searchPlate" class="icon-up"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="collapse-plate pt-4  " v-if="searchPlate">
                        <div class="">
                            <div class="pb-4 bb-1">
                                <div class="h2 mb-2 d-flex align-items-center">Разделы</div>
                                <category></category>
                            </div>
                            <div class="py-4 bb-1">
                                <div class="h2 mb-2 d-flex align-items-center justify-content-between ">Формат
                                </div>
                                <div class=" d-flex">
                                    <div class="custom-control custom-checkbox mr-4">
                                        <input type="checkbox" id="customCheck1" checked="checked"
                                               class="custom-control-input">
                                        <label for="customCheck1" class="custom-control-label">Текст</label>
                                    </div>
                                    <div class="custom-control custom-checkbox mr-4">
                                        <input type="checkbox" id="customCheck1" checked="checked"
                                               class="custom-control-input">
                                        <label for="customCheck1" class="custom-control-label">Видео</label>
                                    </div>
                                    <div class="custom-control custom-checkbox mr-4">
                                        <input type="checkbox" id="customCheck1" checked="checked"
                                               class="custom-control-input">
                                        <label for="customCheck1" class="custom-control-label">Фото</label>
                                    </div>
                                </div>
                            </div>
                            <div class="py-4 bb-1">
                                <div class="h2 mb-2 d-flex align-items-center justify-content-between ">Рубрика
                                </div>
                                <!--<div class="small d-flex flex-column">-->

                                <!--<div class="mr-3">-->
                                <!--<a href="#" class="link link&#45;&#45;color-grey">Любительские обзоры</a>-->
                                <!--</div>-->
                                <!--<div class="mr-3">-->
                                <!--<a href="#" class="link link&#45;&#45;color-grey">Профессиональные обзоры</a>-->
                                <!--</div>-->
                                <!--<div class="mr-3">-->
                                <!--<a href="#" class="link link&#45;&#45;color-grey">От производителей</a>-->
                                <!--</div>-->

                                <!--</div>-->
                                <div class=" ">
                                    <div class="custom-control custom-checkbox mr-4">
                                        <input type="checkbox" id="customCheck1" checked="checked"
                                               class="custom-control-input">
                                        <label for="customCheck1" class="custom-control-label">Любительские
                                            обзоры</label>
                                    </div>
                                    <div class="custom-control custom-checkbox mr-4">
                                        <input type="checkbox" id="customCheck1" checked="checked"
                                               class="custom-control-input">
                                        <label for="customCheck1" class="custom-control-label">Профессиональные
                                            обзоры</label>
                                    </div>
                                    <div class="custom-control custom-checkbox mr-4">
                                        <input type="checkbox" id="customCheck1" checked="checked"
                                               class="custom-control-input">
                                        <label for="customCheck1" class="custom-control-label">От производителей</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="px-4">
                            <div v-if="!allFilter" @click="allFilter=true" class="link link--doted  link--color-grey">
                                Все
                                фильтры
                            </div>

                        </div>
                    </div>

                    <div class="article  ">
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

                </div>
                <div class="col-12 col-lg-4 ">
                    <div class="row">
                        <div class="col-12 col-md-6 col-lg-12 mb-4 d-none d-lg-block ">


                            <div class="card-block card-block--shadow  mb-4">
                                <div class="">
                                    <div class="p-4 bb-1">
                                        <div class="h2 mb-3 d-flex align-items-center">Информация</div>
                                        <ul class="nav nav--vertical small">
                                            <li class="nav__link"><a href="#" class="link link--color-grey">О проекте</a></li>
                                            <li class="nav__link"><a href="#" class="link link--color-grey">Тур по сайту
                                                </a></li>
                                            <li class="nav__link"><a href="#" class="link link--color-grey">Для авторов
                                                </a></li>
                                        </ul>


                                    </div>



                                </div>
                            </div>

                        </div>



                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
    // @ is an alias to /src

    import postLarge from '@/components/post-block/post-large.vue'
    import postTextShort from '@/components/post-block/post-text-short.vue'
    import postHalfImg from '@/components/post-block/post-half-img.vue'
    import category from "@//components/category.vue";
    import dateRangeSelect from "@//components/dateRangeSelect.vue"

    export default {
        name: 'review',
        components: {
            postTextShort,
            postHalfImg,
            postLarge,
            category,
            dateRangeSelect

        },
        props: {
            isAuth: {
                type: false,
                default: ""
            }
        },
        data: function () {
            return {
                category: true,
                searchPlate: false,
                thame: false,
                brand: false,
                review: [],
                error: [],
                allFilter: false,
                searchword: '',
                initSelected: [],
                treeData1: [
                    {
                        title: 'Компьютеры, игры, комплектующие',
                        expanded: false,
                        children: [{
                            title: 'Ноутбуки и планшеты',
                            expanded: false

                        },
                            {
                                title: 'Компьютеры и периферия',
                                expanded: false

                            }, {
                                title: 'Комплектующие для ПК',
                                expanded: false

                            }]
                    }, {
                        title: 'Цифровая техника',
                        expanded: false,
                        children: [{
                            title: 'node 1-1',
                            expanded: false

                        }]
                    }, {
                        title: 'Бытовая техника',
                        expanded: false,
                        children: [{
                            title: 'node 1-1',
                            expanded: false

                        }]
                    }, {
                        title: 'Красота и здоровье',
                        expanded: false,
                        children: [{
                            title: 'node 1-1',
                            expanded: false

                        }]
                    }, {
                        title: 'Автотовары',
                        expanded: false,
                        children: [{
                            title: 'node 1-1',
                            expanded: false

                        }]
                    }, {
                        title: 'Компьютеры, игры, комплектующие',
                        expanded: false,
                        children: [{
                            title: 'node 1-1',
                            expanded: false

                        }]
                    },


                ],
            }
        },
        methods: {
            show() {
                this.$modal.show('filter');
            },
            hide() {
                this.$modal.hide('filter');
            },


            search() {
                this.$refs.tree.searchNodes(this.searchword)
            },
            selectedNodes() {
                this.initSelected = this.$refs.tree.getCheckedNodes()

            }
        },
        created() {
            this.axios.get('https://club-route.firebaseio.com/digest.json')
                .then(response => {
                    this.review = response.data
                })
                .catch(e => {
                    this.error.push(e)
                })

        }

    }
</script>
<style>
    .posts {
        padding-top: 1.5rem;
    }

    .discussions__source-icon-wrap {
        border: 1px solid #eee;
        width: 22px;
        border-radius: 4px;
        height: 22px;
        margin-right: 9px;
        padding: 2px 0 0 3px;
        color: #999;
    }

    .new-post-btn {
        border: 1px solid #eee;
        padding: 7px 12px 6px 35px;
        border-radius: 50px;
        position: relative;
    }

    .new-post-btn-icon {
        position: absolute;
        left: 11px;
        top: 9px;
    }
</style>