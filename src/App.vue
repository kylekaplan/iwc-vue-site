<template>
  <v-app>
    <v-toolbar v-bind:style="{ display: toolbarVisibility}" v-scroll="onScroll"
      app
      dense
      fixed

    >
      <v-toolbar-items>
        <img src="@/assets/logo.png" style='height: 35px; width: 35px !important; margin-top: 5px;'>
      </v-toolbar-items>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content style="margin-top: -50px" id="container" class="container intro-effect-fadeout">
      <parallax/>
      <portfolio/>
      <contact-us/>
      <router-view/>
    </v-content>
    <v-footer>
      <h6>&copy; 2017</h6>
      <h6>Photo by Clemente Ruiz Abenza on Unsplash</h6>
    </v-footer>
  </v-app>
</template>

<style>
  .container {
    margin: 0;
    max-width: 100% !important;
    z-index: 1;
  }
</style>


<script>
  import Parallax from "./components/Parallax";
  import Portfolio from "./components/Portfolio";
  import ContactUs from "./components/ContactUs"
export default {
  // beforeCreate: function() {
  //   document.body.className = 'hideScrollBar';
  // },
  components: {
    Portfolio,
    Parallax,
    ContactUs,
  },
  data () {
    return {
      offsetTop: 0,
      toolbarVisibility: 'none',
      items: [{
        icon: 'bubble_chart',
        title: 'Inspire'
      }],
      right: true,
      title: 'Ideas Worth Coding'
    }
  },
  methods: {
    onScroll (e) {
      this.offsetTop = window.pageYOffset || document.documentElement.scrollTop
      if(this.offsetTop > 310) {
        this.toolbarVisibility = 'block'
      } else {
        this.toolbarVisibility = 'none'
      }
    }
  },
  name: 'App'
}
</script>

<style>
  .toolbar__content, .toolbar__extension {
    position: relative;
    z-index: 2000;
  }
  .content--wrap {
    z-index: 1;
  }
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
  h1 {
    font-size: 56px;
    color: #514753;
  }
</style>
