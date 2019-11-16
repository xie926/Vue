import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HiWorld from '@/components/HiWorld'
import HiWorld1 from '@/components/HiWorld1'
import HiWorld2 from '@/components/HiWorld2'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'
import Hi3 from '@/components/Hi3'
import Params from '@/components/Params'
import Error from '@/components/Error'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      // components: {
      //   default: HelloWorld,
      //   left: Hi1,
      //   right: Hi2
      // },
      alias: '/Main'
    },
    {
      path: '/Params/:newsID(\\d+)/:newsTitle',
      name: 'Params',
      component: Params,
      // beforeEnter:(to, from, next) => {
      //   console.log(to);        
      //   console.log(from);

      //   // next();
      //   // next(false);
      //   next('/')
      // }
    },
    {
      path: '/HiWorld',
      component: HiWorld,
      // components: {
      //   default: HiWorld,
      //   left: Hi2,
      //   right: Hi1
      // },
      children: [
        {
          path: '/',
          name: 'Hiworld',
          component: HiWorld
        },//这个子路由是显示自己本身(位置在下)
        {
          path: 'HiWorld1',
          name: 'HiWorld1',
          component: HiWorld1
        },
        {
          path: 'HiWorld2',
          name: 'HiWorld2',
          component: HiWorld2
        }
      ]
    },
    {
      path: '/Hi1',
      name: 'Hi1',
      component: Hi1
    },
    {
      path: '/Hi2',
      name: 'Hi2',
      component: Hi2
    },
    {
      path: '/GoHome',
      name: 'GoHome',
      redirect: '/'
    },
    {
      path: '/GoParams/:newsID(\\d+)/:newsTitle',
      name: 'GoParams',
      redirect: '/Params/:newsID(\\d+)/:newsTitle'
    },
    {
      path: '/Hi3',
      name: 'Hi3',
      component: Hi3,
      alias: '/HiHi'
    },
    {
      path: '*',
      component: Error
    }
  ]
})
