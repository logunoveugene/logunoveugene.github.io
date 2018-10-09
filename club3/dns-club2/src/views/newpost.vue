<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="small mb-2">Клуб / Cоздание статьи</div>
                <input class="w-100" type="text" placeholder="Введите заголовок">
            </div>
            <div class="col-12 col-md-12 col-lg-8">
                <quill-editor v-model="content"
                              ref="myQuillEditor"
                              :options="editorOption"
                              @blur="onEditorBlur($event)"
                              @focus="onEditorFocus($event)"
                              @ready="onEditorReady($event)">
                </quill-editor>
                <div v-html="content"></div>

            </div>
            <div class="col-12 col-lg-4">
                <div class="card-block mb-4">
                    <div class="">
                        <div class="p-4 bb-1">
                        </div>
                    </div>
                </div>
            </div>

            <transition name="drawer-fade">
                <div v-if="isDrawer" class="drawer">
                    <div class="w-100 text-right">
                        <button class="btn" v-on:click="isDrawer = !isDrawer">X</button>
                    </div>

                </div>

            </transition>

        </div>
    </div>
</template>

<script>


    import { quillEditor } from 'vue-quill-editor'

    var options = {
        toolbar: {buttons: ['bold', 'strikethrough', 'h1']},
        placeholder: {
            /* This example includes the default options for placeholder,
               if nothing is passed this is what it used */
            text: 'Напишите вашу статью',

        }
    }

    var text = ''

    export default {


        name: 'newpost',
        components: {
            quillEditor
        },
        data: function () {
            return {
                content: ' ',

                editorOption: {
                    theme: 'bubble',
                    placeholder: "Начните писать вашу статью",
                    modules: {
                        toolbar: [
                            ['bold', 'italic'],
                            ['blockquote'],
                            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                            [{ 'header': '1'},{ 'header': '2'},],
                            ['link'],

                        ]
                    }

                }
            }
        },
        methods: {
            onEditorBlur(quill) {
                console.log('editor blur!', quill)
            },
            onEditorFocus(quill) {
                console.log('editor focus!', quill)
            },
            onEditorReady(quill) {
                console.log('editor ready!', quill)
            },
            onEditorChange({ quill, html, text }) {
                console.log('editor change!', quill, html, text)
                this.content = html
            }
        },
        computed: {
            editor() {
                return this.$refs.myQuillEditor.quill
            }
        },
        mounted() {
            console.log('this is current quill instance object', this.editor)
        }

    }
</script>
