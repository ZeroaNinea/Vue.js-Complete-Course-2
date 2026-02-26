<template>
  <div>
    <h1>Product List</h1>
    <p>Here is the list of products:</p>
    <ul>
      <!-- <li>Product 1</li>
      <li>Product 2</li>
      <li>Product 3</li> -->
      <li>
        <router-link class="text-success" to="/product/1">Product 1</router-link>
      </li>
      <li>
        <router-link class="text-success" to="/product/2">Product 2</router-link>
      </li>
      <li>
        <router-link class="text-success" to="/product/3">Product 3</router-link>
      </li>
    </ul>
  </div>
</template>
