<template>
  <div class="product-card container">
    <h2 class="title">Product Details</h2>
    <div v-if="product" class="card-details">
      <span class="main-info">
        <span class="card-name"> <span class="tag">Name:</span> {{ product.name }}</span>
        <span class="card-price"
          ><span class="tag">Price:</span> <span class="dollar">$ </span>{{ product.price }}</span
        >
      </span>
      <p class="description"><span class="tag">Description: </span> {{ product.description }}</p>
      <p><span class="tag">Specifications: </span> {{ product.specifications }}</p>
    </div>
    <router-link to="/products" class="details-btn">Go Back</router-link>
  </div>
</template>

<script>
import products from '@/store'

export default {
  props: ['id'],
  data() {
    return {
      product: null,
      products: products
    }
  },
  created() {
    this.product = this.products.find((product) => product.id === parseInt(this.id))
  }
}
</script>
