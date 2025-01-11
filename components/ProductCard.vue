<template>
  <div class="card text-center border-[2px] rounded-md bg-white shadow-lg">
    <img :src="product.image" alt="product thumb" class="w-[300px] h-[300px] object-contain mx-auto"/>
    <p class="font-bold text-gray-500 m-4 truncate">{{ product.title }}</p>
    <NuxtLink :to="`/products/${product.id}`">
      <button class="bg-gray-500 w-[90%] mx-auto my-4 text-white font-bolder text-xl py-3 px-2 rounded-lg ">View Details</button>
    </NuxtLink>
  </div>
</template>

<script setup>
const { product } = defineProps(["product"]);
</script>

<style scoped></style>
