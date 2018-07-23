<template>
    <div class="post__tags">
            <div class="post__tag-item">
                <a href="#" class="link link--color-grey">{{source}}</a>
            </div>
            
            <div class="post__tag-item">
                <a href="#" class="link link--color-grey">{{tags}}</a>
            </div>
            <div class="post__tag-item">
                <a href="#" class="link link--color-grey">{{format}}</a>
            </div>
            
        </div>

</template>

<script>
export default  {
    props: { 
        source: {
          type: null,
          default: ""
      },
      format: {
          type: null,
          default: ""
      },
      tags: {
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
.post__tags{
    font-size: 11px;
    text-transform: uppercase; 
    display: flex;
    margin-bottom: 0.5rem;
    flex-wrap: wrap;

}

.post__tag-item{
    white-space: nowrap;
    margin-right: 1rem;
}


</style>