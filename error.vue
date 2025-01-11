<template>
  <div
    class="my-[50px] mx-auto p-4 border-2 border-gray-500 rounded-md bg-white w-[350px] h-[350px] flex flex-col justify-center items-center gap-5 shadow-lg text-gray-800"
  >
    <p class="text-6xl font-bold">{{ error.statusCode }}</p>
    <p class="text-4xl font-bold">Ooops...</p>
    <p class="text-2xl font-semibold">{{ error.message }}</p>
    <button class="bg-gray-500 text-white text-xl font-bold py-3 px-6 rounded-lg cursor-pointer" @click="handleClearError">Go to home</button>
  </div>
</template>

<script setup>
defineProps(["error"])

const handleClearError =() => clearError({redirect:"/"});

</script>

<style scoped></style>
