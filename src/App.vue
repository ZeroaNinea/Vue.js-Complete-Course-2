<script setup lang="ts">
import AppHeader from './components/Layout/AppHeader.vue'
import UsersApi from './components/Users/UsersApi.vue'
import { useGameStore } from './stores/game-store'

const gameStore = useGameStore()

function increment() {
  gameStore.score += Math.floor(Math.random() * 30) + 1
}

function decrement() {
  gameStore.score -= Math.floor(Math.random() * 30) + 1
}

function random() {
  const isIncrement = Math.random() > 0.5

  if (isIncrement) {
    increment()
  } else {
    decrement()
  }
}
</script>

<template>
  <AppHeader />
  <router-view></router-view>
  <UsersApi />
  <div class="text-center">
    <p>Let's play the game</p>
    <h2 class="text-primary pb-3">Current Score: {{ gameStore.score }}</h2>
    <span class="text-primary pb-3">Max Score: {{ gameStore.maxHeath }}</span>
  </div>
  <div class="row">
    <div class="col-4 offset-1">
      <button @click="increment()" class="form-control btn btn-success p-4">Increment</button>
    </div>
    <div @click="decrement()" class="col-4 offset-1">
      <button class="form-control btn btn-danger p-4">Decrement</button>
    </div>
    <div @click="random()" class="col-6 offset-3 pt-2">
      <button class="form-control btn btn-warning p-4">Random</button>
    </div>
  </div>
</template>

<style scoped></style>
