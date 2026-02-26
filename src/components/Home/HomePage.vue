<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

function goToContact() {
  router.push('/contact')
}
</script>

<template>
  <div>Home Page</div>
  <button class="btn btn-info" @click="goToContact">Contact Us</button>
</template>
