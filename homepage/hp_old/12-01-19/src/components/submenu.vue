<template>
    <div class=submenu>
        <div class="submenu__block" v-for="(submenuItem, index) in mysubmenu" :key="index">
            <div class="h3 submenu__item">{{submenuItem.title}}</div>
            <div class="column">
                <div class="subsubmenu__item" v-for="(subsubmenuItem, index) in submenuItem.child" :key="index">

                    <v-popover trigger="hover"  placement="right">
                        <a href="#"  class=" subsubmenu__link small link link--color-grey">{{subsubmenuItem.title}}
                            <span class="ml-1 text-muted">{{subsubmenuItem.amount}}</span>
                            <span v-if="subsubmenuItem.child.length > 1"
                                  class="subsubmenu__arrow icon-arrow-right pt-1"></span>
                        </a>

                        <template slot="popover">
                            <div class="" v-for="(dropItem, index) in subsubmenuItem.child" :key="index">
                                <a href="" class="link link--color-grey small">{{dropItem.title}}</a>
                            </div>
                        </template>
                    </v-popover>



                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "submenu",
        data: function () {
            return {
                isOver: false
            }
        },
        props: {
            mysubmenu: {
                type: null,
                default: ""
            }

        },
    }
</script>

<style>
    .subcat__dropMenu {
        position: absolute;
        background: white;
        box-shadow: 10px 0 20px 0 rgba(0, 0, 0, .2);


    }

    .submenu {
        display: none;
    }

    @media (min-width: 992px) {

        .submenu {
            display: block;
            position: absolute;
            width: calc(960px - 240px);
            background: white;
            left: 230px;
            z-index: 90;
            border-radius: 0 8px 8px 0;
            box-shadow: inset 20px 0 20px -13px rgba(0, 0, 0, 0.1);
            padding: 2rem;
            /*height: 100%;*/
            /*overflow-y: scroll;*/
        }

    }

    @media (min-width: 1200px) {

        .submenu {
            display: block;
            position: absolute;
            width: calc(1200px - 300px);
            background: white;
            left: 289px;

            z-index: 90;
            border-radius: 0 8px 8px 0;
            box-shadow: inset 20px 0 20px -13px rgba(0, 0, 0, 0.1);
            padding: 2rem;

        }

    }

    .submenu__block {
        margin-bottom: 2rem;
    }

    .column {
        column-width: 200px;
        column-count: 3;
        column-gap: 30px;
        padding-left: 20px;
    }

    .subsubmenu__item {
        margin-bottom: .5rem;
        line-height: 18px;
        /*position: relative;*/
    }

    .subsubmenu__link {
        white-space: nowrap;
        display: flex;
        align-items: center;
    }

    /*.subsubmenu__arrow{*/
    /*position: absolute;*/
    /*top:2px*/
    /*}*/

    .submenu__item {
        margin-bottom: .75rem;
    }


    .tooltip {
        display: block !important;
        z-index: 10000;
    }

    .tooltip .tooltip-inner {
        background: black;
        color: white;
        border-radius: 16px;
        padding: 5px 10px 4px;
    }

    .tooltip .tooltip-arrow {
        width: 0;
        height: 0;
        border-style: solid;
        position: absolute;
        margin: 5px;
        border-color: black;
        z-index: 1;
    }

    .tooltip[x-placement^="top"] {
        margin-bottom: 5px;
    }

    .tooltip[x-placement^="top"] .tooltip-arrow {
        border-width: 5px 5px 0 5px;
        border-left-color: transparent !important;
        border-right-color: transparent !important;
        border-bottom-color: transparent !important;
        bottom: -5px;
        left: calc(50% - 5px);
        margin-top: 0;
        margin-bottom: 0;
    }

    .tooltip[x-placement^="bottom"] {
        margin-top: 5px;
    }

    .tooltip[x-placement^="bottom"] .tooltip-arrow {
        border-width: 0 5px 5px 5px;
        border-left-color: transparent !important;
        border-right-color: transparent !important;
        border-top-color: transparent !important;
        top: -5px;
        left: calc(50% - 5px);
        margin-top: 0;
        margin-bottom: 0;
    }

    .tooltip[x-placement^="right"] {
        margin-left: 5px;
    }

    .tooltip[x-placement^="right"] .tooltip-arrow {
        border-width: 5px 5px 5px 0;
        border-left-color: transparent !important;
        border-top-color: transparent !important;
        border-bottom-color: transparent !important;
        left: -5px;
        top: calc(50% - 5px);
        margin-left: 0;
        margin-right: 0;
    }

    .tooltip[x-placement^="left"] {
        margin-right: 5px;
    }

    .tooltip[x-placement^="left"] .tooltip-arrow {
        border-width: 5px 0 5px 5px;
        border-top-color: transparent !important;
        border-right-color: transparent !important;
        border-bottom-color: transparent !important;
        right: -5px;
        top: calc(50% - 5px);
        margin-left: 0;
        margin-right: 0;
    }

    .tooltip.popover .popover-inner {
        background: #f9f9f9;
        color: black;
        padding: 24px;
        border-radius: 5px;
        box-shadow: 0 5px 30px rgba(black, .1);
    }

    .tooltip.popover .popover-arrow {
        border-color: #f9f9f9;
    }

    .tooltip[aria-hidden='true'] {
        visibility: hidden;
        opacity: 0;
        transition: opacity .15s, visibility .15s;
    }

    .tooltip[aria-hidden='false'] {
        visibility: visible;
        opacity: 1;
        transition: opacity .15s;
    }



</style>