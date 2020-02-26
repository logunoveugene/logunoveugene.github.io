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
                        <span class="node-type-item__desc">{{nodeType.title}}</span>
                    </label>
                </div>
            </div>
        </div>


        <div class="bank-account-list">
            <div class="bank-account-list__bank-account-item" v-for="account in accountList" v-bind:key="account.id">
                <div class="bank-account-item">
                    <input :id="'account'+account.id"
                           class="bank-account-item__radio"
                           type="radio"
                           :value="{'title':account.title}"
                           v-model="selectedAccount">
                    <label class="bank-account-item__label" :for="'account'+account.id">
                        <span class="bank-account-item__desc">{{account.title}}</span>
                    </label>
                </div>
            </div>
        </div>

        <div class="main-form">
            <div class="main-form__icon">
                <v-icon v-if="selectedType" :name="selectedType.image"/>
            </div>
            <input type="text" class="main-form__desc-field" placeholder="Добавьте примечание...">
            <div class="main-form__number">{{selectedNum}}</div>
        </div>
        <div class="keyboard">
            <div class="keyboard__keyboard-item">
                <div class="keyboard-item">1</div>
            </div>
            <div class="keyboard__keyboard-item">
                <div class="keyboard-item">2</div>
            </div>
            <div class="keyboard__keyboard-item">
                <div class="keyboard-item">3</div>
            </div>
            <div class="keyboard__keyboard-item">
                <div class="keyboard-item">сегодня</div>
            </div>
            <div class="keyboard__keyboard-item">
                <div class="keyboard-item">4</div>
            </div>
            <div class="keyboard__keyboard-item">
                <div class="keyboard-item">5</div>
            </div>
            <div class="keyboard__keyboard-item">
                <div class="keyboard-item">6</div>
            </div>
            <div class="keyboard__keyboard-item">
                <div class="keyboard-item">+/-</div>
            </div>
            <div class="keyboard__keyboard-item">
                <div class="keyboard-item">7</div>
            </div>
            <div class="keyboard__keyboard-item">
                <div class="keyboard-item">8</div>
            </div>
            <div class="keyboard__keyboard-item">
                <div class="keyboard-item">9</div>
            </div>
            <div class="keyboard__keyboard-item">
                <div class="keyboard-item"></div>
            </div>
            <div class="keyboard__keyboard-item">
                <div class="keyboard-item">.</div>
            </div>
            <div class="keyboard__keyboard-item">
                <div class="keyboard-item">0</div>
            </div>
            <div class="keyboard__keyboard-item">
                <div class="keyboard-item">↑</div>

            </div>
            <div class="keyboard__keyboard-item">
                <div class="keyboard-item">ок</div>


            </div>
        </div>

    </div>
</template>

<script>
    import 'vue-awesome/icons'


    var accountList = [
        {
            "id": 1,
            "title": "Восточный кристина",

        },
        {
            "id": 2,
            "title": "Вклад",
        },
        {
            "id": 3,
            "title": "Счет 3",
        }

    ];
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
        components: {},
        props: {
            msg: String
        },
        data: function () {
            return {
                amount: null,
                nodeTypes: nodeTypes,
                accountList: accountList,
                selectedType: '',
                selectedAccount: '',
                selectedNum: '',
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
            user-select: none;
        }
        &__radio {
            display: none;
        }
        &--selected {
            background: blue;
        }
        &__label::before {
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
        &__radio:checked ~ .node-type-item__label::before {
            background-color: #ffe708;
        }
    }

    .main-form {
        display: flex;
        height: 36px;
        align-items: center;

        &__icon {
            padding: 5px;
            height: 36px;
            width: 36px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        &__desc-field {
            border: none;
            height: 36px;
            outline: none;
        }
    }

    .bank-account-list {
        display: flex;
        overflow-x: scroll;
        &__bank-account-item {
            width: auto;
            margin-right: 15px;

        }
    }

    .bank-account-item {
        box-sizing: border-box;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 20px;
        border: 1px solid black;

        &__label {
            width: 100%;
            height: 100%;
            padding: 10px 15px;
            position: relative;
        }
        &__icon {
            margin-bottom: 6px;
            display: block;
        }
        &__desc {
            font-size: 11px;
            white-space: nowrap;
            user-select: none;
        }
        &__radio {
            display: none;
        }
        &--selected {
            background: blue;
        }
        &__label::before {
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
        &__radio:checked ~ .bank-account-item__label::before {
            background-color: #ffe708;
        }
    }

    .keyboard {
        display: flex;
        flex-wrap: wrap;
        position: fixed;
        bottom: 0;
        width: 100%;

        &__keyboard-item {
            width: 25%;
        }
    }
    .keyboard-item{
        height: 51px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 1px 0 0 0 #e9ecef, 0 1px 0 0 #e9ecef, 1px 1px 0 0 #e9ecef, inset 1px 0 0 0 #e9ecef, inset 1px 1px 0 0 #e9ecef;
    }

</style>
