<template>
    <div class="rating">
        ★  {{rating}}
    </div>
</template>

<script>
    export default {
        name: "ProductRating",
        props: {

            rating: {
                type: String,
                default: null
            },
            opinionCount: {
                type: String,
                default: null
            },
            commentCount: {
                type: String,
                default: null
            },
            ratingStarsIsShort: {
                type: String,
                default: null
            },

        }
    }
</script>

<style scoped>

</style>
