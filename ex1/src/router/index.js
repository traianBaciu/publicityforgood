import { createRouter, createWebHistory } from 'vue-router'
import ProductList from '../views/ProductList.vue'
import ProductDetails from '../views/ProductDetails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: ProductList },
    { path: '/products', component: ProductList },
    { path: '/products/:id', name: 'product-details', component: ProductDetails, props: true }
  ]
})

export default router
