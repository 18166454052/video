import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index'
import TV from '@/views/tv'
import Cartoon from '@/views/cartoon'
import Variety from '@/views/variety'
import TVList from '@/views/tvList'
import Player from '@/views/player'
import Search from '@/views/search'
import Login from '@/views/login'
import Registe from '@/views/registe'
import NFound from '@/views/nfound'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'movie',
      component: Index
    },
    {
      path: '/tv',
      name: 'tv',
      component: TV
    },
    {
      path: '/cartoon',
      name: 'cartoon',
      component: Cartoon
    },
    {
      path: '/variety',
      name: 'variety',
      component: Variety
    },
    {
      path: '/tvlist',
      name: 'tvlist',
      component: TVList
    },
    {
      path: '/player',
      name: 'player',
      component: Player
    },
    {
      path: '/search',
      name: 'search' , 
      component: Search
    },
    {
      path: '/login',
      name: 'login' , 
      component: Login
    },
    {
      path: '/registe',
      name: 'registe' , 
      component: Registe
    },
    {
      path: '*',
      name: '404' , 
      component: NFound
    }
   
  ]
})
