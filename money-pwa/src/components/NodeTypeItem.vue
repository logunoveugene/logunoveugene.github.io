<template>

</template>

<script>
    export default {
        name: "node-type-item",
        data: function () {
            return {
                selectedUser:""
            }
        },
        props: {
            nodeType: {
                type: null,
                default: ""
            },
            isSelected: {
                type: Boolean,
                default: false
            },


        },
        methods: {
            SelectType() {
                this.$emit('clearSelectedType')
                this.isSelected = !this.isSelected;
            }
        }
    }
</script>

<style lang="scss">
    .node-type-item {
        box-sizing: border-box;
        padding: 15px 10px;
        width: 100%;

        display: flex;
        flex-direction: column;
        align-items: center;
        &__icon {
            margin-bottom: 6px;
        }
        &__desc {
            font-size: 11px;
        }
        &--selected {
            background: blue;
        }
    }

</style>