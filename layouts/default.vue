<template>
    <div>
        <header>
            <nav
                class="flex items-center bg-white justify-between px-[50px] py-[20px] text-gray-600 text-xl font-[700] shadow-md ">
                <NuxtLink to="/">Nuxt App</NuxtLink>
                <ul class="flex items-center justify-evenly gap-[25px]">
                    <li>
                        <NuxtLink to="/">Home</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/products">Products</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/wishlist">Wishlist</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/cart" class="relative">Cart <span
                                class="absolute -top-3 -right-5 bg-gray-600 text-white text-sm font-bold px-2 py-1 rounded-full">{{
                                tempCartLength }}</span></NuxtLink>
                    </li>
                </ul>
            </nav>
        </header>

        <div class="container p-4 mx-auto">
            <slot></slot>
        </div>

        <footer>
            <div
                class="flex items-center bg-white justify-center px-[50px] py-[20px] text-gray-600 text-4xl font-[700] shadow-md ">
                <NuxtLink to="/">Nuxt App</NuxtLink>
            </div>
        </footer>
    </div>
</template>

<script setup>
let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

const { tempCartLength } = useUtils();

</script>

<style scoped></style>