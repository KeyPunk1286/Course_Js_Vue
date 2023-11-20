<template>
    <nav class="parent__nav">
        <router-link to="/home" class="nav__link" :class="{ 'active-class': $route.path === '/home' }"
            >Головна</router-link
        >
        <router-link to="/shop" class="nav__link" :class="{ 'active-class': $route.path === '/shop' }"
            >Магазин</router-link
        >
        <router-link to="/policy" class="nav__link" :class="{ 'active-class': $route.path === '/policy' }"
            >Правила оплати</router-link
        >
        <router-link to="/contact" class="nav__link" :class="{ 'active-class': $route.path === '/contact' }"
            >Контакти</router-link
        >
    </nav>
    <router-view />
</template>

<style lang="scss">
@import '../src/assets/scss/';
</style>
