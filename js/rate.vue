<template>
  <div class="Rate" v-if="length > 0">
    <svg style="position: absolute; width: 0; height: 0;" width="0" height="0" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <symbol id="icon-star-empty" viewBox="0 0 32 32">
          <title>star-empty</title>
          <path d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798zM16 23.547l-6.983 3.671 1.334-7.776-5.65-5.507 7.808-1.134 3.492-7.075 3.492 7.075 7.807 1.134-5.65 5.507 1.334 7.776-6.983-3.671z"></path>
        </symbol>

        <symbol id="icon-star-full" viewBox="0 0 32 32">
          <title>star-full</title>
          <path d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z"></path>
        </symbol>
      </defs>
    </svg>
    <input type="hidden" :name="name" :value="rate" :required="required">
    <template v-for="n in length">
      <a href="javascript:;" :class="{'Rate__star': true, 'hover': n <= over, 'filled': n <= rate}" @mouseover="onOver(n)" @mouseout="onOut(n)" @click="setRate(n)" @keyup="onOver(n)"  @keyup.enter="setRate(n)">
        <svg class="icon" v-show="isFilled(n)">
          <use xlink:href="#icon-star-full"></use>
        </svg>
        <svg class="icon" v-show="isEmpty(n)">
          <use xlink:href="#icon-star-empty"></use>
        </svg>
      </a>
    </template>
    <div class="Rate__view">
      <span class="Rate__view__count" v-if="showcount">{{over}}</span>
      <span class="Rate__view__desc" v-if="ratedesc.length > 0">{{ratedesc[over - 1]}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'rate',
  props: {
    value: {type: Number},
    name: {type: String, default: 'rate'},
    length: {type: Number},
    showcount: {type: Boolean},
    required: {type: Boolean},
    ratedesc: { type: Array, default () { return [] } }
  },
  data () {
    return {
      over: 0,
      rate: 0
    }
  },
  methods: {
    onOver (index) { this.over = index },
    onOut () { this.over = this.rate },
    setRate (index) {
      this.$emit('beforeRate', this.rate)
      this.rate = index
      this.$emit('afterRate', this.rate)
    },
    isFilled (index) { return index <= this.over },
    isEmpty (index) {
      return index > this.over || !this.value && !this.over
    }
  },
  created () {
    if (this.value >= this.length) {
      this.value = this.length
    } else if (this.value < 0) {
      this.value = 0
    }
    this.rate = this.value
    this.over = this.value
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.icon {
  display: inline-block;
  width: .8em;
  height: .8em;
  stroke-width: 1;
  stroke: #bdbdbd;
  fill: #e5e5e5;
  vertical-align: middle;
  top: -3px;
  position: relative;
  margin: 0 2px;
}


.filled .icon {
    stroke: #ff5205;
  fill: #ff9c00;
}





</style>
