<template>
  <div class="flex gap-[20px] items-center justify-between p-[30px]  border-b-4 border-b-gray-500">
    <div class="space-y-4">
        <h1 class="text-5xl text-gray-800 font-bold">Nuxt App - Discover Your Next Favorite Find!</h1>
        <p class="text-2xl text-gray-600">Explore a world of unique products, handpicked just for you. </p>
    </div>
    <div>
        <img src="../assets/shopping.jpg" alt="shopping image" class="w-[800px] rounded" >
    </div>
  </div>
  
  <div class="w-[90%] mx-auto my-[30px]">
    <div class="grid grid-cols-3 gap-5">
      <div v-for="product in products" :key="product.id">
        <ProductCard :product="product" />
      </div>
    </div>
  </div>
</template>

<script setup>
const products = ref([]);

const fetchProducts = async () => {
  const cachedProducts = localStorage.getItem("products");
  if (cachedProducts) {
    products.value = JSON.parse(cachedProducts);
    return;
  }

  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  products.value = data;
  localStorage.setItem("products", JSON.stringify(data));
};

onMounted(() => {
  fetchProducts();
});
</script>

<style scoped></style>
