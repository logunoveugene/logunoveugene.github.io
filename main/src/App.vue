Vue.use(VueAwesomeSwiper);



<template>
<div id="app">

<div class="container">
  <div class="row">
    <div class="col-12 mt-4 mb-4">
      <nav class=" small pt-3">
        <a class="breadcrumb-item" href="#">Главная</a>
        <a class="breadcrumb-item" href="#">Телевизоры и видеотехника</a>
        <a class="breadcrumb-item" href="#">Телевизоры </a>
      </nav>
    </div>
  </div>
  <div class="row mb-4">
    <div class="col shrink">
      <h1 class="h3">Телевизор SAMSUNG UE19H4000AK </h1>
    </div>
    <div class="col d-flex flex-row-reverse align-items-center align-self-end pr-0  pt-2 pb-2">
      <div class="small text-muted">арт. 12004252</div>
    </div>
  </div>
  <div class="row">
    <div class="col-md-5 col-12">
<slider></slider>

    </div>
    <div class="col-md-7">
      <div class="row">
        <div class="col-6">154</div>
        <div class="col-6">599</div>
      </div>
    </div>
  </div>
</div>

</div>

</template>

<script>


import  slider from './slider.vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'




export default {
  name: 'app',
  components: {
    slider, VueAwesomeSwiper
  }
}
</script>

<style lang="scss">

</style>
