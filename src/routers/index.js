// 主路由
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)   // 手动将vue-router挂载到Vue上

import movieroute from './Movie'
import cinemaroute from './Cinema'
import mineroute from './Mine'

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  // 将每个组件的路由配置对象集中写在这里，代码长且不利于组件化管理，因此按模块从外部引入路由配置对象
  routes: [
    movieroute,
    cinemaroute,
    mineroute,
    {
      path:'/*',
      redirect:'/movie'
    }
  ]
})
