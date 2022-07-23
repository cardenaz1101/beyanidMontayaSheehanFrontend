import { createRouter, createWebHistory } from 'vue-router'
import Lobby from '../views/LobbyView.vue'
import Error from '../views/ErrorView.vue'
import Login from '../views/LoginView.vue'
import Us from '../views/UsView.vue'
import typeDocuments from '../views/IndexView.vue'
import typeDocument from '../views/SingleView.vue'


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
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/us',
    name: 'us',
    component: Us
  },
  {
    path: '/typeDocuments',
    name: 'typeDocuments',
    component: typeDocuments,
    meta: {protectedRoute: true}
  },
  {
    path: '/typeDocument/:id',
    name: 'typeDocument',
    component: typeDocument,
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
  } else if (!protectedRoute && token !== null) {
    return { name: 'typeDocuments' }
  }
})

export default router
