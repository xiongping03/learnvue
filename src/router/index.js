import Vue from 'vue'
import Router from 'vue-router'
const Home = ()=> import('../views/home/Home')
const Profile = ()=> import('../views/profile/Profile')
const Category = ()=> import('../views/category/Category')
const Cart = ()=> import('../views/cart/Cart')
const Detail = ()=> import('../views/detail/Detail')

Vue.use(Router)

const routes = [
    {
      path:'',
      redirect:'/home'
    },
    {
      path:'/home',
      component:Home,
      name: '首页',
      meta: {
        keepAlive: true // 不需要缓存
       }
    },
    {
      path:'/profile',
      component:Profile,
      name: '用户信息',
      meta: {
        keepAlive: false // 不需要缓存
       }
    },
    {
      path:'/category',
      component:Category,
      name: '商品分类',
      meta: {
        keepAlive: false // 不需要缓存
       }
    },
    {
      path:'/cart',
      component:Cart,
      name: '购物车',
      meta: {
        keepAlive: false // 不需要缓存
       }
    },
    {
      path:'/detail/:iid',
      component:Detail,
      name: '详情页',
      meta: {
        keepAlive: false // 不需要缓存
       }
    }
  ]
export default new Router({
  routes,
  mode:'history'
})
