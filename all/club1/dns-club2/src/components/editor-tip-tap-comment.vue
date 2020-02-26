<template>
    <div class="editor">



        <editor-floating-menu :editor="editor">
            <div
                    slot-scope="{ commands, isActive, menu }"
                    class="editor__floating-menu-comment"
                    :class="{ 'is-active': menu.isActive }"
                    :style="`top: ${menu.top}px`"
            >



                <div
                        class="menubar__button"
                        :class="{ 'is-active': isActive.heading({ level: 2 }) }"
                        @click="commands.heading({ level: 2 })"
                >
                    <span class="editor-icon-text">H</span>
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




            </div>
        </editor-floating-menu>
        <editor-menu-bubble :editor="editor">

            <div
                    slot-scope="{ commands, isActive, menu }"
                    class="menububble"
                    :class="{ 'is-active': menu.isActive  }"
                    :style="`left: ${menu.left}px; bottom: ${menu.bottom}px;`"
            >

                <div
                        class="menububble__button"
                        :class="{ 'is-active': isActive.bold() }"
                        @click="commands.bold"
                >
                    <i class="editor-icon icon-bold"></i>
                </div>
                <div 
                        class="menububble__button"
                        :class="{ 'is-active': isActive.italic() }"
                        @click="commands.italic"
                >
                    <i class="editor-icon icon-italic"></i>

                </div>

                <div 
                        class="menububble__button"
                        :class="{ 'is-active': isActive.heading({ level: 2 }) }"
                        @click="commands.heading({ level: 2 })"
                >
                    <span class="editor-icon-text">H</span>
                </div>

                <div 
                        class="menububble__button"
                        :class="{ 'is-active': isActive.bullet_list() }"
                        @click="commands.bullet_list"
                >
                    <i class="editor-icon icon-ul"></i>
                </div>
                <div 
                        class="menububble__button"
                        :class="{ 'is-active': isActive.ordered_list() }"
                        @click="commands.ordered_list"
                >
                    <i class="editor-icon icon-ol"></i>
                </div>





            </div>


        </editor-menu-bubble>







        <editor-content class="editor__content--comment" :editor="editor"/>
    </div>
</template>

<script>

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

                        new HardBreak(),
                        new Heading({levels: [1, 2, 3]}),
                        new ListItem(),
                        new OrderedList(),

                        new Bold(),

                        new Italic(),

                        new History(),
                        new Placeholder({
                            emptyClass: 'is-empty',
                            emptyNodeText: 'Вам слово...',
                        }),

                        new Image(),



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

    .editor__content--comment {
        word-wrap: break-word
    }

    .editor__content--comment * {
        caret-color: currentColor
    }

    .editor__content--comment blockquote p {
        padding-left: 20px;
        border-left: 3px solid #ff8700;
        padding-bottom: 0;
        margin-top: 2rem;
        margin-bottom: 2rem;
        font-style: italic;
        font-size: 16px;
    }

    @media (min-width: 768px) {
        .editor__content--comment p, .editor__content--comment h1, .editor__content--comment h2, .editor__content--comment ul, .editor__content--comment ol, .editor__content--comment .table__wrap {
            margin-left: 0px;
            margin-right: 80px;

        }

        .editor__content--comment p {

            font-size: 16px;
        }

        .editor__content--comment blockquote p {
            padding-left: 40px;
            border-left: 3px solid #ff8700;
            padding-bottom: 0;
            margin-top: 2rem;
            margin-bottom: 2rem;
            font-style: italic;
            font-size: 16px;
        }

        .editor__content--comment p img {
            width: 100%;
        }

    }

    .editor__content--comment p img {
        width: calc(100% + 80px);
        height: auto;
        border-radius: 8px;
        overflow: hidden;

    }

    .editor__content--comment ul {
        padding-left: 20px;
        margin-bottom: 2rem;

    }

    .editor__content--comment ol {
        padding-left: 20px;
        margin-bottom: .5rem;

    }

    .editor__content--comment li {
        margin-bottom: .25rem;

    }

    .editor__content--comment li p {
        margin-bottom: 0rem;

    }

    .editor__content--comment p {
        margin-bottom: .5rem;

    }


    .editor__content--comment .resize-cursor {
        cursor: ew-resize;
        cursor: col-resize
    }

    .menubar {
        margin-bottom: 1rem;
        height: 0px;
        top:10px;
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

    .editor__floating-menu-comment {
        position: absolute;
        right: 0;
        margin-top: -.6rem;
        visibility: hidden;
        opacity: 0;
        -webkit-transition: opacity .2s, visibility .2s;
        display: flex;
        align-items: center;
        transition: opacity .2s, visibility .2s

    }

    .editor__floating-menu-comment.is-active {
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

</style>