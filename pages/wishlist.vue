<template>
  <div>
    <h1 class="text-[50px] font-[600] text-gray-700 py-2">Your Favourite One...</h1>
    <div class="w-[90%] mx-auto my-[30px]">
      <div class="grid grid-cols-3 gap-5">
        <div v-for="product in wishProducts" :key="product.id">
          <ProductCard :product="product" v-on:removeWishList="removeWishProduct"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const wishProducts = ref ([]);

const { removeFromWishlist } =useUtils();

const loadWishList = () =>{
  const items = JSON.parse(localStorage.getItem('wishlist')) || [];
  wishProducts.value = items;
}

const removeWishProduct = (product) => {
  removeFromWishlist(product);
  wishProducts.value = wishProducts.value.filter(item => item.id !== product.id);
}

onMounted(() => {
  loadWishList();
});



</script>

<style scoped>

</style>