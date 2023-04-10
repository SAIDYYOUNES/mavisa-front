import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ApplyView from '../views/ApplyView.vue'
import CheckView from '../views/CheckView.vue'
import ProfilView from '../views/ProfilView.vue'
import UpdateView from '../views/UpdateView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/profil',
    name: 'profil',
    component: ProfilView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView

  }
  ,
  {
    path: '/apply',
    name: 'apply',
    component: ApplyView
  }
  ,
  {
    path: '/check',
    name: 'Check',
    component: CheckView
  }
  ,
  {
    path: '/update',
    name: 'update',
    component: UpdateView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
