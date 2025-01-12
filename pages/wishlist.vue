<template>
  <div>
    <h1 class="text-[50px] font-[600] text-gray-700 py-2">Your Favourite One...</h1>
    <div class="w-[90%] mx-auto my-[30px]">
      <div class="grid grid-cols-3 gap-5">
        <div v-for="product in wishProducts" :key="product.id">
          <ProductCard :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

const wishProducts = ref ([]);
wishProducts.value= JSON.parse(localStorage.getItem('wishlist'));
console.log(wishProducts);

</script>

<style scoped>

</style>