import { createRouter, createWebHistory } from 'vue-router'
import Lobby from '../views/LobbyView.vue'
import NotFound from '../views/NotFound.vue'
import Login from '../views/LoginView.vue'
import Us from '../views/UsView.vue'
import typeDocuments from '../views/IndexView.vue'
import typeDocument from '../views/SingleView.vue'
import paymentProcess from '../components/Pay.vue'


const routes = [
  {
    path: '/',
    name: 'lobby',
    component: Lobby
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: NotFound,
    meta: {protectedRoute: true, protectedRouteAdd: true}
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/us',
    name: 'us',
    component: Us,
    meta: {protectedRoute: true, protectedRouteAdd: true}
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
  },
  {
    path: '/paymentProcess/',
    name: 'paymentProcess',
    component: paymentProcess,
    meta: {protectedRoute: true, protectedRouteAdd: false}
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(async (to) => {
  const protectedRoute = to.matched.some(item => item.meta.protectedRoute)
  const protectedRouteAdd = to.matched.some(item => item.meta.protectedRouteAdd)
  const token = localStorage.getItem('token');

  if (protectedRoute && token === null && !protectedRouteAdd) {
    return { name: 'login' }
  } else if (!protectedRoute && token !== null) {
    return { name: 'typeDocuments' }
  }
})

export default router
