<template>

        <div class="catalog-menu d-flex flex-column  justify-content-between h-100 m-0 p-0">
            <catalogmenuimem :mainNavItem="mainNavItem" v-for="(mainNavItem, index) in catalog" :key="index">
            </catalogmenuimem>
        </div>
</template>

<script>
    import catalogmenuimem from './catalog-menu__item.vue'
    export default {
        props: {
            catalog: {
                type: null,
                default: ""
            }

        },
        data: function () {
            return {
                collapse: false
            }
        },
        components: {
            catalogmenuimem
        }
    }
</script>

<style>
    .catalog-menu {
        overflow: hidden;
    }

</style>