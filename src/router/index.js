import Vue from 'vue'
import Router from 'vue-router'

//导入路由组件
import HomePage from '../components/homepage/Homepage.vue'
import AllInfo from '../components/homepage/AllInfo.vue'
import StartPage from '../components/gettingStart/StartPage.vue'
import About from '../components/about/About.vue'
import Login from '../components/login/Login.vue'
import Details from '../components/homepage/Details.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: HomePage,
      redirect: '/all',
      children: [
        {
          path: 'all',
          component: AllInfo
        },
        {
          path: 'good',
          component: AllInfo
        },
        {
          path: 'share',
          component: AllInfo
        },
        {
          path: 'ask',
          component: AllInfo
        },
        {
          path: 'job',
          component: AllInfo
        },
        {
          path: '/details/:id',
          component: Details
        }
      ]
    },
    {
      path: '/start',
      component: StartPage
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/sign',
      component: Login
    }
  ]
})
