import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入需要的组件
import Login from '@/components/MyLogin.vue'
import Home from '@/components/MyHome.vue'
import Users from '@/components/menus/MyUsers.vue'
import Goods from '@/components/menus/MyGoods.vue'
import Orders from '@/components/menus/MyOrders.vue'
import Rights from '@/components/menus/MyRights.vue'
import Settings from '@/components/menus/MySettings.vue'
import UserInfo from '@/components/user/MyUserDetail.vue'
import GoodsInfo from '@/components/user/MyGoodsDetail.vue'
//把VueRouter安装为vue插件
Vue.use(VueRouter)

// 创建路由的实例的对象
const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/login' },
    // 登录的路由规则
    { path: '/login', component: Login },
    {
      path: '/home',
      redirect:'/home/users',
      component: Home,
      children: [
        { path: 'users', component: Users },
        { path: 'goods', component: Goods },
        { path: 'orders', component: Orders },
        { path: 'rights', component: Rights },
        { path: 'settings', component: Settings },
        { path: 'userinfo/:id', component: UserInfo, props: true },
        { path: 'goodsinfo/:id', component: GoodsInfo, props: true }
        
      ]
    },
  ]
})
// 导航全局前置守卫
router.beforeEach((to, from, next) => {
  
  if (to.path !== '/login') {
    const token = localStorage.getItem('token')
    if (token) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})
//向外共享路由的实例的实例对象
export default router