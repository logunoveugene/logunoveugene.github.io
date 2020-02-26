<template>
    <div class="rating">
        ★ {{rating}}
    </div>
</template>

<script>
    export default {
        name: "ProductRating",
        props: {

            rating: {
                type: Number,
                default: null
            },
            opinionCount: {
                type: Number,
                default: null
            },
            commentCount: {
                type: Number,
                default: null
            },
            ratingStarsIsShort: {
                type: Boolean,
                default: null
            },

        }
    }
</script>

<style scoped>

</style>
