<template>
    <div class="">
        <div class="editor">


            <editor-floating-menu :editor="editor">
                <div
                        slot-scope="{ commands, isActive, menu }"
                        class="editor__floating-menu"
                        :class="{ 'is-active': menu.isActive }"
                        :style="`top: ${menu.top}px`"
                >

                    <div
                            class="menubar__button"
                            :class="{ 'is-active': isActive.heading({ level: 1 }) }"
                            @click="commands.heading({ level: 1 })"
                    >
                        <span class="editor-icon-text">H1</span>
                    </div>

                    <div
                            class="menubar__button"
                            :class="{ 'is-active': isActive.heading({ level: 2 }) }"
                            @click="commands.heading({ level: 2 })"
                    >
                        <span class="editor-icon-text">H2</span>
                    </div>

                    <div
                            class="menubar__button"
                            :class="{ 'is-active': isActive.heading({ level: 3 }) }"
                            @click="commands.heading({ level: 3 })"
                    >
                        <span class="editor-icon-text">H3</span>
                    </div>

                    <div
                            class="menubar__button"
                            :class="{ 'is-active': isActive.bullet_list() }"
                            @click="commands.bullet_list"
                    >
                        <i class="editor-icon icon-ul"></i>
                    </div>

                    <div
                            class="menubar__button"
                            :class="{ 'is-active': isActive.ordered_list() }"
                            @click="commands.ordered_list"
                    >
                        <i class="editor-icon icon-ol"></i>
                    </div>

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
                            <i v-if="isActive.paragraph({ textAlign: 'center' })"
                               class="editor-icon icon-center-align"></i>
                            <i v-if="isActive.paragraph({ textAlign: 'right' })"
                               class="editor-icon icon-right-align"></i>
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
        <div class="suggestion-list" v-show="showSuggestions" ref="suggestions">
            <template v-if="hasResults">
                <div
                        v-for="(user, index) in filteredUsers"
                        :key="user.id"
                        class="suggestion-list__item"
                        :class="{ 'is-selected': navigatedUserIndex === index }"
                        @click="selectUser(user)"
                >
                    {{ user.name }}
                </div>
            </template>
            <div v-else class="suggestion-list__item is-empty">
               Товар не найден, попробуйте по артиклу.
            </div>
        </div>
    </div>
</template>

