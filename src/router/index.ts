import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../components/Home/HomePage.vue'),
    },
    {
      path: '/contact',
      component: () => import('../components/Home/ContactUs.vue'),
    },
    {
      path: '/product-list',
      component: () => import('../components/Product/ProductList.vue'),
    },
    {
      path: '/product/:productId',
      component: () => import('../components/Product/ProductDetail.vue'),
    },
  ],
})

export default router
