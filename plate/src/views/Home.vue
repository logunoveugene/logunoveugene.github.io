<template>
    <div class="page">

        <Plate msg="Welcome to Your Vue.js App"/>
        <input v-model="testData.image" type="text">
        <input v-model="testData" type="text">
        <input v-model="testData" type="text">
        <input v-model="testData" type="text">
        <input v-model="testData" type="text">
        <input v-model="testData" type="text">
        <input v-model="testData" type="text">
        <input v-model="testData" type="text">
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
                testData: {
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

        }
    }
</script>
