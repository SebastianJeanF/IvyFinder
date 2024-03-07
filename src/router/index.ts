import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw, RouteLocationNormalized, NavigationGuardNext } from 'vue-router';
import Tabs from '../views/Tabs.vue'
import { auth } from '../main';

const guard = (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
  try {
    if (auth.currentUser) {
      next()
    } else {
      next("/");
    }
  } catch (error) {
    next("/");
  }
}


const routes: Array<RouteRecordRaw> = [
  // {
  //   path: '/',
  //   component: () => import('@/views/Authentication.vue')
  // },
  {
    path: '',
    redirect: '/tabs/'
  },
  {
    path: '/tabs/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: '/tabs/tab1'
      },
      {
        path: 'tab1',
        component: () => import('@/views/Home.vue')
      },
      {
      path: 'FAQ',
      component: () => import('@/pages/FAQ.vue')
      },
      {
      path: 'tab2',
      component: () => import('@/views/Info.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/Camera.vue')
      },
      {
        path: 'tab4',
        component: () => import('@/views/Avoid.vue')
      },
      {
        path: 'tab5',
        component: () => import('@/views/Maps.vue')
      },
      {
        path: 'test',
        component: () => import('@/views/CreateMemoryForm.vue')
        //Lazily imported (FACT CHECK)
      },
      {
        path: 'test2',
        component: () => import('@/views/Gallery.vue')
        //Lazily imported (FACT CHECK)
      },
      {
        path: 'poison-ivy',
        component: () => import('@/pages/poison-ivy.vue')
      },
      {
        path: 'poison-oak',
        component: () => import('@/pages/poison-oak.vue')
      },
      {
        path: 'poison-sumac',
        component: () => import('@/pages/poison-sumac.vue')
      }
   
    ]
    

  },
  {
    path: '/load',
    component: () => import('@/views/loading-view.vue')
  }



]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


export default router
