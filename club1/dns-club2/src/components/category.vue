<template>
    <treeselect v-model="value"
                :alwaysOpen="true"
                :clear-on-select="true"
                :multiple="true"
                :options="options"
                noResultsText="Ничего не найдено"
                placeholder="Найти раздел"
                :max-height="400"
                zIndex="996"
    >
        <label slot="option-label" slot-scope="{ node, shouldShowCount,  labelClassName, countClassName }"
               :class="labelClassName">
            {{ node.label }} <span class="category-list__amount text-muted small"> {{ node.raw.mcount }}</span>

        </label>
    </treeselect>
</template>

<script>
    import Treeselect from '@riophae/vue-treeselect'
    import '@riophae/vue-treeselect/dist/vue-treeselect.css'

    export default {
        name: "category",
        components: {

            Treeselect

        },
        data: function () {
            return {
                value: null,
                options: [{
                    id: '1',
                    label: 'Компьютеры и комплектующие',
                    mcount: "34",
                    children: [{
                        id: '11',
                        mcount: 48,
                        label: 'Ноутбуки и аксессуары',

                    }, {
                        id: '12',
                        mcount: 41,
                        label: 'Планшеты, электронные книги ',
                    }, {
                        id: '13',
                        mcount: "34К",
                        label: 'Запчасти и ПО для ноутбуков',
                    }, {
                        id: '14',
                        mcount: 21,
                        label: 'Компьютерные системы',
                    }, {
                        id: '15',
                        mcount: 14,
                        label: 'Периферия',
                    }, {
                        id: '16',
                        mcount: 10,
                        label: 'ПО и аксессуары',
                    }, {
                        id: '17',
                        mcount: 58,
                        label: 'Основные комплектующие',
                    }, {
                        id: '18',
                        mcount: 75,
                        label: 'Хранение данных и охлаждение',
                    }, {
                        id: '19',
                        mcount: 12,
                        label: 'Устройства расширения и апгрейд',
                    }
                    ],
                },
                    {
                        id: '2',
                        mcount: 168,
                        label: 'Цифровая техника',
                        children: [{
                            mcount: 48,
                            id: '2-1',
                            label: 'Средства связи',
                        }, {
                            mcount: 1,
                            id: '2-2',
                            label: 'Аксессуары',
                        }, {
                            mcount: 12,
                            id: '2-3',
                            label: 'Запчасти для смартфона',
                        }, {
                            mcount: 48,
                            id: '2-4',
                            label: 'Телевизоры и аксессуары',
                        }, {
                            mcount: 17,
                            id: '2-5',
                            label: 'Медиа и аксессуары',
                        }, {
                            mcount: 3,
                            id: '2-6',
                            label: 'Оборудование для ТВ',
                        }, {
                            mcount: 12,
                            id: '2-7',
                            label: 'Развлечения',
                        }, {
                            mcount: 3,
                            id: '2-8',
                            label: 'Радиоуправляемая техника и портативный транспорт',
                        }, {
                            mcount: 2,
                            id: '2-9',
                            label: 'Стационарное аудио',
                        }, {
                            mcount: 8,
                            id: '2-10',
                            label: 'Портативное аудио',
                        }, {
                            mcount: 4,
                            id: '2-11',
                            label: 'Принадлежности и аксессуары для аудиотехники',
                        }, {
                            mcount: 7,
                            id: '2-12',
                            label: 'Камеры и аксессуары',
                        }, {
                            mcount: 7,
                            id: '2-13',
                            label: 'Портативное аудио',
                        }, {
                            mcount: 13,
                            id: '2-14',
                            label: 'Принадлежности и аксессуары для аудиотехники',
                        }, {
                            mcount: 71,
                            id: '2-15',
                            label: 'Печать и хранение фотографий',
                        }, {
                            mcount: 12,
                            id: '2-16',
                            label: 'Приборы для наблюдений',
                        }
                        ],
                    },
                    {
                        id: '3',
                        label: 'Бытовая техника',
                        mcount: 79,
                        children: [{
                            id: '31',
                            label: 'aa',
                        }, {
                            id: '32',
                            label: 'ab',
                        }],
                    },
                    {
                        id: '4',
                        label: 'Красота и здоровье',
                        mcount: 41,
                        children: [{
                            id: '41',
                            label: 'aa',
                        }, {
                            id: '42',
                            label: 'ab',
                        }],
                    },
                    {
                        id: '5',
                        label: 'Инструменты',
                        mcount: 32,
                        children: [{
                            id: '51',
                            label: 'aa',
                        }, {
                            id: '52',
                            label: 'ab',
                        }],
                    },
                    {
                        id: '6',
                        label: 'Для офиса',
                        mcount: 45,
                        children: [{
                            id: '61',
                            label: 'aa',
                        }, {
                            id: '62',
                            label: 'ab',
                        }],
                    },
                    {
                        id: '7',
                        label: 'Для авто',
                        mcount: 78,
                        children: [{
                            id: '71',
                            label: 'aa',
                        }, {
                            id: '72',
                            label: 'ab',
                        }],
                    },
                    {
                        id: '8',
                        label: 'Для офиса',
                        mcount: 45,
                        children: [{
                            id: '81',
                            label: 'aa',
                        }, {
                            id: '82',
                            label: 'ab',
                        }],
                    },


                ]
            }
        }
    }
