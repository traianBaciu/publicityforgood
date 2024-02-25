<template>
  <div class="container">
    <h2 class="title">Products List</h2>
    <ul class="products-list">
      <li v-for="product in products" :key="product.id" class="product-item">
        <span class="product-info">
          <span class="product-name">{{ product.name }}</span>
          <span class="product-price"><span class="dollar">$ </span>{{ product.price }}</span>
        </span>
        <router-link
          :to="{ name: 'product-details', params: { id: product.id } }"
          class="details-btn"
          >View Details</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
import products from '../store.js'

export default {
  data() {
    return {
      products: products
    }
  }
}
</script>
