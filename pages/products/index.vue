<template>
  <div class="w-[90%] mx-auto my-[30px]">
    <h1 class="text-5xl font-[600] py-[30px] text-gray-700">Products</h1>
    <div class="grid grid-cols-4 gap-5">
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
};

onMounted(() => {
    fetchProducts();
});

useHead({
  title: "Nuxt Products Page",
  meta: [{ name: "description", content: "Nuxt app products page" }],
});
</script>

<style scoped></style>
