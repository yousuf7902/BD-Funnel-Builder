<template>
    <div>
        <header>
            <nav class="mx-auto py-4 text-[35px] font-bold shadow-md bg-white">
                <NuxtLink to="/products" class="block text-center text-gray-700">Nuxt App</NuxtLink>
            </nav>
        </header>
        
        <div class="container p-4 mx-auto">
            <slot></slot>
        </div>

        <footer class="border-t-[4px] border-gray-300 py-[25px]">
                <ul class="flex items-center justify-center gap-[20px] text-2xl font-[700] text-gray-700">
                    <li><NuxtLink to="/">Home</NuxtLink></li>
                    <li><NuxtLink to="/contact">Contact</NuxtLink></li>
                    <li><NuxtLink to="/products">Products</NuxtLink></li>
                </ul>
        </footer>
    </div>
</template>

<script setup>

</script>

<style scoped>

</style>