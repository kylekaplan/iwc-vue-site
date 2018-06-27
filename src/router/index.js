import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
import USF from '../pages/USF'
import PageNotFound from '../pages/404'

Vue.use(Router)

// const USF = { template: '<div>USF</div>' }
export default new Router({
  // mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'App',
      component: App
    },
    {
      path: '/USF',
      name: 'USF',
      component: USF
    },
    {
      path: '*',
      component: PageNotFound
    },
  ]
})
