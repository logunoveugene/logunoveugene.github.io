<template>
    <div class="editor">


        <editor-floating-menu :editor="editor">
            <div
                    slot-scope="{ commands, isActive, menu }"
                    class="editor__floating-menu"
                    :class="{ 'is-active': menu.isActive }"
                    :style="`top: ${menu.top}px`"
            >


                <v-popover v-if="!isActive.table()" offset="0">

                    <div class="menububble__button">
                        <span class="editor-icon-text">H</span>
                    </div>
                    <template slot="popover">

                        <div
                                class="menubar__button"
                                :class="{ 'is-active': isActive.heading({ level: 1 }) }"
                                @click="commands.heading({ level: 1 })"
                        >
                            <span class="editor-icon-text">H2</span>
                        </div>

                        <div
                                class="menubar__button"
                                :class="{ 'is-active': isActive.heading({ level: 2 }) }"
                                @click="commands.heading({ level: 2 })"
                        >
                            <span class="editor-icon-text">H3</span>
                        </div>

                        <div
                                class="menubar__button"
                                :class="{ 'is-active': isActive.heading({ level: 3 }) }"
                                @click="commands.heading({ level: 3 })"
                        >
                            <span class="editor-icon-text">H4</span>
                        </div>

                    </template>
                </v-popover>





                <div
                        class="menubar__button"
                        :class="{ 'is-active': isActive.blockquote() }"
                        @click="commands.blockquote"
                >
                    <i class="editor-icon icon-quote"></i>
                </div>
                <div
                        class="menubar__button"
                        @click="showImagePrompt(commands.image)"
                >
                    <i class="editor-icon icon-image"></i>
                </div>


                <div
                        class="menubar__button"
                        @click="commands.createTable({rowsCount: 3, colsCount: 3, withHeaderRow: false })"
                >
                    <i class="editor-icon icon-table"></i>
                </div>


                <button
                        class="menubar__button"
                        @click="commands.horizontal_rule"
                >
                    <i class="editor-icon icon-hr"></i>

                </button>


                <div
                        class="menubar__button"
                >

                    <i class="editor-icon icon-youtube-1"></i>
                </div>


            </div>
        </editor-floating-menu>
        <editor-menu-bubble :editor="editor">

            <div
                    slot-scope="{ commands, isActive, getMarkAttrs, menu }"
                    class="menububble"
                    :class="{ 'is-active': menu.isActive || isActive.table()  }"
                    :style="`left: ${menu.left}px; bottom: ${menu.bottom}px;`"
            >


                <v-popover v-if="!isActive.table()" offset="0">

                    <div class="menububble__button">
                        <span class="editor-icon-text">H</span>
                    </div>
                    <template slot="popover">
                        <div v-if="!isActive.table()"
                             class="menububble__button"
                             :class="{ 'is-active': isActive.heading({ level: 1 }) }"
                             @click="commands.heading({ level: 1 })"
                        >
                            <span class="editor-icon-text">H2</span>
                        </div>
                        <div v-if="!isActive.table()"
                             class="menububble__button"
                             :class="{ 'is-active': isActive.heading({ level: 2 }) }"
                             @click="commands.heading({ level: 2 })"
                        >
                            <span class="editor-icon-text">H3</span>
                        </div>


                        <div v-if="!isActive.table()"
                             class="menububble__button"
                             :class="{ 'is-active': isActive.heading({ level: 2 }) }"
                             @click="commands.heading({ level: 3 })"
                        >
                            <span class="editor-icon-text">H4</span>
                        </div>

                    </template>
                </v-popover>

                <div v-if="!isActive.table()"
                     class="menububble__button"
                     :class="{ 'is-active': isActive.bold() }"
                     @click="commands.bold"
                >
                    <i class="editor-icon icon-bold"></i>
                </div>


                <v-popover v-if="!isActive.table()" offset="0">

                    <div class="menububble__button">
                        <i class="editor-icon icon-ul"></i>
                    </div>
                    <template slot="popover">
                        <div v-if="!isActive.table()"
                             class="menububble__button"
                             :class="{ 'is-active': isActive.bullet_list() }"
                             @click="commands.bullet_list"
                        >
                            <i class="editor-icon icon-ul"></i>
                        </div>
                        <div v-if="!isActive.table()"
                             class="menububble__button"
                             :class="{ 'is-active': isActive.ordered_list() }"
                             @click="commands.ordered_list"
                        >
                            <i class="editor-icon icon-ol"></i>
                        </div>
                    </template>
                </v-popover>


                <v-popover offset="0" v-if="isActive.paragraph() && !isActive.table()"
                           :style="`left: ${menu.left}px; bottom: ${menu.bottom}px;`">

                    <div class="menububble__button">
                        <i v-if="isActive.paragraph({ textAlign: 'left' })" class="editor-icon icon-left-align"></i>
                        <i v-if="isActive.paragraph({ textAlign: 'center' })" class="editor-icon icon-center-align"></i>
                        <i v-if="isActive.paragraph({ textAlign: 'right' })" class="editor-icon icon-right-align"></i>
                    </div>
                    <template slot="popover">

                        <div
                                class="menububble__button"
                                :class="{ 'v-btn--active': isActive.paragraph({ textAlign: 'left' }) }"
                                @click="commands.paragraph({ textAlign: 'left' })">
                            <i class="editor-icon icon-left-align"></i>

                        </div>
                        <div
                                class="menububble__button"
                                :class="{ 'v-btn--active': isActive.paragraph({ textAlign: 'center' }) }"
                                @click="commands.paragraph({ textAlign: 'center' })">
                            <i class="editor-icon icon-center-align"></i>

                        </div>
                        <div
                                class="menububble__button"
                                :class="{ 'v-btn--active': isActive.paragraph({ textAlign: 'right' }) }"
                                @click="commands.paragraph({ textAlign: 'right' })">
                            <i class="editor-icon icon-right-align"></i>

                        </div>
                    </template>
                </v-popover>

                <v-popover v-if="!isActive.table()" offset="0">
                    <button
                            class="menububble__button"

                            :class="{ 'is-active': isActive.link() }"
                    >

                        <i class="editor-icon icon-link"></i>

                    </button>

                    <template slot="popover">
                        <div v-if="!linkMenuIsActive" class="menububble__button">
                            <i class="editor-icon icon-anchor-1"></i>
                        </div>
                        <div class="menububble__button">
                            <form class="menububble__form"
                                  v-if="linkMenuIsActive"
                                  @submit.prevent="setLinkUrl(commands.link, linkUrl)">
                                <input class="menububble__input" type="text" v-model="linkUrl"
                                       placeholder="Ссылка на якорь"
                                       ref="linkInput" @keydown.esc="hideLinkMenu"/>
                                <button class="menububble__button" @click="setLinkUrl(commands.link, null)"
                                        type="button">
                                    <i class="editor-icon icon-remove-1"></i>
                                </button>
                            </form>
                            <template v-else>
                                <button
                                        class="menububble__button"
                                        @click="showLinkMenu(getMarkAttrs('link'))"
                                        :class="{ 'is-active': isActive.link() }"
                                >

                                    <i class="editor-icon icon-link"></i>
                                </button>
                            </template>


                        </div>

                    </template>
                </v-popover>
                <v-popover v-if="!isActive.table()" offset="0">

                    <div class="menububble__button">
                        <i class="editor-icon icon-dots-hor"></i>
                    </div>
                    <template slot="popover">
                        <div v-if="!isActive.table()"
                             class="menububble__button"
                             :class="{ 'is-active': isActive.italic() }"
                             @click="commands.italic"
                        >
                            <i class="editor-icon icon-italic"></i>

                        </div>

                        <button
                                class="menububble__button"
                                :class="{ 'is-active': isActive.strike() }"
                                @click="commands.strike"
                        >
                            <i class="editor-icon icon-strike"></i>
                        </button>

                        <button
                                class="menububble__button"
                                :class="{ 'is-active': isActive.underline() }"
                                @click="commands.underline"
                        >
                            <i class="editor-icon icon-underline"></i>
                        </button>

                    </template>
                </v-popover>


                <v-popover offset="0" v-if="isActive.table()">

                    <div class="menububble__button">
                        <i class="editor-icon-text ">–</i>
                    </div>
                    <template slot="popover">

                        <div v-if="isActive.table()"
                             class="menububble__button"
                             @click="commands.deleteColumn"
                        >
                            <i class="editor-icon icon-delete-col"> </i>
                        </div>
                        <div v-if="isActive.table()"
                             class="menububble__button"
                             @click="commands.deleteRow"
                        >
                            <i class="editor-icon icon-delete-row"></i>
                        </div>

                    </template>
                </v-popover>


                <v-popover offset="0" v-if="isActive.table()">

                    <div class="menububble__button">
                        <i class="editor-icon-text ">+</i>
                    </div>
                    <template slot="popover">

                        <div v-if="isActive.table()"
                             class="menububble__button"
                             @click="commands.addColumnBefore"
                        >
                            <i class="editor-icon icon-add-col-before"> </i>
                        </div>
                        <div v-if="isActive.table()"
                             class="menububble__button"
                             @click="commands.addColumnAfter"
                        >
                            <i class="editor-icon icon-add-col-after"> </i>
                        </div>

                        <div v-if="isActive.table()"
                             class="menububble__button"
                             @click="commands.addRowBefore"
                        >
                            <i class="editor-icon icon-add-row-before"> </i>
                        </div>
                        <div v-if="isActive.table()"
                             class="menububble__button"
                             @click="commands.addRowAfter"
                        >
                            <i class="editor-icon icon-add-row-after"> </i>
                        </div>

                    </template>
                </v-popover>


                <div v-if="isActive.table()"
                     class="menububble__button"
                     @click="commands.deleteTable"
                >
                    <i class="editor-icon icon-delete-table"> </i>
                </div>


                <div v-if="isActive.table()"
                     class="menububble__button"
                     @click="commands.toggleCellMerge"
                >
                    <i class="editor-icon icon-combine-cells"></i>
                </div>


            </div>


        </editor-menu-bubble>


        <editor-content class="editor__content" :editor="editor"/>
    </div>
