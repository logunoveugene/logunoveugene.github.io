<template>
    <div class=""></div>
</template>

<script>
    import ProductVoblersList from '@/components/parts/ProductVoblersList.vue'
    import ProductTitle from '@/components/parts/ProductTitle.vue'
    import ProductRating from '@/components/parts/ProductRating.vue'
    import ProductPrice from '@/components/parts/ProductPrice.vue'
    import ProductAction from '@/components/parts/ProductAction.vue'
    import ProductAvailable from '@/components/parts/ProductAvailable.vue'
    import ProductAddAction from '@/components/parts/ProductAddAction.vue'
    export default {
        name: "ProductMainInfoContainer",
        components: {
            ProductVoblersList,
            ProductTitle,
            ProductRating,
            ProductPrice,
            ProductAction,
            ProductAvailable,
            ProductAddAction,


        },
        props: {
            options: {
                type: Object,
                default: function () {
                    return {
                        plateDirection: 'column',
                        imgSize: 'medium',
                        voblerListSize: 'medium',
                        voblerListIsOneLine: false,
                        titleSize: 'medium',
                        titleIsOneLine: false,
                        ratingStarsIsShort: false
                    }
                }
            },
        }
    }
</script>

<style scoped>

</style>