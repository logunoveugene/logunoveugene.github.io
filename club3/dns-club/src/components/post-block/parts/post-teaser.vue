<template>
<div
        v-bind:style="{ color: color }"
        class="post__teaser d-none d-md-inline-block">
  {{teaser}}
</div>

</template>

<script>
export default  {
    props: { 
        teaser: {
          type: null,
          default: ""
      },
        color:{
            type: null,
            default: ""
        }
  },
  data: function() {
    return {

    }
}
}
</script>

<style>
.post__teaser{
  font-size: .875rem;
  margin-bottom: 1rem;
}


</style>