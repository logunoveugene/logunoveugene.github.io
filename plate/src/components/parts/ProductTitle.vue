<template>
    <div class="title">{{title}}</div>
</template>

<script>
    export default {
        name: "ProductTitle",
        props: {
            title: {
                type: String,
                default: null
            },
            titleSize: {
                type: String,
                default: 'medium'
            }
        }
    }
</script>

<style scoped>

</style>
