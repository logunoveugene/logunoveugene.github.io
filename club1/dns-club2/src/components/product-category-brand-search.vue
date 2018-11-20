<template>
    <div class="">
        <treeselect
                :options="options"
                :disable-branch-nodes="true"
                :show-count="true"
                :open-on-click="false"
                :open-on-focus="false"
                :clear-on-select="true"
                :close-on-select="true"
                :multiple="true"
                placeholder="Товар, категория или бренд"
                noResultsText="Ничего не найдено"


        >
            <label slot="option-label" slot-scope="{ node, shouldShowCount,  labelClassName, countClassName }"
                   :class="labelClassName">
                {{ node.label }}

            </label>
        </treeselect>
    </div>
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
                    label: 'Категории',
                    mcount: "34",
                    children: [{
                        id: '11',

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

                        label: 'Товары',
                        children: [{
                            mcount: 48,
                            id: '2-1',
                            label: 'Смартфон Vertex Impress Click NFC 8 ГБ черный',
                        }, {
                            mcount: 1,
                            id: '2-2',
                            label: 'Ноутбук ASUS VivoBook Max D540NA-GQ173T черный',
                        }, {
                            mcount: 12,
                            id: '2-3',
                            label: 'Телевизор OLED LG OLED55B8 черный',
                        }, {
                            mcount: 48,
                            id: '2-4',
                            label: 'Планшет Lenovo TAB4 8 Plus TB-8704F 64 ГБ черный',
                        }, {
                            mcount: 17,
                            id: '2-5',
                            label: 'Холодильник DEXP RF-SD180MA/W белый',
                        }, {
                            mcount: 3,
                            id: '2-6',
                            label: 'Стиральная машина Hisense WFXE7012',
                        }
                        ],
                    },
                    {
                        id: '3',
                        label: 'Бренды',

                        children: [{
                            id: '31',
                            label: 'Lenovo',
                            mcount: 10,
                        }, {
                            id: '32',
                            label: 'Asus',
                            mcount: 1,
                        }],
                    }


                ]
            }
        }
    }
</script>

<style>
    .vue-treeselect--open.vue-treeselect--open-below .vue-treeselect__control {
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
    }
    .vue-treeselect__control-arrow-container{
        display: none;
    }
</style>
