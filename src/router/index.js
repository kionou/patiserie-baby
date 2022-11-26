import { createRouter, createWebHistory } from 'vue-router'
import Accueil from '../views/Accueil.vue'
import Apropos from '../views/Apropos.vue'
import Menu from '../views/Menu.vue'
import Atelier from '../views/Atelier.vue'
import Contact from '../views/Contact.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Accueil
  },
  {
    path: '/apropos',
    name: 'apropos',
    component: Apropos
  
  },
  {
    path: '/menu',
    name: 'menu',
    component: Menu
  
  },
  {
    path: '/Atelier',
    name: 'atelier',
    component: Atelier
  
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
