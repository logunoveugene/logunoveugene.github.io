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
                <div class=" mb-4">
                    <div class="">
                        <div class="">Упоминания в статье</div>
                        <div class="">Товары</div>
                        <div class="">Категории</div>
                        <div class="">Бренды</div>
                        <div class="">
                            <div class="small">Теги</div>
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

                    </div>
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
            onEditorBlur(editor) {
                // console.log('editor blur!', editor)
            },
            onEditorFocus(editor) {
                // console.log('editor focus!', editor)
            },
            onEditorReady(editor) {
                // console.log('editor ready!', editor)
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
    .new-post__title {
        font-size: 36px;
        font-weight: 700;
        line-height: 44px;
        border: none;
        outline: none;
    }
</style>

