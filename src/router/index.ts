import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue'
import AddCountry from '../views/AddCountry.vue'
import AddDate from '../views/AddDate.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/add-country',
    name: 'AddCountry',
    component: AddCountry
  },
  {
    path: '/add-date/:numericCode',
    name: 'AddDate',
    component: AddDate
  },
  {
    path: '/message/:id',
    component: () => import('../views/ViewMessage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
