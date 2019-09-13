<template>
    <div class="product-img"
         :class="'product-img--size-' + imgSize">

        <img :src="img"
             class="product-img__picture"
             alt="">
    </div>
</template>

<script>
    export default {
        name: "ProductImg",
        props: {
            img: {
                type: String,
                default: null
            },
            imgSize: {
                type: String,
                default: 'medium'
            }
        }
    }
</script>

<style lang="scss">
    .product-img {
        height: 100%;
        width: 100%;
        position: relative;

        &--size-small {
            height: 90px;
            width: 90px;
        }
        &--size-medium {
            height: 200px;
            width: 200px;
        }

        &--size-large {
            height: 400px;
            width: 400px;
        }

        &__picture {
            height: auto;
            width: auto;
            max-height: 100%;
            max-width: 100%;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);

        }

    }
</style>
