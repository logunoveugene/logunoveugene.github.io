<template>
    <div class="new-disc-page">
        <div class="container">
            <div class="row">
                <div class="col-10 col-md-12 col-lg-8">
                    <div class="small mb-2 d-flex">
                        <router-link class="link link--color-black" to="/">Клуб</router-link>
                        <div class="mx-2">/</div>
                        <router-link class="link link--color-black" to="/discussions">Коммуникатор</router-link>
                        <div class="mx-2">/</div>
                        <div class="text-muted ">Cоздание темы</div>

                    </div>
                    <div class="d-flex justify-content-between align-items-center">
                    <div contenteditable="true" class="w-100 new-post__title">Введите заголовок </div>

                        <v-popover
                                offset="0"
                                trigger="hover"
                        >
                            <!-- This will be the popover target (for the events and position) -->
                            <div class="mt-auto draft-icon">
                                <div class="icon icon-check-round"></div>
                            </div>

                            <!-- This will be the content of the popover -->
                            <template slot="popover">
                                <div class="py-2 small">
                                    Черновик сохранен только что
                                </div>

                            </template>
                        </v-popover>


                    </div>


                    <div class="new-content-box">
                        <!--<froala :tag="'textarea'" :config="config" v-model="model"></froala>-->
                        <editor-tip-tap></editor-tip-tap>
                        <!--<editor-tip-tap></editor-tip-tap>-->
                    </div>
                </div>

                <div class="d-block d-lg-none">
                    <div class="fixed-bottom p-2">
                        <div v-if="!readyToPublic" class="btn btn--color-orange w-100" @click="showPublishModal">
                            Готовы опубликовать?
                        </div>
                        <div v-if="readyToPublic" class="btn btn--color-orange w-100" @click="showPublishModal">
                            Опубликовать
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-4 d-none d-lg-block">
                    <div class="card-block  card-block--shadow  p-4 mb-4">
                        <div class=" ">
                            <div class="h2 mb-3 d-flex align-items-center justify-content-between ">Редакторские
                                настройки
                            </div>
                            <div class="mb-3">
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" id="customCheckw3" class="custom-control-input">
                                    <label for="customCheckw3" class="custom-control-label">Закрепленная тема</label>
                                </div>
                            </div>
                            <div class="btn btn--color-orange">Сохранить</div>
                        </div>
                    </div>
                    <div class="card-block card-block--shadow p-4 mb-4">
                        <div class="">
                            <div class="new-post__tags mb-4">
                                <div class="small text-muted mb-1">Раздел</div>
                                <treeselect v-model="value"
                                            openDirection="bottom"
                                            :clear-on-select="true"
                                            :multiple="true"
                                            :options="optionsTheme"
                                            noResultsText="Ничего не найдено"
                                            placeholder="Выберите раздел"
                                            :max-height="400"
                                            zIndex="996"
                                >
                                    <label slot="option-label"
                                           slot-scope="{ node, shouldShowCount,  labelClassName, countClassName }"
                                           :class="labelClassName">
                                        {{ node.label }} <span class="category-list__amount text-muted small"> {{ node.raw.mcount }}</span>

                                    </label>
                                </treeselect>
                            </div>


                            <div class="new-post__links mb-4">
                                <div class="small text-muted mb-2">Упоминания</div>
                                <div class="new-post__links-item d-flex justify-content-between">
                                    <div class="new-post__links-item-title">Товары</div>
                                    <div class="new-post__links-item-amount">4
                                        <div @click="showAddProoduct"
                                             class="new-post__links-item-amount-add icon-add pt-2"></div>
                                    </div>
                                </div>
                                <div class="new-post__links-item d-flex justify-content-between">
                                    <div class="new-post__links-item-title">Категории</div>
                                    <div class="new-post__links-item-amount">2
                                        <div class="new-post__links-item-amount-add icon-add pt-2"></div>
                                    </div>
                                </div>
                                <div class="new-post__links-item d-flex justify-content-between">
                                    <div class="new-post__links-item-title">Бренды</div>
                                    <div class="new-post__links-item-amount">4
                                        <div class="new-post__links-item-amount-add icon-add pt-2"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="">
                                <div class="d-flex align-items-center mb-4">
                                    <div class="mr-3">
                                        <div class="btn btn--color-orange">Опубликовать сейчас</div>
                                    </div>

                                </div>
                                <div class="new-post__save-state small text-secondary mb-3">
                                    <div class="mb-2">Тема создана: 12 ноя 18г.</div>
                                    <div class="mb-2">Изменена и опубликована только что</div>
                                    <!--<div class=" ">Будет опубликована: 15 ноя 18г.</div>-->
                                </div>

                                <div class="small d-flex justify-content-between">
                                    <a href="#" class="link link--color-grey">Удалить</a>

                                </div>

                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
        <modal name="publish" :adaptive=true width="100%" height="100%" v-bind:scrollable="true">
            <div class="layout--bg-grey p-3 d-flex align-items-center justify-content-between ">
                <div class="h2 mb-0">Публикация статьи</div>
                <div class="" @click="hidePublishModal">
                    <div class="h1 mb-0 icon-close"></div>
                </div>
            </div>
            <div class="modal-scroll-inner">
                <div class=" p-3 mb-4">
                    <div class=" ">
                        <div class="h2 mb-3 d-flex align-items-center justify-content-between ">Редакторские
                            настройки
                        </div>
                        <div class="mb-3">
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" id="customCheckw3" class="custom-control-input">
                                <label for="customCheckw3" class="custom-control-label">Закрепленная тема</label>
                            </div>
                        </div>
                        <div class="btn btn--color-orange">Сохранить</div>
                    </div>
                </div>
                <div class="  p-3 mb-5">
                    <div class="">
                        <div class="new-post__tags mb-4">
                            <div class="small text-muted mb-1">Рубрика</div>
                            <treeselect v-model="value"
                                        openDirection="bottom"
                                        :clear-on-select="true"
                                        :multiple="true"
                                        :options="optionsTheme"
                                        noResultsText="Ничего не найдено"
                                        placeholder="Выберите раздел"
                                        :max-height="400"
                                        zIndex="996"
                            >
                                <label slot="option-label"
                                       slot-scope="{ node, shouldShowCount,  labelClassName, countClassName }"
                                       :class="labelClassName">
                                    {{ node.label }} <span class="category-list__amount text-muted small"> {{ node.raw.mcount }}</span>

                                </label>
                            </treeselect>
                        </div>
                        <div class="new-post__tags mb-4">
                            <vue-dropzone ref="myVueDropzone"
                                          :options="dropzoneOptions"
                                          :useCustomSlot=true
                                          :include-styling="false"
                                          v-on:vdropzone-thumbnail="thumbnail"
                                          v-on:vdropzone-removed-file="dropzoneIsEmpity=true"
                                          v-on:vdropzone-file-added="dropzoneIsEmpity=false"
                                          id="customdropzone2">

                                <div class="dropzone-custom-content">
                                    <div class="" v-if="dropzoneIsEmpity">
                                        <div class="small">Загрузите основное фото</div>

                                    </div>
                                </div>
                            </vue-dropzone>
                        </div>


                        <div class="new-post__links mb-4">
                            <div class="small text-muted mb-2">Упоминания</div>
                            <div class="new-post__links-item d-flex justify-content-between">
                                <div class="new-post__links-item-title">Товары</div>
                                <div class="new-post__links-item-amount">4
                                    <div @click="showAddProoduct"
                                         class="new-post__links-item-amount-add icon-add pt-2"></div>
                                </div>
                            </div>
                            <div class="new-post__links-item d-flex justify-content-between">
                                <div class="new-post__links-item-title">Категории</div>
                                <div class="new-post__links-item-amount">2
                                    <div class="new-post__links-item-amount-add icon-add pt-2"></div>
                                </div>
                            </div>
                            <div class="new-post__links-item d-flex justify-content-between">
                                <div class="new-post__links-item-title">Бренды</div>
                                <div class="new-post__links-item-amount">4
                                    <div class="new-post__links-item-amount-add icon-add pt-2"></div>
                                </div>
                            </div>
                        </div>
                        <div class="">

                            <div class="new-post__save-state small text-secondary mb-3">
                                <div class="mb-2">Тема создана: 12 ноя 18г.</div>
                                <div class="mb-2">Изменена и опубликована только что</div>
                                <!--<div class=" ">Будет опубликована: 15 ноя 18г.</div>-->
                            </div>

                            <div class="small d-flex justify-content-between">
                                <a href="#" class="link link--color-grey">Удалить</a>

                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </modal>
        <modal name="addProduct" :adaptive="true" width="600px" height="auto">
            <div class="layout--bg-grey p-4 d-flex align-items-center justify-content-between ">
                <div class="h2 mb-0">Добавление товара</div>
                <div class="" @click="hideAddProoduct">
                    <div class="h1 mb-0 icon-close"></div>
                </div>
            </div>
            <div class="p-4 d-flex">
                <input type="text" class="field" placeholder="Укажите название или артикул">
                <div class="btn btn--color-white ml-3">Добавить</div>
            </div>
            <div class="pb-4 px-4">
                <div class="h4 mb-3">Добавленные товары</div>
                <div class="modal_list">
                    <div class="d-flex mb-4 align-items-center">
                        <div class="mr-3">
                            <img src="https://i.snag.gy/FbWIRr.jpg" alt="">
                        </div>
                        <div class="d-flex flex-column">
                            <div class="">Видеокарта MSI AMD Radeon RX 580 ARMOR OC</div>
                            <div class="small">
                                <div class="link link--color-grey">Удалить</div>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex align-items-center">
                        <div class="mr-3 ">
                            <img src="https://i.snag.gy/BpjCd5.jpg" alt="">
                        </div>
                        <div class="d-flex flex-column">
                            <div class="">Процессор Intel Core i7-8700K OEM</div>
                            <div class="small">
                                <div class="link link--color-grey">Удалить</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </modal>
    </div>
