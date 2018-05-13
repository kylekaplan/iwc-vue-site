<template>
  <v-parallax src="/static/img/background1.jpg" jumbotron class="parallax-window">
    <v-layout column align-center justify-center>
      <h1 class="myTitle">Ideas Worth Coding</h1>
      <h4 class="mySubTitle">Turn your idea into a reality!</h4>
    </v-layout>
  </v-parallax>
</template>


<script>
  import Parallax from 'vue-parallaxy'
  export default {

  }
</script>

<style scoped>
  .parallax-window {
    min-height: 95vh;
    background: transparent;
  }
  .myTitle {
    font-size: 46px;
  }
  .mySubTitle {
    font-size: 17px;
  }
</style>
