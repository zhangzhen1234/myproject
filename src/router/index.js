import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/views/Login'
import Register from '@/views/Register'
// import data from '@/views/study_rules'
import data from '@/views/data'
import Container from "../container/Container";

import Dashboard from '@/views/dashboard'
import Article from '@/views/article'
Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Container',
    //   component: Container
    // },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/data',
      name: 'data',
      component: data
    },
    {
      path: '/',
      redirect: '/dashboard',
      name: 'Container',
      component: Container,
      children: [
        {
          path: 'dashboard',name: '首页', component: Dashboard
        },
        {
          path: 'article', name: '文章', component: Article
        }
      ]
    }
  ]
})
