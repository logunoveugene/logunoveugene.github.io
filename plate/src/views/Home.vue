<template>
    <div class="page">
        <div class="page__plate">
            <Plate :productData="testProductData" :options="testOptionData"/>
        </div>
        <div class="page__test-data">
            <div class="test-data">
                <div class="test-data__title">Данные товара</div>
                <div class="test-data__item">
                    <div class="">stickers</div>
                    <input v-model="testProductData.stickers" type="text">
                </div>
                <div class="test-data__item">
                    <div class="">image</div>
                    <input v-model="testProductData.image" type="text">
                </div>
                <div class="test-data__item">
                    <div class="">voblerList</div>
                    <input v-model="testProductData.voblerList" type="text">
                </div>
                <div class="test-data__item">
                    <div class="">title</div>
                    <input v-model="testProductData.title" type="text">
                </div>
                <div class="test-data__item">
                    <div class="">rating</div>
                    <input v-model="testProductData.rating" type="text">
                </div>
                <div class="test-data__item">
                    <div class="">opinionCount</div>
                    <input v-model="testProductData.opinionCount" type="text">
                </div>
                <div class="test-data__item">
                    <div class="">commentCount</div>
                    <input v-model="testProductData.commentCount" type="text">
                </div>
                <div class="test-data__item">
                    <div class="">price</div>
                    <input v-model="testProductData.price" type="text">
                </div>
                <div class="test-data__item">
                    <div class="">priceOld</div>
                    <input v-model="testProductData.priceOld" type="text">
                </div>
                <div class="test-data__item">
                    <div class="">availableStore</div>
                    <input v-model="testProductData.availableStore" type="text">
                </div>
                <div class="test-data__item">
                    <div class="">availableStoreDate</div>
                    <input v-model="testProductData.availableStoreDate" type="text">
                </div>
                <div class="test-data__item">
                    <div class="">deliveryDate</div>
                    <input v-model="testProductData.deliveryDate" type="text">
                </div>
                <div class="test-data__item">
                    <div class="">deliveryCost</div>
                    <input v-model="testProductData.deliveryCost" type="text">
                </div>
                <div class="test-data__item">
                    <div class="">additionalBonus</div>
                    <input v-model="testProductData.additionalBonus" type="text">
                </div>
                <div class="test-data__item">
                    <div class="">additionalDiscount</div>
                    <input v-model="testProductData.additionalDiscount" type="text">
                </div>

            </div>
            <div class="test-data">
                <div class="test-data__title">Настройки виджета</div>
                <div class="test-data__item">
                    <div class="">plateDirection</div>
                    <input v-model="testOptionData.plateDirection" type="text">
                </div>
                <div class="test-data__item">
                    <div class="">imgSize</div>
                    <input v-model="testOptionData.imgSize" type="text">
                </div>
                <div class="voblerListSize">
                    <div class="">voblerListSize</div>
                    <input v-model="testOptionData.voblerListSize" type="text">
                </div>
                <div class="test-data__item">
                    <div class="">voblerListIsOneLine</div>
                    <input v-model="testOptionData.voblerListIsOneLine" type="text">
                </div>
                <div class="test-data__item">
                    <div class="">titleSize</div>
                    <input v-model="testOptionData.titleSize" type="text">
                </div>
                <div class="test-data__item">
                    <div class="">titleIsOneLine</div>
                    <input v-model="testOptionData.titleIsOneLine" type="text">
                </div>
                <div class="test-data__item">
                    <div class="">ratingStarsIsShort</div>
                    <input v-model="testOptionData.ratingStarsIsShort" type="text">
                </div>


            </div>
        </div>
    </div>
</template>

<script>

    import Plate from '@/components/Plate.vue'

    export default {
        name: 'home',
        components: {
            Plate
        },
        data: function () {
            return {
                testProductData: {
                    stickers: 'Стикер',
                    image: 'https://c.dns-shop.ru/thumb/st1/fit/190/190/1ec049a7b3ea1706918880796b77c5d6/de2b785b12722cbd2b448d627678afa822b310389b443eace6c2b62c48600809.jpg.webp',
                    voblerList: [],
                    title: 'Название товара',
                    rating: 4,
                    opinionCount: 15,
                    commentCount: 15,
                    price: 425,
                    priceOld: 545,
                    availableStore: 4,
                    availableStoreDate: '2019-01-25',
                    deliveryDate: '2019-01-25',
                    deliveryCost: 150,
                    additionalBonus: 0,
                    additionalDiscount: 0,
                },
                testOptionData: {
                    plateDirection: 'column',
                    imgSize: 'medium',
                    voblerListSize: 'medium',
                    voblerListIsOneLine: false,
                    titleSize: 'medium',
                    titleIsOneLine: false,
                    ratingStarsIsShort: false
                }
            }

        }
    }
</script>
<style lang="scss">
    .page {

        display: flex;
        &__plate {
            margin-right: auto;
            margin-left: auto;
            width: 300px;
        }
        &__test-data {
            width: 600px;
            display: flex;

            margin-right: auto;
            margin-left: auto;
        }
    }

    .test-data {
        margin-right: 100px;
        &__title {
            font-size: 20px;
            margin-bottom: .5rem;
        }
        &__item {
            margin-bottom: .5rem;
        }
    }

</style>
