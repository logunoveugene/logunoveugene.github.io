<template>
    <div class="hello">
        <div class="node-type">
            <div class="node-type__node-type-item" v-for="nodeType in nodeTypes" v-bind:key="nodeType.id">
                <div class="node-type-item">
                    <input :id="'nodeType'+nodeType.id"
                           class="node-type-item__radio"
                           type="radio"
                           :value="{
                           'title':nodeType.title,
                           'image':nodeType.image,
                           'color':nodeType.color
                           }"
                           v-model="selectedType">
                    <label class="node-type-item__label" :for="'nodeType'+nodeType.id">
                        <span class="node-type-item__icon">
                            <v-icon :name="nodeType.image"/>
                        </span>
                        <span class="node-type-item__desc">
                            {{nodeType.title}}
                        </span>
                    </label>
                </div>
            </div>
        </div>
        <div class="" v-if="selectedType">
            <v-icon :name="selectedType.image"/>
            {{selectedType.title}}
        </div>
    </div>
</template>

<script>
    import 'vue-awesome/icons'
    import nodeTypeItem from './NodeTypeItem'

    var nodeTypes = [
        {
            "id": 1,
            "title": "Проезд",
            "image": "car",
            "color": "#96f468"

        },
        {
            "id": 2,
            "title": "Еда",
            "image": "utensils",
            "color": "#f44336"
        },
        {
            "id": 3,
            "title": "Продукты",
            "image": "utensils",
            "color": "#3840f4"
        },
        {
            "id": 4,
            "title": "Одежда",
            "image": "utensils",
            "color": "#f49824"
        }
    ]

    export default {
        name: 'addNote',
        components: {
            nodeTypeItem
        },
        props: {
            msg: String
        },
        data: function () {
            return {
                nodeTypes: nodeTypes,
                selectedType: '',
                selected: false

            }
        },
        methods: {
            clearSelectedType() {
                this.selected = false;

            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    .node-type {
        display: flex;
        flex-wrap: wrap;
        &__node-type-item {
            width: 25%;
        }
    }

    .node-type-item {
        box-sizing: border-box;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;

        &__label {
            width: 100%;
            height: 100%;
            padding: 15px 10px;
            position: relative;
        }
        &__icon {
            margin-bottom: 6px;
            display: block;
        }
        &__desc {
            font-size: 11px;
        }
        &__radio {
            display: none;
        }
        &--selected {
            background: blue;
        }
    }

    .node-type-item__label::before {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: block;
        width: 1rem;
        height: 1rem;
        pointer-events: none;
        content: "";
        border-radius: 50%;
    }

    .node-type-item__radio:checked ~ .node-type-item__label::before {
        background-color: #ffe708;
    }

</style>
