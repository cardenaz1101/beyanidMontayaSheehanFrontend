import { createRouter, createWebHistory } from 'vue-router'
import Lobby from '../views/LobbyView.vue'
import Error from '../views/ErrorView.vue'
import Login from '../views/LoginView.vue'
import Index from '../views/IndexView.vue'


const routes = [
  {
    path: '/',
    name: 'lobby',
    component: Lobby
  },
  {
    path: '/about',
    name: 'about',
    component: Error
  },
  {
    path: '/Login',
    name: 'login',
    component: Login
  },
  {
    path: '/Index',
    name: 'index',
    component: Index,
    meta: {protectedRoute: true}
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(async (to) => {
  const protectedRoute = to.matched.some(item => item.meta.protectedRoute)
  const token = localStorage.getItem('token');

  if (protectedRoute && token === null) {
    return { name: 'lobby' }
  }
})

export default router
