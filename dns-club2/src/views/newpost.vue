<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="small mb-2">Клуб / Cоздание статьи</div>
                <input class="w-100 new-post__title" type="text" placeholder="Введите заголовок">
            </div>
            <div class="col-12 col-md-12 col-lg-8">
                <froala :tag="'textarea'" :config="config" v-model="model"></froala>
                <div v-html="model"></div>

            </div>
            <div class="col-12 col-lg-4">
                <div class="card-block p-4 mb-4">
                    <div class="">
                        <div class="new-post__links mb-4">
                            <div class="small text-muted mb-2">Упоминания в статье</div>
                            <div class="new-post__links-item d-flex justify-content-between">
                                <div class="new-post__links-item-title">Товары</div>
                                <div class="new-post__links-item-amount">4
                                    <div class="new-post__links-item-amount-add icon-add pt-2"></div>
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
                            <div class="mr-3">
                                <div class="btn btn--color-orange">Опубликовать</div>
                            </div>
                            <div class="new-post__save-state small  ">
                                <span class="font-weight-bold">Черновик сохранен</span> <br>
                                только что
                            </div>

                        </div>

                    </div>
                </div>
                <div class="small">
                    <ul class=" pl-4 list-unstyled">
                        <li> <a href="#" class="link link--color-blue">Как задать вопрос, чтобы на него ответили</a></li>
                        <li><a href="#" class="link link--color-blue">Как пользоваться редактором</a></li>
                    </ul>


                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                selected: [],
                selectedRub: [],
                options: [
                    {name: 'Ноутбуки', code: '154'},
                    {name: 'Компьютеры', code: '49'},
                    {name: 'Asus', code: '32'},
                    {name: 'Lenovo', code: '17'},
                    {name: 'Смартфоны', code: '26'}
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
    }

    .new-post__title {
        font-size: 36px;
        font-weight: 700;
        line-height: 44px;
        border: none;
        outline: none;
        margin-bottom: 1rem;
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
</style>

