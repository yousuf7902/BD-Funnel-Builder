<template>
  <div class="w-[90%] mx-auto my-[30px]">
    <h1 class="text-4xl font-[600] py-[30px] text-gray-700">Products</h1>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="p in products" :key="p.id">
        <ProductCard :product="p" />
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "products",
});

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

useHead({
  title: "Nuxt Products Page",
  meta : [
    {name: "description" , content: "Nuxt app products page"}
  ]
  
})

</script>

<style scoped></style>
