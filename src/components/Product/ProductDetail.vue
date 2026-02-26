<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()

console.log(route.params)
</script>

<template>
  <div>
    <h1>Product Detail</h1>
    <p>Product ID: {{ route.params.productId }}</p>
  </div>
</template>
