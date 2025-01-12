<template>
  <div class="card text-center border-[2px] rounded-md bg-white shadow-lg">
    <img :src="product.image" alt="product thumb" class="w-[300px] h-[300px] object-contain mx-auto" />
    <NuxtLink :to="`/products/${product.id}`">
      <p class="font-bold text-gray-500 m-4 truncate">{{ product.title }}</p>
    </NuxtLink>
    <div class="flex gap-2 px-4 items-center justify-center">
      <button class="bg-gray-500 w-[90%] mx-auto my-4 text-white font-bolder text-xl py-3 px-2 rounded-lg"
        @click="addToCartHandler(product)">
        Add to cart
      </button>
      <button @click="product.wishlist ? removeFromWishlist(product) : addToWishList(product)">
        <i class="material-icons text-white text-4xl bg-gray-500 font-bold p-1 rounded-lg">
          {{ product.wishlist ? 'favorite' : 'favorite_border' }}
        </i>
      </button>

    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  product: {
    type: Object,
    default: {}
  }
})

const { addToCartHandler, addToWishList, removeFromWishlist } = useUtils();

</script>

<style scoped></style>
