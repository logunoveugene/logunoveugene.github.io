<template>
    <div class="">
        <div class="container">
            <div class="row">

                <div class="col-12 col-md-12 col-lg-8">
                    <div class="small mb-2 d-flex">
                        <router-link class="link link--color-black" to="/">Клуб</router-link>
                        <div class="mx-2">/</div>
                        <router-link class="link link--color-black" to="/review">Обзоры</router-link>
                        <div class="mx-2">/</div>
                        <div class="text-muted d-inline-block">Создание статьи</div>

                    </div>
                    <input class="w-100 new-post__title" type="text" placeholder="Введите заголовок">
                    <div class="new-content-box">
                        <froala :tag="'textarea'" :config="config" v-model="model"></froala>

                        <div class="new-post__tags tags-in-post mt-5 my-4">
                            <multiselect v-model="selected"
                                         tag-placeholder="Добавить новый тег"
                                         placeholder="Добавить тег"
                                         selectLabel="Выбрать"
                                         selectedLabel="Выбран"
                                         deselectLabel="Удалить"
                                         label="name"
                                         track-by="code"
                                         open-direction="bottom"
                                         :options="options"
                                         :multiple="true"
                                         :taggable="true"
                                         @tag="addTag"
                                         class="tags-in-post__input"
                            >

                            </multiselect>
                        </div>


                    </div>

                </div>
                <div class="d-block d-lg-none ">
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
                    <div class="card-block p-4 mb-4">
                        <div class="">

                            <div class="new-post__tags mb-4">
                                <div class="small text-muted mb-1">Рубрика</div>
                                <multiselect v-model="selectedRub"
                                             tag-placeholder="Добавить новый тег"
                                             placeholder="Выберите рубрику"
                                             selectLabel="Выбрать"
                                             selectedLabel="Выбран"
                                             deselectLabel="Отменить выбор"
                                             label="name"
                                             track-by="name"
                                             open-direction="bottom"


                                             group-values="libs"
                                             group-label="language"
                                             :group-select="true"
                                             deselectGroupLabel="Отменить выбор"

                                             :options="options2"
                                             :multiple="true"
                                             @tag="addTag">

                                </multiselect>
                            </div>
                            <div class="new-post__tags mb-4">
                                <div class="small text-muted mb-1">Раздел</div>
                                <multiselect v-model="selectedlist"
                                             tag-placeholder="Добавить новый тег"
                                             placeholder="Выберите раздел"
                                             selectLabel="Выбрать"
                                             selectedLabel="Выбран"
                                             deselectLabel="Отменить выбор"
                                             label="name"
                                             track-by="code"
                                             open-direction="bottom"
                                             :options="options"
                                             :multiple="true"
                                             @tag="addTag">

                                </multiselect>
                            </div>
                            <div class="new-post__tags mb-4">
                                <div class="small text-muted mb-1">Обложка статьи</div>
                                <input type="file" class="form-control-file" id="exampleFormControlFile1">
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
                                    <div class="mr-3">
                                        <div class="btn btn--color-white">Сохранить</div>
                                    </div>
                                </div>
                                <div class="new-post__save-state small text-secondary mb-3">
                                    <div class="mb-2">Статья создана: 12 ноя 18г. (изм. 12 ноя 18г.)</div>
                                    <div class="d-flex   mb-2">
                                        <div class="mr-1">Будет опубликована</div>
                                        <a href="#" class="link link--color-blue link--doted link--dropdown">не
                                            выбрано</a>
                                    </div>
                                    <!--<div class=" ">Будет опубликована: 15 ноя 18г.</div>-->
                                </div>

                                <div class="small">
                                    <a href="" class="link link--color-grey">Удалить</a>
                                </div>

                            </div>

                        </div>
                    </div>
                    <!--<div class="small">-->
                    <!--<ul class=" pl-4 list-unstyled">-->
                    <!--<li><a href="#" class="link link--color-blue">Рекомендации по написанию и оформлению-->
                    <!--статей</a>-->
                    <!--</li>-->
                    <!--<li><a href="#" class="link link--color-blue">Как пользоваться редактором</a></li>-->
                    <!--</ul>-->
                    <!--</div>-->
                </div>
            </div>
        </div>
        <modal name="publish" :adaptive="true" width="100%" height="100%" v-bind:scrollable="true">
            <div class="layout--bg-grey p-3 d-flex align-items-center justify-content-between ">
                <div class="h2 mb-0">Публикация статьи</div>
                <div class="" @click="hidePublishModal">
                    <div class="h1 mb-0 icon-close"></div>
                </div>
            </div>
            <div class="p-3 mb-5">
                <div class="new-post__links mb-4">
                    <div class="small text-muted mb-2">Упоминания</div>
                    <div class="new-post__links-item d-flex justify-content-between">
                        <div class="new-post__links-item-title">Товары</div>
                        <div class="new-post__links-item-amount">2
                            <div @click="showAddProoduct" class="new-post__links-item-amount-add icon-add pt-2"></div>
                        </div>
                    </div>
                    <div class="new-post__links-item d-flex justify-content-between">
                        <div class="new-post__links-item-title">Категории</div>
                        <div class="new-post__links-item-amount">2
                            <div @click="showAddProoduct" class="new-post__links-item-amount-add icon-add pt-2"></div>
                        </div>
                    </div>
                    <div class="new-post__links-item d-flex justify-content-between">
                        <div class="new-post__links-item-title">Бренды</div>
                        <div class="new-post__links-item-amount">1
                            <div @click="showAddProoduct" class="new-post__links-item-amount-add icon-add pt-2"></div>
                        </div>
                    </div>

                </div>
                <div class="new-post__tags mb-4">
                    <div class="small text-muted mb-1">Теги</div>
                    <multiselect v-model="selected"
                                 tag-placeholder="Добавить новый тег"
                                 placeholder="Поиск по тегам"
                                 selectLabel="Выбрать"
                                 selectedLabel="Выбран"
                                 deselectLabel="Удалить"
                                 label="name"
                                 track-by="code"
                                 open-direction="bottom"
                                 :options="options"
                                 :multiple="true"
                                 :taggable="true"
                                 @tag="addTag">

                    </multiselect>
                </div>
                <div class="new-post__tags mb-4">
                    <div class="small text-muted mb-1">Рубрика</div>
                    <multiselect v-model="selectedRub"
                                 tag-placeholder="Добавить новый тег"
                                 placeholder="Выберите рубрику"
                                 selectLabel="Выбрать"
                                 selectedLabel="Выбран"
                                 deselectLabel="Отменить выбор"
                                 label="name"
                                 track-by="code"
                                 open-direction="bottom"
                                 :options="options"

                                 @tag="addTag">

                    </multiselect>
                </div>
                <div class="d-flex align-items-center">

                    <div class="new-post__save-state small  ">
                        <span class="font-weight-bold">Черновик сохранен</span>
                        только что
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
            <!--<div class="d-flex p-4">-->
            <!--<div class="modal_list">-->
            <!--<div class="modal_list-item">Выделите название товара в тексте.</div>-->
            <!--<div class="modal_list-item">Во всплывающим меню выберите инструмент «добавления ссылки».</div>-->
            <!--<div class="modal_list-item">Добавьте ссылку на товара из каталога DNS, либо укажите артикул этого-->
            <!--товара.-->
            <!--</div>-->
            <!--</div>-->
            <!--<div class="ml-3">-->
            <!--<img src="https://i.snag.gy/DSBE9Q.jpg" alt="">-->
            <!--</div>-->
            <!--</div>-->
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
    export default {
        data() {
            return {
                readyToPublic: false,
                selected: [],
                selectedRub: [],
                selectedlist:[],
                options: [
                    {name: 'Ноутбуки', code: '154'},
                    {name: 'Компьютеры', code: '49'},
                    {name: 'Asus', code: '32'},
                    {name: 'Lenovo', code: '17'},
                    {name: 'Смартфоны', code: '26'}
                ],

                options2: [
                    {
                        language: 'Песочница',
                        libs: [
                            { name: 'Личный блог', category: 'Front-end' },

                        ]
                    },
                    {
                        language: 'Дайджест',
                        libs: [
                            { name: 'Новости', category: 'Front-end' },
                            { name: 'Интервью', category: 'Backend' }
                        ]
                    },
                    {
                        language: 'Обзоры',
                        libs: [
                            { name: 'Профессиональный', category: 'Backend' },
                            { name: 'Любительский', category: 'Backend' }
                        ]
                    },
                    {
                        language: 'Лайфхаки',
                        libs: [
                            { name: 'Полезные советы', category: 'Backend' },
                            { name: 'Гайды', category: 'Backend' }
                        ]
                    }
                ],

                config: {
                    toolbarInline: true,
                    minHeight: 500,
                    placeholderText: 'Напишите вашу статью...',
                    quickInsertButtons: ['image', 'video', 'table'],
                    toolbarButtons: ['bold', 'italic', 'quote', 'paragraphFormat', 'insertLink', 'underline', 'formatOL', 'formatUL'],
                    events: {
                        'froalaEditor.initialized': function () {
                            console.log('initialized')
                        }
                    }
                },
                model: ''
            }
        },

        methods: {

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


 

    .multiselect__option {

        padding-left: 1.5rem;
    }


    .multiselect__option--group {
         background: none;

        font-weight: 700;
        padding-left: .75rem;
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

    .tags-in-post__input .multiselect__select {
        display: none;

    }

    .tags-in-post__input .multiselect__tags {
        border: none;
        padding: 0;
    }



    .tags-in-post__input  .multiselect__content-wrapper{
        box-shadow: 0 5px  20px  rgba(0,0,0,0.1);
        border-radius:8px 8px  8px 8px  ;
    }

</style>

