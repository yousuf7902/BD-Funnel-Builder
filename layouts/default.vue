<template>
    <div>
        <header>
            <nav class="flex items-center bg-white justify-between px-[50px] py-[20px] text-[#1B4B36] text-xl font-[700] shadow-md ">
                <NuxtLink to="/">Nuxt App</NuxtLink>
                <ul class="flex items-center justify-evenly gap-[25px]">
                    <li><NuxtLink to="/">Home</NuxtLink></li>
                    <li><NuxtLink to="/contact">Contact</NuxtLink></li>
                    <li><NuxtLink to="/products">Products</NuxtLink></li>
                </ul>
            </nav>
        </header>
      
        <div class="container p-4 mx-auto">
            <slot></slot>
        </div>
      </div>
</template>

<script setup>
    
</script>

<style scoped>

</style>