<template>
  <div id="app">
    <div class="row">
      <iframe src="https://club-route.firebaseapp.com/#/" style="overflow:hidden;height:100vh;width:85vw" width="1400" height="100%" >
        Ваш браузер не поддерживает плавающие фреймы!
      </iframe>
      <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>


  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss">
  *{
    margin: 0;
    padding: 0;
  }
#app {

}

  .row{
    display: flex;
  }
</style>
