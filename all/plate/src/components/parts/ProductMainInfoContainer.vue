<template>
    <div class="main-info-container">
        <div class="main-info-container__product-vollers-list"
             v-if="options.voblerIsShown">
            <ProductVoblersList/>
        </div>
        <div class="main-info-container__product-title">

            <ProductTitle
                    :title="productData.title"
                    :titleSize="options.titleSize"
                    :titleIsOneLine="options.titleIsOneLine"
            />
        </div>
        <div class="main-info-container__product-rating"
             v-if="options.ratingIsShown">
            <ProductRating
                    :rating="productData.rating"
                    :opinionCount="productData.opinionCount"
                    :commentCount="productData.commentCount"
                    :ratingStarsIsShort="options.ratingStarsIsShort"
            />
        </div>
        <div class="main-info-container__product-price">
            <ProductPrice
                    :price="productData.price"
                    :priceOld="productData.priceOld"
            />
        </div>
        <div class="main-info-container__product-action">
            <ProductAction>Купить</ProductAction>
        </div>
        <div class="main-info-container__product-available">
            <ProductAvailable
                    :availableStore="productData.availableStore"
                    :availableStoreDate="productData.availableStoreDate"
                    :deliveryDate="productData.prideliveryDatece"
                    :deliveryCost="productData.deliveryCost"
            />
        </div>
        <div class="main-info-container__product-add-action">
            <ProductAddAction/>
        </div>
    </div>
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
                        voblerIsShown:true, //todo в родителя
                        voblerListIsOneLine: false,
                        titleSize: 'medium',
                        titleIsOneLine: false,
                        ratingIsShown:true,//todo в родителя
                        ratingStarsIsShort: true
                    }
                }
            },
            productData: {
                type: Object,
                default: function () {
                    return {
                        stickers: 'column',
                        image: 'medium',
                        voblerList: [],
                        title: 'medium',
                        rating: false,
                        opinionCount: 'medium',
                        commentCount: false,
                        price: 425,
                        priceOld: 545,
                        availableStore: 4,
                        availableStoreDate: '2019-01-25',
                        deliveryDate: '2019-01-25',
                        deliveryCost: 150,
                        additionalBonus: 0,
                        additionalDiscount: 0,
                    }
                }
            },
        }

    }
</script>

<style>

</style>