</template>

<script>

    import {Editor, EditorContent, EditorMenuBar, EditorFloatingMenu, EditorMenuBubble} from 'tiptap'
    import {
        Blockquote,
        BulletList,
        HardBreak,
        Heading,
        HorizontalRule,
        ListItem,
        OrderedList,
        Bold,
        Italic,
        History,
        Placeholder,

        Image,


        Strike,
        Underline,


        Table,
        TableHeader,
        TableCell,
        TableRow,


        Link,


    } from 'tiptap-extensions'

    import Paragraph from './paragraph.js';


    export default {
        name: "editorTipTap",
        components: {
            EditorContent,
            EditorFloatingMenu,
            EditorMenuBubble,
            EditorMenuBar

        },

        data() {
            return {
                linkUrl: null,
                linkMenuIsActive: false,
                editor: new Editor({
                    extensions: [
                        new Blockquote(),
                        new BulletList(),

                        new HardBreak(),
                        new Heading({levels: [1, 2, 3]}),
                        new HorizontalRule(),
                        new ListItem(),
                        new OrderedList(),

                        new Bold(),

                        new Italic(),


                        new Strike(),
                        new Underline(),

                        new History(),
                        new Placeholder({
                            emptyClass: 'is-empty',
                            emptyNodeText: 'Напишите вашу статью...',
                        }),

                        new Image(),


                        new Paragraph(),

                        new Table(),
                        new TableHeader(),
                        new TableCell(),
                        new TableRow(),
                        new Link(),

                    ],
                    content: '',
                }),
            }
        },


        methods: {
            showLinkMenu(attrs) {
                this.linkUrl = attrs.href
                this.linkMenuIsActive = true
                this.$nextTick(() => {
                    this.$refs.linkInput.focus()
                })
            },
            hideLinkMenu() {
                this.linkUrl = null
                this.linkMenuIsActive = false
            },
            setLinkUrl(command, url) {
                command({href: url})
                this.hideLinkMenu()
                this.editor.focus()
            },

            showImagePrompt(command) {
                const src = prompt('URL изображения')
                if (src !== null) {
                    command({src})
                }
            },
        },


        beforeDestroy() {
            this.editor.destroy()
        },
    }
