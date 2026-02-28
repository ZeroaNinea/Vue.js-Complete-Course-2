<script setup lang="ts">
import { onMounted, reactive } from 'vue'
import axios from 'axios'

const state: {
  users: {
    id: number
    name: string
    email: string
  }[]
} = reactive({
  users: [] as {
    id: number
    name: string
    email: string
  }[],
})

onMounted(() => {
  axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
      console.log(response.data)
      state.users = response.data
    })
    .catch((error) => {
      console.log(error)
    })
})
</script>

<template>
  <div>
    <h1>Users</h1>
    <ul>
      <li v-for="user in state.users" :key="user.id">
        <p>{{ user.name }}</p>
        <p>{{ user.email }}</p>
        <hr />
      </li>
    </ul>
  </div>
</template>
