import Vue from 'vue'
import Router from 'vue-router'
import testPage from '@/components/test'
import IndexPage from '@/components/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: IndexPage
    },
    {
      path:'/test',
      name:'TestPage',
      component:testPage
    }
  ]
})
