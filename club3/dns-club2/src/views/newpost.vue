<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="small mb-2">Клуб / Cоздание статьи</div>
                <input class="w-100" type="text" placeholder="Введите заголовок">
            </div>
            <div class="col-12 col-md-12 col-lg-8">
                <medium-editor :text='text' :options='options' v-on:edit='processEditOperation' custom-tag='div'>
                </medium-editor>
                <div v-html="text"></div>

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
    import editor from 'vue2-medium-editor'

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
            'medium-editor': editor
        },
        data: function () {
            return {
                text: text,
                options: options
            }
        },
        methods: {
            processEditOperation: function (operation) {
                this.text = operation.api.origElements.innerHTML
            }
        }

    }
</script>
