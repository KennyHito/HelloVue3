// 创建一个路由器，并暴露出去

// 第一步：引入createRouter
import {createRouter,createWebHistory} from 'vue-router'
// 引入一个一个可能要呈现组件
import Home from '../components/Home.vue'
import News from '../components/News.vue'
import About from '../components/About.vue'

// 第二步：创建路由器
const router = createRouter({
  history:createWebHistory(), //路由器的工作模式（稍后讲解）
  routes:[ //一个一个的路由规则
    {
      // 设置根视图,可以解决控制台中"[Vue Router warn]: No match found for location with path "/" "警告
      path:'/',
      redirect:'/home'
    },
    {
      path:'/home',
      component:Home,
    },
    {
      path:'/news',
      component:News
    },
    {
      path:'/about',
      component:About
    },
  ]
})

// 暴露出去router
export default router