</template>

<script>

    import editorTipTap from "@//components/editor-tip-tap-disc.vue"

    import Treeselect from '@riophae/vue-treeselect'
    import '@riophae/vue-treeselect/dist/vue-treeselect.css'

    import vue2Dropzone from 'vue2-dropzone'
    import 'vue2-dropzone/dist/vue2Dropzone.min.css'


    export default {


        components: {
            editorTipTap,
            Treeselect,
            vueDropzone: vue2Dropzone

        },
        data() {
            return {
                readyToPublic: false,
                selectedRub: [],
                dropzoneIsEmpity: true,

                dropzoneOptions: {
                    url: 'https://httpbin.org/post',
                    thumbnailWidth: null,
                    thumbnailHeight: null,
                    maxFilesize: 0.5,
                    headers: {"My-Awesome-Header": "header value"},
                    previewTemplate: this.template(),
                },
                optionsTheme: [
                    {
                        id: '1',
                        label: 'Компьютеры и комплектующие',
                        mcount: "34",
                        children: [{
                            id: '11',
                            mcount: 48,
                            label: 'Ноутбуки и аксессуары',

                        }, {
                            id: '12',
                            mcount: 41,
                            label: 'Планшеты, электронные книги ',
                        }, {
                            id: '13',
                            mcount: "34К",
                            label: 'Запчасти и ПО для ноутбуков',
                        }, {
                            id: '14',
                            mcount: 21,
                            label: 'Компьютерные системы',
                        }, {
                            id: '15',
                            mcount: 14,
                            label: 'Периферия',
                        }, {
                            id: '16',
                            mcount: 10,
                            label: 'ПО и аксессуары',
                        }, {
                            id: '17',
                            mcount: 58,
                            label: 'Основные комплектующие',
                        }, {
                            id: '18',
                            mcount: 75,
                            label: 'Хранение данных и охлаждение',
                        }, {
                            id: '19',
                            mcount: 12,
                            label: 'Устройства расширения и апгрейд',
                        }
                        ],
                    },
                    {
                        id: '2',
                        mcount: 168,
                        label: 'Цифровая техника',
                        children: [{
                            mcount: 48,
                            id: '2-1',
                            label: 'Средства связи',
                        }, {
                            mcount: 1,
                            id: '2-2',
                            label: 'Аксессуары',
                        }, {
                            mcount: 12,
                            id: '2-3',
                            label: 'Запчасти для смартфона',
                        }, {
                            mcount: 48,
                            id: '2-4',
                            label: 'Телевизоры и аксессуары',
                        }, {
                            mcount: 17,
                            id: '2-5',
                            label: 'Медиа и аксессуары',
                        }, {
                            mcount: 3,
                            id: '2-6',
                            label: 'Оборудование для ТВ',
                        }, {
                            mcount: 12,
                            id: '2-7',
                            label: 'Развлечения',
                        }, {
                            mcount: 3,
                            id: '2-8',
                            label: 'Радиоуправляемая техника и портативный транспорт',
                        }, {
                            mcount: 2,
                            id: '2-9',
                            label: 'Стационарное аудио',
                        }, {
                            mcount: 8,
                            id: '2-10',
                            label: 'Портативное аудио',
                        }, {
                            mcount: 4,
                            id: '2-11',
                            label: 'Принадлежности и аксессуары для аудиотехники',
                        }, {
                            mcount: 7,
                            id: '2-12',
                            label: 'Камеры и аксессуары',
                        }, {
                            mcount: 7,
                            id: '2-13',
                            label: 'Портативное аудио',
                        }, {
                            mcount: 13,
                            id: '2-14',
                            label: 'Принадлежности и аксессуары для аудиотехники',
                        }, {
                            mcount: 71,
                            id: '2-15',
                            label: 'Печать и хранение фотографий',
                        }, {
                            mcount: 12,
                            id: '2-16',
                            label: 'Приборы для наблюдений',
                        }
                        ],
                    },
                    {
                        id: '3',
                        label: 'Бытовая техника',
                        mcount: 79,
                        children: [{
                            id: '31',
                            label: 'aa',
                        }, {
                            id: '32',
                            label: 'ab',
                        }],
                    },
                    {
                        id: '4',
                        label: 'Красота и здоровье',
                        mcount: 41,
                        children: [{
                            id: '41',
                            label: 'aa',
                        }, {
                            id: '42',
                            label: 'ab',
                        }],
                    },
                    {
                        id: '5',
                        label: 'Инструменты',
                        mcount: 32,
                        children: [{
                            id: '51',
                            label: 'aa',
                        }, {
                            id: '52',
                            label: 'ab',
                        }],
                    },
                    {
                        id: '6',
                        label: 'Для офиса',
                        mcount: 45,
                        children: [{
                            id: '61',
                            label: 'aa',
                        }, {
                            id: '62',
                            label: 'ab',
                        }],
                    },
                    {
                        id: '7',
                        label: 'Для авто',
                        mcount: 78,
                        children: [{
                            id: '71',
                            label: 'aa',
                        }, {
                            id: '72',
                            label: 'ab',
                        }],
                    },
                    {
                        id: '8',
                        label: 'Для офиса',
                        mcount: 45,
                        children: [{
                            id: '81',
                            label: 'aa',
                        }, {
                            id: '82',
                            label: 'ab',
                        }],
                    },


                ],
                options: [
                    {name: 'Ноутбуки', code: '154'},
                    {name: 'Компьютеры', code: '49'},
                    {name: 'Asus', code: '32'},
                    {name: 'Lenovo', code: '17'},
                    {name: 'Смартфоны', code: '26'}
                ],

                model: '',


            }
        },

        methods: {

            template: function () {
                return `<div class="dz-preview dz-file-preview">
                <div class="dz-image">
                    <div data-dz-thumbnail-bg></div>
                </div>
                <div class="dz-details">
                    <div class="dz-size"><span data-dz-size></span></div>
                    <div class="dz-filename"><span data-dz-name></span></div>
                </div>
                <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>
                <div class="dz-error-message"><span data-dz-errormessage></span></div>
                <div class="dz-success-mark"><i class="fa fa-check"></i></div>
                <div class="dz-error-mark"><i class="fa fa-close"></i></div>
            </div>
        `;
            },
            thumbnail: function (file, dataUrl) {
                var j, len, ref, thumbnailElement;
                if (file.previewElement) {
                    file.previewElement.classList.remove("dz-file-preview");
                    ref = file.previewElement.querySelectorAll("[data-dz-thumbnail-bg]");
                    for (j = 0, len = ref.length; j < len; j++) {
                        thumbnailElement = ref[j];
                        thumbnailElement.alt = file.name;
                        thumbnailElement.style.backgroundImage = 'url("' + dataUrl + '")';
                    }
                    return setTimeout(((function (_this) {
                        return function () {
                            return file.previewElement.classList.add("dz-image-preview");
                        };
                    })(this)), 1);
                }
            },


            removeAllImg: function () {
                this.$refs.myVueDropzone.removeAllFiles()

            },

            showAddProoduct() {
                this.$modal.show('addProduct');
            },
            hideAddProoduct() {
                this.$modal.hide('addProduct');
            },
            showPublishModal() {
                this.$modal.show('publish');
                this.readyToPublic = true

            },
            hidePublishModal() {
                this.$modal.hide('publish');
                this.readyToPublic = false
            },

            addTag(newTag) {
                const tag = {
                    name: newTag,
                    code: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000))
                };
                this.options.push(tag);
                this.selected.push(tag)
            }
        }
    }
