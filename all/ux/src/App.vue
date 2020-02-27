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
    box-sizing: border-box;
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
    background-color: #fff;
    padding:          16px 16px;
    box-shadow:       0 10px 20px 0 rgba(0, 0, 0, .1);
    width:            350px;
    max-width:        100%;
    height:           auto;
    max-height:       100%;

  }
</style>
