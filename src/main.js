// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './App'
import router from './router'
import {
  Vuetify,
  VApp,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VIcon,
  VGrid,
  VToolbar,
  VParallax,
  transitions,
  VCard,
  VForm,
  VTextField,
} from 'vuetify'
import { Scroll} from 'vuetify/es5/directives'

import AOS from 'aos'
import '../node_modules/aos/dist/aos.css'

import '../node_modules/vuetify/src/stylus/app.styl'
// import "vue-material-design-icons/styles.css"
Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    VParallax,
    transitions,
    VCard,
    VForm,
    VTextField,
  },
  directives: {
    Scroll,
  },
  theme: {
    // primary: '#ee44aa',
    primary: '#1867c0',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107',
    submit: '#1867c0'
  }
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // components: { App },
  template: `
    <div id="app">
      <router-view class="view"></router-view>
    </div>
  `,
  // template: '<App/>',
  // data: {
  //   currentRoute: window.location.pathname
  // },
  // computed: {
  //   ViewComponent () {
  //     const matchingView = router[this.currentRoute]
  //     return matchingView
  //       ? require('./pages/' + matchingView + '.vue')
  //       : require('./pages/404.vue')
  //   }
  // },
  // render (h) {
  //   return h(this.ViewComponent)
  // },
  mounted() {
    AOS.init();
  },
});

window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname
}).$mount('#app');