</script>

<style >
    .vue-treeselect__control {
        display: none;
        border-radius: 8px;
    }


    .vue-treeselect--open.vue-treeselect--open-below .vue-treeselect__control {
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
    }

    .vue-treeselect__menu-container {
        position: relative;
        margin-top: 1px;
    }

    .vue-treeselect__menu {
        position: relative;
        border: 0;
        padding-top: 0px;
        padding-bottom: 0px;
    }

    .vue-treeselect__multi-value-item-container {
        padding-top: 7px;

    }

    .vue-treeselect--open-below .vue-treeselect__menu {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        box-shadow: none;
    }

    .discussions__source-icon-wrap {
        border: 1px solid #eee;
        width: 22px;
        border-radius: 4px;
        height: 22px;
        margin-right: 9px;
        padding: 2px 0 0 3px;
        color: #999;
    }

    .vue-treeselect__option--highlight {
        background: #fff;
    }

    .vue-treeselect--multi .vue-treeselect__input-container {
        font-size: 16px;
    }

    .vue-treeselect__control {

        height: 40px;
    }

    .vue-treeselect__placeholder, .vue-treeselect__single-value {
        line-height: 38px;
    }

    .vue-treeselect__multi-value-item {
        cursor: pointer;
        display: inline-table;
        background: #eee;
        padding: 3px 6px 1px;
        border: 1px solid transparent;
        border-radius: 15px;
        color: #636363;
        font-size: 14px;
        line-height: 18px;
    }

    .vue-treeselect__value-remove {
        color: #808080;
        padding-left: 5px;
        border-left: none;
        line-height: 0;
    }

    .vue-treeselect__checkbox--checked {
        border-color: #e68c00;
        background: #e68c00;
    }

    .vue-treeselect__checkbox--indeterminate {
        border-color: #e68c00;
        background: #e68c00;
    }
    .vue-treeselect__label-container{
        margin-left: 8px;
    }
    .vue-treeselect__label-container:hover .vue-treeselect__checkbox--indeterminate {
        border-color: #e67503;
        background: #e67503;
    }

    .vue-treeselect__label-container:hover .vue-treeselect__checkbox--checked {
        border-color: #e67503;
        background: #e67503;
    }

    .vue-treeselect__label-container:hover .vue-treeselect__checkbox--unchecked {
        border-color: #e67503;
        background: #fff;
    }

    .vue-treeselect__check-mark, .vue-treeselect__minus-mark {
        left: 3px;
        top: 3px;

    }

    .vue-treeselect__checkbox {
        width: 16px;
        height: 16px;
        border-radius: 4px;
    }

    .vue-treeselect--has-value .vue-treeselect__multi-value {
        margin-bottom: 3px;
    }

    .vue-treeselect__indent-level-0 .vue-treeselect__option {
        padding-left: 5px;
        padding: 5px 0;
        font-size: 14px;
    }

    .vue-treeselect__list-item.vue-treeselect__indent-level-1 {
        padding-left: 0;
        font-size: 14px;
    }

    .vue-treeselect--open .vue-treeselect__control {
        border-color: #dddddd;
    }

    .vue-treeselect--single .vue-treeselect__option--selected {
        background: #f6f6f6;
        font-weight: 600;
        border-radius: 4px;
    }
    .category-list__amount{

        border-radius: 50px;
        padding: 2px 6px 1px 6px;
        box-shadow: 0 1px 4px rgba(0,0,0,.15);
        margin-left: 5px;
        background: #ffffff;

    }

    .vue-treeselect__option-arrow-container{
        width: 8px;
    }
</style>