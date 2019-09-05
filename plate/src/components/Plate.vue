<template>
    <div class="product-plate"
         v-if="options"
         :class="'product-plate--direction-' + options.plateDirection">
        <div class="product-plate__img-container">
            <div class="product-plate__img">
                <ProductImg/>
            </div>
            <div class="product-plate__img-overlay">
                <div class="product-plate__product-check">
                    <ProductCheck/>
                </div>
                <div class="product-plate__product-sticker">
                    <ProductStickers/>
                </div>

            </div>

        </div>
        <div class="product-plate__main-info-container">
            <ProductMainInfoContainer/>
        </div>
    </div>
</template>

<script>
    import ProductImg from '@/components/parts/ProductImg.vue'
    import ProductStickers from '@/components/parts/ProductStickers.vue'
    import ProductCheck from '@/components/parts/ProductCheck.vue'
    import ProductMainInfoContainer from '@/components/parts/ProductMainInfoContainer.vue'

    export default {
        name: 'Plate',
        components: {
            ProductImg,
            ProductStickers,
            ProductCheck,
            ProductMainInfoContainer,

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
            productData:{
                type: Object,
                default: function () {
                    return {
                        stickers: 'column',
                        image: 'medium',
                        voblerList:[],
                        title: 'medium',
                        rating: false,
                        opinionCount: 'medium',
                        commentCount: false,
                        price: 425,
                        priceOld:545,
                        availableStore:4,
                        availableStoreDate: '2019-01-25',
                        deliveryDate:'2019-01-25',
                        deliveryCost:150,
                        additionalBonus:0,
                        additionalDiscount:0,


                    }
                }
            },
        }
    }
</script>


<style lang="scss">
    .product-plate {
        display: flex;
        &--direction-column {
            flex-direction: column;

        }
        &__img-container {
            position: relative;
        }
        &__img-overlay {
            position: absolute;
            left: 0;
            top: 0;
        }
    }
</style>
