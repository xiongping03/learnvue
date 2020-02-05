import Vue from 'vue'
import Router from 'vue-router'
const Home = ()=> import('../views/home/Home')
const Profile = ()=> import('../views/profile/Profile')
const Category = ()=> import('../views/category/Category')
const Cart = ()=> import('../views/cart/Cart')

Vue.use(Router)

const routes = [
    {
      path:'',
      redirect:'/home'
    },
    {
      path:'/home',
      component:Home
    },
    {
      path:'/profile',
      component:Profile
    },
    {
      path:'/Category',
      component:Category,
      },
    {
      path:'/Cart',
      component:Cart
    }
  ]
export default new Router({
  routes,
  mode:'history'
})
