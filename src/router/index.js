import { createRouter, createWebHistory } from 'vue-router'
import Information from '../views/Information.vue'
import Experience from '../views/Experience.vue'
import Portfolio from '../views/Portfolio.vue'
import Background from '../views/Background.vue'


const routes = [
  {
    path: '/',
    name: 'information',
   component: Information
  },
  {
    path: '/experience',
    name: 'experience',
    component: Experience
  },
  {
    path: '/background',
    name: 'background',
    component: Background
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: Portfolio
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router