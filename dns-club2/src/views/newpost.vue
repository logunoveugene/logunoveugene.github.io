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
                <div class="card-block mb-4">
                    <div class="">
                        <div class="p-4 bb-1">
                        </div>
                    </div>
                </div>
            </div>



        </div>
    </div>
</template>

<script>


    import VueFroala from 'vue-froala-wysiwyg';

    export default {
        data() {
            return {
                config: {
                    toolbarInline: true,
                    quickInsertButtons: ['image','video', 'table'],
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
            }
        }
    }
</script>