<script>


    import Fuse from 'fuse.js'
    import tippy from 'tippy.js'


    import {Editor, EditorContent, EditorMenuBar, EditorFloatingMenu, EditorMenuBubble} from 'tiptap'
    import {
        Blockquote,
        BulletList,
        HardBreak,
        Heading,
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

        Mention

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
                query: null,
                suggestionRange: null,
                filteredUsers: [],
                navigatedUserIndex: 0,
                insertMention: () => {
                },
                editor: new Editor({
                    extensions: [
                        new Blockquote(),
                        new BulletList(),

                        new HardBreak(),
                        new Heading({levels: [1, 2, 3]}),
                        new ListItem(),
                        new OrderedList(),

                        new Bold(),

                        new Italic(),


                        new Strike(),
                        new Underline(),

                        new History(),
                        new Placeholder({
                            emptyClass: 'is-empty',
                            emptyNodeText: 'Вам слово...',
                        }),

                        new Image(),

                        new Table(),
                        new TableHeader(),
                        new TableCell(),
                        new TableRow(),


                        new Mention({
                            // a list of all suggested items
                            items: () => [
                                {id: 1, name: 'Термопот DEXP THP-5900 черный'},
                                {id: 2, name: 'Термопаста arctic cooling mx-4'},
                                {id: 3, name: 'Телескоп Celestron PowerSeeker 127 EQ'},
                                {id: 4, name: 'Телевизор QLED Haier LE65X7000U серый'},
                            ],
                            // is called when a suggestion starts
                            onEnter: ({
                                          items, query, range, command, virtualNode,
                                      }) => {
                                this.query = query
                                this.filteredUsers = items
                                this.suggestionRange = range
                                this.renderPopup(virtualNode)
                                // we save the command for inserting a selected mention
                                // this allows us to call it inside of our custom popup
                                // via keyboard navigation and on click
                                this.insertMention = command
                            },
                            // is called when a suggestion has changed
                            onChange: ({
                                           items, query, range, virtualNode,
                                       }) => {
                                this.query = query
                                this.filteredUsers = items
                                this.suggestionRange = range
                                this.navigatedUserIndex = 0
                                this.renderPopup(virtualNode)
                            },
                            // is called when a suggestion is cancelled
                            onExit: () => {
                                // reset all saved values
                                this.query = null
                                this.filteredUsers = []
                                this.suggestionRange = null
                                this.navigatedUserIndex = 0
                                this.destroyPopup()
                            },
                            // is called on every keyDown event while a suggestion is active
                            onKeyDown: ({event}) => {
                                // pressing up arrow
                                if (event.keyCode === 38) {
                                    this.upHandler()
                                    return true
                                }
                                // pressing down arrow
                                if (event.keyCode === 40) {
                                    this.downHandler()
                                    return true
                                }
                                // pressing enter
                                if (event.keyCode === 13) {
                                    this.enterHandler()
                                    return true
                                }

                                return false
                            },
                            // is called when a suggestion has changed
                            // this function is optional because there is basic filtering built-in
                            // you can overwrite it if you prefer your own filtering
                            // in this example we use fuse.js with support for fuzzy search
                            onFilter: (items, query) => {
                                if (!query) {
                                    return items
                                }

                                const fuse = new Fuse(items, {
                                    threshold: 0.2,
                                    keys: ['name'],
                                })

                                return fuse.search(query)
                            },
                        }),


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


            // navigate to the previous item
            // if it's the first item, navigate to the last one
            upHandler() {
                this.navigatedUserIndex = ((this.navigatedUserIndex + this.filteredUsers.length) - 1) % this.filteredUsers.length
            },

            // navigate to the next item
            // if it's the last item, navigate to the first one
            downHandler() {
                this.navigatedUserIndex = (this.navigatedUserIndex + 1) % this.filteredUsers.length
            },

            enterHandler() {
                const user = this.filteredUsers[this.navigatedUserIndex]

                if (user) {
                    this.selectUser(user)
                }
            },

            // we have to replace our suggestion text with a mention
            // so it's important to pass also the position of your suggestion text
            selectUser(user) {
                this.insertMention({
                    range: this.suggestionRange,
                    attrs: {
                        id: user.id,
                        label: user.name,
                    },
                })
                this.editor.focus()
            },

            // renders a popup with suggestions
            // tiptap provides a virtualNode object for using popper.js (or tippy.js) for popups
            renderPopup(node) {
                if (this.popup) {
                    return
                }

                this.popup = tippy(node, {
                    content: this.$refs.suggestions,
                    trigger: 'mouseenter',
                    interactive: true,
                    theme: 'dark',
                    placement: 'top-start',
                    performance: true,
                    inertia: true,
                    duration: [400, 200],
                    showOnInit: true,
                    arrow: true,
                    arrowType: 'round',
                })
            },

            destroyPopup() {
                if (this.popup) {
                    this.popup.destroyAll()
                    this.popup = null
                }
            },


        },
        computed: {

            hasResults() {
                return this.filteredUsers.length
            },

            showSuggestions() {
                return this.query || this.hasResults
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

    .editor-icon-text {
        font-size: 16px;
        font-weight: 700;
        height: 30px;
        text-align: center;
        padding-top: 4px;
        color: #999999;
    }

    img.ProseMirror-selectednode {
        box-shadow: 0 0 0 2px #ff8d00;
    }

    .mention {
        background: rgba(0, 0, 0, 0.1);
        color: rgba(0, 0, 0, 0.6);
        font-size: 0.8rem;
        font-weight: bold;
        border-radius: 5px;
        padding: 0.2rem 0.5rem;
        white-space: nowrap;
    }

    .mention-suggestion {
        color: rgba(0, 0, 0, 0.6);
    }

    .suggestion-list {
        padding: 0.2rem;
        border: 2px solid rgba(0, 0, 0, 0.1);
        font-size: 0.8rem;
        font-weight: bold;

        &__no-results {
            padding: 0.2rem 0.5rem;
        }

        &__item {
            border-radius: 5px;
            padding: 0.2rem 0.5rem;
            margin-bottom: 0.2rem;
            cursor: pointer;

            &:last-child {
                margin-bottom: 0;
            }

            &.is-selected,
            &:hover {
                background-color: rgba(256, 256, 256, 0.2);
            }

            &.is-empty {
                opacity: 0.5;
            }
        }
    }

    .tippy-tooltip.dark-theme {
        background-color: #000000;
        padding: 0;
        font-size: 1rem;
        text-align: inherit;
        color: #ffffff;
        border-radius: 5px;

        .tippy-backdrop {
            display: none;
        }

        .tippy-roundarrow {
            fill: #000000;
        }

        .tippy-popper[x-placement^=top] & .tippy-arrow {
            border-top-color: #000000;
        }

        .tippy-popper[x-placement^=bottom] & .tippy-arrow {
            border-bottom-color: #000000;
        }

        .tippy-popper[x-placement^=left] & .tippy-arrow {
            border-left-color: #000000;
        }

        .tippy-popper[x-placement^=right] & .tippy-arrow {
            border-right-color: #000000;
        }
    }

    .tippy-iOS {
        cursor: pointer !important
    }

    .tippy-notransition {
        transition: none !important
    }

    .tippy-popper {
        -webkit-perspective: 700px;
        perspective: 700px;
        z-index: 9999;
        outline: 0;
        transition-timing-function: cubic-bezier(.165, .84, .44, 1);
        pointer-events: none;
        line-height: 1.4;
        max-width: calc(100% - 10px)
    }

    .tippy-popper[x-placement^=top] .tippy-backdrop {
        border-radius: 40% 40% 0 0
    }

    .tippy-popper[x-placement^=top] .tippy-roundarrow {
        bottom: -8px;
        -webkit-transform-origin: 50% 0;
        transform-origin: 50% 0
    }

    .tippy-popper[x-placement^=top] .tippy-roundarrow svg {
        position: absolute;
        left: 0;
        -webkit-transform: rotate(180deg);
        transform: rotate(180deg)
    }

    .tippy-popper[x-placement^=top] .tippy-arrow {
        border-top: 8px solid #333;
        border-right: 8px solid transparent;
        border-left: 8px solid transparent;
        bottom: -7px;
        margin: 0 6px;
        -webkit-transform-origin: 50% 0;
        transform-origin: 50% 0
    }

    .tippy-popper[x-placement^=top] .tippy-backdrop {
        -webkit-transform-origin: 0 25%;
        transform-origin: 0 25%
    }

    .tippy-popper[x-placement^=top] .tippy-backdrop[data-state=visible] {
        -webkit-transform: scale(1) translate(-50%, -55%);
        transform: scale(1) translate(-50%, -55%)
    }

    .tippy-popper[x-placement^=top] .tippy-backdrop[data-state=hidden] {
        -webkit-transform: scale(.2) translate(-50%, -45%);
        transform: scale(.2) translate(-50%, -45%);
        opacity: 0
    }

    .tippy-popper[x-placement^=top] [data-animation=shift-toward][data-state=visible] {
        -webkit-transform: translateY(-10px);
        transform: translateY(-10px)
    }

    .tippy-popper[x-placement^=top] [data-animation=shift-toward][data-state=hidden] {
        opacity: 0;
        -webkit-transform: translateY(-20px);
        transform: translateY(-20px)
    }

    .tippy-popper[x-placement^=top] [data-animation=perspective] {
        -webkit-transform-origin: bottom;
        transform-origin: bottom
    }

    .tippy-popper[x-placement^=top] [data-animation=perspective][data-state=visible] {
        -webkit-transform: translateY(-10px) rotateX(0);
        transform: translateY(-10px) rotateX(0)
    }

    .tippy-popper[x-placement^=top] [data-animation=perspective][data-state=hidden] {
        opacity: 0;
        -webkit-transform: translateY(0) rotateX(60deg);
        transform: translateY(0) rotateX(60deg)
    }

    .tippy-popper[x-placement^=top] [data-animation=fade][data-state=visible] {
        -webkit-transform: translateY(-10px);
        transform: translateY(-10px)
    }

    .tippy-popper[x-placement^=top] [data-animation=fade][data-state=hidden] {
        opacity: 0;
        -webkit-transform: translateY(-10px);
        transform: translateY(-10px)
    }

    .tippy-popper[x-placement^=top] [data-animation=shift-away][data-state=visible] {
        -webkit-transform: translateY(-10px);
        transform: translateY(-10px)
    }

    .tippy-popper[x-placement^=top] [data-animation=shift-away][data-state=hidden] {
        opacity: 0;
        -webkit-transform: translateY(0);
        transform: translateY(0)
    }

    .tippy-popper[x-placement^=top] [data-animation=scale][data-state=visible] {
        -webkit-transform: translateY(-10px) scale(1);
        transform: translateY(-10px) scale(1)
    }

    .tippy-popper[x-placement^=top] [data-animation=scale][data-state=hidden] {
        opacity: 0;
        -webkit-transform: translateY(0) scale(.5);
        transform: translateY(0) scale(.5)
    }

    .tippy-popper[x-placement^=bottom] .tippy-backdrop {
        border-radius: 0 0 30% 30%
    }

    .tippy-popper[x-placement^=bottom] .tippy-roundarrow {
        top: -8px;
        -webkit-transform-origin: 50% 100%;
        transform-origin: 50% 100%
    }

    .tippy-popper[x-placement^=bottom] .tippy-roundarrow svg {
        position: absolute;
        left: 0;
        -webkit-transform: rotate(0);
        transform: rotate(0)
    }

    .tippy-popper[x-placement^=bottom] .tippy-arrow {
        border-bottom: 8px solid #333;
        border-right: 8px solid transparent;
        border-left: 8px solid transparent;
        top: -7px;
        margin: 0 6px;
        -webkit-transform-origin: 50% 100%;
        transform-origin: 50% 100%
    }

    .tippy-popper[x-placement^=bottom] .tippy-backdrop {
        -webkit-transform-origin: 0 -50%;
        transform-origin: 0 -50%
    }

    .tippy-popper[x-placement^=bottom] .tippy-backdrop[data-state=visible] {
        -webkit-transform: scale(1) translate(-50%, -45%);
        transform: scale(1) translate(-50%, -45%)
    }

    .tippy-popper[x-placement^=bottom] .tippy-backdrop[data-state=hidden] {
        -webkit-transform: scale(.2) translate(-50%);
        transform: scale(.2) translate(-50%);
        opacity: 0
    }

    .tippy-popper[x-placement^=bottom] [data-animation=shift-toward][data-state=visible] {
        -webkit-transform: translateY(10px);
        transform: translateY(10px)
    }

    .tippy-popper[x-placement^=bottom] [data-animation=shift-toward][data-state=hidden] {
        opacity: 0;
        -webkit-transform: translateY(20px);
        transform: translateY(20px)
    }

    .tippy-popper[x-placement^=bottom] [data-animation=perspective] {
        -webkit-transform-origin: top;
        transform-origin: top
    }

    .tippy-popper[x-placement^=bottom] [data-animation=perspective][data-state=visible] {
        -webkit-transform: translateY(10px) rotateX(0);
        transform: translateY(10px) rotateX(0)
    }

    .tippy-popper[x-placement^=bottom] [data-animation=perspective][data-state=hidden] {
        opacity: 0;
        -webkit-transform: translateY(0) rotateX(-60deg);
        transform: translateY(0) rotateX(-60deg)
    }

    .tippy-popper[x-placement^=bottom] [data-animation=fade][data-state=visible] {
        -webkit-transform: translateY(10px);
        transform: translateY(10px)
    }

    .tippy-popper[x-placement^=bottom] [data-animation=fade][data-state=hidden] {
        opacity: 0;
        -webkit-transform: translateY(10px);
        transform: translateY(10px)
    }

    .tippy-popper[x-placement^=bottom] [data-animation=shift-away][data-state=visible] {
        -webkit-transform: translateY(10px);
        transform: translateY(10px)
    }

    .tippy-popper[x-placement^=bottom] [data-animation=shift-away][data-state=hidden] {
        opacity: 0;
        -webkit-transform: translateY(0);
        transform: translateY(0)
    }

    .tippy-popper[x-placement^=bottom] [data-animation=scale][data-state=visible] {
        -webkit-transform: translateY(10px) scale(1);
        transform: translateY(10px) scale(1)
    }

    .tippy-popper[x-placement^=bottom] [data-animation=scale][data-state=hidden] {
        opacity: 0;
        -webkit-transform: translateY(0) scale(.5);
        transform: translateY(0) scale(.5)
    }

    .tippy-popper[x-placement^=left] .tippy-backdrop {
        border-radius: 50% 0 0 50%
    }

    .tippy-popper[x-placement^=left] .tippy-roundarrow {
        right: -16px;
        -webkit-transform-origin: 33.33333333% 50%;
        transform-origin: 33.33333333% 50%
    }

    .tippy-popper[x-placement^=left] .tippy-roundarrow svg {
        position: absolute;
        left: 0;
        -webkit-transform: rotate(90deg);
        transform: rotate(90deg)
    }

    .tippy-popper[x-placement^=left] .tippy-arrow {
        border-left: 8px solid #333;
        border-top: 8px solid transparent;
        border-bottom: 8px solid transparent;
        right: -7px;
        margin: 3px 0;
        -webkit-transform-origin: 0 50%;
        transform-origin: 0 50%
    }

    .tippy-popper[x-placement^=left] .tippy-backdrop {
        -webkit-transform-origin: 50% 0;
        transform-origin: 50% 0
    }

    .tippy-popper[x-placement^=left] .tippy-backdrop[data-state=visible] {
        -webkit-transform: scale(1) translate(-50%, -50%);
        transform: scale(1) translate(-50%, -50%)
    }

    .tippy-popper[x-placement^=left] .tippy-backdrop[data-state=hidden] {
        -webkit-transform: scale(.2) translate(-75%, -50%);
        transform: scale(.2) translate(-75%, -50%);
        opacity: 0
    }

    .tippy-popper[x-placement^=left] [data-animation=shift-toward][data-state=visible] {
        -webkit-transform: translateX(-10px);
        transform: translateX(-10px)
    }

    .tippy-popper[x-placement^=left] [data-animation=shift-toward][data-state=hidden] {
        opacity: 0;
        -webkit-transform: translateX(-20px);
        transform: translateX(-20px)
    }

    .tippy-popper[x-placement^=left] [data-animation=perspective] {
        -webkit-transform-origin: right;
        transform-origin: right
    }

    .tippy-popper[x-placement^=left] [data-animation=perspective][data-state=visible] {
        -webkit-transform: translateX(-10px) rotateY(0);
        transform: translateX(-10px) rotateY(0)
    }

    .tippy-popper[x-placement^=left] [data-animation=perspective][data-state=hidden] {
        opacity: 0;
        -webkit-transform: translateX(0) rotateY(-60deg);
        transform: translateX(0) rotateY(-60deg)
    }

    .tippy-popper[x-placement^=left] [data-animation=fade][data-state=visible] {
        -webkit-transform: translateX(-10px);
        transform: translateX(-10px)
    }

    .tippy-popper[x-placement^=left] [data-animation=fade][data-state=hidden] {
        opacity: 0;
        -webkit-transform: translateX(-10px);
        transform: translateX(-10px)
    }

    .tippy-popper[x-placement^=left] [data-animation=shift-away][data-state=visible] {
        -webkit-transform: translateX(-10px);
        transform: translateX(-10px)
    }

    .tippy-popper[x-placement^=left] [data-animation=shift-away][data-state=hidden] {
        opacity: 0;
        -webkit-transform: translateX(0);
        transform: translateX(0)
    }

    .tippy-popper[x-placement^=left] [data-animation=scale][data-state=visible] {
        -webkit-transform: translateX(-10px) scale(1);
        transform: translateX(-10px) scale(1)
    }

    .tippy-popper[x-placement^=left] [data-animation=scale][data-state=hidden] {
        opacity: 0;
        -webkit-transform: translateX(0) scale(.5);
        transform: translateX(0) scale(.5)
    }

    .tippy-popper[x-placement^=right] .tippy-backdrop {
        border-radius: 0 50% 50% 0
    }

    .tippy-popper[x-placement^=right] .tippy-roundarrow {
        left: -16px;
        -webkit-transform-origin: 66.66666666% 50%;
        transform-origin: 66.66666666% 50%
    }

    .tippy-popper[x-placement^=right] .tippy-roundarrow svg {
        position: absolute;
        left: 0;
        -webkit-transform: rotate(-90deg);
        transform: rotate(-90deg)
    }

    .tippy-popper[x-placement^=right] .tippy-arrow {
        border-right: 8px solid #333;
        border-top: 8px solid transparent;
        border-bottom: 8px solid transparent;
        left: -7px;
        margin: 3px 0;
        -webkit-transform-origin: 100% 50%;
        transform-origin: 100% 50%
    }

    .tippy-popper[x-placement^=right] .tippy-backdrop {
        -webkit-transform-origin: -50% 0;
        transform-origin: -50% 0
    }

    .tippy-popper[x-placement^=right] .tippy-backdrop[data-state=visible] {
        -webkit-transform: scale(1) translate(-50%, -50%);
        transform: scale(1) translate(-50%, -50%)
    }

    .tippy-popper[x-placement^=right] .tippy-backdrop[data-state=hidden] {
        -webkit-transform: scale(.2) translate(-25%, -50%);
        transform: scale(.2) translate(-25%, -50%);
        opacity: 0
    }

    .tippy-popper[x-placement^=right] [data-animation=shift-toward][data-state=visible] {
        -webkit-transform: translateX(10px);
        transform: translateX(10px)
    }

    .tippy-popper[x-placement^=right] [data-animation=shift-toward][data-state=hidden] {
        opacity: 0;
        -webkit-transform: translateX(20px);
        transform: translateX(20px)
    }

    .tippy-popper[x-placement^=right] [data-animation=perspective] {
        -webkit-transform-origin: left;
        transform-origin: left
    }

    .tippy-popper[x-placement^=right] [data-animation=perspective][data-state=visible] {
        -webkit-transform: translateX(10px) rotateY(0);
        transform: translateX(10px) rotateY(0)
    }

    .tippy-popper[x-placement^=right] [data-animation=perspective][data-state=hidden] {
        opacity: 0;
        -webkit-transform: translateX(0) rotateY(60deg);
        transform: translateX(0) rotateY(60deg)
    }

    .tippy-popper[x-placement^=right] [data-animation=fade][data-state=visible] {
        -webkit-transform: translateX(10px);
        transform: translateX(10px)
    }

    .tippy-popper[x-placement^=right] [data-animation=fade][data-state=hidden] {
        opacity: 0;
        -webkit-transform: translateX(10px);
        transform: translateX(10px)
    }

    .tippy-popper[x-placement^=right] [data-animation=shift-away][data-state=visible] {
        -webkit-transform: translateX(10px);
        transform: translateX(10px)
    }

    .tippy-popper[x-placement^=right] [data-animation=shift-away][data-state=hidden] {
        opacity: 0;
        -webkit-transform: translateX(0);
        transform: translateX(0)
    }

    .tippy-popper[x-placement^=right] [data-animation=scale][data-state=visible] {
        -webkit-transform: translateX(10px) scale(1);
        transform: translateX(10px) scale(1)
    }

    .tippy-popper[x-placement^=right] [data-animation=scale][data-state=hidden] {
        opacity: 0;
        -webkit-transform: translateX(0) scale(.5);
        transform: translateX(0) scale(.5)
    }

    .tippy-tooltip {
        position: relative;
        color: #fff;
        border-radius: 4px;
        font-size: .9rem;
        padding: .3rem .6rem;
        max-width: 350px;
        text-align: center;
        will-change: transform;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: #333
    }

    .tippy-tooltip[data-size=small] {
        padding: .2rem .4rem;
        font-size: .75rem
    }

    .tippy-tooltip[data-size=large] {
        padding: .4rem .8rem;
        font-size: 1rem
    }

    .tippy-tooltip[data-animatefill] {
        overflow: hidden;
        background-color: transparent
    }

    .tippy-tooltip[data-interactive], .tippy-tooltip[data-interactive] path {
        pointer-events: auto
    }

    .tippy-tooltip[data-inertia][data-state=visible] {
        transition-timing-function: cubic-bezier(.54, 1.5, .38, 1.11)
    }

    .tippy-tooltip[data-inertia][data-state=hidden] {
        transition-timing-function: ease
    }

    .tippy-arrow, .tippy-roundarrow {
        position: absolute;
        width: 0;
        height: 0
    }

    .tippy-roundarrow {
        width: 24px;
        height: 8px;
        fill: #333;
        pointer-events: none
    }

    .tippy-backdrop {
        position: absolute;
        will-change: transform;
        background-color: #333;
        border-radius: 50%;
        width: calc(110% + 2rem);
        left: 50%;
        top: 50%;
        z-index: -1;
        transition: all cubic-bezier(.46, .1, .52, .98);
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden
    }

    .tippy-backdrop:after {
        content: "";
        float: left;
        padding-top: 100%
    }

    .tippy-backdrop + .tippy-content {
        transition-property: opacity;
        will-change: opacity
    }

    .tippy-backdrop + .tippy-content[data-state=visible] {
        opacity: 1
    }

    .tippy-backdrop + .tippy-content[data-state=hidden] {
        opacity: 0
    }
</style>