</script>
<style>

    .modal_list {
        counter-reset: list1;
    }

    .modal_list-item {
        margin-bottom: 1rem;
        padding-left: 40px;
        position: relative;
    }

    .modal_list-item:before {
        counter-increment: list1;
        content: counter(list1) ". ";
        font-size: 22px;
        font-weight: 700;
        position: absolute;
        left: 3px;
        top: -4px;
    }

    .fr-counter {
        display: none;
    }

    .new-post__save-state {
        line-height: 16px;
    }

    .new-post__links {
        border-bottom: 1px solid #eee;
        padding-bottom: 1rem;

    }

    .new-post__links-item {
        border-bottom: 1px dotted #ddd;
        height: 20px;
        margin-bottom: 12px;
    }

    .new-post__links-item-amount, .new-post__links-item-title {
        background-color: white;
        height: 23px;
    }

    .new-post__links-item-amount {
        position: relative;
        padding-right: 25px;
        padding-left: 3px;
    }

    .new-post__links-item-amount-add {
        position: absolute;
        top: -6px;
        right: 0;
        color: #6ba833;
        cursor: pointer;
    }

    .new-post__title {

        font-size: 24px;
        font-weight: 700;
        margin-bottom: 1rem;
        line-height: 28px;
        border: none;
        outline: none;
    }

    @media (min-width: 768px) {
        .new-post__title {
            font-size: 36px;
            font-weight: 700;
            line-height: 44px;
            border: none;
            outline: none;
            margin-bottom: 1rem;

        }

    }

    .multiselect__tags {
        min-height: 40px;
        display: block;
        padding: 10px 40px 0 10px;
        border-radius: 8px;
        border: 1px solid #e8e8e8;
        background: #fff;
        font-size: 14px;
    }

    .multiselect__input, .multiselect__single {
        padding: 0;
        font-size: 14px;
        line-height: 22px;

    }

    .multiselect__select {
        height: 40px;
    }

    .multiselect__placeholder {
        color: #adadad;
        display: inline-block;
        margin-bottom: 10px;
        padding-top: 0px;
        line-height: 22px;
    }

    .multiselect__tags-wrap {
        display: inline-block;
        height: auto;
        width: auto;
    }

    .multiselect__tag {
        padding: 5px 26px 5px 10px;
        border-radius: 25px;
        margin-right: 10px;
        margin-bottom: 2px;
        color: #444;
        line-height: 1;
        background: #efefef;
    }

    .multiselect__tag-icon {
        cursor: pointer;
        margin-left: 7px;
        right: 3px;
        width: 25px;
        line-height: 26px;
        border-radius: 0px;
    }

    .multiselect__tag-icon:after {
        content: "\D7";
        color: #b4b5b5;
        font-size: 19px;
    }

    .multiselect__tag-icon:focus:after, .multiselect__tag-icon:hover:after {
        color: #000;
    }

    .multiselect__tag-icon:focus, .multiselect__tag-icon:hover {
        background: none;
    }

    .multiselect__option--highlight {
        background: #ffeec4;
        outline: none;
        color: #040404;

    }

    .multiselect__option--highlight:after {
        content: attr(data-select);
        background: #ffeec4;
        color: #040404;
    }

    .new-content-box {
        min-height: 400px;
    }

    .editor {
        position: relative;
    }

    .editor_floating-menu {
        position: absolute;
        margin-top: -0.25rem;
        visibility: hidden;
        opacity: 0;
        transition: opacity 0.2s, visibility 0.2s;
    }

    .editor.is-active {
        opacity: 1;
        visibility: visible;
    }

    .new-post__title--placeholder:after {
        content: 'Введите заголовок';
        color: #aaaaaa;

    }

    .new-disc-page .vue-treeselect__control {
        display: block;
        border-radius: 8px;

        height: auto;
        min-height: 42px;
    }

    .new-disc-page .vue-treeselect--open.vue-treeselect--open-below .vue-treeselect__control {
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
    }

    .new-disc-page .vue-treeselect__menu-container {
        position: absolute;
        margin-top: 1px;
    }

    .new-disc-page .vue-treeselect__menu {
        position: relative;
        border: 1px solid #eee;
        border-top: none;

        padding: 10px;
    }

    .new-disc-page .vue-treeselect__multi-value-item-container {
        padding-top: 8px;

    }

    .new-disc-page .vue-treeselect--open-below .vue-treeselect__menu {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        box-shadow: none;
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

    .new-disc-page .vue-treeselect__option--highlight {
        background: #fff;
    }

    .new-disc-page .vue-treeselect--multi .vue-treeselect__input-container {
        font-size: 14px;

        width: 150px;
    }

    .new-disc-page .vue-treeselect__control {

    }

    .new-disc-page .vue-treeselect__placeholder, .vue-treeselect__single-value {
        line-height: 38px;
        font-size: 14px;
    }

    .new-disc-page .vue-treeselect__multi-value-item {
        cursor: pointer;
        display: inline-table;
        background: #eee;
        padding: 3px 6px 1px;
        border: 1px solid transparent;
        border-radius: 15px;
        color: #525252;
        font-size: 14px;
        line-height: 18px;
    }

    .new-disc-page .vue-treeselect__value-remove {
        color: #808080;
        padding-left: 5px;
        border-left: none;
        line-height: 0;
    }

    .new-disc-page .vue-treeselect__checkbox--checked {
        border-color: #e68c00;
        background: #e68c00;
    }

    .new-disc-page .vue-treeselect__checkbox--indeterminate {
        border-color: #e68c00;
        background: #e68c00;
    }

    .new-disc-page .vue-treeselect__label-container {
        margin-left: 8px;
    }

    .new-disc-page .vue-treeselect__label-container:hover .vue-treeselect__checkbox--indeterminate {
        border-color: #e67503;
        background: #e67503;
    }

    .new-disc-page .vue-treeselect__label-container:hover .vue-treeselect__checkbox--checked {
        border-color: #e67503;
        background: #e67503;
    }

    .new-disc-page .vue-treeselect__label-container:hover .vue-treeselect__checkbox--unchecked {
        border-color: #e67503;
        background: #fff;
    }

    .new-disc-page .vue-treeselect__check-mark, .vue-treeselect__minus-mark {
        left: 3px;
        top: 3px;

    }

    .new-disc-page .vue-treeselect__checkbox {
        width: 16px;
        height: 16px;
        border-radius: 4px;
    }

    .new-disc-page .vue-treeselect--has-value .vue-treeselect__multi-value {
        margin-bottom: 3px;
    }

    .new-disc-page .vue-treeselect__indent-level-0 .vue-treeselect__option {
        padding-left: 5px;
        padding: 5px 0;
        font-size: 14px;
    }

    .new-disc-page .vue-treeselect__list-item.vue-treeselect__indent-level-1 {
        padding-left: 0;
        font-size: 14px;
    }

    .new-disc-page .vue-treeselect--open .vue-treeselect__control {
        border-color: #e8e8e8;
    }

    .new-disc-page .vue-treeselect--single .vue-treeselect__option--selected {
        background: #f6f6f6;
        font-weight: 600;
        border-radius: 4px;
    }

    .vue-treeselect__option-arrow-container {
        width: 8px;
    }

    .vue-treeselect__x-container {
        display: none;
    }

    .vue-treeselect--multi .vue-treeselect__input {
        padding-top: 10px;

    }

    .vue-treeselect--open-below:not(.vue-treeselect--append-to-body) .vue-treeselect__menu-container {
        top: calc(100% - 7px);
    }

    .vue-treeselect__control-arrow-container {
        padding-top: 16px;
        padding-right: 9px;
        vertical-align: top;
    }

    #customdropzone2 {
        background-color: #eee;
        padding: 35px 16px;
        border-radius: 8px;
        cursor: pointer;
        text-align: center;

    }
    .dz-details {
        display: none;
    }

    .draft-icon{
        font-size: 25px;
        color: #ccc;
    }
    .draft-icon:hover{
        color: #999;
    }
</style>

