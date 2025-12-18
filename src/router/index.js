import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/vue-apollo',
      name: 'vueApollo',
      component: () => import('../views/VueApolloOptionsView.vue'),
    },
    {
      path: '/vue-apollo-composable',
      name: 'vueApolloComposable',
      component: () => import('../views/VueApolloCompositionView.vue'),
    },
  ],
})

export default router
