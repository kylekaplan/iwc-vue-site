<template>
  <v-app>
    <v-toolbar
      app
      dense
      fixed
    >
      <v-toolbar-items>
        <!--<img src="../../static/img/logo.png" style='height: 35px; width: 35px !important; margin-top: 5px;'>-->
      </v-toolbar-items>
      <a href="/" class="homeLink">Ideas Worth Coding</a>
      <v-toolbar-title v-text="title" ></v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content id="container" class="container intro-effect-fadeout">
      <USFPortfolio/>
      <my-footer/>
      <router-view/>
    </v-content>
  </v-app>
</template>


<script>
  import USFPortfolio from "../components/USFPortfolio";
  import MyFooter from "../components/MyFooter";
  import AOS from 'aos'
  // import '../../node_modules/aos/dist/aos.css'
  export default {
    // beforeCreate: function() {
    //   document.body.className = 'hideScrollBar';
    // },
    components: {
      USFPortfolio,
      MyFooter,
    },
    data () {
      return {
        offsetTop: 0,
        toolbarVisibility: 'none',
        items: [
        ],
        right: true,
        title: '- USF'
      }
    },
    methods: {

    },
    mounted() {
      AOS.init();
    },
    name: 'USF'
  }
</script>

<style>
  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    background-color: #F5F5F5;
  }

  ::-webkit-scrollbar {
    width: 7px;
    background-color: #F5F5F5;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #5b5b5b;
  }
</style>

<style scoped>
  .container {
    margin: 0;
    max-width: 100% !important;
    z-index: 1;
    background-color: #f5f5f5;
  }
  .homeLink {
    color: black;
    text-decoration: none;
    /*font-weight: bold;*/
    font-size: 20px;
    font-family: sans-serif;
  }
</style>
