import Vue from 'vue'
import Router, { RouteConfig } from 'vue-router'
import { RouterOptions } from 'vue-router/types/router';

Vue.use(Router)

const routers: RouteConfig[] = [
  {
    path: '/',
    name: 'landing-page',
    component: require('@/components/LandingPage').default
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router: Router = new Router({
  routes: routers
})

export default router