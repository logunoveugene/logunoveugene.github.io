<template>
    <div class="">
        <div class="container">
            <div class="row">

                <div class="col-12 col-md-12 col-lg-8">


                    <editor :extensions="extensions">
                        <div class="editor__floating-menu" slot="floatingMenu" slot-scope="{ nodes }">
                            <template v-if="nodes">
                                <button class="menubar__button"
                                        :class="{ 'is-active': nodes.heading.active({ level: 1 }) }"
                                        @click="nodes.heading.command({ level: 1 })"
                                >
                                    H1
                                </button>

                                <button
                                        class="menubar__button"
                                        :class="{ 'is-active': nodes.heading.active({ level: 2 }) }"
                                        @click="nodes.heading.command({ level: 2 })"
                                >
                                    H2
                                </button>

                                <button
                                        class="menubar__button"
                                        :class="{ 'is-active': nodes.heading.active({ level: 3 }) }"
                                        @click="nodes.heading.command({ level: 3 })"
                                >
                                    H3
                                </button>

                                <button
                                        class="menubar__button"
                                        :class="{ 'is-active': nodes.bullet_list.active() }"
                                        @click="nodes.bullet_list.command"
                                >
                                    ul
                                </button>

                                <button
                                        class="menubar__button"
                                        :class="{ 'is-active': nodes.ordered_list.active() }"
                                        @click="nodes.ordered_list.command"
                                >
                                    ol
                                </button>

                                <button
                                        class="menubar__button"
                                        :class="{ 'is-active': nodes.blockquote.active() }"
                                        @click="nodes.blockquote.command"
                                >
                                    quet
                                </button>


                                <button
                                        class="menubar__button"
                                        @click="showImagePrompt(nodes.image.command)"
                                >
                                    img
                                </button>


                            </template>
                        </div>


                        <div class="menububble" slot="menububble" slot-scope="{ marks, focus }">


                            <template v-if="marks">

                                <form class="menububble__form" v-if="linkMenuIsActive"
                                      @submit.prevent="setLinkUrl(linkUrl, marks.link, focus)">
                                    <input class="menububble__input" type="text" v-model="linkUrl"
                                           placeholder="https://" ref="linkInput" @keydown.esc="hideLinkMenu"/>
                                    <button class="menububble__button" @click="setLinkUrl(null, marks.link, focus)"
                                            type="button">
                                        <icon name="remove"/>
                                    </button>
                                </form>


                                <template v-else>


                                    <button
                                            class="menububble__button"
                                            :class="{ 'is-active': marks.bold.active() }"
                                            @click="marks.bold.command"
                                    >
                                        B
                                    </button>

                                    <button
                                            class="menububble__button"
                                            :class="{ 'is-active': marks.italic.active() }"
                                            @click="marks.italic.command"
                                    >
                                        I
                                    </button>
                                    <button
                                            class="menububble__button"
                                            @click="showLinkMenu(marks.link)"
                                            :class="{ 'is-active': marks.link.active() }"
                                    >
                                        <span>Add Link</span>

                                    </button>



                                </template>
                            </template>
                        </div>


                        <div slot="content" slot-scope="props">
                            <h1>Yay Headlines!</h1>
                            <p>All these <strong>cool tags</strong> are working now.</p>
                        </div>
                    </editor>

                </div>


            </div>
        </div>

    </div>
</template>

<script>
    import {Editor} from 'tiptap'
    import {
        // Nodes
        BlockquoteNode,
        BulletListNode,
        CodeBlockNode,
        CodeBlockHighlightNode,
        HardBreakNode,
        HeadingNode,
        ImageNode,
        ListItemNode,
        OrderedListNode,
        TodoItemNode,
        TodoListNode,

        // Marks
        BoldMark,
        CodeMark,
        ItalicMark,
        LinkMark,
        StrikeMark,
        UnderlineMark,

        // General Extensions
        HistoryExtension,
        PlaceholderExtension,
    } from 'tiptap-extensions'


    export default {
        components: {
            Editor,
        },
        data() {
            return {
                extensions: [
                    new BlockquoteNode(),
                    new BulletListNode(),
                    new CodeBlockNode(),
                    new HardBreakNode(),
                    new HeadingNode({maxLevel: 3}),
                    new ImageNode(),
                    new ListItemNode(),
                    new OrderedListNode(),
                    new TodoItemNode(),
                    new TodoListNode(),
                    new BoldMark(),
                    new ItalicMark(),
                    new LinkMark(),
                    new StrikeMark(),
                    new UnderlineMark(),
                    new HistoryExtension(),
                    new PlaceholderExtension(),
                ],
                readyToPublic: false,
                selected: [],
                selectedRub: [],

                linkUrl: null,
                linkMenuIsActive: false,

                model: ''
            }
        },

        methods: {

            showImagePrompt(command) {
                const src = prompt('Enter the url of your image here')
                if (src !== null) {
                    command({src})
                }
            },
            showLinkMenu(type) {
                this.linkUrl = type.attrs.href
                this.linkMenuIsActive = true
                this.$nextTick(() => {
                    this.$refs.linkInput.focus()
                })
            },
            hideLinkMenu() {
                this.linkUrl = null
                this.linkMenuIsActive = false
            },
            setLinkUrl(url, type, focus) {
                type.command({href: url})
                this.hideLinkMenu()
                focus()
            },
            showAddProoduct() {
                this.$modal.show('addProduct');
            },
            hideAddProoduct() {
                this.$modal.hide('addProduct');
            },
            showPublishModal() {
                this.$modal.show('publish');
                this.readyToPublic = true

            },
            hidePublishModal() {
                this.$modal.hide('publish');
                this.readyToPublic = false
            },


        }
    }
</script>
<style lang="scss">

    .ProseMirror {
        outline: none;
    }
    .editor {
        position: relative;
        &__floating-menu {
            position: absolute;
            margin-top: -0.25rem;
            visibility: hidden;
            opacity: 0;
            transition: opacity 0.2s, visibility 0.2s;
        }
    }

    .menubar__button {
        background: rgba(0, 0, 0, 0);
        border: 0;
        border-radius: 3px;
        color: #000;
        cursor: pointer;
        display: -webkit-inline-box;
        display: -ms-inline-flexbox;
        display: inline-flex;
        font-weight: 700;
        margin-right: .2rem;
        padding: .2rem .5rem;
    }

    .menububble {

        background: #000;
        border-radius: 5px;
        display: flex;
        margin-bottom: .5rem;
        opacity: 0;
        padding: .3rem;
        position: absolute;
        transform: translateX(-50%);
        transition: opacity .2s,visibility .2s;
        visibility: hidden;
        z-index: 20;
    }

    .menububble__button {
        background: rgba(0,0,0,0);
        border: 0;
        border-radius: 3px;
        color: #fff;
        cursor: pointer;
        display: -webkit-inline-box;
        display: -ms-inline-flexbox;
        display: inline-flex;
        margin-right: .2rem;
        padding: .2rem .5rem;
    }
    blockquote:last-child, h1:last-child, h2:last-child, h3:last-child, ol:last-child, p:last-child, pre:last-child, ul:last-child {
        margin-bottom: 0;
    }

    blockquote:first-child, h1:first-child, h2:first-child, h3:first-child, ol:first-child, p:first-child, pre:first-child, ul:first-child {
        margin-top: 0;
    }
</style>

