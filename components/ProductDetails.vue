<template>
  <div
    class="grid grid-cols-2 gap-[25px] justify-center w-[80%] mx-auto my-[20px] border-[2px] bg-white shadow-lg shadow-gray-400"
  >
    <div>
      <img
        :src="product.image"
        alt="product thumb"
        class="w-[500px] h-[500px] mx-auto object-contain p-4"
      />
    </div>
    <div class="text-left px-4 space-y-4">
      <h2 class="text-3xl my-4">{{ product.title }}</h2>
      <p class="text-2xl">Price: ${{ product.price }}</p>
      <h2 class="text-2xl border-b-4 border-gray-300 py-2">
        Product Description:
      </h2>
      <p class="text-xl text-justify pr-8">{{ product.description }}</p>
      <div class="flex gap-5">
        <button class="bg-gray-500 text-white text-xl font-bold py-3 px-6 rounded-lg cursor-pointer" >Add to cart</button>
        <NuxtLink to="/products">
            <button class="bg-gray-500 text-white text-xl font-bold py-3 px-6 rounded-lg cursor-pointer" >Back</button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const { product } = defineProps(["product"]);
</script>

<style scoped></style>
