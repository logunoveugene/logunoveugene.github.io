<template>
    <div class="home">
        <add-note msg="asdasd"></add-note>
    </div>
</template>

<script>
    // @ is an alias to /src
    import addNote from '@/components/AddNote.vue'


    export default {
        name: 'home',
        components: {
            'add-note': addNote
        },
        data: function () {
            return {}
        },
        computed: {},
        methods: {},
        created() {

        }

    }
</script>
