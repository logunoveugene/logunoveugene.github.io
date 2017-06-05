<template lang="jade">
div.row
    div.col-12.p-0
        div.card.border-0.rounded-0.mb-2
            div.card-block
                div.row
                    div.col-9.d-flex.flex-row
                        a(href="index.html")
                            img(src="https://i.snag.gy/EGhwrf.jpg")
                        div.lh-1.d-flex.flex-column.pt-1.ml-4.hidden-sm-down
                            div 8 800 333 33 66
                            div.small.text-muted звонок бесплатный
                    div.col-3.d-flex.justify-content-end
                        div.align-self-center.pt-1.text-right.mr-2
                            img(src="https://i.snag.gy/RMJK8a.jpg")
                        span.pt-2.link Войти
                                    
</template>

<script>
    module.exports = {
        data: function() {
            return {
                greeting: 'Привет Webpack'
            }
        }
    }
</script>

<style lang="sass?indentedSyntax=true">
    h1
        display: block
        position: absolute
        width: 500px
        height: 100px
        top: 50%
        left: 50%
        margin: -50px 0 0 -250px
        font-size: 54px
        line-height: 64px
        font-family: 'Open Sans', sans-serif
        font-weight: 300
        color: #525255
        text-align: center
</style>