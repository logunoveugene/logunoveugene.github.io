<template>
  <div id="app">
    <div class="row">
      <iframe src="https://club-route.firebaseapp.com/#/" style="overflow:hidden;height:100vh;width:100vw; border:none" width="100%" height="100%" >
        Ваш браузер не поддерживает плавающие фреймы!
      </iframe>
      <div class="test-plate">
      <HelloWorld msg="Welcome to Your Vue.js App"/>
      </div>
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
  font-family: 'Helvetica Neue', Arial, sans-serif;
}

  .row{
    display: flex;
  }
  .test-plate{
    position: fixed;
    right: 0;

  }
</style>
