<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="small mb-2">Клуб / Cоздание статьи</div>
                <input class="w-100" type="text" placeholder="Введите заголовок">
            </div>
            <div class="col-12 col-md-12 col-lg-8">
                <quill-editor v-model="content"
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


    import VueQuillEditor, { Quill } from 'vue-quill-editor'
    import { ImageDrop } from 'quill-image-drop-module'
    import ImageResize from 'quill-image-resize-module'
    Quill.register('modules/imageDrop', ImageDrop)
    Quill.register('modules/imageResize', ImageResize)

    export default {
        data() {
            return {
                name: 'register-modules-example',
                content: `<p><img src="https://avatars.mds.yandex.net/get-ott/224348/2a000001656ce2519c59c0fb13d2b37e28da/150x225" width="500"></p>
                  <br>
                  <p><strong><em>Or drag/paste an image here.</em></strong></p>`,
                editorOption: {
                    modules: {
                        toolbar: [
                            [{ 'size': ['small', false, 'large'] }],
                            ['bold', 'italic'],
                            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                            ['link', 'image']
                        ],
                        history: {
                            delay: 1000,
                            maxStack: 50,
                            userOnly: false
                        },
                        imageDrop: true,
                        imageResize: {
                            displayStyles: {
                                backgroundColor: 'black',
                                border: 'none',
                                color: 'white'
                            },
                            modules: [ 'Resize', 'DisplaySize', 'Toolbar' ]
                        }
                    }
                }
            }
        },
        mounted() {
            this.content = `<p><strong><em>Click on the Image Below to resize!</em></strong></p><br>` + this.content
        },
        computed: {
            contentCode() {
                return hljs.highlightAuto(this.content).value
            },
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
            }
        }
    }
</script>
