<template>
    <div class="product-list">
        <div class="product-list__item " v-for="(product, index)  in products"
             :key="index"
             v-if="index<3">
            <div class="d-flex justify-content-between">
                <div class="d-flex flex-column">
                    <div class="h4 mb-3">
                        {{product.title}}
                    </div>
                    <div class="">
                        <button type="button" class="btn btn--color-white ">Перейти в магазин</button>
                    </div>
                </div>
                <div class="ml-3 product-list__item-img-wrap">
                    <img class="product-list__item-img" :src="product.img" alt="">
                </div>
            </div>
        </div>
        <div class="mt-4" v-if="isFullList">
            <div class="product-list__item " v-for="(product, index)  in products"
                 :key="index"
                 v-if="index>=3">
                <div class="d-flex justify-content-between">
                    <div class="d-flex flex-column">
                        <div class="h4 mb-3">
                            {{product.title}}
                        </div>
                        <div class="">
                            <button type="button" class="btn btn--color-white ">Перейти в магазин</button>
                        </div>
                    </div>
                    <div class="ml-3 product-list__item-img-wrap">
                        <img class="product-list__item-img" :src="product.img" alt="">
                    </div>
                </div>
            </div>
        </div>

        <div class="pt-3" v-if="products && products.length>3">
            <div class="d-flex align-items-center">
                <span v-if="!isFullList" class="icon-add pt-1 mr-2"></span>
                <span v-if="isFullList" class="icon-remove pt-1 mr-2"></span>

                <a @click="isFullList=!isFullList" href="#" class="link link--color-grey">
                    <span v-if="!isFullList">Смотреть все</span>
                    <span v-if="isFullList">Свернуть</span>
                </a>
            </div>
        </div>


    </div>
</template>

<script>
    export default {
        name: "product-list",
        props: {
            products: {
                type: null,
                default: ""
            }
        },
        data() {
            return {
                isFullList: false
            }
        }
    }
</script>

<style scoped>
    .product-list__item-img {
        max-width: 100%;
        height: auto;

        max-height: 100%;
        width: auto;
    }

    .product-list__item-img-wrap {
        width: 80px;
        height: 80px;
        text-align: center;
    }

    .product-list__title {
        text-transform: uppercase;
        font-size: 12px;
        color: #6BA833;
        line-height: 14px;
        padding-top: 10px;
    }

    .product-list__item {
        border-bottom: 1px solid #eee;
        padding: 1.5rem 0;
    }

    .product-list__item:first-child {
        padding-top: 0;
    }

    .product-list__item:last-child {
        border-bottom: 0;
        padding-bottom: 0;
    }
</style>