</script>

<style lang="scss">

    :focus {
        outline: none
    }

    /*blockquote, h1, h2, h3, ol, p, pre, ul {*/
    /*margin: 1rem 0*/
    /*}*/

    blockquote:first-child, h1:first-child, h2:first-child, h3:first-child, ol:first-child, p:first-child, pre:first-child, ul:first-child {
        margin-top: 0
    }

    blockquote:last-child, h1:last-child, h2:last-child, h3:last-child, ol:last-child, p:last-child, pre:last-child, ul:last-child {
        margin-bottom: 0
    }

    h1, h2, h3 {
        line-height: 1.3
    }
    .editor__content hr{
        margin-bottom: 2rem;
    }

    .button {
        font-weight: 700;
        display: inline-flex;
        background: rgba(0, 0, 0, 0);
        border: 0;
        color: #000;
        padding: .2rem .5rem;
        margin-right: .2rem;
        border-radius: 3px;
        cursor: pointer;
        background-color: rgba(0, 0, 0, .1)
    }

    .editor {
        position: relative;

    }

    .editor__content {
        word-wrap: break-word
    }

    .editor__content * {
        caret-color: currentColor
    }

    .editor__content blockquote p {
        padding-left: 20px;
        border-left: 3px solid #ff8700;
        padding-bottom: 0;
        margin-top: 2rem;
        margin-bottom: 2rem;
        font-style: italic;
        font-size: 18px;
    }

    @media (min-width: 768px) {
        .editor__content p, .editor__content h1, .editor__content h2, .editor__content ul, .editor__content ol, .editor__content .table__wrap {
            margin-left: 0px;
            margin-right: 80px;

        }

        .editor__content p {

            font-size: 18px;
        }

        .editor__content blockquote p {
            padding-left: 40px;
            border-left: 3px solid #ff8700;
            padding-bottom: 0;
            margin-top: 2rem;
            margin-bottom: 2rem;
            font-style: italic;
            font-size: 24px;
        }

        .editor__content p img {
            width: 100%;
        }

    }

    .editor__content p img {
        width: calc(100% + 80px);
        height: auto;
        border-radius: 8px;
        overflow: hidden;

    }

    .editor__content ul {
        padding-left: 20px;
        margin-bottom: 2rem;

    }

    .editor__content ol {
        padding-left: 20px;
        margin-bottom: 2rem;

    }

    .editor__content li {
        margin-bottom: .5rem;

    }

    .editor__content li p {
        margin-bottom: 0rem;

    }

    .editor__content p {
        margin-bottom: 2rem;

    }

    /*.editor__content p:first-child {*/
    /*font-size: 18px;*/
    /*font-weight: 700;*/
    /*line-height: 28px;*/
    /*margin-left: 0;*/
    /*margin-right: 0;*/
    /*}*/

    .editor__content table {
        border-collapse: collapse;
        table-layout: fixed;
        width: 100%;
        margin: 0;
        overflow: hidden
    }

    .editor__content table td, .editor__content table th {
        min-width: 1em;
        border: 2px solid #ddd;
        padding: 3px 5px;
        vertical-align: top;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        position: relative
    }

    .editor__content table td > *, .editor__content table th > * {
        margin-bottom: 0
    }

    .editor__content table th {
        font-weight: 700;
        text-align: left
    }

    .editor__content table .selectedCell:after {
        z-index: 2;
        position: absolute;
        content: "";
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: rgba(200, 200, 255, .4);
        pointer-events: none
    }

    .editor__content table .column-resize-handle {
        position: absolute;
        right: -2px;
        top: 0;
        bottom: 0;
        width: 4px;
        z-index: 20;
        background-color: #adf;
        pointer-events: none
    }

    .editor__content .tableWrapper {
        margin: 1em 0 2rem 0;
        overflow-x: auto
    }

    .editor__content .resize-cursor {
        cursor: ew-resize;
        cursor: col-resize
    }

    .menubar {
        margin-bottom: 1rem;
        height: 0px;
        top: 10px;
        -webkit-transition: visibility .2s .4s, opacity .2s .4s;
        transition: visibility .2s .4s, opacity .2s .4s
    }

    .menubar.is-hidden {
        visibility: hidden;
        opacity: 0
    }

    .menubar.is-focused {
        visibility: visible;
        opacity: 1;
        -webkit-transition: visibility .2s, opacity .2s;
        transition: visibility .2s, opacity .2s
    }

    .menubar__button {
        font-weight: 700;

        display: inline-flex;
        background: rgba(0, 0, 0, 0);
        border: 0;
        color: #000;
        padding: .2rem .5rem;
        margin-right: .2rem;
        border-radius: 3px;
        cursor: pointer
    }

    .menubar__button:hover {
        background-color: rgba(0, 0, 0, .05);
        color: #333
    }

    .menubar__button.is-active {
        background-color: rgba(0, 0, 0, .1)
    }

    .menububble {
        position: absolute;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        z-index: 20;
        background: #000;
        border-radius: 5px;
        padding: .3rem;
        margin-bottom: .5rem;
        -webkit-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
        transform: translateX(-50%);
        visibility: hidden;
        opacity: 0;
        -webkit-transition: opacity .2s, visibility .2s;
        transition: opacity .2s, visibility .2s;
        box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.14);
    }

    .menububble.is-active {
        opacity: 1;
        visibility: visible
    }

    .menububble__button {

        display: inline-flex;
        background: rgba(0, 0, 0, 0);
        border: 0;
        color: #fff;
        padding: .2rem .5rem;
        margin-right: .2rem;
        border-radius: 3px;
        cursor: pointer;
        min-width: 35px;
        text-align: center;
    }

    .menububble__button:last-child {
        margin-right: 0
    }

    .menububble__button:hover {
        background-color: hsla(0, 0%, 100%, .1)
    }

    .menububble__button.is-active {
        background-color: hsla(0, 0%, 100%, .2)
    }

    .menububble__form {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center
    }

    .menububble__input {
        font: inherit;
        border: none;
        background: rgba(0, 0, 0, 0);
        color: #333
    }

    .icon[data-v-2b9db09d] {
        position: relative;
        display: inline-block;
        vertical-align: middle;
        width: .8rem;
        height: .8rem;
        margin: 0 .3rem;
        top: -.05rem;
        fill: currentColor
    }

    .icon__svg[data-v-2b9db09d] {
        display: inline-block;
        vertical-align: top;
        width: 100%;
        height: 100%
    }

    .icon[data-v-2b9db09d]:first-child {
        margin-left: 0
    }

    .icon[data-v-2b9db09d]:last-child {
        margin-right: 0
    }

    .icon use > svg circle[data-v-2b9db09d], .icon use > svg g[data-v-2b9db09d], .icon use > svg path[data-v-2b9db09d], .icon use > svg rect[data-v-2b9db09d], body > svg circle[data-v-2b9db09d], body > svg g[data-v-2b9db09d], body > svg path[data-v-2b9db09d], body > svg rect[data-v-2b9db09d], symbol circle[data-v-2b9db09d], symbol g[data-v-2b9db09d], symbol path[data-v-2b9db09d], symbol rect[data-v-2b9db09d] {
        fill: currentColor;
        stroke: none
    }

    .icon use > svg [d="M0 0h24v24H0z"][data-v-2b9db09d], body > svg [d="M0 0h24v24H0z"][data-v-2b9db09d], symbol [d="M0 0h24v24H0z"][data-v-2b9db09d] {
        display: none
    }

    .editor__floating-menu {
        position: absolute;
        right: 0;
        margin-top: -.5rem;
        visibility: hidden;
        opacity: 0;
        -webkit-transition: opacity .2s, visibility .2s;
        display: flex;
        align-items: center;
        transition: opacity .2s, visibility .2s

    }

    .editor__floating-menu.is-active {
        opacity: 1;
        visibility: visible
    }

    .editor p.is-empty:first-child::before {
        content: attr(data-empty-text);
        float: left;
        color: #aaa;
        pointer-events: none;
        height: 0;

    }

    .editor-icon {
        position: relative;
        font-size: 24px;
        height: 30px;
        overflow: hidden;
        padding-top: 2px;
        color: #999999;
    }

    .menububble__button .editor-icon {
        position: relative;
        font-size: 20px;
        height: 24px;
        overflow: hidden;
        padding-top: 0px;
        color: #999999;
    }

    .editor-icon-text {
        font-size: 16px;
        font-weight: 700;
        height: 30px;
        text-align: center;
        padding-top: 4px;
        color: #999999;
    }

    .menububble__button .editor-icon-text {
        font-size: 16px;
        font-weight: 700;
        height: 24px;
        text-align: center;
        padding-top: 0px;
        color: #999999;
        width: 100%;
        font-size: "PT Sans";
    }

    img.ProseMirror-selectednode {
        box-shadow: 0 0 0 2px #ff8d00;
    }

</style>