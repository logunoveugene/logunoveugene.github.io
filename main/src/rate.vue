<template>
	<Rate :length="5" :value="2" ></Rate>
</template>
<script>
import Rate from 'vue-rate';

export default {
    name: 'rate',
    components: {
    Rate
  }
  }
</script>

<style scoped lang="scss">
.icon {
  display: inline-block;
  width: 1em;
  height: 1em;
  stroke-width: 0;
  stroke: currentColor;
  fill: currentColor;
  vertical-align: middle;
  top: -2px;
  position: relative;
  margin: 0 5px;
}
.Rate{
  cursor: default;
  &__star{
    color: #b5b5b5;
    display: inline-block;
    padding: 0px;
    text-decoration: none;
    cursor: pointer;
    .icon{
      top: 0;
      vertical-align: middle;
    }
    
    &.hover{color: #efc20f;}
    &.filled{color: #efc20f;}
    &:hover, &:focus{
      text-decoration: none;
    }
  }
  &__view{
    &__count, &__desc{
      display: inline-block;
      vertical-align: middle;
      padding: 0px
    }
  }
  &.has-error &{
    &__star{
      color: #f37a77;
      &.hover{color: #efc20f;}
      &.filled{color: #efc20f;}
    }
  }
}
</style>


