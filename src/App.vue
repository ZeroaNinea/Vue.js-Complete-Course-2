<script setup lang="ts">
import AppHeader from './components/Layout/AppHeader.vue'
import UsersApi from './components/Users/UsersApi.vue'
</script>

<template>
  <AppHeader />
  <router-view></router-view>
  <UsersApi />
</template>

<style scoped></style>
