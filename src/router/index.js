import Vue from 'vue'
import Router from 'vue-router'

import Login from '../views/Login'
import Register from '../views/Register'
// import data from '@/views/study_rules'
import data from '../views/data'
import Container from '@/container/Container'
import Dashboard from '@/views/dashboard'
import Article from '@/views/article'

import food from '@/components/food'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/',
      redirect: '/dashboard',
      name: 'Container',
      component: Container,
      children: [
        {path: 'dashboard', name: '首页', component: Dashboard,
          children: [
            {path: 'dashboard1', name: '首页1', component: Dashboard,},
            {path: 'dashboard2', name: '首页2', component: Dashboard,
              children: [
                {path: 'dashboard21', name: '首页21', component: Dashboard,},
                {path: 'dashboard22', name: '首页22', component: Dashboard, },
              ] },
          ]
        },
        {path: 'article', name: '文章', component: Article, },
      ]
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
      path: '/food',
      name: 'food',
      component: food
    }
  ]
})
