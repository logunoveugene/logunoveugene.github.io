<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="small mb-2">Клуб / Cоздание статьи</div>
                <div class="h1">  {{content.title}}                </div>

            </div>



        </div>
    </div>
</template>

<script>


    export default {
        data() {
            return {
                name: 'register-modules-example',
                content: {},
            }
        },
        created() {
            this.axios.get('https://club-route.firebaseio.com/digest.json?orderBy=%22id%22&equalTo=' + this.$route.params.id)
                .then(response => {
                    this.content = Object.values(response.data)[0]
                })
                .catch(e => {
                    this.error.push(e)
                })
        }
    }
</script>
