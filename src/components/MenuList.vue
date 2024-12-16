<template>
  <div class="product-list">
    {{ products }}
  </div>
</template>
<script>
import axios from 'axios'

export default {
  data() {
    return {
      products: [],
    }
  },
  methods: {
    async fetchProducts() {
      try {
        const response = await axios.get('https://arbuzmarket.com/search') // Replace with your actual API endpoint
        this.products = response.data
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    },
  },
  mounted() {
    this.fetchProducts()
  },
}
</script>

<style>
.product-list {
  gap: 24px 22px;
  grid-template-columns: repeat(4, minmax(0px, 1fr));
}
</style>
