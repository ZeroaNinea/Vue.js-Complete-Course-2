<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()

console.log(route.params)
</script>

<template>
  <div>
    <h1>Product Detail</h1>
    <!-- <p>Product ID: {{ route.params.productId }}</p> -->
    <div v-if="route.params.productId">
      <p>Product ID: {{ route.params.productId }}</p>
    </div>
    <div v-else>
      <p>X_X No product ID found...</p>
    </div>
  </div>
</template>
