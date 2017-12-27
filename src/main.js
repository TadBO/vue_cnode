// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Resource from 'vue-resource'

Vue.use(Resource)

//引入外部UI库
import YDUI from 'vue-ydui'
import 'vue-ydui/dist/ydui.px.css'
Vue.use(YDUI)

import infiniteScroll from 'vue-infinite-scroll'
Vue.use(infiniteScroll)

import vueScroll from 'vue-scroll'
Vue.use(vueScroll)
//引入公共组件
import Header from './components/common/Header.vue';
import Nav from './components/common/Nav.vue'


//定义公共组价
Vue.component('v-header', Header);
Vue.component('v-nav', Nav);


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
