<template>
    <div class="editor">


        <editor-menu-bar :editor="editor">
            <div class="menubar" slot-scope="{ commands, isActive }">
                <div class="toolbar">
                    <!--<button-->
                            <!--class="menubar__button"-->
                            <!--@click="commands.undo"-->
                    <!--&gt;-->
                        <!--←-->
                    <!--</button>-->

                    <!--<button-->
                            <!--class="menubar__button"-->
                            <!--@click="commands.redo"-->
                    <!--&gt;-->
                        <!--→-->
                    <!--</button>-->


                    <span v-if="isActive.table()">
						<button
                                class="menubar__button"
                                @click="commands.deleteTable"
                        >
							удалить таблицу
						</button>
						<button
                                class="menubar__button"
                                @click="commands.addColumnBefore"
                        >
							кол слева
						</button>
						<button
                                class="menubar__button"
                                @click="commands.addColumnAfter"
                        >
							кол справа
						</button>
						<button
                                class="menubar__button"
                                @click="commands.deleteColumn"
                        >
							удал кол
						</button>
						<button
                                class="menubar__button"
                                @click="commands.addRowBefore"
                        >
						строка свкерху
						</button>
						<button
                                class="menubar__button"
                                @click="commands.addRowAfter"
                        >
						строка стнизу
						</button>
						<button
                                class="menubar__button"
                                @click="commands.deleteRow"
                        >
						удалить строку
						</button>
						<button
                                class="menubar__button"
                                @click="commands.toggleCellMerge"
                        >
							объединение яч
						</button>
					</span>
                </div>
            </div>
        </editor-menu-bar>
        <editor-floating-menu :editor="editor">
            <div
                    slot-scope="{ commands, isActive, menu }"
                    class="editor__floating-menu"
                    :class="{ 'is-active': menu.isActive }"
                    :style="`top: ${menu.top}px`"
            >

                <button
                        class="menubar__button"
                        :class="{ 'is-active': isActive.heading({ level: 1 }) }"
                        @click="commands.heading({ level: 1 })"
                >
                    H1
                </button>

                <button
                        class="menubar__button"
                        :class="{ 'is-active': isActive.heading({ level: 2 }) }"
                        @click="commands.heading({ level: 2 })"
                >
                    H2
                </button>

                <button
                        class="menubar__button"
                        :class="{ 'is-active': isActive.heading({ level: 3 }) }"
                        @click="commands.heading({ level: 3 })"
                >
                    H3
                </button>

                <button
                        class="menubar__button"
                        :class="{ 'is-active': isActive.bullet_list() }"
                        @click="commands.bullet_list"
                >
                    ul
                </button>

                <button
                        class="menubar__button"
                        :class="{ 'is-active': isActive.ordered_list() }"
                        @click="commands.ordered_list"
                >
                    ol
                </button>

                <button
                        class="menubar__button"
                        :class="{ 'is-active': isActive.blockquote() }"
                        @click="commands.blockquote"
                >
                    quote
                </button>
                <button
                        class="menubar__button"
                        @click="showImagePrompt(commands.image)"
                >
                    image
                </button>


                <button
                        class="menubar__button"
                        @click="commands.createTable({rowsCount: 3, colsCount: 3, withHeaderRow: false })"
                >
                    table
                </button>

            </div>
        </editor-floating-menu>
        <editor-menu-bubble :editor="editor">
            <div
                    slot-scope="{ commands, isActive, menu }"
                    class="menububble"
                    :class="{ 'is-active': menu.isActive }"
                    :style="`left: ${menu.left}px; bottom: ${menu.bottom}px;`"
            >

                <button
                        class="menububble__button"
                        :class="{ 'is-active': isActive.bold() }"
                        @click="commands.bold"
                >
                    bold
                </button>

                <button
                        class="menububble__button"
                        :class="{ 'is-active': isActive.italic() }"
                        @click="commands.italic"
                >
                    italic
                </button>


                <!--<form class="menububble__form" v-if="linkMenuIsActive"-->
                <!--@submit.prevent="setLinkUrl(commands.link, linkUrl)">-->
                <!--<input class="menububble__input" type="text" v-model="linkUrl" placeholder="https://"-->
                <!--ref="linkInput" @keydown.esc="hideLinkMenu"/>-->
                <!--<button class="menububble__button" @click="setLinkUrl(commands.link, null)" type="button">-->
                <!--удалить-->
                <!--</button>-->
                <!--</form>-->

                <!--<template v-else>-->
                <!--<button-->
                <!--class="menububble__button"-->
                <!--@click="showLinkMenu(getMarkAttrs('link'))"-->
                <!--:class="{ 'is-active': isActive.link() }"-->
                <!--&gt;-->
                <!--<span>Ссылка</span>-->

                <!--</button>-->
                <!--</template>-->


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
        CodeBlock,
        HardBreak,
        Heading,
        ListItem,
        OrderedList,
        TodoItem,
        TodoList,
        Bold,
        Code,
        Italic,
        Link,
        History,
        Placeholder,


        Image,

        Table,
        TableHeader,
        TableCell,
        TableRow,


    } from 'tiptap-extensions'

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
                        new CodeBlock(),
                        new HardBreak(),
                        new Heading({levels: [1, 2, 3]}),
                        new ListItem(),
                        new OrderedList(),
                        new TodoItem(),
                        new TodoList(),
                        new Bold(),
                        new Code(),
                        new Italic(),
                        new Link(),
                        new History(),
                        new Placeholder({
                            emptyClass: 'is-empty',
                            emptyNodeText: 'Есть что спросить или обсудить? Просто начни писать...',
                        }),

                        new Image(),

                        new Table(),
                        new TableHeader(),
                        new TableCell(),
                        new TableRow(),
                    ],
                    content: '',
                }),
            }
        },

        methods: {
            // showLinkMenu(attrs) {
            //     this.linkUrl = attrs.href
            //     this.linkMenuIsActive = true
            //     this.$nextTick(() => {
            //         this.$refs.linkInput.focus()
            //     })
            // },
            // hideLinkMenu() {
            //     this.linkUrl = null
            //     this.linkMenuIsActive = false
            // },
            // setLinkUrl(command, url) {
            //     command({href: url})
            //     this.hideLinkMenu()
            //     this.editor.focus()
            // },

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

    .editor__content pre {
        padding: .7rem 1rem;
        border-radius: 5px;
        background: #000;
        color: #fff;
        font-size: .8rem;
        overflow-x: auto
    }

    .editor__content pre code {
        display: block
    }

    .editor__content p code {
        display: inline-block;
        padding: 0 .4rem;
        border-radius: 5px;
        font-size: .8rem;
        font-weight: 700;
        background: rgba(0, 0, 0, .1);
        color: rgba(0, 0, 0, .8)
    }

    .editor__content ol, .editor__content ul {
        padding-left: 1rem
    }

    .editor__content li > ol, .editor__content li > p, .editor__content li > ul {
        margin: 0
    }

    .editor__content a {
        color: inherit
    }

    .editor__content blockquote {
        border-left: 3px solid rgba(0, 0, 0, .1);
        color: rgba(0, 0, 0, .8);
        padding-left: .8rem;
        font-style: italic
    }

    .editor__content blockquote p {
        margin: 0
    }

    .editor__content img {
        max-width: 100%;
        border-radius: 3px
    }

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
        margin: 1em 0;
        overflow-x: auto
    }

    .editor__content .resize-cursor {
        cursor: ew-resize;
        cursor: col-resize
    }

    .menubar {
        margin-bottom: 1rem;
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
        background-color: rgba(0, 0, 0, .05)
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
        transition: opacity .2s, visibility .2s
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
        cursor: pointer
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
        color: #fff
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
        margin-top: -.25rem;
        visibility: hidden;
        opacity: 0;
        -webkit-transition: opacity .2s, visibility .2s;
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

</style>